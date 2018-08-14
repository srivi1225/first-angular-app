import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router' //imported to support routing

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { GotCharacterComponent } from './got-character/got-character.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { AppBoldDirective } from './app-bold.directive';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component'

//these changes are required for routing
const ROUTES:Routes = [
  {path:'about', component:AboutComponent},
  {path:'blog', component:BlogComponent},
  {path:'', component:HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    GotCharacterComponent,
    DirectiveExampleComponent,
    AppBoldDirective,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES) //this has to be added for routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
