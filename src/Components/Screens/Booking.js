import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Col, Row, Form, FormGroup, Label, Input, ModalBody, ModalFooter, Modal, ModalHeader} from 'reactstrap';
import {Link} from 'react-router-dom';
import firebase from '../../firebase' ;
import database from '../../firebase' ;
import Service from '../Service'
import NavBar from '../Navbar'
import Footer from '../Footer'
import Media from "react-media";

class Booking extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
    }

    componentDidMount () {
      const head = document.querySelector('head');
      const script = document.createElement('script');
      script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
      head.appendChild(script);
    }
  render() {

    return (
      <div>
        <div className="homeBackgroundBooking">
        <NavBar/>
          <div className="textBackground">
            <h1 className="title">H2H Consulting</h1>
            <h3 className="subTitle">Réservez une session !</h3>
        </div>
      </div>
      <div className="calendly-inline-widget"
                 data-url="https://calendly.com/halexis/meetup"
                 style={{ width: '100%', height: '80vh' }}>
      </div>
       <Footer/>
    </div>
    );
  }
}

export default Booking;
