import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-alert',
  templateUrl: './message-alert.component.html',
  styleUrls: ['./message-alert.component.css'],
})
export class MessageAlertComponent implements OnInit {
  @Input()
  message: string = '';

  constructor() {}
  ngOnInit(): void {}
}
