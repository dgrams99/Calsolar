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
            <div className='col-6 res-2nd-col rounded'>
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
            </div>
            </div>
                </div>
    
      <div style={{ height: '200px' }} />
    </Parallax>
    <div className='contanier'>
      <div className='row d-flex justify-content-center'>
      <div className='col-10 more-info-res'>
              <h1 className='d-flex justify-content-left blue-text'>Your Home Energy Solution In California</h1>
`
              </div>
      </div>
    </div>
      

			
                </div>
		);
	}
}
export default Res;