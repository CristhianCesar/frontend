import { ClienteDialogComponent } from './cliente-dialog/cliente-dialog.component';
import { Component, OnInit, Inject } from '@angular/core';
import { ClienteService } from '../_services/cliente.service';
import { MatDialog, MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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

  public displayedColumns = ['codigo', 'nome', 'email', 'endereco', 'cidade', 'options'];
  public dataSource: Array<Cliente> = [];

  constructor(private clienteService: ClienteService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit() {

    this.clienteService.findAll().subscribe(result => {
      this.dataSource = result;
    }, error => {
      let snackBarError = this.snackBar.open('Ocorreu um Erro!', 'Detalhes');
      snackBarError.onAction().subscribe(() => {
        this.dialog.open(ErrorDetailComponent, {
          width: '450px',
          disableClose: true,
          data: error
        })
      })
    });

  }

  showDialog(cliente: Cliente) {

    let dialogRef = this.dialog.open(ClienteDialogComponent, {
      width: '450px',
      disableClose: true,
      data: cliente
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clienteService.save(result)
          .subscribe(result => {
            this.snackBar.open('Registro Salvo com Sucesso', 'Ok', {
              duration: 3000
            });

            this.ngOnInit();
          }, error => {
            let snackBarError = this.snackBar.open('Ocorreu um Erro!', 'Detalhes');
            snackBarError.onAction().subscribe(() => {
              this.dialog.open(ErrorDetailComponent, {
                width: '450px',
                disableClose: true,
                data: error
              })
            })
          });
      }
    });
  }

  remove(cliente) {
    this.clienteService.destroy(cliente)
      .subscribe(result => {
        this.snackBar.open('Registro Excluído com Sucesso', 'Ok', {
          duration: 3000
        });

        this.ngOnInit();
      }, error => {
        console.log('Pau', error);
      })
  }
}


@Component({
  template: `
  <h1 mat-dialog-title color="warn">Ocorreu um Erro!</h1>
  <div mat-dialog-content>
    <p>{{ data }}</p>
  </div>
  <div mat-dialog-actions>
    <span class="span-spacer"></span>
    <button mat-button (click)="closeDialog()" color="warn">Fechar</button>
  </div>
  `
})
export class ErrorDetailComponent {
  constructor(public dialogRef: MatDialogRef<ErrorDetailComponent>,
    @Inject(MAT_DIALOG_DATA) private data) { }

  closeDialog() {
    this.dialogRef.close();
  }
}