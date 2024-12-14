import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router, RouterModule } from '@angular/router';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonMenuButton,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Invoker } from '../interfaces/invoker.interface';
import { SubMenu } from '../interfaces/submenu.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonCol,
    IonRow,
    IonGrid,
    IonContent,
    IonTitle,
    IonButtons,
    IonToolbar,
    IonHeader,
    IonMenuButton,
    RouterModule,
  ],
})
export class HomePage {
  #router = inject(Router);
  #userService = inject(UserService);
  menu = toSignal(this.#userService.getTasks());

  navigateToTask(subMenu: SubMenu): void {
    const pageName: string = subMenu?.name.toLocaleLowerCase();
    const invokers: Invoker[] = subMenu?.invokers;
    this.#router.navigate([`/${pageName}`], { state: { invokers } });
  }
}
