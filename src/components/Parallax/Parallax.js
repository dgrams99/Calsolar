import React, { Component } from 'react';
import { Parallax} from 'react-parallax';
import { Link } from "react-router-dom"
import './Parallax.css'

class ParallaxBackground extends Component {
    state = {
        isMobile: '',
        showCash: false,
        showFin: false,
        showPPA: false,
        contactPage: false
      }
    
    showTheCardsCash(){
        this.setState({
            showCash:true,
            showCardsFin: false,
            showCardsPPA: false
        })
    }
    showTheCardsFin(){
        this.setState({
            showFin:true,
            showCash:false,
            showPPA:false
        })

    }
    showTheCardsPPA(){
        this.setState({
            showPPA:true,
            showCash:false,
            showFin:false
        })
    }
    closeCards(){
        this.setState({
            showPPA:false,
            showCash:false,
            showFin:false
        })
    }

 render(){
     let showCardsCash
     let showCardsFin
     let showCardsPPA

     //shows/hides cash cards
     if(this.state.showCash === false ){
        showCardsCash = 'noshow'
     }
     if(this.state.showCash === true){
        showCardsCash = 'show'
     }
     //shows/hides fin cards
     if(this.state.showFin === false ){
        showCardsFin = 'noshow'
     }
     if(this.state.showFin === true){
        showCardsFin = 'show'
     }
     //shows/hides PPA cards
     if(this.state.showPPA === false ){
        showCardsPPA = 'noshow'
     }
     if(this.state.showPPA === true){
        showCardsPPA = 'show'
     }

    
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
            <button className='btn  quote-btn btn-shift-when-clicked'>Request Quote</button>                   
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
           
            <button className='btn  request-btn-on-content btn-shift-when-clicked'>Request A Quote</button>
            
     </div>
    </div>
    <Parallax
      blur={4}
      bgImage={require('../../Picutres/Parralax-img-2.jpg')}
      bgImageAlt=""
      strength={300}
    >
     <div className='contanier'>
        <div className='row d-flex justify-content-center'>

        <div className='col-sm-11 col-md-8 col-lg-4'>
            <div className='card card-res card-shape'>
            <img className='card-img-top ' src={require('../../Picutres/residential.jpg')} alt="" />
            <div className='card-body'>
              <h1 className='card-title'>Residential</h1>
              <p className='card-text'>Lower your energy bill while decreasing your carbon footprint by going solar.</p>
              <Link to="/res/learnmore" className={window.location.pathname === "/res/learnmore"}>
                 <button className='btn learn-more-btn'>Learn-More</button>
             </Link>
            </div>
            </div> 
        </div>
        <div className='col-sm-11 col-md-8 col-lg-4'>
            <div className='card card-com card-shape'>
            <img className='card-img-top ' src={require('../../Picutres/commercial.jpg')} alt="" />
            <div className='card-body'>
              <h1 className='card-title'>Commercial/</h1>
              <h1 className='card-title'>Agriculture</h1>
              <p className='card-text'>Lower your energy bill while decreasing your carbon footprint by going solar.</p>
              <Link to="/com/learnmore" className={window.location.pathname === "/com/learnmore"}>
                 <button className='btn learn-more-btn'>Learn-More</button>
             </Link>
            </div>
            </div> 
        </div>
         <div className='col-sm-11 col-md-8 col-lg-4'>
            <div className='card card-utility card-shape'>
            <img className='card-img-top ' src={require('../../Picutres/solar-farm.jpg')} alt="" />
            <div className='card-body'>
              <h1 className='card-title'>Utility</h1>
              <p className='card-text'>Lower your energy bill while decreasing your carbon footprint by going solar.</p>
              <Link to="/utility/learnmore" className={window.location.pathname === "/utility/learnmore"}>
                 <button className='btn learn-more-btn'>Learn-More</button>
             </Link>
            </div>
            </div> 
        </div>
        </div>
     </div>
      <div style={{ height: 'auto' }} />
    </Parallax>
    <div className='contanier'>
    <div className='row'>
    <div className='col-12 info-col'>
            <h1 className='d-flex justify-content-left white-text shift'>Financing</h1>
        </div> 
        <div className='col-lg-6 col-sm-12 finance-col'>
        <div className='blue-text top-shift'>
           <h3>AT CALSOLAR WE ARE YOUR</h3>
            <h3>INVESTMENT PARTNERS</h3> 
            </div>
            <p className='top-shift'>Receive up to 30% annual return on your solar investment Innovative and customized financing and purchasing solutions are available. When you work with
                 CalSolar, our experts help you choose the option that works 
                 best for you and your specific situation.</p>
           <h2 className='separate'>Start Receiving Your Annual Return Today</h2>
           <p>Call CalSolar to discuss these options in greater detail at <div className='blue-text big-text'>209-253-0923.</div> OR <br /> <button className='btn  contact-btn btn-shift-when-clicked'>Contact Us</button></p>
        </div>
        <div className='col-lg-6 col-sm-12 finance-col-2'>
        <button className='btn  d-flex justify-content-right top-shift btn-shift-when-clicked'  onClick={() => this.closeCards()}><i class="material-icons clear-icon">clear</i> </button>
     <div className='col-lg-12'>
                <div className='card cash-card'>
                    <div className='card-header '>
                      <h4 className='card-cash-header' onClick={() => this.showTheCardsCash()}>Cash</h4>
                    </div>
                    <div className={`${showCardsCash} card-body`}>
                       
                        <p>Cash purchases allow the buyer to be eligible for the
                             30% federal tax credit and MACRS (Modified Accelerated Cost 
                             Recovery System. This is the current tax depreciation system and 
                             allows the capitalized cost basis of tangible property to be 
                             recovered over a specified life by annual deductions for depreciation) program.</p>
                           
                    </div>
                </div>
                </div>
                <div className='col-lg-12'>
                <div className='card fin-card'>
                <h3 className='card-header' onClick={() => this.showTheCardsFin()}>Leasing Options</h3>
                    <div className={`${showCardsFin} card-body`}>
                     
                        <p>Leasing allows your business to generate solar electricity without 
                            an upfront capital investment. When leased, the solar equipment is provided 
                            (at no cost) in exchange for a monthly lease payment.</p>
                            <h3 className='blue-text'>Additional benefits of leasing:</h3>
                            <ul>
                                 <li>
                                     <p>The elimination of an electric bill and the fixed payments 
                                         (lease cost) allows your operation to be cash flow positive
                                          within the first year with zero upfront capital investment</p>
                                 </li>
                                 <li>
                                     <p>Rates as low as -1.97% (when amortized over the 7-10 year lease) 
                                         from lending institutions offset the lack of eligibility of the 
                                         30% tax credit</p>
                                 </li>
                             </ul>  
                    </div>
                </div>
                </div>
                <div className='col-lg-12'>
                <div className='card ppa-card'>
                <h3 className='card-header ' onClick={() => this.showTheCardsPPA()}>Power Purchase Agreement (PPA)</h3>
                    <div className={`${showCardsPPA} card-body`}>   
                     
                        <p>A Power Purchase Agreement (PPA) allows two parties to contract with each other to generate electricity, 
                            often times with no upfront capital cost. Typically, one party generates 
                            the electricity by installing a solar system on an unused rooftop, parking lot, 
                            or parcel of land and sells to the other party. Most often, this type of agreement 
                            is used with nonprofits, business, and government agencies.</p>
                            <h3 className=''>Additional benefits of leasing:</h3>
                            <ul>
                                 <li>
                                     <p>The elimination of an electric bill and the fixed payments 
                                         (lease cost) allows your operation to be cash flow positive
                                          within the first year with zero upfront capital investment</p>
                                 </li>
                                 <li>
                                     <p>Rates as low as -1.97% (when amortized over the 7-10 year lease) 
                                         from lending institutions offset the lack of eligibility of the 
                                         30% tax credit</p>
                                 </li>
                             </ul>
                             </div>  
                    </div>
                </div>
            </div>
        <div className='col-lg-12 col-sm-12 quote-col '>
        <Parallax
      blur={4}
      bgImage={require('../../Picutres/blog_images_apc1.png')}
      bgImageAlt="Solar5"
      strength={250}
    >
    
     <div className='contanier '>
        <div className="row d-flex justify-content-center">
        <div className='col-10 col-quote  white-text'>
        <i class="material-icons quote-icon">format_quote</i>
         <strong><p className='the-quote'>
“Cal Solar has been a pleasure to work with…from pre-planning, construction, 
to the ribbon cutting. Jordan, Jonathan and crew were extremely professional, especially 
during the constuction process. They worked around our production needs so we were able 
to keep our business 100% operational thru the whole build. Every small hiccup was addressed 
both timely and professionally. We had a few permit issues, that were unique to our property, all were addressed seamlessly. We couldn’t be happier with Cal Solar
 and the progression towards renewable energy!”</p></strong>
        <h4 className='blue-text'>Sean Montey</h4>
        <p>Vice President, American Pallet Co.</p>
        </div>
        </div>
     </div>
      <div style={{ height: '120px' }} />
    </Parallax>              
        </div>
       
        <div className='col-12 orginized-col'>
        <div className='contnaier'>
            <div className='row'>
                <div className='col-12 d-flex justify-content-left background-color '>
                <h1 className='shift'>ORGANIZATIONS</h1>
                </div>
                <div className='col-12 white-text background-color'>
                <h2>CalSolar is a proud member of the following organizations.</h2>
                </div> 
               
                <div className='col-lg-4 col-md-6 col-sm-6 top-shift'>
                <img className='icon-1' src={require('../../Picutres/logos-08.png')} alt="" />
                </div>
               
                <div className='col-lg-4 col-md-6 col-sm-6 top-shift'>
                <img className='icon-2' src={require('../../Picutres/logos-09.png')} alt="" />
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 top-shift'>
                <img className='icon-3' src={require('../../Picutres/logos-10.png')} alt="" />
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 top-shift'>
                <img className='icon-4' src={require('../../Picutres/logos-11.png')} alt="" />
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 top-shift'>
                <img className='icon-5' src={require('../../Picutres/logos-12.png')} alt="" />
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 top-shift'>
                <img className='icon-6' src={require('../../Picutres/logos-13.png')} alt="" />
                </div>
                
            </div>
            <div className='col-12 contact-col'>
                    <h1 className='dark-blue-text'>Contact Us</h1>
                    <h5>California Solar Innovators, Inc.</h5>
                    <p>580 N Wilma Ave, Suite H</p>
                    <p>Ripon, CA 95366</p>
                    <p>1-209-253-0923</p>
                    <p>1-209-214-6691 fax</p>
                    <p>Info@calsolar.com</p>
            </div>
           
        </div>
        <div className='col-12 footer bottom'>
                <p className='white-text d-flex justify-content-right me'>Design & Created by: Daniel Grams</p>
                <img onClick={() => window.location.replace("https://www.linkedin.com/in/daniel-grams-8b7133172")} className='linkdin-logo' src={require('../../Picutres/Popular_Social_Media-22-512.png')} alt="" />
                </div>
       
        </div>
        </div>
    </div>
  </div>
  );
}
}
export default ParallaxBackground;