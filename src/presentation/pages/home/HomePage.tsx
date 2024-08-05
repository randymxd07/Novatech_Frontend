import { Brands, Footer, FrequentlyAskedQuestions, Header, MainTextAndImage, Message, Phrase, Pricing, Statistics, Tools } from './components';
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

            {/*==============================
                FREQUENTLY ASKED QUESTIONS
            =================================*/}
            <FrequentlyAskedQuestions />
            
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