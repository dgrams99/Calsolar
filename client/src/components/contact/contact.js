import React, { Component } from 'react';
import API from '../../utils/API';

import './contact.css';
class Contact extends Component {
    state = {
        fullName: '',
        phone: '',
        streetAddress: '',
        city: '',
        state: '',
        zip: '',
        hearAbout: '',
        email: '',
        utility: '',
        monthlyBill: '',
		shade: '',
    };
handleFormSubmit = () => {
	const data = {
		name: this.state.fullName,
		phone: this.state.phone,
		streetAddress: this.state.streetAddress,
		city: this.state.city,
		zip: this.state.zip,
		state: this.state.state,
		email: this.state.email,
		utility: this.state.utility,
		monthlyBill: this.state.monthlyBill,
		shade: this.state.shade,
	}
	API.send(data)
	.then(function (res) {
	console.log(res);
	})
	.catch(function (err) {
		console.log(err);
	});  
    console.log(this.state)
}
//For forms.......
handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
};
	render() {
		return (
			<div className='contanier'>
                <div className='row'>
                    <div className='col-4'>
				<input
					className="form-control name-control"
					value={this.state.fullName}
					onChange={this.handleInputChange}
					name="fullName"
					placeholder="Name"
				/>
				<input
					className="form-control email-control"
					value={this.state.email}
					onChange={this.handleInputChange}
					name="email"
					placeholder="Email"
				/>
				<input
					className="form-control phone-control"
					value={this.state.phone}
					onChange={this.handleInputChange}
					name="phone"
					placeholder="Phone Number"
				/>
                </div>
                <div className='col-4'>
                <input
					className="form-control street-control"
					value={this.state.streetAddress}
					onChange={this.handleInputChange}
					name="streetAddress"
					placeholder="Street Address"
				/>
                <input
					className="form-control city-control"
					value={this.state.city}
					onChange={this.handleInputChange}
					name="city"
					placeholder="City"
				/>
                <input
					className="form-control state-control"
					value={this.state.state}
					onChange={this.handleInputChange}
					name="state"
					placeholder="State"
				/>
                <input
					className="form-control zip-control"
					value={this.state.zip}
					onChange={this.handleInputChange}
					name="zip"
					placeholder="Zip"
				/>

                <button className='btn btn-warning' onClick={() => this.handleFormSubmit()}> Send</button>

                </div>
                <div className='col-4'>
                <input
					className="form-control utility-control"
					value={this.state.utility}
					onChange={this.handleInputChange}
					name="utility"
					placeholder="Utility Provider"
				/>
                <input
					className="form-control monthly-control"
					value={this.state.monthlyBill}
					onChange={this.handleInputChange}
					name="monthlyBill"
					placeholder="Monthly Bill Cost"
				/>
                <input
					className="form-control shade-control"
					value={this.state.shade}
					onChange={this.handleInputChange}
					name="shade"
					placeholder="How much shade is on your roof"
				/>
                </div>
                </div>
			</div>
		);
	}
}
export default Contact;
