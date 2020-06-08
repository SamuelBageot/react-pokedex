import React, { Fragment } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const layout = props => (
    <Fragment>
        <Header />
        <main>{props.children}</main>
        <Footer />
    </Fragment>
)

export default layout;