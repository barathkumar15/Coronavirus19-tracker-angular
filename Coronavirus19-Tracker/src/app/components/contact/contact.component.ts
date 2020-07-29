import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contact:any;
Searchbox;
  constructor(private service:DataServiceService) { }

  searchclear(){
    this.Searchbox='';

  }
  ngOnInit(): void {
    this.service.getContactIndia().subscribe(data=>{
      this.contact = data.data.contacts.regional;
    })
  }

}
