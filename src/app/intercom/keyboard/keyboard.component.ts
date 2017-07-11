import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  private sendChar = '#';
  private code = '';
  @Output()
  requestCodeValidation = new EventEmitter<{ code: string }>();
  constructor() { }

  ngOnInit() {
  }

  appendToCode(eventData) {
    if (eventData.btnValue === this.sendChar) {
      this.validateCode(this.code);
      return;
    }
    this.code = this.code.concat(eventData.btnValue);
    console.log(this.code);
  }

  validateCode(theCode) {
    this.requestCodeValidation.emit({ code: theCode });
    this.code = '';
  }
}
