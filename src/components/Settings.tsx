import React from "react"


const Settings = () => {
	return (
		
			
			
			<form className="form"><h1 >CLEINT FORM</h1>
                        
                                <p>CUSTOMER NAME</p>                               
				                <input  type="text" placeholder="username" />
								<p>CNIC</p>                               
				                <input  type="text" placeholder="CNIC" />
								<p>Mobile no</p>                               
				                <input  type="text" placeholder="mobile" />
								<p>Product Name</p>                               
				                <input  type="text" placeholder="product no" />
								<h2 className="2head">REPAIR PHONE DETAILS</h2>
				                <p>Brand Name</p>                               
				                <input  type="text" placeholder="Brand Name" />
								<p>Model</p>                               
				                <input  type="text" placeholder="Model" />
                                <p>IMEI</p>                               
				                <input  type="text" placeholder="imei" />
								<p>Complaint</p>                               
				                <input  type="text" placeholder="complain" />
								<p>Repair center</p>                               
				                <input  type="text" placeholder="repair center" />
								<p>Advance Amount</p>                               
				                <input  type="text" placeholder="amount" />
								<button type="submit">Save<i className="fa fa-save"></i></button>
	
								<button type="submit" >Reset<i className="fa fa-refresh fa-spin" ></i></button></form>
								
                            
			
	)	
}

export default Settings
