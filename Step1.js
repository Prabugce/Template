import React, { Component } from 'react';
class Step1 extends Component {


    render() {
        return (
            <div className="container">
                <h3>Signup</h3>
                <form className="form-horizontal" role="form">
                    <div className="form-group">
                        <label className="control-label col-sm-3">First name</label>
                        <div className="col-sm-8">
                            <input type="name" className="form-control" id="name" placeholder="Enter name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-3">Second name</label>
                        <div className="col-sm-8">
                            <input type="address" className="form-control" id="address" placeholder="Enter address" />
                        </div>
                    </div>
 
                </form>
            </div>
        );
    }
}

export default Step1;