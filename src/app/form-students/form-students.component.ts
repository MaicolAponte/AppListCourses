import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../interface/student-interface';
import { CourseServiceTsService } from '../services/course-service.ts.service';
import { StudentServiceTsService } from '../services/student-service.ts.service';
import { Course } from '../interface/course-interface';

@Component({
  selector: 'app-form-students',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-students.component.html',
  styleUrl: './form-students.component.css'
})
export class FormStudentsComponent implements OnInit{
  
  formStudent: Student = {
    nameStudent: '',
    email: '',
    phone: '',
    course: ''
  }
  
  courses: Course[] = []
  constructor(private serviceCourse: CourseServiceTsService, private serviceStudent: StudentServiceTsService){ }
  sendStudent () { 
    console.log(this.formStudent)
    this.serviceStudent.intoStudent(this.formStudent).subscribe(
      (res) => {console.log(res)}
    )
    location.reload()
  }

  ngOnInit(): void {
    
    this.serviceCourse.getCourse().subscribe(
      (data: Course[]) => {this.courses = data}
    )

    console.log(this.courses)
  }

}
