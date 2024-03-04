import { Component } from '@angular/core';
import { FormStudentsComponent } from '../form-students/form-students.component';
import { TableStudentsComponent } from '../components/table-students/table-students.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-page-students',
  standalone: true,
  imports: [FormStudentsComponent, TableStudentsComponent, NgIf],
  templateUrl: './page-students.component.html',
  styleUrl: './page-students.component.css'
})
export class PageStudentsComponent {
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
