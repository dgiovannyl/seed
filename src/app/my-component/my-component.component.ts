import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
})
export class MyComponentComponent implements OnInit {
  name = 'Dayro Longas';
  count = 0;
  imgSource =
    'https://www.facevertizing.com/wp-content/uploads/2016/05/Nailed-It-Baby-Meme-06.jpg';
  disabled = false;

  disableAndCount() {
    this.count = this.count + 1;
    this.disabled = !this.disabled;
  }

  constructor() {}

  ngOnInit() {}
}
