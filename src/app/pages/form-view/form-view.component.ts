import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form-view',
  standalone: true,
  imports: [],
  template: `<p>form-view works!</p>`,
  styleUrl: './form-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormViewComponent { }
