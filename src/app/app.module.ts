import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { GotCharacterComponent } from './got-character/got-character.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { AppBoldDirective } from './app-bold.directive';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component'

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
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
