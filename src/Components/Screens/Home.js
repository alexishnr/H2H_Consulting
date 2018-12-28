import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Col, Row, Form, FormGroup, Label, Input, ModalBody, ModalFooter, Modal, ModalHeader} from 'reactstrap';
import {Link} from 'react-router-dom';
import firebase from '../../firebase' ;
import database from '../../firebase' ;
import Service from '../Service'
import NavBar from '../Navbar'
import Footer from '../Footer'
import Media from "react-media";
var moment = require('moment');

class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        services:[],
        modal: false,
        username:'',
        email:'',
        message:'',
        date: new Date('1976-04-19T12:59-0500'),
        sujet:''
      };
      this.toggle = this.toggle.bind(this);
      this.writingMessage = this.writingMessage.bind(this);

    }
    componentDidMount() {

    var newSchools = [];
    const ref = firebase.database().ref('Services')
    ref.on('value', snap => {
      snap.forEach((childSnapshot) => {
        newSchools.push(childSnapshot.val());
      })
      this.setState({services: newSchools});
    });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  writingMessage(event){
    var now = moment().format('MMMM Do YYYY, h:mm:ss a');
    fetch('http://localhost:3000/contact-us', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: 'userEmail='+this.state.email+'&message='+this.state.message+'&username='+this.state.username+'&date='+now+'&sujet='+this.state.sujet
    })
  var newMessage = [];
  event.preventDefault();
  firebase.database().ref('Messages/'+this.state.username).child("messages").push(
    {
      username: this.state.username,
      email: this.state.email,
      message: this.state.message,
      date: now
    }
  )
//   .then(() => {this.setState({
//     username: '',
//     email: '',
//     message: ''
//   })
// })
}
  render() {

    var servicesList=[];
    for (var i = 0; i < this.state.services.length; i++) {
      servicesList.push(<Service serviceName={this.state.services[i].ServiceName} serviceText={this.state.services[i].ServiceText} serviceResume={this.state.services[i].ServiceResume}/>)
    }

    const isInvalid =
    this.state.email === '' ||
    this.state.sujet === '' ||
    this.state.username === ''||
    this.state.message === ''||
    !this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    ;



    return (
      <div>
        <div className="homeBackground">
        <NavBar/>
          <div className="textBackground">
            <h1 className="title">H2H Consulting</h1>
            <h3 className="subTitle">Laissez-nous gérer votre business !</h3>
            <div style={{margin:'auto'}}>
            <Link to="/booking"><Button  color="info" className="btn btn-primary bookingButton" style={{margin:20}} >Réserver une session</Button></Link>
            </div>
        </div>
      </div>
      <div className="homeBottom">
        <div className='about'>
        <Row>
        <Col xs="12" md="6">
          <div className='aboutPicture'></div>
        </Col>
        <Col xs="12" md="6">
          <div className='aboutText'>
            <div style={{margin:70}}>
              <h3 style={{marginBottom:20}}>A PROPOS</h3>
              <p>Nous partons du principe qu'il n'est pas facile de de développer un produit de sa pensée jusqu'à sa conception et que cela demande du temps et de nombreuses compétences qui ne sont pas accessibles à tout le monde.</p>
              <p>Notre objectif est donc de mettre à votre disposition nos compétences les plus innovantes pour vous aider à atteindre vos objectifs, ouverts sur l'international et possédant une agence à Londres et à Paris, H2H Consulting sera en mesure de vous apporter ce que vous cherchez.</p>
            </div>
          </div>
        </Col>
        </Row>
        </div>
        <div id='services'>
        <Row>
        {servicesList}
        </Row>
       </div>
       <div>
         <Row>
           <Col xs='12'>
             <div id='contact'>
               <div className='contactText'>
                 <div className='contactText1'>
                 <Form style={{marginLeft:'auto', marginRight:'auto', marginTop:50, alignItems:'center', display:'flex', flexDirection:'column'}}>
                    <h3 style={{fontWeight:'normal',  color:'#FFF'}}>NOUS CONTACTER</h3>
                    <FormGroup>
                      <Label for="exampleEmail">Nom</Label>
                        <textarea type="text" style={{width:350, height:35}} value={this.state.username} required="required"  onChange={(ev)=>this.setState({username:ev.target.value})} className="form-control" id="message-text">
                        </textarea>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                        <textarea type="text" style={{width:350, height:35}} value={this.state.email} required="required"  onChange={(ev)=>this.setState({email:ev.target.value})} className="form-control" id="message-text">
                        </textarea>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Sujet</Label>
                        <textarea type="text" style={{width:350, height:35}} value={this.state.sujet} required="required"  onChange={(ev)=>this.setState({sujet:ev.target.value})} className="form-control" id="message-text">
                        </textarea>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Votre message</Label>
                        <textarea type="text" style={{width:350}} required="required"  value={this.state.message} onChange={(ev)=>this.setState({message:ev.target.value})} className="form-control" id="message-text">
                        </textarea>
                    </FormGroup>
                    <Button  disabled={isInvalid} color="secondary" className="btn btn-primary" style={{marginLeft:10, backgroundColor:'#f48a00', border:'none', borderRadius:2}} onClick={this.writingMessage}>Envoyer</Button>
                  </Form>
                 </div>
               </div>
             </div>
           </Col>
         </Row>
       </div>
       <Footer/>
      </div>
    </div>
    );
  }
}

export default Home;
