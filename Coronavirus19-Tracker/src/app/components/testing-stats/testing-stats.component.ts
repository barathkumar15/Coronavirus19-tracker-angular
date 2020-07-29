import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-testing-stats',
  templateUrl: './testing-stats.component.html',
  styleUrls: ['./testing-stats.component.css']
})
export class TestingStatsComponent implements OnInit {
testdata:any;
  constructor(private dataservice:  DataServiceService) { }

  ngOnInit(): void {
      this.dataservice.getTeststatsData().subscribe(data=>{
      console.log("data", data);
      this.testdata = data.data;
      console.log("data1", this.testdata);
    })
  }

}
