import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  nombreControl = new FormControl('',
  [
    Validators.required,
    Validators.minLength(3),
  ]
  );

  apellidoControl = new FormControl('',
  [
    Validators.required,
    Validators.minLength(5)
  ]
  );

  contrasenaControl = new FormControl('',
  [
  Validators.required,
  Validators.minLength(8),
  ]
  );

  emailControl = new FormControl('',
  [
    Validators.required,
    Validators.email
  ]
  );

  direccionControl = new FormControl('',
  [
  Validators.required,
  Validators.minLength(7)
  ]
  );

  ciudadControl = new FormControl('',
  [
  Validators.required,
  Validators.minLength(4)
  ]
  );

  codigoControl = new FormControl('',
  [
    Validators.maxLength(5),
  Validators.required,
  Validators.minLength(5)
  ]
  );

  paisControl = new FormControl('',
  [
  Validators.required,
  Validators.minLength(4)
  ]
  );


  registerForms: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.registerForms = this.formBuilder.group({
        nombre: this.nombreControl,
        apellido: this.apellidoControl,
        email: this.emailControl,
        contraseña: this.contrasenaControl
    });
  }

  onSubmit(): void{
    if (this.registerForms.valid){
      console.log(this.registerForms.value);
    } else [
      alert('Error llene bien los campos')
    ]
  }


  }

