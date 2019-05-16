import React, { Component } from 'react';
class Step2 extends Component
{


    render()
    {
        return (
           
           <div className="container">
        <h3>User Details</h3>
        <form className="form-horizontal" role="form">
            <div className="form-group">
                <label className="control-label col-sm-3">Email</label>
                <div className="col-sm-8">
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
            </div> 

            <div className="form-group">
                <label className="control-label col-sm-3">Mobile Number</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" id="email" placeholder="Mobile Number" />
                </div>
            </div> 

            </form>
            </div>
        );
    }
}

export default Step2;