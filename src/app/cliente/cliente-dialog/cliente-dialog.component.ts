import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Cliente } from '../cliente.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-dialog',
  templateUrl: './cliente-dialog.component.html',
  styleUrls: ['./cliente-dialog.component.css']
})
export class ClienteDialogComponent {
  public frmCtrlCodigo: FormControl = new FormControl('', [Validators.required]);

  public cliente: Cliente;

  constructor(public dialogRef: MatDialogRef<ClienteDialogComponent>) { 

    this.cliente = {codigo: '000001'} as Cliente;

  }

  cancelDialog() {
    this.dialogRef.close();
  }

}
