import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { GlobalDataSummary } from '../models/global-data';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getCountries():Observable<any>{
      const Url = "https://api.covid19api.com/summary"

      return this.http.get<any>(Url)
    }
    getCoronaRealtimeData(country):Observable<any>{
      const url="https://api.covid19api.com/total/dayone/country/"+ country
      return this.http.get<any>(url)
    }
 getCoronaIndiaData():Observable<any>{
   const indiaurl="https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise"
   return this.http.get<any>(indiaurl)
 }
 getContactIndia():Observable<any>{
   const contacturl="https://api.rootnet.in/covid19-in/contacts"
   return this.http.get<any>(contacturl)
 }
 getMedicalCollegeData():Observable<any>{
  const collegeurl="https://api.rootnet.in/covid19-in/hospitals/medical-colleges"
  return this.http.get<any>(collegeurl)
}
getHospitalData():Observable<any>{
  const hospitalsurl="https://api.rootnet.in/covid19-in/hospitals/beds";
  return this.http.get<any>(hospitalsurl)
}
getTeststatsData():Observable<any>{
  const testurl="https://api.rootnet.in/covid19-in/stats/testing/raw";
  return this.http.get<any>(testurl)
}
getRawData():Observable<any>{
  const Rawurl="https://api.rootnet.in/covid19-in/unofficial/covid19india.org";
  return this.http.get<any>(Rawurl)
}
}
