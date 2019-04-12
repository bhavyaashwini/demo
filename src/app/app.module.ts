import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
;
//Modules
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'; 
import { enableProdMode } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule}from 'angularfire2/database'
import {environment} from '../environments/environment';
// Services

// Pipes
//import { FilterPipe } from './pipes/filter.pipe';
import { PhonePipe } from './pipes/phone.pipe';

// Components
import { AppComponent } from './components/index/app.component';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent, homeChildRoutes } from './components/home/home.component';
import { HighlightemployeeDirective } from './directives/highlight-employee.directive';



// Parent Routes
const routes : Routes = [
{
	path: '',
	component: HomeComponent,
	children :homeChildRoutes
},
{
	path: 'login',
	component: LoginComponent
},

{
	path: '**',
	redirectTo: ''
}
];

@NgModule({
	declarations: [
	AppComponent,
	
	LoginComponent,
	HomeComponent,
	//FilterPipe,
	PhonePipe,
	HighlightemployeeDirective
	],
	imports: [
	BrowserModule,
	AngularFireModule.initializeApp(environment.firebaseConfig),
	AngularFireModule,
	AngularFireDatabaseModule,
	RouterModule,
	RouterModule.forRoot(routes),
	FormsModule,
	ReactiveFormsModule,
	BrowserAnimationsModule,
	ToastrModule.forRoot({ 
		timeOut: 3000,
		positionClass: 'toast-bottom-right',
		preventDuplicates: true,
	}),
	
	],
	providers: [],
	bootstrap: [AppComponent]
})

// enableProdMode();

export class AppModule { }
