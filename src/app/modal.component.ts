import {Component, Inject} from '@angular/core';
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CommonModule} from "@angular/common";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatDatepicker, MatDatepickerModule, MatDatepickerToggle} from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, NativeDateAdapter} from "@angular/material/core";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MatButton} from "@angular/material/button";
import {DataInterface} from "../interfaces/formData.interface";
import {Dataservice} from "../serveces/dataservice";
// @ts-ignore
@Component({
  selector: 'app-modal',
  providers: [
    {provide: DateAdapter, useClass: NativeDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS}
  ],
  standalone: true,
  imports: [NgbModule, CommonModule, MatDatepickerModule, ReactiveFormsModule, MatLabel, MatHint, MatDatepickerToggle, MatDatepicker, MatFormField, MatButton],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  constructor(public datsService: Dataservice,
  private _mdr: MatDialogRef<ModalComponent>,
  @Inject(MAT_DIALOG_DATA) data: string,
  private fb: FormBuilder
  ){}

  public dealForm! : FormGroup;
  public dataForm={} as DataInterface;
  ngOnInit() {
      this.dealForm = this.fb.group({
      firstname: new FormControl(''),
      secondname: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      jobType: new FormControl(''),
      jobSource: new FormControl(''),
      code: new FormControl(''),
      City: new FormControl(''),
      State: new FormControl(''),
      Address: new FormControl(''),
      notes: new FormControl('')
        })
    };
  CloseDialog() {
    this._mdr.close(false)
  }

  onSubmit() {
    this.dataForm = Object.assign({}, this.dealForm.value);
    console.log('INTERFACE', this.dataForm);
    console.log('INTERFACE INTERFACE', this.dealForm.value);
    this.datsService.makeDeal(this.dataForm).subscribe(data=>{
      console.log(data);
    });
  }
}
