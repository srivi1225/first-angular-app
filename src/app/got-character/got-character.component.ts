import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-got-character',
  templateUrl: './got-character.component.html',
  styleUrls: ['./got-character.component.css']
})
export class GotCharacterComponent implements OnInit {
gotCharacter:string[] = ['sri','gani','bhavi']
gotFirstName:string[] = ['vidya', 'vinayak', 'gnana']
gotLastName:string[] = ['sanna', 'siv', 'parv']
activateSwitch:boolean = true
intervalData:any
twoWay:string = "abcd"
@Input() imageurlChild:string

i=0;
startSwitch() {
  this.intervalData = setInterval(()=>{
    if(this.i%2 == 0) {
      this.gotCharacter = this.gotFirstName
      console.log('in if')
    } else {
      this.gotCharacter = this.gotLastName
      console.log('in else')
    }
    this.i++;
    this.activateSwitch = false
  }, 3000)
}

stopSwitch() {
  clearInterval(this.intervalData)
  this.activateSwitch = true
}
  constructor() {

   }

  ngOnInit() {
    console.log(this.imageurlChild)
  }

}
