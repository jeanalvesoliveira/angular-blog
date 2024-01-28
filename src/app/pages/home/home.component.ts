import { Component } from '@angular/core';
import { CardModule } from '../../modules/card/card.module';
import { MenuModule } from '../../modules/menu/menu.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, MenuModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
