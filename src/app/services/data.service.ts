import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    private apiUrl = "https://localhost:7228/api";
  private upload = "File/uploadd";
    constructor(private http: HttpClient, private router: Router) { }
  
  
 
  uploadCsv(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.apiUrl}/${this.upload}`, formData);
  }
}
