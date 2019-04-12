/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'employee Management By Sangwin Gawande';

	// admin few employees for initial listing
	employeesList = [
	{	
		id : 1,
		first_employeeskill : "Sangwin",
		last_employeeskill : "Gawande",
		email : "sangwin@yopmail.com",
		phone : 9503733178,
		department : "Science"
	},
	{
		id : 2,
		first_employeeskill : "Oman",
		last_employeeskill : "Umir",
		email : "oman@yopmail.com",
		phone : 8574889658,
		department : "Commerce"
	},
	{
		id : 3,
		first_employeeskill : "Tina",
		last_employeeskill : "Dillon",
		email : "tina@yopmail.com",
		phone : 7485889658,
		department : "Science"
	},
	{
		id : 4,
		first_employeeskill : "John",
		last_employeeskill : "Doe",
		email : "john@yopmail.com",
		phone : 9685589748,
		department : "Arts"
	},
	{
		id : 5,
		first_employeeskill : "Peter",
		last_employeeskill : "Parker",
		email : "peter@yopmail.com",
		phone : 8595856547,
		department : "Engineering"
	}
	];

	constructor() {
		// Save employees to localStorage
		localStorage.setItem('employees', JSON.stringify(this.employeesList));
	}
}

/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
