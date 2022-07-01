import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ValidationsService } from 'src/app/shared/validators/validations.service';
import { Pais } from '../../interfaces/register.interface';
import { NationalitiesService } from '../../services/nationalities.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent implements OnInit {

  documentTypes = [
    { value: '1', viewValue: 'Carnet de extranjeria' },
    { value: '2', viewValue: 'DNI' },
    { value: '3', viewValue: 'Pasaporte' },
  ]
  
  

  nacionalidades: Pais[] = []

  miFormulario: FormGroup = this.fb.group({
    nombres: ['', [Validators.required, Validators.pattern(this.vs.nombresPattern)]],
    apellidos: ['', [Validators.required]],
    tipoDocumento: ['', [Validators.required]],
    numeroDocumento: ['', [Validators.required]],
    nacionalidad: ['', [Validators.required]],
  }, {
    validators: [
      this.vs.documentNumberValidator('tipoDocumento', 'numeroDocumento')
    ]
  })

  constructor(private fb: FormBuilder, private vs: ValidationsService, private ns: NationalitiesService) { }

  ngOnInit(): void {
    this.ns.getCountries().subscribe(
      (paises: Pais[]) => {
        this.nacionalidades = paises;
      }
    )
  }

  campoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  registrar() {
    if (this.miFormulario.invalid) {

      this.miFormulario.markAllAsTouched();

      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset({
      nombres: 'Luis F.',
      nacionalidad: '',
      tipoDocumento: '',
    });
  }

}
