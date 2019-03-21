import React, { Component } from 'react';
import Nav from '../../components/Nav/nav'
import { Parallax} from 'react-parallax';
import './res.css'
class Res extends Component {

	render() {
		return (
            <div>
            <Nav></Nav>

     <Parallax
      blur={3}
      bgImage={require('../../Picutres/res-learnmore-2.jpg')}
      bgImageAlt="Solar1"
      strength={100}
    >
    <div className='contanier'>
            <div className='row d-flex justify-content-center'>
            <div className='col-md-6 col-sm-10 res-2nd-col rounded'>
            <h1 className='blue-text header'>YOUR HOME ENERGY SOLUTION</h1>
            <p className='header'>Looking to lower your energy costs while reducing your 
                carbon footprint? Look no futher than solar energy. This energy 
                efficient solution will save you money, increase your property value 
                and demonstrates your commitment to sustainability.</p>
                <p className='header'>
                Using solar as either supplemental power or as a sole power source, 
                saves an average homeowner $2,200 (1) each year. 
                We understand that this may be a daunting task, that’s why 
                we make the process as easy as possible. With multiple financing 
                options, we’ll walk you through every step of the way, starting with
                 a free quote. </p>

                 <button className='btn'>CONTACT US</button>
            </div>
            </div>
                </div>
    
      <div style={{ height: '200px' }} />
    </Parallax>
    <div className='contanier'>
      <div className='row d-flex justify-content-center'>
 
              <div className='col-8 text-justify'>
              <h1 className='d-flex justify-content-left blue-text'>Your Home Energy Solution</h1>
              <p>Tired of spending big money each month for energy you’re not proud to consume? Why not switch to solar?</p>
                  <p>California is the boon state for residential solar systems, 
                    the clean energy alternative. Home solar power systems offer substantial 
                    long-term savings on electric bills. And California is arguably the best 
                    state in the union when it comes to net metering, or selling your excess 
                    power to the electric companies.</p>

                    <p>Solar power is also the responsible choice where the planet 
                      is concerned. A single residential solar system can reduce your 
                      annual household carbon footprint by up to 35,000 pounds of carbon 
                      dioxide(2). You would have to plant nearly 90 trees per year to offset 
                      this much CO2.</p>
                      <h1 className='blue-text'>How Much Do Solar Panels for Homes Cost in California? Are They Worth the Expense?</h1>
                      <p>The average home in California can be fitted with a home solar power
                        system with no money down and in most cases, less than what you are 
                        paying the utility provider, which means you start saving the second 
                        your system turns on! Considering that you will significantly lower 
                        your monthly electric bills with a home solar power system, home solar
                         installation is very cost-effective.</p>
                         <ul className='list-group'>
                           <li className='list-group-item'>After the initial investment, you could save $2,200 or more per year.</li>
                           <li className='list-group-item'>The cost of solar energy systems has dropped 60 percent since 2011, and technology continues to improve.</li>
                           <li className='list-group-item'>Solar energy incentives and tax credits of 30 percent are available for residential solar panels in California but will start to decrease so now is the time to save! </li>
                           <li className='list-group-item'>Innovative financing and leasing options are readily available to cut costs when you go solar. </li>
                           <li className='list-group-item'>Your system can pay for itself in 5-7 years.</li>
                           <li className='list-group-item'>You’ll enjoy ongoing savings with 25-year warranties on your entire system. </li>
                           <li className='list-group-item'>Generating more energy than you can use? Sell it to the power companies for extra money in your pocket.</li>
                         </ul>
                         <br/>
                         <p>As if that wasn’t enough, solar energy also increases the market value of homes, with transferrable system warranties available to the new owners.</p>
                         <h1 className='blue-text'>Contact Us Today!</h1>
                         <h4>CALL US AT: <div className='font-weight-bold'>1-209-253-0923</div></h4>
                         <p>Give CalSolar a call and stop paying high energy bills. 
                           Speak with one of our qualified solar experts about site 
                           assessment, energy requirements, solar panel system design, 
                           home solar installation or system maintenance.</p>
                          
              </div>
      </div>
    </div>
      

			
                </div>
		);
	}
}
export default Res;