import React, { Component } from 'react';
import './Nav.css'
import { Link } from "react-router-dom"


class Nav extends Component {
    state = {
        isMobile: null,
      }
      
      componentDidMount() {
        if(window.innerWidth < 1000){
            this.setState({
                isMobile: true
            })
            
        } else{
            this.setState({
                isMobile: false
            })
            
        }
     
    }
   
    render() {     
        if(this.state.isMobile === true){
            return(
                <nav className={"navbar fixed-bottom nav-colors Mobile-Nav d-flex justify-content-center"}>
                <div className='navbar-brand icons'>
                <div className='container '>
                 <div className='row '>
                    <div className='col-4'>
                    <Link to="/" className={window.location.pathname === "/"}>
                   <button className="btn btn ">Home</button>
                   </Link>
                    </div>
                    <div className='col-4'>
                    <button className="btn">Contact</button>
                    </div>
                    <div className='col-4'>
                    <button className="btn">Finance</button>
                    </div>
                 </div>
               
                </div>
                
                </div>
              </nav>   
            )
        }   
  return (
    <nav className={"navbar fixed-top nav-color "}>
      <div className='navbar-brand Logo'>

      <Link to="/" className={window.location.pathname === "/"}>
        <img className='Logo' src={require('../../Picutres/Logo-calsolar.png')}  alt="" />
        </Link>
   
      </div>
      <div className='d-flex justify-content-center'>
         
          <i class="material-icons call-icon">call</i>
            <p className='number'>209-499-98686</p>
            
         
          </div>
    </nav>
  );
}
}
export default Nav;
