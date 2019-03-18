import React, { Component } from 'react';
import './Nav.css'
import '../Parallax/Media.css'
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
                    <img className='home-icon' src={require('../../Picutres/baseline-home-24px.svg')} alt=""/>
                    </div>
                    <div className='col-4'>
                    <img className='contact-icon' src={require('../../Picutres/baseline-contact_support-24px.svg')} alt=""/>
                    </div>
                    <div className='col-4'>
                    <img className='money-icon' src={require('../../Picutres/baseline-attach_money-24px.svg')} alt=""/>
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
        <img className='Logo' src={require('../../Picutres/Logo-calsolar.png')}  alt="" />
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
