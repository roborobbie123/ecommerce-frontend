import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  host: {
    '[class]': 'null'
  }
})
export class AppComponent {
  title = 'angular-ecommerce';
}
