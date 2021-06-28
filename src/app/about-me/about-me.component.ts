import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() location: string | undefined;
  @Input() github: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
