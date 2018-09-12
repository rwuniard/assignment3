import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  buttonClickStatus = false;
  count = 0;
  mylist = [];

  // paragraphText = '';

  onClickSubmit() {
    this.count++;
    this.mylist.push(this.count);
    if (this.buttonClickStatus) {
      // this.paragraphText = '';
      this.buttonClickStatus = !this.buttonClickStatus;
    } else {
      // this.paragraphText = 'Secret Password = tuna';
      this.buttonClickStatus = !this.buttonClickStatus;
    }
  }

  getColor() {
    let result = 0;
    result = this.mylist.length;
    console.log(this.count);
    console.log(result);
    if (result >= 5) {
      return 'blue';
    } else {
      return 'white';
    }
  }
}
