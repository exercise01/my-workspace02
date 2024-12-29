import { Component, effect, HostBinding, model, signal, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from "./navi/navi.component";
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormControl, FormsModule } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';


//import { MatIconModule } from '@angular/material/icon';
//import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  imports: [ 
     RouterOutlet,
     NaviComponent,
     CommonModule,

     MatSidenavModule,
     MatToolbarModule,
     MatSlideToggleModule,

     //MatIconModule,
     //MatButtonModule 
     FormsModule    
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'material-ex02';
  isDark = false;

  ngOnInit(){
    
  }
 ToggleTheme(){
  if(!this.isDark){
    if(!document.body.classList.contains('dark')){
      document.body.classList.add('dark');
    }else{
      if(document.body.classList.contains('dark')){
        document.body.classList.remove('dark');  
    }
  }
}
} 
}

  // switchTheme  = new FormControl(false);
  
  // @HostBinding('class') className= '';
  // darkClass = 'theme-dark';
  // lightClass = 'theme-light';

  // constructor(private overlay: OverlayContainer ){}

  // ngOnInit(): void {
  //   this.switchTheme.valueChanges((currentNode:any) => {
  //     this.className = currentNode? this.darkClass : this.lightClass;

  //     if(currentNode){
  //       this.overlay.getContainerElement().classList.add(this.darkClass);
  //     }else{
  //       this.overlay.getContainerElement().classList.remove(this.darkClass);
  //     }
  //   })

  // }

//-------------------

  // collapsed = false;
  
  // darkMode = signal(false);

  // constructor(){    
  // }
  // setDarkMode = effect(() => {
  //   document.documentElement.classList.toggle('dark',this.darkMode());
  // }) 

