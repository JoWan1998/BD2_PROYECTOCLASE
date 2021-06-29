import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-dato',
  templateUrl: './card-dato.component.html',
  styleUrls: ['./card-dato.component.css']
})
export class CardDatoComponent implements OnInit {

  @Input() place: number;
  @Input() banco: string;

  constructor() { }

  ngOnInit(): void {
  }

}
