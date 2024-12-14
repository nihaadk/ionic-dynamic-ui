import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Subscription } from 'rxjs';
import { FormViewComponent } from '../components/form-view/form-view.component';
import { ListViewComponent } from '../components/list-view/list-view.component';
import { Invoker } from '../interfaces/invoker.interface';
import { ObjForm } from '../interfaces/obj-form.interface';
import { Objlist } from '../interfaces/obj-list.interface';
import { UserService } from '../services/user.service';

type ObjectType = Objlist | ObjForm;

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.page.html',
  styleUrls: ['./dynamic.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonButtons,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterModule,
    ListViewComponent,
    FormViewComponent,
  ],
})
export class DynamicPage implements OnInit, OnDestroy {
  #activatedRoute = inject(ActivatedRoute);
  #userService = inject(UserService);

  objects = signal<ObjectType[]>([]);

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
        this.objects.update((objects) => [...objects, newObj]);
      }),
    );
  }
}
