import { Component } from '@angular/core';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-page-init',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './page-init.component.html',
  styleUrl: './page-init.component.css'
})
export class PageInitComponent {

}
