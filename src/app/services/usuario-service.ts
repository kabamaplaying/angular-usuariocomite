import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { of, Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: "root" })
export class IntegranteService {
  integrantList: Usuario[];
  bhSubject: BehaviorSubject<Usuario[]> = new BehaviorSubject(null);
  integrantList$: Observable<Usuario[]> = this.bhSubject.asObservable();

  constructor() {
    this.integrantList = [
      {
        id: 1,
        nombre: 'Juan',
        email: 'juan@gmail.com',
        sexo: 'M'
      },
      {
        id: 2,
        nombre: 'Maria',
        email: 'maria@gmail.com',
        sexo: 'F'
      },
      {
        id: 3,
        nombre: 'Andres',
        email: 'andres@gmail.com',
        sexo: 'M'
      }
    ]
  }

  allIntegrantes(): Observable<Usuario[]> {
    this.bhSubject.next([this.integrantList]);
    return this.integrantList$;
  }

  findUser(letter: string) {
    this.integrantList$.pipe(
     thro
    );
  }

}