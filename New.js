var apply_Button= false; 
var DefalutLength,UpperCaseLength,Digitslength,specialCaseLength,LowerCaseLength,configValues,userpasscheck,pass_value,user,Snmp_v3Check1,Snmp_v3Check2;
var  authPass_Error=[];
var Privacypass_Errors=[];
var common_check=[];
var Auth_logic=false;
var correct= "&#10004;";

	

function ConfigPolicy1()
{
var text= '<ul style="list-style-type:none;"><li style="display:none;" id="cisco_password" class="gray"></li> <li id="minlength" style="display:none;" class="gray"></li><li id="User_Pass" style="display:none;" class="gray"></li><li id="UpperCheck" style="display:none;" class="gray"> </li><li id="LowerCheck" style="display:none;" class="gray"><li id="DigitCheck" style="display:none;" class="gray"></li><li id="netuserSpecialCheck" style="display:none;" class="gray"></li><li id="SpecialCheck" style="display:none;" class="gray"></li><li id="consectiveCheck" style="display:none;"class="gray"></li></ul>';

document.getElementById("Net_user_ErrorContent").innerHTML= text;
var lengthcheck= document.getElementById("minlength");
var passcheck= document.getElementById("cisco_password");
userpasscheck= document.getElementById("User_Pass");
 
var consecutive= document.getElementById("consectiveCheck");
configValues= document.getElementById("ConfigLength").value; 
 
 

var uppercase= document.getElementById("UpperCheck");
var lowercase= document.getElementById("LowerCheck"); 
var specialcase= document.getElementById("netuserSpecialCheck");


lengthcheck.style.display="block";
lengthcheck.innerHTML=  "<span class='symbol1'>&#10004;</span>  Password is must contain minimum of" +" "+8; 
 
 passcheck.style.display="block";
passcheck.innerHTML=   "<span class='symbol1'>&#10004;</span>"+ " "+ "Password should  not contain 'cisco'";

var Defaluterror= "<span class='symbol1'>&#10004;</span> Password is must contain minimum of";
 
configValues=16; 
	
	if((16&configValues)||(1&configValues)) 
	{
			uppercase.style.display="block";
			lowercase.style.display="block";
			specialcase.style.display="block";
			uppercase.innerHTML=Defaluterror+ " " + "one Uppercase character";		
			lowercase.innerHTML=Defaluterror+ " " + "one Lowercase character";
			specialcase.innerHTML= "<span class='symbol1'>&#10004;</span> Password is should contain one Digits or one Special character Exceptional \[\" \? \'\] ";
	}
	if(2&configValues)
	{
		consecutive.style.display="block";
		consecutive.innerHTML= "<span class='symbol1'>&#10004;</span>"+" "+"Password is should not contain three consecutive character";
		
	}
	if(8&configValues)
	{
		userpasscheck.style.display="block";
		userpasscheck.innerHTML=   "<span class='symbol1'>&#10004;</span>" + " "+ "User Name and password can\'t be same";
	}

}

  
function ConfigPolicy(val)
{
var text= '<ul style="list-style-type:none;"><li id="cisco_password" style="display:none; class="gray"></li><li id="minlength" style="display:none;" class="gray"></li><li id="User_Pass" style="display:none;" class="gray"></li><li id="UpperCheck" style="display:none;" class="gray"> </li><li id="LowerCheck" style="display:none;" class="gray"><li id="DigitCheck" style="display:none;" class="gray"></li><li id="netuserSpecialCheck" style="display:none;" class="gray"></li><li id="SpecialCheck" style="display:none;" class="gray"></li><li id="netuserSpecialCheck" style="display:none;" class="gray"></li><li id="consectiveCheck" style="display:none;"class="gray"></li></ul>';
 
document.getElementById("errorcontent").innerHTML= text;
var lengthcheck= document.getElementById("minlength");
var passcheck= document.getElementById("cisco_password");
userpasscheck= document.getElementById("User_Pass");

passcheck.style.display="block";
		if(val==3 || val==31)
		{
			passcheck.innerHTML=   "<span style='display:inline;' class='symbol1'>&#10004;</span> <span style='display:inline;' class='symbol2'>&#10004;</span>" + " "+ "Password should  not contain 'cisco'";
		}
		else
		{
			passcheck.innerHTML= "<span style='display:inline;' class='symbol1'>&#10004;</span>"+" "+"Password should  not contain 'cisco'";
		}

var consecutive= document.getElementById("consectiveCheck");
configValues= document.getElementById("ConfigLength").value; 
 
configValues =16;

var uppercase= document.getElementById("UpperCheck");
var lowercase= document.getElementById("LowerCheck");
var digitcase= document.getElementById("DigitCheck");
var specialCaseval= document.getElementById("SpecialCheck");

var specialcase= document.getElementById("netuserSpecialCheck");
 
UpperCaseLength= parseInt(document.getElementById("Upperlength").value);
LowerCaseLength= parseInt(document.getElementById("LowerLength").value);
Digitslength= parseInt(document.getElementById("DigitsLength").value);
specialCaselength= parseInt(document.getElementById("SpecialCaseLength").value);

var lengthvalues= document.getElementById("minlength1").value;
 
 

if(val==3 || val==31)
	{ 
			lengthcheck.style.display="block";
			lengthcheck.innerHTML=  "<span style='display:inline;' class='symbol1'>&#10004;</span> <span style='display:inline;' class='symbol2'>&#10004;</span> Password is must contain minimum of" +" "+12; 
	 }
 else
	{
			lengthcheck.style.display="block";
			lengthcheck.innerHTML= "<span style='display:inline;' class='symbol1'>&#10004;</span>  Password should be minimum length is" +" " +lengthvalues;
	}
 
 
if(val==3 || val==31)
{
var Defaluterror= "<span  style='display:inline;' class='symbol1'>&#10004;</span> <span style='display:inline;' class='symbol2'>&#10004;</span> Password is must contain minimum of"+ " ";
}
else
{
	var Defaluterror= " <span style='display:inline;' class='symbol1'>&#10004;</span> Password is must contain minimum of";
}
 
 
	var specialcaseCheck=true;
	
  
	
	if(1&configValues && !(16&configValues)) 
	{ 
		
			if(UpperCaseLength>=2)
			{ 
				uppercase.style.display="block";
				uppercase.innerHTML=Defaluterror+ " " + UpperCaseLength+ " "+"Uppercase Characters";		

			}
			else
			{
				uppercase.style.display="block";
				uppercase.innerHTML=Defaluterror+ " " + "one Uppercase character";		
			}
			
			if(LowerCaseLength>=2)
			{
				lowercase.style.display="block";
				lowercase.innerHTML= Defaluterror+ " " + LowerCaseLength+ " "+"Lowercase Characters";
			}
			else
			{
				lowercase.style.display="block";
				lowercase.innerHTML=Defaluterror+ " " + "one Lowercase character";

			}
			
			if(Digitslength==0 && specialCaselength==0)
			{
				specialCaseval.style.display="block";
				
				if(val==3 || val==31)
				{
					specialCaseval.innerHTML= "<span  style='display:inline;'  class='symbol1'>&#10004;</span> <span  style='display:inline;'  class='symbol2'>&#10004;</span> Password is should contain one Digits or one Special character Exceptional \[\" \? \'\] ";
				}
				else
				{
					specialCaseval.innerHTML= "<span  style='display:inline;'  class='symbol1'>&#10004;</span> Password is should contain one Digits or one Special character Exceptional \[\" \? \'\] ";
				}
				specialcaseCheck=false;
			 
			}
			
			if(Digitslength>=2 && specialcaseCheck)
			{
				digitcase.style.display="block";
				digitcase.innerHTML= Defaluterror+ " " + Digitslength +" "+"Digits";
			 
			}
			else if (specialcaseCheck)
			{
				digitcase.style.display="block";
				digitcase.innerHTML= Defaluterror+ " " + "one Digits";
			}
			
			if(specialCaselength>=2 && specialcaseCheck)
			{
				specialCaseval.style.display="block";
				specialCaseval.innerHTML= Defaluterror+ " " +specialCaselength+ " "+"Special Character Exceptional \[\" \? \'\]";
			} 
			else if(specialcaseCheck)
			{
				specialCaseval.style.display="block";
				specialCaseval.innerHTML= Defaluterror+ " "+"one Special Character Exceptional \[\" \? \'\]";
			}
	}
	
	if(2&configValues)
	{
		consecutive.style.display="block";
		if(val==3 || val==31)
		{
			consecutive.innerHTML=   "<span style='display:inline;'  class='symbol1'>&#10004;</span> <span style='display:inline;'  class='symbol2'>&#10004;</span>" + " "+ "Password is should not contain three consecutive character";
		}
		else
		{
			consecutive.innerHTML= "<span style='display:inline;'  class='symbol1'>&#10004;</span>"+" "+"Password is should not contain three consecutive character";
		}
		
	}
	if(8&configValues)
	{
		userpasscheck.style.display="block";
		if(val==3 || val==31)
		{
			userpasscheck.innerHTML=   "<span style='display:inline;'  class='symbol1'>&#10004;</span> <span style='display:inline;'  class='symbol2'>&#10004;</span>" + " "+ "User Name and password can\'t be same";
		}
		else
		{
			userpasscheck.innerHTML= "<span style='display:inline;'  class='symbol1'>&#10004;</span>"+" "+"User Name and password can\'t be same";
		}
	}
	
	
 	
	if(16&configValues) 
	{
	 
			if(UpperCaseLength>=1)
			{ 
				uppercase.style.display="block";
				uppercase.innerHTML=Defaluterror+ " " + UpperCaseLength+ " "+"Uppercase Characters";		

			}
			else
			{
				uppercase.style.display="block";
				uppercase.innerHTML=Defaluterror+ " " + "one Uppercase character";		
			}
			
			if(LowerCaseLength>=1)
			{
				lowercase.style.display="block";
				lowercase.innerHTML= Defaluterror+ " " + LowerCaseLength+ " "+"Lowercase Characters";
			}
			else
			{
				lowercase.style.display="block";
				lowercase.innerHTML=Defaluterror+ " " + "one Lowercase character";

			}
			if(Digitslength>=1)
			{
				digitcase.style.display="block";
				digitcase.innerHTML= Defaluterror+ " " + Digitslength +" "+"Digits";
				specialcaseCheck= false;
			}
			else
			{
				digitcase.style.display="block";
				digitcase.innerHTML= Defaluterror+ " " + "one Digits";
				specialcaseCheck= false;
			}
			
			if(specialCaselength>=1)
			{
				specialCaseval.style.display="block";
				specialCaseval.innerHTML= Defaluterror+ " " +specialCaselength+ " "+"Special Character Exceptional \[\" \? \'\]";
				specialcaseCheck= false;

			}
			else
			{
				specialCaseval.style.display="block";
				specialCaseval.innerHTML= Defaluterror+ " " + " "+"one Special Character Exceptional \[\" \? \'\]";
				specialcaseCheck= false;
			}
			
			if(specialcaseCheck)
			{
				specialcase.style.display="block"; 
				specialcase.innerHTML=Defaluterror+ " " + "one Digits or one Special character Exceptional \[\" \? \'\]";
			}
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
var Uppercase= /[^A-Z]/g;
var Lowercase= /[^a-z]/g;
var digits= /[^0-9]/g;
var Specialcharacter= /[^`@%#~,.<>;:\/\[\]\|{}()=_+-]/g;
var DontuseSpecialcharacter= /(?=.*["?'])/; 
var digitcase; 

var lengthcheck= document.getElementById("minlength");
var passcheck= document.getElementById("cisco_password");
userpasscheck= document.getElementById("User_Pass");

 
var uppercase= document.getElementById("UpperCheck");
var lowercase= document.getElementById("LowerCheck");
var consecutive= document.getElementById("consectiveCheck");
 configValues= document.getElementById("ConfigLength").value;

 configValues =16;

var gray = document.getElementsByClassName("gray");
user= document.getElementById("username").value; 

if(val==1 ||val==2 || val==4)
{
var confirm_pass_value= document.getElementById("pwdconfirm").value; 
}

if(val==3)
{
	var confirm_pass_value= document.getElementById("auth_pwd_cfrm").value; 
}
if(val==31)
{
	var confirm_pass_value= document.getElementById("priv_pwd_cfrm").value; 
}



if(val==1 ||val==2 || val==3 || val==4)
{
pass_value= document.getElementById("userpwd").value;
Snmp_v3Check1=true;
}

if (val==31)
{
pass_value=event.target.value;
Snmp_v3Check2=true;
}

 
if(val==2)
{
var lengthvalues= document.getElementById("minlength1").value;
}

 
var specialCaseval;

if(val==1)
{
var specialcase= document.getElementById("netuserSpecialCheck");
}
else
{
	specialCaseval= document.getElementById("SpecialCheck");
	UpperCaseLength= parseInt(document.getElementById("Upperlength").value);
	
	LowerCaseLength= parseInt(document.getElementById("LowerLength").value);
	Digitslength= parseInt(document.getElementById("DigitsLength").value);
	specialCaselength= parseInt(document.getElementById("SpecialCaseLength").value);
	digitcase= document.getElementById("DigitCheck"); 
}

 
 
	if((pass_value.length < 8 && val==1) || (pass_value.length < 8 && val==4))
		{
			lengthcheck.style.color= "red";
			checksnmp(val,lengthcheck,false); 
		}
		
	else if(((val==3)|| (val==31))&& (pass_value.length < 12))
		{
			lengthcheck.style.color= "red";
			checksnmp(val,lengthcheck,false); 
		}
	else if(val==2)
	{
		if(pass_value.length < lengthvalues)
		{
			lengthcheck.style.color= "red";
			checksnmp(val,lengthcheck,false); 
		}
		else
		{
			lengthcheck.style.color= "green";
			checksnmp(val,lengthcheck,true); 
		}
	}
	else
		{
			lengthcheck.style.color= "green";
			checksnmp(val,lengthcheck,true); 
		}
				
	
//Case-check enabled validation	 or Case-digit-check validation
var check= true;
if(val>=2)
{
	if((16&configValues)||(1&configValues)) 
	{ 
	 
		if(UpperCaseLength!=0 ||pass_value.replace(Uppercase, "").length)
		 {
			 if(pass_value.replace(Uppercase, "").length>=UpperCaseLength)
			 {
				uppercase.style.color= "green"; 
				checksnmp(val,uppercase,true); 
			 }
			 else
			 {
				 uppercase.style.color= "red";
				 checksnmp(val,uppercase,false); 
			 }
		 }
		 else
		 {
			uppercase.style.color= "red"; 
			checksnmp(val,uppercase,false);
		 }
		 
		if(LowerCaseLength!=0 || pass_value.replace(Lowercase, "").length)
		 {
			 if(pass_value.replace(Lowercase, "").length>=LowerCaseLength)
			 {
			  lowercase.style.color= "green"; 
			  checksnmp(val,lowercase,true);
			 }
			 else
			 {
				 lowercase.style.color= "red";
				 checksnmp(val,lowercase,false);
			 }
		 }
		 else
		 {
			lowercase.style.color= "red"; 
			checksnmp(val,lowercase,false);
		 }
		 
		 
		if((specialCaselength==0 &&  Digitslength==0) && !(16&configValues ))
		{
			if((specialCaselength==0 &&  Digitslength==0) && ((pass_value.replace(digits, "").length>=1) || (pass_value.replace(Specialcharacter, "").length>=1)))
			{
				specialCaseval.style.color= "green";
				checksnmp(val,specialCaseval,true);
				check=false;
			}
			else
			 {
				 specialCaseval.style.color= "red";
				 checksnmp(val,specialCaseval,false);
				 check=false;
			 }
			if(pass_value.match(DontuseSpecialcharacter))
			{
			 specialCaseval.style.color= "red";
			 checksnmp(val,specialCaseval,false);
			}
		}
		else
		{ 	 
			 if(Digitslength>=1 && check)
			 {
				if(pass_value.replace(digits, "").length>=Digitslength)
				{
				 digitcase.style.color= "green"; 
				 checksnmp(val,digitcase,true);
				}
				else
				{
				digitcase.style.color= "red";
				checksnmp(val,digitcase,false);
				}
			 }
			 else if(Digitslength==0 && check)
			 {
				 if(pass_value.replace(digits, "").length>=1)
				 {
					 digitcase.style.color= "green";
					 checksnmp(val,digitcase,true);
				 }
				 else
				 {
					 digitcase.style.color= "red";
					 checksnmp(val,digitcase,false);
				 }
			 }
				 
			
			 if(specialCaselength>=1 && check) 
				{	
					 
					if(pass_value.replace(Specialcharacter, "").length>=specialCaselength)
					{
						specialCaseval.style.color= "green";
						checksnmp(val,specialCaseval,true);
					}
					else
					{
						specialCaseval.style.color= "red";
						checksnmp(val,specialCaseval,false);
						
					}
				}
			 else if(specialCaselength==0 && check)
			 {
				 if(pass_value.replace(Specialcharacter, "").length>=1)
				 {
					 specialCaseval.style.color= "green";
					 checksnmp(val,specialCaseval,true);
				 }
				 else
				 {
					 specialCaseval.style.color= "red";
					 checksnmp(val,specialCaseval,false);
				 }
			 }
				
			if(pass_value.match(DontuseSpecialcharacter))
			{
			 specialCaseval.style.color= "red";
			 checksnmp(val,specialCaseval,false);
			}
		} 
		 
	}

}

else
{
 Uppercase= /(?=.*[A-Z])/;
 Lowercase= /(?=.*[a-z])/;
 digits= /(?=.*[0-9])/;
 Specialcharacter= /(?=.*[`@%#~,.<>;:\/\[\]\|{}()=_+-])/;
 DontuseSpecialcharacter= /(?=.*["?'])/; 

	if((16&configValues)||(1&configValues))
	{	
		if(pass_value.match(Uppercase))
			{
				uppercase.style.color= "green"; 
				checksnmp(val,uppercase,true);
			}
		else
			{	
				uppercase.style.color= "red";
				checksnmp(val,uppercase,false);
			}
		

		if(pass_value.match(Lowercase))
			{
				lowercase.style.color= "green";
				checksnmp(val,lowercase,true);
			}
		else
			{
				lowercase.style.color= "red";
				checksnmp(val,lowercase,false);
			}
		 
		if(pass_value.match(DontuseSpecialcharacter))
		{
			specialcase.style.color= "red";
			checksnmp(val,specialcase,false);
		}
			
		else
		{
			if(pass_value.match(Specialcharacter)|| (pass_value.match(digits)))
			{ 
				specialcase.style.color= "green";
				checksnmp(val,specialcase,true);
			}	 
		else
			{
				specialcase.style.color= "red";
				checksnmp(val,specialcase,false);
			}
		}	
	}
}
	

		
if(2&configValues)
{
	//consecutive-check enabled validation
	pass_value= pass_value.toLowerCase();
	var val_pass= pass_value.split("");
	console.log(val_pass);
	for (var t=0;t<val_pass.length;t++)
		{
			if((val_pass[t]==val_pass[t+1])&&((val_pass[t+1])==(val_pass[t+2]))&&((val_pass[t])&&(val_pass[t+2])))
			{
				consecutive.style.color= "red"; 
				checksnmp(val,consecutive,false);
				break;
			}
			else
			{
				consecutive.style.color= "green";
				checksnmp(val,consecutive,true);
				 
			}
		}
	if(val_pass.length==0)
	{
		consecutive.style.color= "green";
		checksnmp(val,consecutive,true);
		 
	}
}   

//username-check==> user name and password not be same
 if(8&configValues )
{
	pass_value= pass_value.toLowerCase();
	user= user.toLowerCase();
	
	if(pass_value !=user)
		{
			userpasscheck.style.color= "green"; 
			checksnmp(val,userpasscheck,true);
			
		}
	else
		{
			userpasscheck.style.color= "red";
			checksnmp(val,userpasscheck,false);
		}
}
	
	if(pass_value.includes("cisco")==1)
	{
		passcheck.style.color= "red";
		checksnmp(val,passcheck,false);
	}
	else
	{
		passcheck.style.color= "green";
		checksnmp(val,passcheck,true);
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
	 
	 
}

 
 
function checksnmp(val,elements,arg)
{
	var correct= "&#10004;";
	var wrong="&#10008;";
 

	if(val==3 || val==31)
	{	
		 var field1 = document.getElementById("listVal").value;
		 var field2 = document.getElementById("listVal1").value;
		 
 
		if(val==3 && arg==true)
		{
			elements.getElementsByClassName("symbol1")[0].innerHTML=correct;	
			elements.getElementsByClassName("symbol1")[0].style.color="green";
			
		}
		else if(val==3)
		{
			elements.getElementsByClassName("symbol1")[0].innerHTML=wrong;
			elements.getElementsByClassName("symbol1")[0].style.color="red";
			
		}
		
		if(val==3 && field2=="None")
		{
			if(elements.getElementsByClassName("symbol1")[0].style.color=="green")
				{
					elements.style.color= "green"; 
				}
			else
			{
				elements.style.color= "red"; 
			}
		}
		
 
			if(val==31 && arg==true)
			{
				elements.getElementsByClassName("symbol2")[0].innerHTML=correct;
				elements.getElementsByClassName("symbol2")[0].style.color="green"; 
			}
			else if(val==31)
			{
				elements.getElementsByClassName("symbol2")[0].innerHTML=wrong;
				elements.getElementsByClassName("symbol2")[0].style.color="red";
			}
	 
		
		if(val==31 && field1=="None")
		{
			if(elements.getElementsByClassName("symbol2")[0].style.color=="green")
				{
					elements.style.color= "green"; 
				}
			else
			{
				elements.style.color= "red"; 
			}
		}
		
  
		if((val==3 || val==31) && (field1!="None" && field2!="None"))
		{
			if(elements.getElementsByClassName("symbol1")[0].style.color=="green" &&  elements.getElementsByClassName("symbol2")[0].style.color=="green" && field2!="None")
				{
					elements.style.color= "green"; 
				}
				else
				{
				elements.style.color= "red"; 
				}
		}
		 
			
	 

	}

	else
	{
		if(arg==true)
		{
			elements.getElementsByClassName("symbol1")[0].innerHTML=correct;	
			elements.getElementsByClassName("symbol1")[0].style.color="green";
			
		}
		else
		{
			elements.getElementsByClassName("symbol1")[0].innerHTML=wrong;
			elements.getElementsByClassName("symbol1")[0].style.color="red";
			
		}
		
	}
	
}
 
function UserNameCheck(vales)
{
	 if(8&configValues)
	{
		var pass_value= document.getElementById("userpwd").value;
		var user= document.getElementById("username").value;
		var userpasscheck= document.getElementById("User_Pass");
		if(pass_value!="")
		{
			pass_value= pass_value.toLowerCase();
			user= user.toLowerCase();
			if(pass_value !=user)
			{
				userpasscheck.style.color= "green";
				checksnmp(vales,userpasscheck,true);
				apply_Button= true;
			}
			else
			{
				userpasscheck.style.color= "red";
				checksnmp(vales,userpasscheck,false);
				apply_Button= false;
			}
		}
		
	}
}