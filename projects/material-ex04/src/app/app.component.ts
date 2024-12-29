import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from "./navi/navi.component";
import { CommonModule } from '@angular/common';
import { TableComponent } from "./table/table.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeComponent } from "./tree/tree.component";
import { DragDropComponent } from "./drag-drop/drag-drop.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NaviComponent,
    CommonModule,
    TableComponent,
    DashboardComponent,
    TreeComponent,
    DragDropComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'material-ex04';
}
