import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from "./navi/navi.component";
import { CommonModule, DOCUMENT } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  imports: [ 
     RouterOutlet,
     NaviComponent,
     CommonModule,

     MatSidenavModule,
     MatToolbarModule,
     MatSlideToggleModule,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'material-ex02';
  isDark = false;
  private readonly document = inject(DOCUMENT);

  ngOnInit(){ }
 ToggleTheme(){
  if(!this.isDark){
    if(!this.document.documentElement.classList.contains('dark')){
      this.document.documentElement.classList.add('dark');
    }else{
      if(this.document.documentElement.classList.contains('dark')){
        this.document.documentElement.classList.remove('dark');  
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

