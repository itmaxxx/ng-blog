import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() title: string = '';
  @Input() text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
