

import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Routes ,Router} from '@angular/router';

import { ToastrService } from 'ngx-toastr';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	
	host: {'[@routerTransition]': ''}
})
export class LoginComponent implements OnInit {
	private loginForm : FormGroup;
	constructor(private formBuilder: FormBuilder,private router: Router, private toastr: ToastrService) { 
		this.loginForm = this.formBuilder.group({
			email: ['',  [Validators.required, ]],
			password: ['',[Validators.required, ]],
			access:['',[Validators.required]]
		});
	}

	// Check if user already logged in
	ngOnInit() {

		if(localStorage.getItem('userData')) {
			this.router.navigate(['/']);
		}
	}

	// Initicate login
	doLogin(){
		console.log(this.loginForm.value);
		if((this.loginForm.value.email == "admin@yopmail.com") && (this.loginForm.value.password == "admin123") && (this.loginForm.value.access == "admin") ){
			this.toastr.success('Success', "Logged In Successfully");
			this.router.navigate(['/admin'])
			//alert("login success");
		} else if((this.loginForm.value.email == "admin@yopmail.com") && (this.loginForm.value.password == "admin123") && (this.loginForm.value.access == "user")){
			this.toastr.success('Success', "Logged In Successfully");
			this.router.navigate(['/user'])
	    }  else if((this.loginForm.value.email == "admin@yopmail.com") && (this.loginForm.value.password == "admin123") && (this.loginForm.value.access == "hrpage")) {
            this.toastr.success('Success', "Logged In Successfully");
			this.router.navigate(['/hrpage'])
		} else {
			this.toastr.error('Failed', "Invalid Credentials");
		}
		// let login = this.userService.doLogin(this.loginForm.value);
		// this.success(login);


	}

	// Login success function
	success(data){
		if (data.code == 200) {
			localStorage.setItem('userData', JSON.stringify(data.data));
			this.router.navigate(['/']);
			this.toastr.success('Success', "Logged In Successfully");
		}else{
			this.toastr.error('Failed', "Invalid Credentials");
		}
	}

}

