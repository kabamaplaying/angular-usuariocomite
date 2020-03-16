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

  usariosList: Observable<Usuario[]>;
  formularioIntegrante: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  });
  isLoading = false;
  constructor(private uService: IntegranteService, private fb: FormBuilder) {
    this.cargarUsuarios();
  }
  ngOnInit() {
    this.formularioIntegrante.get('nombre')
      .valueChanges
      .pipe(
        debounceTime(300),
        tap(() => this.isLoading = true),
        switchMap(value => this._filter(value).pipe(
             finalize(() => this.isLoading = false))
        )
      ).subscribe((users: Usuario[]) => { 
   
        this.usariosList =  from([...users]); 
         
      
      });
  }

  displayFn(user: Usuario): string {
    return user && user.nombre ? user.nombre : '';
  }
  _filter(value: string | Usuario): Observable<Usuario[]> {
    console.log(value)
    const filterValue = typeof value === 'string' ? value.toLocaleLowerCase() : value.nombre.toLocaleLowerCase();
     this.cargarUsuarios();
    return this.usariosList.pipe(
      switchMap(lista => 
        lista.filter((e, i) => {
        return e.nombre.toLocaleLowerCase().indexOf(filterValue) === 0
      })
      )
    );
  }

  cargarUsuarios() {
    this.usariosList = this.uService.allIntegrantes();
  }

}