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
  template: `
    <ion-list class="ion-margin">
      <ion-list-header>
        <ion-label>{{ objList()?.objName }}</ion-label>
      </ion-list-header>

      @for (obj of objList()?.items; track $index) {
        <ion-item>
          <ion-label> {{ obj?.objName }} </ion-label>
          <ion-badge
            slot="end"
            [style.backgroundColor]="obj?.statusInfo?.color"
            >{{ obj?.statusInfo?.label }}</ion-badge
          >
        </ion-item>
      }
    </ion-list>
  `,
  styleUrl: './list-view.component.css',
})
export class ListViewComponent {
  objList = input<any>();
}
