import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-banco',
  templateUrl: './card-banco.component.html',
  styleUrls: ['./card-banco.component.css']
})
export class CardBancoComponent implements OnInit {
  
  @Input() place: number;
  @Input() banco: string;

  constructor() { }

  ngOnInit(): void {
  }

}
