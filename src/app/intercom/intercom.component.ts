import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-intercom',
  templateUrl: './intercom.component.html',
  styleUrls: ['./intercom.component.css']
})
export class IntercomComponent implements OnInit {
  private validCodes: string[] = [];
  codeValidationText = '';
  isCodeValid = false;

  constructor() {
  }

  ngOnInit() {
    this.validCodes.push('123');
    this.validCodes.push('321');
    this.validCodes.push('007');
  }

  onCodeValidation(eventData) {
    this.codeValidationText = 'Entered code is not valid!';
    this.isCodeValid = false;
    for (const code of this.validCodes) {
      console.log('code is: ' + code);
      console.log('eventCode is: ' + eventData.code);
      if (code === eventData.code) {
        console.log('code is OK');
        this.codeValidationText = 'Code Validated Successfully';
        this.isCodeValid = true;
        break;
      }
      console.log('code is not OK');
    }
  }
}
