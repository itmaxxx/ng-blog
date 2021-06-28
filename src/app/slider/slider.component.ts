import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() title: string = '';
  @Input() text: string = '';
  @Input() link: string = '';
  @Input() linkText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
