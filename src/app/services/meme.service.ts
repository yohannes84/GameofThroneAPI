import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  constructor(private httpclient: HttpClient) { }

  getMemes():Observable<any>{
    return this.httpclient.get("https://thronesapi.com/api/v2/Characters")
  }
}
