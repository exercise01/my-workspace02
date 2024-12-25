import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterOutlet, RouterLink } from '@angular/router';

//import { MatSidenavModule, MatSidenavContainer, MatSidenav,} from "@angular/material/sidenav";
//import { MatToolbar } from "@angular/material/toolbar";
//import { MatNavList } from "@angular/material/list";
//import { MatIconButton } from "@angular/material/button";
// import {MatIconButton} from "@angular/material/button";
// import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-root',
  // imports: [
  //    RouterOutlet, RouterLink,    
  //   MatSidenavModule, 
  //   MatSidenav,
  //   MatSidenavContainer,
  //   MatNavList,
  //   MatToolbar   
  // ],
  imports:[
    RouterOutlet, 
    CommonModule,
    NavigationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'material-ex01';
}
