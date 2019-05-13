import React from 'react';
import ReactDOM from 'react-dom';
import Stepper from 'react-js-stepper'

const steps = [{title: 'Stage - 1'}, {title: 'Stage - 2'}, {title: 'Stage - 3'},]

class App1 extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            activeStep: 1,
        }
    }

    handleOnClickStepper = (step) => {
        this.setState({activeStep: step});
    }

    handleOnClickNext = () => {
        let nextStep = this.state.activeStep + 1;
        this.setState({activeStep: nextStep})
    }

    handleOnClickBack = () => {
        let prevStep = this.state.activeStep - 1;
        this.setState({activeStep:prevStep})
    }

    render(){
        return(
            <React.Fragment>
                <Stepper 
                    steps={steps} 
                    activeStep={this.state.activeStep}
                    onSelect={this.handleOnClickStepper}
                    showNumber={false} 
                />

                <div style={{marginTop: '40px'}}>
                {this.state.activeStep === 1 ? <div> You are in Stage {this.state.activeStep} </div> : 
                 this.state.activeStep === 2 ? <div> You are in Stage {this.state.activeStep} </div> :
                 <div> You are in Stage {this.state.activeStep} </div>
                }
                </div>

                <div style={{marginTop: '40px'}}>
                    <input type="button" value={this.state.activeStep === steps.length ? 'Finish' : 'Next'} 
                            onClick={this.state.activeStep === steps.length ? null : this.handleOnClickNext}/>
                    {this.state.activeStep ===1 ? '' : <input type="button" value="Back" onClick={this.handleOnClickBack} /> }
                </div>
            </React.Fragment>
        )
    }
}
export default App1;

//https://codesandbox.io/s/p5544760lm