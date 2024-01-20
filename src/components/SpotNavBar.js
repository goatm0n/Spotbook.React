import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem } from "reactstrap";
import './SpotNavBar.css';
import { Component } from "react";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";
import ProfileLink from "./ProfileLink";
import LogoutButton from "./LogoutButton";

class SpotNavBar extends Component {

    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        var content = <LoginModal onLogin={this.props.onLogin} />
        if (this.props.userId) {
            var content = <div>
                <ProfileLink userId={this.props.userId} />
                <LogoutButton onLogout={this.props.onLogout}/>
            </div>

        }
        return (
            <Navbar>
                <Link to="../../" relative="path" className="homepage-link">
                    <NavbarBrand>
                        spotbook
                    </NavbarBrand>
                </Link>
                <NavbarToggler onClick={ this.toggleNavbar } />
                <Collapse isOpen={ !this.state.collapsed } navbar>
                    <Nav navbar>
                        <NavItem>
                            {content}
                        </NavItem>                        
                    </Nav>
                
                </Collapse>
            </Navbar>
        )
    }
    
}

export default SpotNavBar;