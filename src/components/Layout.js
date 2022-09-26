import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = (props) => {
    return (
        <>
            <Header openMenu={props.openMenu} setOpenMenu={props.setOpenMenu} />
            {props.children}
            <Footer />
        </>
    );
}

export default Layout;
