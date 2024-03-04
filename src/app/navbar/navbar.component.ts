import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  addCourse:boolean = false
  addStudent:boolean = false
  @Output() viewFormCourse = new EventEmitter<boolean>();
  @Output() viewFormStudent = new EventEmitter<boolean>();

  handleAddCourse(){
    this.addCourse = !this.addCourse
    this.viewFormCourse.emit(this.addCourse)
  }

  handleAddStudent(){
    this.addStudent = !this.addStudent
    this.viewFormStudent.emit(this.addStudent)
  }
}
