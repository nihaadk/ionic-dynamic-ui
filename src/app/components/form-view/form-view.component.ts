import { Component, inject, input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import {
  IonButton,
  IonButtons,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
} from '@ionic/angular/standalone';
import { ObjForm } from 'src/app/interfaces/obj-form.interface';

@Component({
  selector: 'app-form-view',
  standalone: true,
  imports: [
    IonButtons,
    IonInput,
    ReactiveFormsModule,
    IonList,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonButton,
  ],
  templateUrl: './form-view.component.html',
  styleUrl: './form-view.component.css',
})
export class FormViewComponent implements OnInit {
  #formBuilder = inject(FormBuilder);

  form!: FormGroup;
  objForm = input<any>();

  get controls() {
    return this.formItems('BODY');
  }

  get buttons() {
    return this.formItems('BUTTON');
  }

  onCancel(): void {
    console.log('onCancel');
  }

  onSubmit(): void {
    console.log('onSubmit', this.form.value);
  }

  ngOnInit(): void {
    this.createFormGroup();
    console.log('FormViewComponent', this.objForm());
  }

  private createFormGroup() {
    this.form = this.#formBuilder.group({});
    this.controls.forEach((control) => {
      this.form.addControl(
        control.attributeName,
        this.#formBuilder.control(null),
      );
    });
  }

  private formItems(section: string) {
    const objForm = this.objForm() as ObjForm;
    return objForm.showTypes[section]?.items;
  }
}
