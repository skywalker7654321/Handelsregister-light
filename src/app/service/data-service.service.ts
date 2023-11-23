import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private streetNameSource = new BehaviorSubject<string>('默认街道名')
  currentStreetName = this.streetNameSource.asObservable()
  constructor() { }

  updateStreetName(arg0:string){
    this.streetNameSource.next(arg0)
  }


}
