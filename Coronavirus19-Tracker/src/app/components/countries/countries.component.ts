import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { GlobalDataSummary } from 'src/app/models/global-data';
import { DataWiseData } from 'src/app/models/date-wise-data';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries:any
  country:any
  totalConfirmed:number
  totalRecovered:number
  totalDeaths: number
  totalActive:number
  dateWiseData:any
  selected: DataWiseData[];
  countrywise: any;
  constructor(private service: DataServiceService) { }

  ngOnInit(): void {
    this.service.getCountries().subscribe(data=>{
      this.countries = data.Countries;
    })
  }
  getCountry(country:any){
    this.country =country
    this.service.getCoronaRealtimeData(this.country).subscribe(data=>{
      this.selected=data
      var index=data.length-1
      this.totalConfirmed=data[index].Confirmed.toLocaleString();
      this.totalRecovered=data[index].Recovered.toLocaleString();
      this.totalDeaths=data[index].Deaths.toLocaleString();
      this.totalActive=data[index].Active.toLocaleString();
      for(let i=0;i<index;i++){

        this.selected[i]=data[index-i]
      }
    })
  }
}
