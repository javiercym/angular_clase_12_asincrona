import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  form!:FormGroup;
  status = false;

  constructor(private fb: FormBuilder){
    this.form=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required,Validators.email],
      phone:['',Validators.required],
      subject:['',Validators.required]
    });
  }

  onSubmit(){
    this.status = true;
  }
}
