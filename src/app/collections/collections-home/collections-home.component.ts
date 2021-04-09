import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  partOfLink = 'hi';
  data = [
    { name: 'James', age: 24, job: 'Designer', employed: true },
    { name: 'Jill', age: 25, job: 'Programmer', employed: true },
    { name: 'Emir', age: 30, job: 'Engineer', employed: false },
  ];
  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Has a Job' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
