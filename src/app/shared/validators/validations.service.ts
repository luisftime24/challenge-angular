import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {
  public nombresPattern: string = "^([a-zA-Z\u00C0-\u017F'\.]+[ ]?){1,3}$";
  public ceRegex: RegExp = /^[a-zA-Z0-9]{9}$/;
  public dniRegex: RegExp = /^[0-9]{8}$/;
  public pasaporteRegex: RegExp = /^[0-9]{9}$/;

  constructor() { }

  documentNumberValidator(campoType: string, campoDocument: string) {

    return (formGroup: AbstractControl): ValidationErrors | null => {
      const type = formGroup.get(campoType)?.value;
      const numberDocument = formGroup.get(campoDocument)?.value;

      switch (type) {
        case '1':
          console.log(this.ceRegex.test(numberDocument))
          return this.ceRegex.test(numberDocument) ? null : { ceInvalid: true };
        case '2':
          console.log(this.dniRegex.test(numberDocument))
          return this.dniRegex.test(numberDocument) ? null : { dniInvalid: true };
        case '3':
          console.log(this.pasaporteRegex.test(numberDocument))
          return this.pasaporteRegex.test(numberDocument) ? null : { pasaporteInvalid: true };
        default:
          return null;
      }
    }
  }
}
