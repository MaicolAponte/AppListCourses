import { Component, OnInit } from '@angular/core';
import { CourseServiceTsService } from '../services/course-service.ts.service';
import { Course } from '../interface/course-interface';
import { StudentServiceTsService } from '../services/student-service.ts.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Student } from '../interface/student-interface';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { sourceMapsEnabled } from 'process';

@Component({
  selector: 'app-page-one-course',
  standalone: true,
  imports: [HttpClientModule, FormsModule, RouterLink, NgIf],
  templateUrl: './page-one-course.component.html',
  styleUrl: './page-one-course.component.css',
})
export class PageOneCourseComponent implements OnInit {
  Edit:boolean = true
  date:string | undefined = ""
  
  course: Course = {
    nameCourse: '',
    duration: '',
    intensity: '',
  };
  previusNameCourse:string = ''
  newStudent: Student = {
    nameStudent: '',
    email: '',
    phone: '',
    course: ''
  }
  idStudentAdd?: number
  addStudent: boolean = false
  listStudents: Student[] = [];
  courseID?: number;

  constructor(
    private serviceCourse: CourseServiceTsService,
    private serviceStudents: StudentServiceTsService,
    private _route: ActivatedRoute
  ) {}

  addStudentExistingView () {
    this.addStudent = !this.addStudent
  }

  expulsedStudent (id: number | undefined) {
    //this.serviceStudents.deleteStudent(id).subscribe((res) => {console.log(res)})
    this.listStudents.forEach((student) => {
      if (student.id == id) {
       if (student.course?.includes(', ' + this.previusNameCourse)) {
        student.course = student.course?.replace(', ' + this.previusNameCourse, '')
       } else {
        student.course = student.course?.replace(this.previusNameCourse + ', ', '')
       }
      }
      this.serviceStudents.updateStudent(student, student.id).subscribe((res) => {console.log(res)})
    })
  }

  edit () {
    this.Edit = !this.Edit

  }
  updateStudent () {
    this.listStudents.forEach((student) => {
      if (student.id == this.idStudentAdd) {
          if (student.course == '') {
            student.course = this.course.nameCourse
          } else {
          student.course = student.course + ', ' + this.course.nameCourse
        }
          this.serviceStudents.updateStudent(student, student.id).subscribe(
            (res) => {
              console.log(res)}
          )
      }
    })
  }

  updateCourse () {
    this.serviceCourse.updateCourse(this.course, this.courseID).subscribe(
      (res) => {console.log(res)}
    )
    this.updateStudentCourse()
    //location.reload()
  }
  
  updateStudentCourse () {
    this.listStudents.forEach((student) => {
      if (student.course?.includes(this.previusNameCourse)) {
          student.course = student.course.replace(this.previusNameCourse, this.course.nameCourse)
          this.serviceStudents.updateStudent(student, student.id).subscribe(
            (res) => {
              console.log(res)}
          )
      }
    })
    location.reload()
  }
  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.courseID = (params['id']);
    })

    this.serviceCourse.getOneCourse(this.courseID).subscribe(
      (data: Course[]) => {
        this.course.id = data[0].id
        this.course.nameCourse = data[0].nameCourse
        this.course.duration = data[0].duration
        this.course.intensity = data[0].intensity
        this.date = data[0].created_at?.toString()
        this.previusNameCourse = this.course.nameCourse
        console.log(this.course)}
    );

    this.serviceStudents.getStudent().subscribe((data: Student[]) => {
      this.listStudents = data  
      console.log(this.listStudents)
      }
    );
    
    if (this.date) {
      this.date = this.date?.slice(0,this.date.indexOf('T'))
    }
    console.log(this.date)
  }
}
