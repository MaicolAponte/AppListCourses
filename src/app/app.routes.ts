import { Routes } from '@angular/router';
import { PageCourseComponent } from './page-course/page-course.component';
import { PageStudentsComponent } from './page-students/page-students.component';
import { PageInitComponent } from './page-init/page-init.component';
import { PageOneCourseComponent } from './page-one-course/page-one-course.component';
import { PageOneStudentComponent } from './page-one-student/page-one-student.component';

export const routes: Routes = [
    {path: '', component: PageInitComponent},
    {path: 'ViewCourse', component: PageCourseComponent},
    {path: 'ViewCourse/:id', component: PageOneCourseComponent},
    {path: 'ViewStudents', component: PageStudentsComponent},
    {path: 'ViewStudents/:id', component: PageOneStudentComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'},
];
