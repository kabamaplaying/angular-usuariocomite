import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { IntegranteService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-buscar-integrante',
  templateUrl: './buscar-integrante.component.html',
  styleUrls: ['./buscar-integrante.component.css']
})
export class BuscarIntegranteComponent implements OnInit {

  usariosList: Observable<Usuario[]>;
  stateForm: FormGroup;
  constructor(private uService: IntegranteService, private fb: FormBuilder) {

  }
  ngOnInit() {
    this.cargarUsuarios();
    this.stateForm = this.fb.group({
      nombre: [Validators.required]
    });
  }

  cargarUsuarios() {
    this.usariosList = this.uService.allIntegrantes();
  }

}