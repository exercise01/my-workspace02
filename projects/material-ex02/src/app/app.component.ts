import { Component, effect, model, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from "./navi/navi.component";
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  imports: [ 
    RouterOutlet,
     NaviComponent,
     MatIconModule,
     MatButtonModule,
      CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'material-ex02';

  collapsed = false;
  
  darkMode = signal(false);

  constructor(){    
  }
  setDarkMode = effect(() => {
    document.documentElement.classList.toggle('dark',this.darkMode());
  })
  
}
