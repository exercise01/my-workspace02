import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from "./navi/navi.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
       RouterOutlet,
       NaviComponent,
       CommonModule,
      ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'material-ex04';
}
