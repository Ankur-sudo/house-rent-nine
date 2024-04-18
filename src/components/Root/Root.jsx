import { Outlet } from 'react-router-dom';
import NavBar from '../navBar/NavBar';
import Banner from '../banner/Banner';
import Footer from '../footer/Footer';
import { Helmet } from 'react-helmet-async';

const Root = () => {
    return (
        <div>
            <Helmet>
                <title>this is home</title>
            </Helmet>
            <NavBar></NavBar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;