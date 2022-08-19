import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'faders',
  templateUrl: './faders.component.html',
  styleUrls: ['./faders.component.css']
})
export class FadersComponent implements OnInit {
 counter(i: number) {
    return new Array(i);
}
  constructor() { }

  ngOnInit(): void {
  }

}
