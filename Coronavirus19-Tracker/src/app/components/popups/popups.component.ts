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

  }

}
