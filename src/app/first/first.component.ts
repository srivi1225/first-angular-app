import { Component } from '@angular/core';

@Component({
  selector: 'first-comp',
  templateUrl: 'first.component.html',
  styleUrls: ['first.component.css']
})
export class FirstComponent {
welcome:string = "welcome to my first angular app"
imageUrl:string = "../assets/sri.jpg"
getWelcomeMessage() {
  return this.welcome
}
changeContent() {
  this.welcome = "new welcome message"
}
}
