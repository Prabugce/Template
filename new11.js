function ConfigPolicy(val)
{
 
DefalutLength= 12;
var text= '<ul style="list-style-type:none;"><li id="User_Pass" style="display:block;" class="gray"><span>&#9658;</span> User Name and password can\'t be same</li><li id="minlength" class="gray"><span>&#9658;</span></li><li id="cisco_password" class="gray"><span>&#9658;</span> Password should  not contain "cisco"</li><li id="User_Pass" style="display:none;" class="gray"><span>&#9658;</span> User Name and password can\'t be same</li><li id="UpperCheck" style="display:none;" class="gray"> </li><li id="LowerCheck" style="display:none;" class="gray"><li id="DigitCheck" style="display:none;" class="gray"></li><li id="netuserSpecialCheck" style="display:none;" class="gray"></li><li id="SpecialCheck" style="display:none;" class="gray"></li><li id="consectiveCheck" style="display:none;"class="gray"><span>&#x25BA;</span> Password is should not contain three consecutive character</li></ul>';
console.log(text);
document.getElementById("demo").innerHTML= text;

var lengthcheck= document.getElementById("minlength");
console.log(lengthcheck);
var passcheck= document.getElementById("cisco_password");
var userpasscheck= document.getElementById("User_Pass");


 
var consecutive= document.getElementById("consectiveCheck");
var configValues= document.getElementById("ConfigLength").value;
var specialcase= document.getElementById("netuserSpecialCheck");



var uppercase= document.getElementById("UpperCheck");
var lowercase= document.getElementById("LowerCheck");
var digitcase= document.getElementById("DigitCheck");
var specialCaseval= document.getElementById("SpecialCheck");
 console.log(specialCaseval);
 
UpperCaseLength= parseInt(document.getElementById("Upperlength").value);
LowerCaseLength= parseInt(document.getElementById("LowerLength").value);
Digitslength= parseInt(document.getElementById("DigitsLength").value);
specialCaselength= parseInt(document.getElementById("SpecialCaseLength").value);

 console.log(specialCaselength);

//minimum length exceeds 12 length will be change
 DefalutLength = UpperCaseLength + LowerCaseLength+ Digitslength+ specialCaselength;
 if(val==2)
 {
		 if(DefalutLength < 12)
		 {
					console.log(lengthcheck);
					lengthcheck.innerHTML=  "<span>&#9658;</span> Password should be minimum length is" + " " + 12;
		 }
		 else
		 {
					lengthcheck.innerHTML= " <span>&#9658;</span> Password should be minimum length is" + " " + DefalutLength;
		 }
 }
 else
 {
	DefalutLength=8;
	lengthcheck.innerHTML= " <span>&#9658;</span> Password should be minimum length is" + " " + DefalutLength;
 }
 


var Defaluterror= "<span>&#9658;</span> Password is must contain minimum of";
	configValues=1;
	
	if(!(16&configValues)&&(1&configValues)) 
	{
			if(DefalutLength!=0)
			{
				
			uppercase.style.display="block";
			uppercase.innerHTML=Defaluterror+ " " + UpperCaseLength+ " "+"Uppercase Characters";
			
			lowercase.style.display="block";
			lowercase.innerHTML= Defaluterror+ " " + LowerCaseLength+ " "+"Lowercase Characters";
			
			digitcase.style.display="block";
			digitcase.innerHTML= Defaluterror+ " " + Digitslength +" "+"Digits";
			
			specialCaseval.style.display="block";
			specialCaseval.innerHTML= Defaluterror+ " " +specialCaselength+ " "+"Special Character Exceptional \[\" \? \'\]";
			}
			else
			{
			uppercase.style.display="block";
			uppercase.innerHTML=Defaluterror+ " " + "one Uppercase character";
			
			lowercase.style.display="block";
			lowercase.innerHTML=Defaluterror+ " " + "one Lowercase character";
			
			specialcase.style.display="block"; 
			specialcase.innerHTML=Defaluterror+ " " + "one Digits or one Special character Exceptional \[\" \? \'\]";
			}
	}
	if(2&configValues)
	{
			consecutive.style.display="block";
	}
	if(8&configValues)
	{
			userpasscheck.style.display="block";
	}
	if(16&configValues)
	{
			uppercase.style.display="block";
			uppercase.innerHTML=Defaluterror+ " " + UpperCaseLength+ " "+"Uppercase Characters";
			
			lowercase.style.display="block";
			lowercase.innerHTML= Defaluterror+ " " + LowerCaseLength+ " "+"Lowercase Characters";
			
			digitcase.style.display="block";
			digitcase.innerHTML= Defaluterror+ " " + Digitslength +" "+"Digits";
			
			specialCaseval.style.display="block";
			specialCaseval.innerHTML= Defaluterror+ " " +specialCaselength+ " "+"Special Character Exceptional \[\" \? \'\]";
	}
}

