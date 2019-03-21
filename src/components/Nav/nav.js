import React, { Component } from 'react';
import './Nav.css'
import '../Parallax/Media.css'
import { Link } from "react-router-dom"
import { Linkscroll , Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

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
        Events.scrollEvent.register('begin', function(to, element) {
          console.log("begin", arguments);
        });
     
        Events.scrollEvent.register('end', function(to, element) {
          console.log("end", arguments);
        });
     
        scrollSpy.update();
    }
    componentWillMount() {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end')
    }
    scrollToTop(){
      scroll.scrollToTop();
    }
    scrollToBottom(){
      scroll.scrollToBottom();
    }
    scrollTo(){
      scroll.scrollTo(100);
    }
    scrollMore(){
      scroll.scrollMore(100);
    }
    handleSetActive(to){
     console.log(to);
    }
    render() {     
        if(this.state.isMobile === true){
            return(
                <nav className={"navbar fixed-bottom nav-colors Mobile-Nav d-flex justify-content-center"}>
                <div className='navbar-brand icons'>
                <div className='container '>
                 <div className='row '>
                    <div className='col-4'>
                   <button className="btn btn ">Home</button>
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
