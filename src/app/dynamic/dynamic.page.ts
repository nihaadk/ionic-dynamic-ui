import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Subscription } from 'rxjs';
import { Invoker } from '../interfaces/invoker.interface';
import { Objlist } from '../interfaces/obj-list.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.page.html',
  styleUrls: ['./dynamic.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
})
export class DynamicPage implements OnInit, OnDestroy {
  #activatedRoute = inject(ActivatedRoute);
  #userService = inject(UserService);

  objects = signal<Objlist[]>([]);

  private subscriptions = new Subscription();
  
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit() {
    this.getObjects(this.invokers);
  }

  private get invokers(): Invoker[] {
    return this.#activatedRoute.snapshot.data['invokers'];
  }

  private getObjects(invokers: Invoker[]) {
    invokers.forEach((invoker: Invoker) => this.setObject(invoker));
  }

  private setObject(invoke: Invoker): void {
    this.subscriptions.add(
      this.#userService.getObjectList(invoke).subscribe((newObj) => {
        console.log('newObj', newObj);
        
        this.objects.update((objects) => [...objects, newObj]);
      })
    )
  }
}
