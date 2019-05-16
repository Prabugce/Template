import React, { Component } from 'react';
import { expression } from '@babel/template';
import '../Css/style.css'
//import ReactDOM from 'react'
import ReactDOM from 'react-dom';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';


var comp =[Step1,Step2,Step3,Step4];

class Stepper extends Component{
    constructor(props){
        super(); 
        this.steps = 1;
    }

    next()
    {
        
        var classes= document.getElementsByClassName("btn1");
        var classes1= document.getElementsByClassName("fa fa-car");

        for(var i=0;i<classes.length;i++)
        {
            console.log(this.steps);

            if(this.steps==i)
            { 
                classes[i].style.backgroundColor ="#e3a3a3";
                
            }
            else
            {
                classes[i].style.backgroundColor ="white";
            }

        }

        //console.log(this.steps);
     
        if(this.steps==0)
        {
         
        classes1[0].classList.remove("fa-car");
        classes1[0].classList.add("fa-check");
        //classes1[0].style.color= "red";

     

        ReactDOM.render(<Step1/>, document.getElementById('example'));
        this.steps += 1;

        }
        else if (this.steps==1)
        {   
            this.steps += 1;
            console.log(classes1[0]);
            classes1[0].classList.add("fa-check");
            classes1[0].classList.remove("fa-car");
            ReactDOM.render(<Step2/>, document.getElementById('example'));
            
    
        }
        else if (this.steps==2)
        {
           
            this.steps += 1;
            console.log(classes1[0]);
            classes1[0].classList.add("fa-check");
            classes1[0].classList.remove("fa-car");
            ReactDOM.render(<Step3/>, document.getElementById('example'));
        }
        else if (this.steps==3)
        {

            this.steps =0;
            console.log(classes1[0]);
            classes1[0].classList.add("fa-check");
            classes1[0].classList.remove("fa-car");
            ReactDOM.render(<Step4/>, document.getElementById('example'));
            document.getElementById("btn1").style.display ="none";
            document.getElementById("btn2").style.display ="block";

            
           
        }

        
    }
sub()
{
     document.getElementById("btn2").style.display ="none";
    var classes= document.getElementsByClassName("btn1");
     var classes2= document.getElementsByClassName("fa fa-check");

     for(var i=0;i<classes.length;i++)
        {
            console.log(this.steps);
            
            if(this.steps==i)
            {
               // alert(this.steps);
                classes[i].style.backgroundColor ="#e3a3a3";
                
            }
            else
            {
                classes[i].style.backgroundColor ="white";
            }

        }

    // ReactDOM.render(<Step1/>, document.getElementById('example'));
    for(var i=0;i<classes2.length;i++)
    {
        classes2[i].classList.add("fa-car");  
        if(i==this.steps)
        { 
            document.getElementById("btn1").style.display ="block"; 
               ReactDOM.render(<Step1/>, document.getElementById('example'));
               this.steps= 1;
             
        }
        else
        {
            classes[i].style.backgroundColor ="white";   
        }
        

    }
}

    render()
    {
        return (
            <div>
            <div className="Text1"> 
            <a className="btn1" style={{backgroundColor:"#e3a3a3"}}><i className="fa fa-car"></i></a>
            <a className="btn1"><i className=" fa fa-car"></i></a>
            <a className="btn1"><i className="fa fa-car"></i></a>
            <a className="btn1"><i className="fa fa-car"></i></a>
            </div>
            
            <div id="example"> 
           <Step1/>
            </div>

            <div>  
                 <button id="btn1" type="button" onClick={this.next.bind(this)}>Next</button>
                 <button id="btn2" style={{display:"none"}} type="button" onClick={this.sub.bind(this)}>Submit</button>
            </div>



            </div>
        );

    }
}

export default Stepper;