import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';



@NgModule({
  declarations: [
    MenuBarComponent,
    MenuTitleComponent
  ],
  exports: [
    MenuBarComponent,
    MenuTitleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MenuModule { }
