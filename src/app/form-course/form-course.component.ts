import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseServiceTsService } from '../services/course-service.ts.service';
import { HttpClientModule } from '@angular/common/http';
import { Course } from '../interface/course-interface';

@Component({
  selector: 'app-form-course',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './form-course.component.html',
  styleUrl: './form-course.component.css'
})
export class FormCourseComponent {

  newCourse: Course = {
    nameCourse: '',
    intensity: '',
    duration: ''
  }
  constructor (private courseService: CourseServiceTsService) { }
  
  sendCourse () {
    console.log(this.newCourse)
    this.courseService.intoCourse(this.newCourse).subscribe(
      res => {console.log(res);}
    )
    location.reload()
  }
}
