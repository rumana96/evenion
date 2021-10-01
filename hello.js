function myFunc(){
	
	var name= document.getElementById("fname").value.trim(); 
			   var namepattern = /\D/;
			   
	if((name==""))
	{
		document.getElementById("nameerror").innerHTML = "please enter your name!";
		document.getElementById("nameerror").style.color = "red";
		document.getElementById("span").style.color = "red";
		
	}else if((name.length<3)){
		document.getElementById("nameerror").innerHTML = "the name should be more than 3 characters!";
		document.getElementById("nameerror").style.color = "red";
		document.getElementById("span").style.color = "red";
	}else if((name.length>20)){
		document.getElementById("nameerror").innerHTML = "the name should be less than 20 characters!";
		document.getElementById("nameerror").style.color = "red";
		document.getElementById("span").style.color = "red";
	}else if((!namepattern.test(name))){
		document.getElementById("nameerror").innerHTML = "only alphabets are allowed!";
		document.getElementById("nameerror").style.color = "red";
		document.getElementById("span").style.color = "red";
	}
	
	else{
		 
		
		document.getElementById("nameerror").innerHTML = "";
		document.getElementById("nameerror").style.color = "";
		document.getElementById("span").style.color = "";
		
	}
	 

	var lname= document.getElementById("lname").value.trim(); 
		   
			   var lnamepattern = /\D/;
			   if(lname==""){
				document.getElementById("lnameerror").innerHTML = "";
				document.getElementById("lnameerror").style.color = "";
				document.getElementById("span1").style.color = "";
			   }
	else if((lname.length>20))
	{
		document.getElementById("lnameerror").innerHTML = "The name should be less than 20 characters!";
		document.getElementById("lnameerror").style.color = "red";
		document.getElementById("span1").style.color = "red";
		
	}else if((!lnamepattern.test(lname)))
	{
		document.getElementById("lnameerror").innerHTML = "only alphabets are allowed!";
		document.getElementById("lnameerror").style.color = "red";
		document.getElementById("span1").style.color = "red";
		
	}else{
		 
		
		document.getElementById("lnameerror").innerHTML = "";
		document.getElementById("lnameerror").style.color = "";
		document.getElementById("span1").style.color = "";
		
	}

	var male = document.getElementById("male").checked;
	var female = document.getElementById("female").checked;
	
	if((male == false) && (female == false))
		{
		document.getElementById("gendererror").innerHTML = "please enter your gender!";
		document.getElementById("gendererror").style.color = "red";
		document.getElementById("span2").style.color = "red";
		
	}else{
		
		
		document.getElementById("gendererror").innerHTML = "";
		document.getElementById("gendererror").style.color = "";
		document.getElementById("span2").style.color = "";
		
	}

	var dob= document.getElementById("dob").value.trim();            // .trim() removes white spaces from the string
	if(dob=="")
	{
		document.getElementById("dateerror").innerHTML = "please enter your date of birth";
		document.getElementById("dateerror").style.color = "red";
		document.getElementById("span3").style.color = "red";
		
	}else{
		 
		
		document.getElementById("dateerror").innerHTML = "";
		document.getElementById("dateerror").style.color = "";
		document.getElementById("span3").style.color = "";
		
	}

	var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,6}$/;  
	var email = document.getElementById("email").value.trim();
	if((email=="") || (!pattern.test(email))){
		document.getElementById("emailerror").innerHTML = "please enter your email!";
		document.getElementById("emailerror").style.color = "red";
		document.getElementById("span4").style.color = "red";
		
	}else{
		
		
		document.getElementById("emailerror").innerHTML = "";
		document.getElementById("emailerror").style.color = "";
		document.getElementById("span4").style.color = "";
		
	}
	

	
	var number = document.getElementById("number").value.trim();
	if(number==""){
		document.getElementById("numbererror").innerHTML = "";
		document.getElementById("numbererror").style.color = "";
		document.getElementById("span5").style.color = "";
	}
	else if( (isNaN(number)))
	{
	document.getElementById("numbererror").innerHTML = "The number should be in digits";
	document.getElementById("numbererror").style.color = "red";
	document.getElementById("span5").style.color = "red";
		
	}else if(number.length !=10){
		document.getElementById("numbererror").innerHTML = "the number should be 10 digits!";
	document.getElementById("numbererror").style.color = "red";
	document.getElementById("span5").style.color = "red";
	}
	
	else{
		
		
		document.getElementById("numbererror").innerHTML = "";
		document.getElementById("numbererror").style.color = "";
		document.getElementById("span5").style.color = "";
		
	}
	
	
	
	var state= document.getElementById("state").value.trim();
	if(state=="")
	{
		document.getElementById("stateerror").innerHTML = "please enter your state!";
		document.getElementById("stateerror").style.color = "red";
		document.getElementById("span6").style.color = "red";
		
	}else{
		
		
		document.getElementById("stateerror").innerHTML = "";
		document.getElementById("stateerror").style.color = "";
		document.getElementById("span6").style.color = "";
		
	}

	var district= document.getElementById("district").value.trim();
	if(district=="")
	{
		document.getElementById("districterror").innerHTML = "please enter your District!";
		document.getElementById("districterror").style.color = "red";
		document.getElementById("span7").style.color = "red";
		
	}else{
		
		
		document.getElementById("districterror").innerHTML = "";
		document.getElementById("districterror").style.color = "";
		document.getElementById("span7").style.color = "";
		
	}
	
	
	var address = document.getElementById("address").value.trim();
	if(address=="")
	{
		document.getElementById("addresserror").innerHTML = "";
		document.getElementById("addresserror").style.color = "";
		document.getElementById("span8").style.color = "";

	
		
	}else if(address.length>500){
		
		
		document.getElementById("addresserror").innerHTML = "The length should be less than 500 characters!";
		document.getElementById("addresserror").style.color = "red";
		document.getElementById("span8").style.color = "red";
		
	} else{
		document.getElementById("addresserror").innerHTML = "";
		document.getElementById("addresserror").style.color = "";
		document.getElementById("span8").style.color = "";
		
	}

	
}


