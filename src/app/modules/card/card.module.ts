import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    BigCardComponent,
    SmallCardComponent
  ],
  exports: [
    BigCardComponent,
    SmallCardComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class CardModule { }
