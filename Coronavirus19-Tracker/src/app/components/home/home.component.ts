import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { GlobalDataSummary } from 'src/app/models/global-data';
import { GoogleChartInterface } from 'ng2-google-charts';
import {Sort} from '@angular/material/sort';
import {NgForm, NumberValueAccessor} from'@angular/forms';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { PopupsComponent } from '../popups/popups.component';


export interface Countries {
  Country: string;
CountryCode: string;
Date:string;
NewConfirmed: Number;
NewDeaths:  Number;
NewRecovered:  Number;

Slug: string;
TotalConfirmed:  Number;
TotalDeaths:  Number;
TotalRecovered:  Number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Searchbox;
SortedTableData;

  GlobalData:any
  countries:any
  totalConfirmed:number
  totalRecovered:number
  totalDeaths: number
  totalActive:number
  upDate:string
  newConfirmed:number
  newDeaths:number
  newRecovered:number
  newarray=[];
  constructor(private dataService: DataServiceService,
    private dialog: MatDialog)
    {
    this.refresh();
   }

view(i)
{
  const dialogConfig= new MatDialogConfig();
  dialogConfig.autoFocus=true;
  dialogConfig.data={i};
  dialogConfig.data={ selectedCountry : i};
  this.dialog.open(PopupsComponent, dialogConfig);

}

  ngOnInit(): void {

  }
  searchclear(){
    this.Searchbox='';
  }
  refresh(){
    this.dataService.getCountries().subscribe(data=>{
      console.log("data", data);
      this.GlobalData = data.Global;
      this.countries= data.Countries;
      console.log("data", this.countries);

let len=data.Countries.length;
for (let i = 0; i < len - 1; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                if (this.countries[j].TotalConfirmed > this.countries[j + 1].TotalConfirmed)
                {
                    let temp = this.countries[j];
                    this.countries[j] = this.countries[j + 1];
                    this.countries[j + 1] = temp;

                }
    } }
    for(let i=0;i<len;i++){

      this.newarray[i]=this.countries[len-1-i]

    }
console.log("data>>", this.newarray);

      this.SortedTableData=this.newarray;
      //dashboard cards data
      this.totalConfirmed=this.GlobalData.TotalConfirmed.toLocaleString();
      this.totalRecovered=this.GlobalData.TotalRecovered.toLocaleString();
      this.totalDeaths=this.GlobalData.TotalDeaths.toLocaleString();
      let totalActiveCase;
      totalActiveCase = (this.GlobalData.TotalConfirmed-this.GlobalData.TotalRecovered-this.GlobalData.TotalDeaths).toLocaleString();
      this.totalActive=totalActiveCase;
      this.upDate=this.countries[0].Date;
     //new cases
      this.newConfirmed=this.GlobalData.NewConfirmed
      this.newDeaths=this.GlobalData.NewDeaths
      this.newRecovered=this.GlobalData.NewRecovered


    })


  }
  sortData(sort: Sort) {

    const data = this.countries.slice();
    if (!sort.active || sort.direction === '') {
      this.SortedTableData = data;
      return;
    }
    this.SortedTableData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Country': return compare(a.Country, b.Country, isAsc);
        case 'TotalConfirmed': return compare(a.TotalConfirmed, b.TotalConfirmed, isAsc);

        case 'NewRecovered': return compare(a.NewRecovered, b.NewRecovered, isAsc);
        case 'NewDeaths': return compare(a.NewDeaths, b.NewDeaths, isAsc);
        case 'TotalDeaths': return compare(a.TotalDeaths, b.TotalDeaths, isAsc);

        default: return 0 ;
      }
    });
  }


}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
