import React, { Component } from 'react';
import { Parallax} from 'react-parallax';
import './Parallax.css'
import './Media.css'
class ParallaxBackground extends Component {
    state = {
        isMobile: '',
      }
    
      componentDidMount() {
        if(window.innerWidth < 1200){
            this.setState({
                isMobile: 'mobileNav'
            })
            
        } else{
            this.setState({
                isMobile: 'desktopNav'
            })
            
        }
    }
 render(){
  return (
    <div>
    <Parallax
      blur={0}
      bgImage={require('../../Picutres/Parallax-img-1.jpg')}
      bgImageAlt="Solar1"
      strength={200}
    >
    
     <div className='contanier '>
        <div className="row d-flex justify-content-center">
        <div className='col-8 col-header'>
            <h2 className='title-color'>We are CalSolar</h2>
            <h1>YOUR LOCAL EXPERT'S IN SOLAR SOLUTIONS </h1>
            <button className='btn btn-primary quote-btn'>Request Quote</button>                   
        </div>
        </div>
     </div>
      <div style={{ height: '350px' }} />
    </Parallax>
    <div className='info-contanier'>
        <div className='row d-flex justify-content-center'>
        <div className='col-8 about-content'>
        <h2 className='d-flex justify-content-left blue-text'>WE ARE SOLAR INNOVATORS IN CALIFORNIA</h2>
        <h1>Quality Service with Custom Solar Solutions</h1>
        <p className='no-show-on-phone'>When you partner with CalSolar for your solar solutions, you are receiving 
            the highest quality solar energy system and benefiting from top-tier customer
             service during the design, development and installation of your custom-tailored system. Throughout California, from Los Angeles to Oregon, we specialize in custom solar energy solutions
              for your home, commercial business, agriculture industry and utility. No matter what you’re looking for, we have you covered. <strong className='show-on-phone'>Our work doesn’t end after installation. We will continue to work with you to optimize the efficiency and return 
            on investment of your custom solar solution. </strong></p>
            </div>
            <button className='btn btn-primary request-btn-on-content'>Request A Quote</button>
     </div>
    </div>
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={require('../../Picutres/Parralax-img-2.jpg')}
      bgImageAlt="the dog"
      strength={200}
    >
     <div className='contanier'>
     <div className=' '>
     <div className='res-col  rounded'>
        <img className='res-pic rounded' src={require('../../Picutres/residential.jpg')} alt="" />
        <h1 className='res-title'>Residential</h1>
       <p className='res-content'>Lower your energy bill while decreasing your carbon footprint by going solar.</p>
    </div>
    <div className=' com-col shadow-lg p-3 mb-5  rounded'>

    </div>
    <div className='utility-col shadow-lg p-3 mb-5 rounded'>

    </div>
     </div>
     </div>
      <div style={{ height: 'auto' }} />
    </Parallax>

  </div>
  );
}
}
export default ParallaxBackground;