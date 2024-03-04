import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StudentServiceTsService } from '../../services/student-service.ts.service';
import { Student } from '../../interface/student-interface';

@Component({
  selector: 'app-table-students',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './table-students.component.html',
  styleUrl: './table-students.component.css'
})
export class TableStudentsComponent implements OnInit{

  listStudents: Student[] = []

constructor ( private serviceStudent: StudentServiceTsService ) {}

expulsedStudent (id: number | undefined) {
  this.serviceStudent.deleteStudent(id).subscribe(
    (res) => {console.log(res)}
  )
  location.reload()
}

ngOnInit(): void {
  this.serviceStudent.getStudent().subscribe(
    (data) => {this.listStudents = data}
  )
}

}
