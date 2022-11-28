import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private fb: FormBuilder) {
  }
  isValidForm = false

  infoForm = this.fb.group({
    numPFR: ['', [
      Validators.minLength(12),
      Validators.required
    ]],
    nameShort: ['', Validators.required],
    inn: ['', [
      Validators.minLength(12),
      Validators.required
    ]],
    kpp: ['', [
      Validators.minLength(9),
      Validators.required
    ]],
    month: ['', [
      Validators.required,
      Validators.max(12)
    ]],
    year: ['', [
      Validators.required,
      Validators.minLength(4)
    ]],
    code: ['', Validators.required],
    table: this.fb.array([])
  })
  get table(){
    return this.infoForm.get('table') as FormArray
  }
  addTable() {
    let tr = this.fb.group({
      fio:[''],
      snils:['', [Validators.required, Validators.minLength(11)]],
      inn:['']
    })
    this.table.push(tr)
  }
  delTable(i:number){
    this.table.removeAt(i)
  }

  get _numPFR(){
    return this.infoForm.get('numPFR')
  }
  get _nameShort(){
    return this.infoForm.get('nameShort')
  }
  get _inn(){
    return this.infoForm.get('inn')
  }
  get _kpp(){
    return this.infoForm.get('kpp')
  }
  get _month(){
    return this.infoForm.get('month')
  }
  get _year(){
    return this.infoForm.get('year')
  }
  get _code(){
    return this.infoForm.get('code')
  }


  checkError(){
    if(this.infoForm.status === 'INVALID'){
      this.isValidForm = true
    }
  }

  saveFrom(){
    console.log(JSON.stringify(this.infoForm.value))
  }
}
