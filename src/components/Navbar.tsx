import {
Nav,
NavLink,
NavMenu
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavMenu>
                <NavLink to='/quem-somos' >
                    Quem Somos
                </NavLink>
                <NavLink to='/events' >
                    Events
                </NavLink>
            </NavMenu>
        </Nav>
        </>
    );
};

export default Navbar;
