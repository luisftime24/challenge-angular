import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {
  public nombresPattern: string = "^([a-zA-Z\u00C0-\u017F'\.]+[ ]?){1,3}$";

  constructor() { }
}
