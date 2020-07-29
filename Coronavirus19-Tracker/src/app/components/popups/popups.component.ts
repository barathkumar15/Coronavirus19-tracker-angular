import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { DataServiceService } from 'src/app/services/data-service.service';


@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.css']
})
export class PopupsComponent implements OnInit {
local:any
country:string
newConfirmed:number
newDeaths:number
newRecovered:number
totalConfirmed:number
totalDeaths:number
totalRecovered:number
totalActive:number

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<PopupsComponent>,private dataService: DataServiceService) { }

  ngOnInit(): void {

    this.dataService.getCountries().subscribe(data1=>{
      this.local= data1.Countries[this.data.i];
      this.country=data1.Countries[this.data.i].Country;
      this.newConfirmed=data1.Countries[this.data.i].NewConfirmed;
      this.newDeaths=data1.Countries[this.data.i].NewDeaths;
      this.newRecovered=data1.Countries[this.data.i].NewRecovered;
      this.totalConfirmed=data1.Countries[this.data.i].TotalConfirmed;
      this.totalDeaths=data1.Countries[this.data.i].TotalDeaths;
      this.totalRecovered=data1.Countries[this.data.i].TotalRecovered;
      this.totalActive=this.totalConfirmed-this.totalRecovered-this.totalDeaths;

      console.log("log", this.local)
    })
  }

}
