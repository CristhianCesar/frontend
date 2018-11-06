import { ClienteDialogComponent } from './cliente-dialog/cliente-dialog.component';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../_services/cliente.service';
import { MatDialog, MatSnackBar } from '@angular/material';

export interface Cliente {
  id: number;
  codigo: string;
  nome: string;
  email: string;
  endereco: string;
  cidade: string;
  uf: string;
}


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public displayedColumns = ['codigo', 'nome', 'email','endereco', 'cidade'];
  public dataSource: Array<Cliente> = [];

  constructor(private clienteService: ClienteService, 
              private dialog: MatDialog, 
              private snackBar: MatSnackBar) { }

  ngOnInit() {

    this.clienteService.findAll().subscribe(result => {
      this.dataSource = result;
    }, error => {
      console.log('Ops', error);
    });

  }

  showDialog() {

    let dialogRef = this.dialog.open(ClienteDialogComponent, {
      width: '450px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if ( result ) {
        this.clienteService.save( result )
          .subscribe(result => {
            this.snackBar.open('Registro Salvo com Sucesso', 'Ok', {
              duration: 3000
            });
          }, error => {
            console.log('Pau', error);
          });
      }
    });
  }

}
