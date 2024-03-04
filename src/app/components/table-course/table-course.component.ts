import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CourseServiceTsService } from '../../services/course-service.ts.service';
import { Course } from '../../interface/course-interface';
import { RouterLink } from '@angular/router';
import { StudentServiceTsService } from '../../services/student-service.ts.service';
import { Student } from '../../interface/student-interface';
import { NumStudents } from '../../interface/numStudent-interface';

@Component({
  selector: 'app-table-course',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './table-course.component.html',
  styleUrl: './table-course.component.css',
})
export class TableCourseComponent implements OnInit {
  courses: Course[] = [];
  students: Student[] = [];
  numStudents: NumStudents[] = [];
  auxAmount: number = 0;
  constructor(
    private courseService: CourseServiceTsService,
    private studentService: StudentServiceTsService
  ) {}

  ngOnInit(): void {
    this.courseService.getCourse().subscribe((data: Course[]) => {
      this.courses = data;
      console.log(this.courses);
    });

    this.studentService.getStudent().subscribe((data: Student[]) => {
      this.students = data;
      console.log(this.students);
    });

    this.courses.forEach((course) => {
      this.auxAmount = 0;
      this.students.forEach((student) => {
        if (student.course?.includes(course.nameCourse)) this.auxAmount += 1;
      });
      this.numStudents.push({
        id: course.id,
        amount: this.auxAmount,
      });
    });

    console.log(this.numStudents);
  }

  cancelCourse(id: number | undefined) {
    this.courseService.deleteCourse(id).subscribe();
    location.reload();
  }
}
