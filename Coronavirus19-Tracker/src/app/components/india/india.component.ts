import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {
  Searchbox;
  GlobalData:any
  Statewise:any
  totalConfirmed:number
  totalRecovered:number
  totalDeaths: number
  totalActive:number
  upDate:string
  SortedTableData: any;
  constructor(private dataService: DataServiceService) { }
  searchclear(){
    this.Searchbox='';
  }
  ngOnInit(): void {
    this.dataService.getCoronaIndiaData().subscribe(data=>{
       this.GlobalData=data.data.total
       this.totalConfirmed=this.GlobalData.confirmed.toLocaleString();
       this.totalRecovered=this.GlobalData.recovered.toLocaleString();
       this.totalDeaths=this.GlobalData.deaths.toLocaleString();
       this.totalActive=this.GlobalData.active.toLocaleString();
       this.upDate=data.lastOriginUpdate
      this.Statewise=data.data.statewise
    })

  }
}


