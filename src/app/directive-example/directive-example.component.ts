import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {
dcHeroes:string[]=['batman','super man','wonder woman', 'spiderman']
index:number=0;
toggleHeroFlag:boolean=true;
selectedHero:string
mystyle:{}
color:string
styleToggleFlag:boolean = true
currentCssClass:string = 'styleRed'
inputColor:string = 'grey'

setCssClass() {
  if(this.currentCssClass == 'styleRed') {
      this.currentCssClass = 'styleBlue'
  }else {
    this.currentCssClass =  'styleRed'
  }
}

setStyle() {
  this.mystyle = {
    'font-weight':this.styleToggleFlag? 'bold' : 'normal',
    'font-size':this.styleToggleFlag?'24px' : '10px',
    'color': this.generateRandonColor()
  }
  this.styleToggleFlag = !this.styleToggleFlag
}

generateRandonColor() {
  this.color = '#'
  var letters =['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
  for(var i=0; i<6; i++) {
    this.color +=letters[Math.floor(Math.random()*16)]
  }
  return this.color
}

selectHero(hero) {
  console.log('in selecthero')
  this.selectedHero = hero
}
toggleHero(){
  console.log('method called')
  this.toggleHeroFlag = !this.toggleHeroFlag
}
  constructor() { }

  ngOnInit() {
  }

}
