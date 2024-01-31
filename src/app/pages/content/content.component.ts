import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  private id: string | null = '0'
  photoCover:string = ''
  cardDate:string = ''
  contentTitle:string = ''
  contentDescription:string = ''

  constructor(private _route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null){
    const result = dataFake.filter(
      article => article.id === id
    )[0]

    this.photoCover = result.photo
    this.cardDate = result.date
    this.contentTitle = result.title
    this.contentDescription = result.description
  }

}
