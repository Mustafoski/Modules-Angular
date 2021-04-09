import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {
      title: 'Why is the sky blue',
      content: 'Sky is blue because it is sunny',
    },
    {
      title: 'What the orange taste like',
      content: 'Orange taste like a heaven',
    },
    {
      title: 'Who is the hottest actress',
      content: 'Christina Milan is the hottest one',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
