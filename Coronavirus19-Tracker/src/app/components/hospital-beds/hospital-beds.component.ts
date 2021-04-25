import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-hospital-beds',
  templateUrl: './hospital-beds.component.html',
  styleUrls: ['./hospital-beds.component.css']
})
export class HospitalBedsComponent implements OnInit {

  constructor(private dataservice: DataServiceService) { }
  hospital:any;
  summary:any;

Searchbox;
  searchclear(){
    this.Searchbox='';

  }
  ngOnInit(): void {
    this.dataservice.getHospitalData().subscribe(data=>{
      this.hospital = data.data.regional;
      this.summary = data.data.summary;
    })

  }

}
