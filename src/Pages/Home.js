import React from 'react';
import Banner from '../Components/Banner';
import Delivary from '../Components/Delivary';
import Price from '../Components/Price';
import Customized from '../Components/Customized';
import Video from '../Components/Video';
import OrderPrice from '../Components/OrderPrice';
import Gallery from '../Components/Gallery';
import CustomerReview from '../Components/CustomerReview';
import Form from '../Components/Form';
import Footer from '../Components/Footer';


export const Home = () => {

    return (

        <>
        
            <Banner></Banner>
            <Delivary></Delivary>
            <Price></Price>
            <Customized></Customized>
            <Video></Video>
            <OrderPrice></OrderPrice>
            <Gallery></Gallery>
            <CustomerReview></CustomerReview>
            <Form></Form>
            <Footer></Footer>

        </>

    )

}


export default Home