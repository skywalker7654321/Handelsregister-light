import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-persoonsgegevens',
  templateUrl: './persoonsgegevens.component.html',
  styleUrls: ['./persoonsgegevens.component.css']
})
export class PersoonsgegevensComponent implements OnInit {

  streetName: string | undefined
  voornaam: string | undefined
  achternaam: string | undefined
  readonly URL = 'http://localhost:8080/natuurlijkpersoon'
  result: Observable<any> | undefined

  constructor(private httpClient: HttpClient, private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.currentStreetName.subscribe(value=>this.streetName=value)
  }

  onInputLand(arg0: string) {
    throw new Error('Method not implemented.');
  }
  onInputPostcode(arg0: string) {
    throw new Error('Method not implemented.');
  }
  onInputToevoegingHuisnummer(arg0: string) {
    throw new Error('Method not implemented.');
  }
  onInputHuisnummer(arg0: string) {
    throw new Error('Method not implemented.');
  }
  onInputStraatnaam(arg0: string) {
    throw new Error('Method not implemented.');
  }
  onInputGeboorteDatum(arg0: string) {
    throw new Error('Method not implemented.');
  }
  onInputGeslacht(arg0: string) {
    throw new Error('Method not implemented.');
  }
  onInputAchternaam(arg0: string) {
    this.achternaam = arg0
  }
  onInputTussenvoegsel(arg0: string) {
    throw new Error('Method not implemented.');
  }
  onInputVoornaam(arg0: string) {
    this.voornaam = arg0
  }
  onInputBedrijfsnaam(arg0: string) {
    throw new Error('Method not implemented.');
  }


  createNatuurlijkPersoon() {
    const requestData = {
      "naam": {
        "voorNaam": this.voornaam,
        "tussenVoegsel": this.streetName,
        "achterNaam": this.achternaam
      },
      "geslacht": "M",
      "geboorteDatum": "2000-10-20",
      "ingangsDatumPersoonsGegevens": "2023-11-30",
      "ingangsDatumWoonAdres": "2023-11-30",
      "geheimWoonAdres": {
        "straatNaam": "SecretStreet",
        "huisnummer": 123,
        "toevoegingHuisnummer": "A",
        "postcode": "1234AB",
        "plaatsNaam": "SecretCity"
      },
      "ingangsDatumGeheimWoonAdres": "2023-11-30",
      "woonAdres": {
        "straatNaam": "SecretStreet",
        "huisnummer": 123,
        "toevoegingHuisnummer": "A",
        "postcode": "1234AB",
        "plaatsNaam": "SecretCity"
      }
    }

    const headers = new HttpHeaders().set('Content-Type', 'application/json')

    this.result = this.httpClient.post(this.URL, requestData, { headers })

    this.result.subscribe(data => {
      console.log('API返回的数据', data)
    })
  }

}
