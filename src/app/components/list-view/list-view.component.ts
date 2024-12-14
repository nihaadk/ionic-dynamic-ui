import { Component, input } from '@angular/core';
import {
  IonBadge,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [IonList, IonItem, IonLabel, IonListHeader, IonBadge],
  templateUrl: './list-view.component.html',
})
export class ListViewComponent {
  objList = input<any>();
}
