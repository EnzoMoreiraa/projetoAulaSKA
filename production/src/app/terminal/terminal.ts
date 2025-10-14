import { Component, inject } from '@angular/core';
import { ProductionControl } from '../production-control/production-control';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { DialogSelect } from '../dialog-select/dialog-select';

@Component({
  selector: 'app-terminal', // Nome do componente
  standalone: true, // Componente independente
  imports: [ProductionControl], // Importações necessárias, se houver (Dependências)
  templateUrl: './terminal.html', // Caminho do arquivo HTML
  styleUrl: './terminal.scss', // Caminho do arquivo SCSS
})
export class Terminal {
  
  readonly dialog: MatDialog = inject(MatDialog);

  setProductionOrder() {
    console.log('Production order set!');
    this.openSelectDialog();
  }

  openSelectDialog(): any {
    const dialogRef: MatDialogRef<DialogSelect, any> = this.dialog.open(DialogSelect, {
      width: '950px',
      panelClass: 'custom-dialog',
      data: { dialogTitle: 'Teste dialog' },
    });

    return new Promise((resolve) => {
      dialogRef.afterClosed().subscribe((result) => {
        resolve(result);
      });
    });
  }
}