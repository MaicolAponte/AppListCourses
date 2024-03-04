import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, NgIf, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  viewFormCourse:boolean = false
  viewFormStudent:boolean = false
  courseOfApp:boolean = true

  receiveViewCourse($event: boolean){
    this.viewFormCourse = $event;
  }
  receiveViewStudent($event: boolean){
    this.viewFormStudent = $event;
  }
  
  receiveCoursePage($event: boolean){
    this.courseOfApp = $event;
  }
}