function CheckPasspolicy(val)
{
	
//******************************************************************************
//* Purpose: Checking password policy
//*
//* Inputs:
//*
//* Return:  none
//******************************************************************************
var Uppercase= /(?=.*[A-Z])/;
var Lowercase= /(?=.*[a-z])/;
var digits= /(?=.*[0-9])/;
var Specialcharacter= /(?=.*[`@%#~,.<>;:\/\[\]\|{}()=_+-])/;
var DontuseSpecialcharacter= /(?=.*["?'])/; 

var lengthcheck= document.getElementById("minlength");
var passcheck= document.getElementById("cisco_password");
var userpasscheck= document.getElementById("User_Pass");
var uppercase= document.getElementById("UpperCheck");
var lowercase= document.getElementById("LowerCheck");
var specialcase= document.getElementById("netuserSpecialCheck");
var consecutive= document.getElementById("consectiveCheck");
var configValues= document.getElementById("ConfigLength").value;

var specialCaseval= document.getElementById("SpecialCheck");

var gray = document.getElementsByClassName("gray");
var user= document.getElementById("username").value;
var pass_value= document.getElementById("userpwd").value;
var confirm_pass_value= document.getElementById("pwdconfirm").value; 
console.log(configValues);


var digitcase= document.getElementById("DigitCheck"); 
 
 


	if((val==1)&& (pass_value.length < 8))
		{
			lengthcheck.style.color= "red";
		}
		
	else if((val==2)&& (pass_value.length < DefalutLength))
		{
			lengthcheck.style.color= "red"; 
		}
	else
		{
			lengthcheck.style.color= "green";
		}
				var upper = 0, lower = 0, number = 0, special = 0; 
	
//Case-check enabled validation	 or Case-digit-check validation
if((uppercase.style.display=="block")&&(val==1))
{
	if(pass_value.match(Uppercase))
		{
			uppercase.style.color= "green"; 
		}
	else
		{	
			uppercase.style.color= "red";
		}
	

	if(pass_value.match(Lowercase))
		{
			lowercase.style.color= "green";
		}
	else
		{
			lowercase.style.color= "red";
		}
	 
	if(pass_value.match(DontuseSpecialcharacter))
	{
		specialcase.style.color= "red"; 
	}
		
	if(pass_value.match(Specialcharacter)|| (pass_value.match(digits)))
		{ 
			specialcase.style.color= "green";
		}	 
	else
		{
			specialcase.style.color= "red";
		}
		

}
else
{
 
	var upper = 0, lower = 0, number = 0, special = 0; 
	var str= pass_value.split("");
	
	for (var j=0;j<str.length;j++)
	{
		if (str[j].match(Uppercase))
		{
			upper++;
			if(upper>=UpperCaseLength)
			{
				uppercase.style.color= "green"; 
			}
			else
			{
				uppercase.style.color= "red";
			}

		}
		else
		{
				
			if(upper>=UpperCaseLength)
			{
				uppercase.style.color= "green"; 
			}
			else
			{
				uppercase.style.color= "red";
			}
		}
	 
		
		if (str[j].match(Lowercase)) 
		{
			lower++; 
			if(lower>=LowerCaseLength)
			{
				lowercase.style.color= "green"; 
			}
			else
			{
				lowercase.style.color= "red";	
			}
			
		}
		else
		{
			if(lower>=LowerCaseLength)
			{
				lowercase.style.color= "green"; 
			}
			else
			{
				lowercase.style.color= "red";	
			}	
		}
			
		if (str[j].match(digits))
		{
			number++;  
			if(number>=Digitslength)
			{
				digitcase.style.color= "green"; 
			}
			else
			{
				
				digitcase.style.color= "red";
			}
			
		}
		else
		{
			if(number>=Digitslength)
			{
				digitcase.style.color= "green"; 
			}
			else
			{
				
				digitcase.style.color= "red";
			}
			
		}
	 
 
		
		if(pass_value.match(Specialcharacter) && (!pass_value.match(DontuseSpecialcharacter)))
		{	
			special++; 
			if(special>=specialCaselength)
			{
				specialCaseval.style.color= "green";
			}
			else
			{
				specialCaseval.style.color= "red";
				
			}
		}
		else
		{
			if(special>=specialCaselength)
			{
				specialCaseval.style.color= "green";
			}
			else
			{
				specialCaseval.style.color= "red";
				special=0;
			}
		}
	}
}
	
if(consecutive.style.display=="block")
{
	//consecutive-check enabled validation
	pass_value= pass_value.toLowerCase();
	var val= pass_value.split("");
	console.log(val);
	for (var t=0;t<val.length;t++)
		{
			if (t==val.length-1)
			{
				break;
			} 
			else if((val[t]==val[t+1])&&((val[t+1])==(val[t+2])))
			{
				consecutive.style.color= "red";
				break;
				
			}
			else
			{
				consecutive.style.color= "green";
			}
		}
}   
	//username-check==> user name and password not be same
if(userpasscheck.style.display=="block")
{
	if(pass_value !=user)
		{
			userpasscheck.style.color= "green"; 
		}
	else
		{
			userpasscheck.style.color= "red";
		}
}
	
	if(pass_value.includes("cisco")==1)
	{
		passcheck.style.color= "red";
	}
	else
	{
		passcheck.style.color= "green";
	}
	
	if (pass_value.includes(" "))
	{
		alert("Password space is not allowed");
		return false;
	}
	
	if (confirm_pass_value.includes(" "))
	{
		alert("Confirm Password space is not allowed");
		return false;
	}
	
	for (var j=0;j<gray.length;j++)
	{
        if(gray[j].style.color=="red")
		{
			apply_Button= false;
			break;
		}
		
		else
		{
			apply_Button= true;
		}


	}
	
}