function func(){			
    var name = document.getElementById("fname").value.trim();
	var lname= document.getElementById("lname").value.trim();
	 var male =document.getElementById("male").value.trim();
	 var female =document.getElementById("female").value.trim();
	 var dob = document.getElementById("dob").value.trim();
	 var lnamepattern = /\D/;
	 var email = document.getElementById("email").value.trim();
	 var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,6}$/;  
	 var number = document.getElementById("number").value.trim();
	 var address = document.getElementById("address").value.trim(); 
	 var state = document.getElementById("state").value.trim();
	 var district = document.getElementById("district").value.trim();

	if((name !="")&&(name.length>3)&&(name.length<20)&&((male != false) && (female != false)) &&((dob!=""))&&((email!="") ||
	 (pattern.test(email)))&&(state!="")&&(district!="")&&
	 ((address!="")||(address.length<500))){
		 document.write("<span>Your Details</span><br><br>")

		document.write("Name : " + name +" " + lname +" <br>");
		document.write("DoB : " + dob + "</br>");
	if(male==true){
		document.write("Gender : Male" +"<br>");
	}else{
		document.write("Gender : Female" +"<br>");
	}
	document.write("Email : " + email+ "<br>");
	document.write("Mobile : " + number+ "<br>");
	document.write("Address : " + address  +" " + district  +" " + state + "<br>");
		
	
	}else{
	  return false;
	}
	
}




	function makeSubmenu(value) {
		var districtsByState = {
			"Andhra Pradesh": ["Anantpur ","Chittoor","Nellore", "Prakasam "],
			"Arunachal Pradesh": ["Anjaw","Changlang","East Siang","Tawang", "West Kameng"],
			Assam: ["Baksa","Barpeta","Bongaigaon","Cachar ","Chirang","Darrang","Dhemaji"]
			}
	if(value.length==0) document.getElementById("district").innerHTML = "<option></option>";
	else {
	var citiesOptions = "";
	for(districtId in districtsByState[value]) {
	districtsOptions+="<option>"+districtsByState[value][districtId]+"</option>";
	}
	document.getElementById("district").innerHTML = districtsOptions;
	}
	}
	function displaySelected() { 
		var state = document.getElementById("state").value;
	var district = document.getElementById("district").value;
	 alert(state+"\n"+district); // \n returns the position where the newline character was found.
	}
	function resetSelection() {
	document.getElementById("state").selectedIndex = 0;
	document.getElementById("district").selectedIndex = 0;
	}
	
	
