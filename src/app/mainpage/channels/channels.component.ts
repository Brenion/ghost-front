import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  counter(i: number) {
    return new Array(i);
}
  constructor() { }

  ngOnInit(): void {
  }

}
