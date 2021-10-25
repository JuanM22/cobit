import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NavMenuComponent } from './nav-menu/nav-menu.component'
import { QuestionCompoComponent } from './question-compo/question-compo.component'
import { DomainsCompoComponent } from './domains-compo/domains-compo.component'
import { ReportCompoComponent } from './report-compo/report-compo.component'
import { WelcomeCompoComponent } from './welcome-compo/welcome-compo.component'

//// Angular Material Dependencies ////
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    QuestionCompoComponent,
    DomainsCompoComponent,
    ReportCompoComponent,
    WelcomeCompoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Material  //
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
    //////////////////////
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
