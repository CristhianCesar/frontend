import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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

  constructor(public dialogRef: MatDialogRef<ClienteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Cliente ) { 

    this.cliente = Object.assign({}, data);

  }

  cancelDialog() {
    this.dialogRef.close();
  }

}
