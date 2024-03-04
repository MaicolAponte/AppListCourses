import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../interface/course-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceTsService {
  api_URI:string = 'http://localhost:3000/';
  private http = inject(HttpClient);

  public getCourse (): Observable<any> {
    console.log('Obtaind Course')
    return this.http.get(`${this.api_URI}Course`);
  }

  public getOneCourse (id: number | undefined): Observable<any> {
    console.log('Obtain One Course')
    return this.http.get(`${this.api_URI}Course/${id}`);
  }

  public intoCourse (updateCourse: Course): Observable<any> {
    console.log('Into Course')
    return this.http.post(`${this.api_URI}Course`, updateCourse);
  }

  public updateCourse (course: Course, id: number | undefined): Observable<any> {
    console.log('Update Course')
    return this.http.put(`${this.api_URI}Course/${id}`, course);
  }

  public deleteCourse (id: number | undefined): Observable<any> {
    console.log('eliminated Course')
    return this.http.delete(`${this.api_URI}Course/${id}`);
  }
}
