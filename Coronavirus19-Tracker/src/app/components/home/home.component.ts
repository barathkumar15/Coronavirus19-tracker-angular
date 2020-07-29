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

  this.dialog.open(PopupsComponent, dialogConfig);

}

  ngOnInit(): void {

  }
  searchclear(){
    this.Searchbox='';
  }
  refresh(){
    this.dataService.getCountries().subscribe(data=>{

      this.GlobalData = data.Global;
      this.countries= data.Countries;
      this.SortedTableData=this.countries;
      this.totalConfirmed=this.GlobalData.TotalConfirmed
      this.totalRecovered=this.GlobalData.TotalRecovered
      this.totalDeaths=this.GlobalData.TotalDeaths
      this.newConfirmed=this.GlobalData.NewConfirmed
      this.newDeaths=this.GlobalData.NewDeaths
      this.newRecovered=this.GlobalData.NewRecovered
      this.totalActive=this.totalConfirmed-this.totalRecovered-this.totalDeaths
      this.upDate=this.countries[0].Date;
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
