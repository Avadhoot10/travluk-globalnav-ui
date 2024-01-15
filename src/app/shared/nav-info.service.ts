import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TopMenu } from '../navbar/TopMenu';

@Injectable({
  providedIn: 'root'
})
export class NavInfoService {

  constructor(private http: HttpClient) { }

  // Connecting to local db using get method
  getNavInfo(): Observable<TopMenu[]> {
    return this.http.get<TopMenu[]>("http://localhost:4000/topMenu");
  }
}
