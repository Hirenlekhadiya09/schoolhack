import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Challenge from './Challenge';
import Main from './Main';

const Layout = (props) => {
    return (
        <div className='main-bg  min-h-screen'>
            <Header />
            {props.children}
            {/* <Main /> */}
            {/* <main>
    </main> */}
            <Challenge />
            <Footer />
        </div>
    );
};

export default Layout;