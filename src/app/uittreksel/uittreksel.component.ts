import { Component } from '@angular/core';

@Component({
  selector: 'app-uittreksel',
  templateUrl: './uittreksel.component.html',
  styleUrls: ['./uittreksel.component.css']
})
export class UittrekselComponent {

  data = {
    companyName: 'ABC Company',
    address: '123 Main St',
    contact: 'John Doe',
    industry: 'Technology',
    employees: 100,
    revenue: '1 million',
    website: 'http://www.example.com',
    established: new Date('2000-01-01')
  };
  

  
}
