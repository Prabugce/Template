import React, { Component } from 'react';
class Step3 extends Component
{


 

render()
{
    return (
<div className="container">

<h3>Bootstrap radio button in vertical layout</h3>
<form>
	<div class="form-check">
	  <label class="form-check-label">
		<input class="form-check-input" type="checkbox" value="red"/>
		Red
	  </label>
	</div>
	<div class="form-check">
	  <label class="form-check-label">
		<input class="form-check-input" type="checkbox" value="green"/>
		Green
	  </label>
	</div>
	<div class="form-check">
	  <label class="form-check-label">
		<input class="form-check-input" type="checkbox" value="yellow"/>
		Yellow
	  </label>
	</div>


    </form>
    </div>
);
}
}

export default Step3;