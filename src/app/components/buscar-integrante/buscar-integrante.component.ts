import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { IntegranteService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { Observable, of, from } from 'rxjs';
import { map, startWith, filter, concatMap, tap, debounceTime, switchMap, finalize } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-buscar-integrante',
  templateUrl: './buscar-integrante.component.html',
  styleUrls: ['./buscar-integrante.component.css']
})
export class BuscarIntegranteComponent implements OnInit {

  usariosList: Observable<any[]>;
  formularioIntegrante: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  });
  isLoading = false;
  constructor(private uService: IntegranteService, private fb: FormBuilder) {
    this.usariosList = this.cargarUsuarios();
  }
  ngOnInit() {
    this.formularioIntegrante.get('nombre')
      .valueChanges
      .pipe(
        debounceTime(300),
        tap(() => this.isLoading = true),
        switchMap((value: string) =>
          this.uService.allIntegrantes().
            pipe(
              switchMap((arr: Usuario[]) => arr.filter((usr: Usuario) =>
                this._filter(value, usr)
              )),
              finalize(() => this.isLoading = false))
        )


      ).subscribe((users: Observable<Usuario[]>) => {
        console.log(users, 'VALUE')
        this.usariosList = of([users]);
      });
  }

  displayFn(user: Usuario): string {
    return user && user.nombre ? user.nombre : '';
  }
  _filter(value: any, usr: Usuario): Observable<Usuario | null> {

    const filterValue = value instanceof Object ? value.nombre.toLocaleLowerCase() : value.toLocaleLowerCase();
    return usr.nombre.toLocaleLowerCase().indexOf(filterValue) === 0 ? of(usr) : null;
  }

  cargarUsuarios() {
    return this.uService.allIntegrantes();
  }

}