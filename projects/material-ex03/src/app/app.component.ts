import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from "../../../material-ex02/src/app/navi/navi.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NaviComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'material-ex03';
}
