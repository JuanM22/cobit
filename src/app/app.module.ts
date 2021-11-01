import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

//// Angular Material Dependencies ////
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatRadioModule } from '@angular/material/radio'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table'
import { CdkColumnDef } from '@angular/cdk/table'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
/////////////////////////////////////////

//// App Components ////
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NavMenuComponent } from './nav-menu/nav-menu.component'
import { QuestionCompoComponent } from './question-compo/question-compo.component'
import { DomainsCompoComponent } from './domains-compo/domains-compo.component'
import { ReportCompoComponent } from './report-compo/report-compo.component'
import { WelcomeCompoComponent } from './welcome-compo/welcome-compo.component'
import { BussinessAssetsComponent } from './bussiness-assets/bussiness-assets.component'
import { ModalFormCompoComponent } from './modal-form-compo/modal-form-compo.component'
/////////////////////////////////////////

//// Services ////
import { ObjectiveServicesService } from './services/objective-services.service';
import { ReportService } from './services/report.service';
import { CustomToastCompoComponent } from './custom-toast-compo/custom-toast-compo.component';
/////////////////////////////////////////


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: WelcomeCompoComponent },
  { path: 'bussiness_assets', component: BussinessAssetsComponent },
  { path: 'test', component: NavMenuComponent },
  { path: 'report', component: ReportCompoComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    QuestionCompoComponent,
    DomainsCompoComponent,
    ReportCompoComponent,
    WelcomeCompoComponent,
    BussinessAssetsComponent,
    ModalFormCompoComponent,
    CustomToastCompoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    // Material  //
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule,
    DragDropModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSnackBarModule
    //////////////////////
  ],
  providers: [CdkColumnDef,
    ObjectiveServicesService,
    ReportService],
  bootstrap: [AppComponent],
})
export class AppModule { }
