import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OndernemingComponent } from '../onderneming/onderneming.component';
import { PersoonsgegevensComponent } from '../persoonsgegevens/persoonsgegevens.component';
import { FunctionarisComponent } from '../functionaris/functionaris.component';
import { VestigingComponent } from '../vestiging/vestiging.component';

@Component({
  selector: 'app-inschrijvendelen',
  templateUrl: './inschrijvendelen.component.html',
  styleUrls: ['./inschrijvendelen.component.css']
})
export class InschrijvendelenComponent {

  constructor(public dialog: MatDialog) { }

  // openDialog(enterAnimationDuration:string, exitAnimationDuration:string):void {
  //   const dialogRef = this.dialog.open(OndernemingComponent)

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`)
  //   })
  // }

  openDialogOnderneming(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(OndernemingComponent, {
      width: '80%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: 10
    });
  }

  openDialogPersoonsgegevens(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PersoonsgegevensComponent, {
      width: '80%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogFunctionaris(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(FunctionarisComponent, {
      width: '80%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogVestiging(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(VestigingComponent, {
      width: '80%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
