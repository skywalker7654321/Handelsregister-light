import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-onderneming',
  templateUrl: './onderneming.component.html',
  styleUrls: ['./onderneming.component.css']
})
export class OndernemingComponent {


  streetName!: string;
  houseNumber: string | undefined

  constructor(@Inject(MAT_DIALOG_DATA) public data: number, private dataService: DataServiceService) { }

  onInputStreetName(value: string) {
    this.streetName = value
  }
  onInputHouseNumber(value: string) {
    this.houseNumber = value
  }

  saveAndNext() {
    this.dataService.updateStreetName(this.streetName)
  }

}
