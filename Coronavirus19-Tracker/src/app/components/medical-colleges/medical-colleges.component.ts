import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-medical-colleges',
  templateUrl: './medical-colleges.component.html',
  styleUrls: ['./medical-colleges.component.css']
})
export class MedicalCollegesComponent implements OnInit {
college:any
Searchbox;
  constructor(private dataservice: DataServiceService) { }
  searchclear(){
    this.Searchbox='';

  }
  ngOnInit(): void {
    this.dataservice.getMedicalCollegeData().subscribe(data=>{
      this.college = data.data.medicalColleges;
    })
  }

}
