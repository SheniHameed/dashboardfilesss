import React from 'react';

const  Dashboard=() =>{
  return <>
 
  <><div className="navbar">
    <h1> Dashboard</h1>   
    <div className="dropdown">
    <button className="tst">Test <i className="fa fa-users"></i></button>
      <button className="dropbtn"><i className="fa fa-reorder"></i>     
      </button>
      <div className="dropdown-content">
        <a><i font-size="24px" className="fa fa-tachometer"></i>Dashboard Module</a>
          <a><i font-size="24px" className="fa">&#xf0e3;</i>Repair Module</a>
        <a><i font-size="24px" className="fa">&#xf044;</i>Componay Module</a>
        <a><i font-size="24px" className="fa">&#xf0c0;</i>UserModule</a>
      </div>     
    </div>
  </div>
  <form className="example" >
  <input type="text" placeholder="Repair ID.." name="search"></input>
  <button type="submit">Search<i className="fa fa-search"></i></button>
</form>
      <div className='dashboard'>      
        <h1>Classic Dashboard</h1><br></br>
          <h2>Creativity Crafted Dashboard for your needs</h2>
      </div>
     <div className="tprogress">          
        <h1>6<br></br>TOTAL USERS<i  className="fa fa-users"></i><br></br> <br></br>Monthly Progress<i className="fa fa-bar-chart"></i></h1></div>
      <div className='trepairs'>
            
       <h1> 117 <br></br><i  className="fa fa-cubes" ></i>TOTAL REPAIRS <br></br><br></br> Monthly Progress<i className="fa fa-bar-chart"></i></h1>
      </div>
       <div className='tPending'>
       
         <h1>74<br></br>PENDING REPAIRS<i  className="fa fa-shopping-cart " ></i><br></br><br></br> Monthly Progress<i className="fa fa-bar-chart"></i></h1>
      </div>
      <div className='tcompelete'>
        
        <h1> 24<br></br><i className="fa fa-comments" ></i>COMPLETE REPAIRS<br></br><br></br> Monthly Progress<i className="fa fa-bar-chart"></i></h1>
      </div>
      


    </></>
  ;
  
}

export default Dashboard;
