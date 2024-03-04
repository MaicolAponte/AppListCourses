import { Component } from '@angular/core';
import { FormCourseComponent } from '../form-course/form-course.component';
import { TableCourseComponent } from '../components/table-course/table-course.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-page-course',
  standalone: true,
  imports: [FormCourseComponent, TableCourseComponent, NgIf, NgClass],
  templateUrl: './page-course.component.html',
  styleUrl: './page-course.component.css'
})
export class PageCourseComponent {
  formView:boolean = false
  buttomTable:string = 'Hide table'
  tableView:boolean = true

  viewTable () {
    this.tableView = !this.tableView
    if(this.tableView) {
      this.buttomTable = 'Hide table'
    }else {
      this.buttomTable = 'View table'
    }
  }
  viewForm () {
    this.formView = !this.formView
  }
}
