import { Brands, Footer, Header, MainTextAndImage, Message, Phrase, Pricing, Statistics, Tools } from './components';
import { Products } from './components/products/Products';
import './HomePage.css';

const HomePage = () => {

    return (
        
        <>
        
            {/*==========
                HEADER
            =============*/}
            <Header />

            {/*=======================
                MAIN TEXT AND IMAGE
            ==========================*/}
            <MainTextAndImage />

            {/*==========
                BRANDS
            =============*/}
            <Brands />

            {/*=================
                TOOLS SECTION
            ====================*/}
            <Tools />

            {/*============
                PRODUCTS
            ===============*/}
            <Products/>

            {/*==============
                STATISTICS
            =================*/}
            <Statistics />

            {/*==========
                PHRASE
            =============*/}
            <Phrase />

            {/*===========
                PRICING
            ==============*/}
            <Pricing />
            
            {/*===========
                MESSAGE
            ==============*/}
            <Message />

            {/*==========
                FOOTER
            =============*/}
            <Footer />

        </>

    );

};

export default HomePage;