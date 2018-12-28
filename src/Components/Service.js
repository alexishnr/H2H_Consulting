import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Col, Row, Form, FormGroup, Label, Input, ModalBody, ModalFooter, Modal, ModalHeader} from 'reactstrap';
import {HashLink, Link} from 'react-router-dom';

 class Service extends Component {
   constructor(props) {
       super(props);
       this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
     }

     toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <Col xs="12" sm="6" md = "4" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Card body className='servicesBox text-center '>
         <CardTitle style={{marginBottom:20}}>{this.props.serviceName}</CardTitle>
         <CardText>{this.props.serviceText}</CardText>
         <Button onClick={this.toggle} style={{width:120, margin:'auto'}}>En voir plus</Button>
       </Card>
       <div>
        <Modal className='modalServices' isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 500 }}
          toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} style={{margin:'auto'}}>{this.props.serviceName}</ModalHeader>
          <ModalBody style={{padding:50}}>
            {this.props.serviceResume}
          </ModalBody>
          <ModalFooter>
          <Link to="/booking">
            <Button style={{backgroundColor:'#f48a00', border:'none'}} onClick={this.toggle}>Réserver une session</Button></Link>
            <Button color="secondary" onClick={this.toggle}>Retour</Button>
          </ModalFooter>
        </Modal>
      </div>
      </Col>

    );
  }
}

export default Service
