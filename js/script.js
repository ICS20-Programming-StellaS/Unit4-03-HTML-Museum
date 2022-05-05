// Copyright (c) 2022 Stella S All rights reserved
//
// Created by: Stella S
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays the discount depending on age and day of the week.
 */
function displayCost() {
  	// initialize variables
	let cost = "Please fill in the requirements above."
	
	// get age and day of the week
	let age = parseInt(document.getElementById('age').value)	
	let select = document.getElementById('day');
	let day = select.options[select.selectedIndex].value;

  
	if (age < 5 || age > 95) {
		cost = "The cost for you is FREE! Have Fun!"
	}
	else if ((day == "Tuesday") || (day == "Thursday)"))
			 || ((age >=12) && (age <=21)) {
		cost = "Lucky you! You get a student discount. Enjoy!"
	}
	else if ((age > 0) || (day != "")) {		
		cost = "No discount for you. You have to pay regular price."
	}
	
  	// display the greeting
  	document.getElementById('display-results').innerHTML = cost
}