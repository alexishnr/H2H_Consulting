import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  // import {Link} from 'react-router-dom';
  import { HashLink as Link } from 'react-router-hash-link';


 class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="black" light expand="md" className='navbar'>
          <NavbarBrand>
            <Link to="/"><img style={{width:90, color:'#FFF'}} src={"./images/logo.png"}/></Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
              <Link to="/#services">
                <NavLink style={{color:'#FFF'}} className='navbarLink'>Services</NavLink>
              </Link>
              </NavItem>
              <NavItem>
              <Link to="/#contact">
                <NavLink style={{color:'#FFF'}} className='navbarLink'>Contact</NavLink>
              </Link>
              </NavItem>
              <NavItem>
              <Link to="/booking">
                <NavLink style={{color:'#FFF'}} className='navbarLink'>Réserver une session</NavLink>
              </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar
