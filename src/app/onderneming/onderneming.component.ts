import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-onderneming',
  templateUrl: './onderneming.component.html',
  styleUrls: ['./onderneming.component.css']
})
export class OndernemingComponent {

constructor(@Inject(MAT_DIALOG_DATA) public data:number){}


}
