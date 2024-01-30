import { Component } from '@angular/core';
import { CardModule } from '../../modules/card/card.module';
import { MenuModule } from '../../modules/menu/menu.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, MenuModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css']
})
export class HomeComponent {

}
