import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';


@Component({
  selector: 'app-rawpatientdata',
  templateUrl: './rawpatientdata.component.html',
  styleUrls: ['./rawpatientdata.component.css']
})
export class RawpatientdataComponent implements OnInit {
Searchbox;
rawdata:any;
  constructor(private dataservice: DataServiceService) { }
 searchclear(){
    this.Searchbox='';

  }
  ngOnInit(): void {
    //  this.dataservice.getRawData().subscribe(data=>{
    //   console.log("data", data);
    //   this.rawdata = data.data.rawPatientData;
    //   console.log("data1", this.rawdata);
    // })
  }
}
