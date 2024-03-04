import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../interface/student-interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentServiceTsService {
  api_URI = "http://localhost:3000/";
  private http = inject(HttpClient);

  public getStudent (): Observable<any> {
    return this.http.get(`${this.api_URI}Students`);
  }

  public getOneStudent (id: number | undefined): Observable<any> {
    return this.http.get(`${this.api_URI}Students/${id}`);
  }

  public intoStudent (updateStudent: Student): Observable<any> {
    return this.http.post(`${this.api_URI}Students`, updateStudent);
  }

  public updateStudent (student: Student, id: number | undefined): Observable<any> {
    return this.http.put(`${this.api_URI}Students/${id}`, student);
  }

  public deleteStudent (id: number | undefined): Observable<any> {
    return this.http.delete(`${this.api_URI}Students/${id}`);
  }
}
