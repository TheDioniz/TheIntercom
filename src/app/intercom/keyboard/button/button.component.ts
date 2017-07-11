import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() value: string;
  @Output() btnClicked = new EventEmitter<{ btnValue: string }>();
  constructor() { }

  ngOnInit() {
  }

  onBtnClick() {
    this.btnClicked.emit({ btnValue: this.value });
  }


}
