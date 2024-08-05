
export const Pricing = () => {

    return (

        <section className="bg-white dark:bg-gray-900">

            {/*===========
                CONTENT
            ==============*/}
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">

                {/*==================
                    TITLE AND TEXT
                =====================*/}
                <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">

                    {/*=========
                        TITLE
                    ============*/}
                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        Designed for business teams like yours
                    </h2>

                    {/*========
                        TEXT
                    ===========*/}
                    <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        Here at Landwind we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
                    </p>

                </div>

                {/*=================
                    PRICING CARDS
                ====================*/}
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">

                    {/*================
                        STARTER PLAN
                    ===================*/}
                    <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">

                        {/*=========
                            TITLE
                        ============*/}
                        <h3 className="mb-4 text-2xl font-semibold">
                            Starter
                        </h3>

                        {/*========
                            TEXT
                        ===========*/}
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            Best option for personal use & for your next project.
                        </p>

                        {/*=========
                            PRICE
                        ============*/}
                        <div className="flex items-baseline justify-center my-8">

                            {/*==========
                                AMOUNT
                            =============*/}
                            <span className="mr-2 text-5xl font-extrabold">
                                $29
                            </span>

                            {/*==========
                                PERIOD
                            =============*/}
                            <span className="text-gray-500 dark:text-gray-400">
                                /month
                            </span>

                        </div>

                        {/*============
                            FEATURES
                        ===============*/}
                        <ul role="list" className="mb-8 space-y-4 text-left">

                            {/*============================
                                INDIVIDUAL CONFIGURATION 
                            ===============================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Individual configuration</span>
                            </li>

                            {/*============================
                                NO SETUP, OR HIDDEN FEES 
                            ===============================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>No setup, or hidden fees</span>
                            </li>

                            {/*=============
                                TEAM SIZE 
                            ================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Team size: <span className="font-semibold">1 developer</span></span>
                            </li>

                            {/*===================
                                PREMIUM SUPPORT 
                            ======================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Premium support: <span className="font-semibold">6 months</span></span>
                            </li>

                            {/*================
                                FREE UPDATES 
                            ===================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Free updates: <span className="font-semibold">6 months</span></span>
                            </li>

                        </ul>

                        {/*======================
                            GET STARTED BUTTON 
                        =========================*/}
                        <a href="#" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">
                            Get started
                        </a>

                    </div>

                    {/*================
                        COMPANY PLAN
                    ===================*/}
                    <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">

                        {/*=========
                            TITLE
                        ============*/}
                        <h3 className="mb-4 text-2xl font-semibold">
                            Company
                        </h3>

                        {/*========
                            TEXT
                        ===========*/}
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            Relevant for multiple users, extended & premium support.
                        </p>

                        {/*=========
                            PRICE
                        ============*/}
                        <div className="flex items-baseline justify-center my-8">

                            {/*==========
                                AMOUNT
                            =============*/}
                            <span className="mr-2 text-5xl font-extrabold">
                                $99
                            </span>

                            {/*==========
                                PERIOD
                            =============*/}
                            <span className="text-gray-500 dark:text-gray-400">
                                /month
                            </span>

                        </div>

                        {/*============
                            FEATURES
                        ===============*/}
                        <ul role="list" className="mb-8 space-y-4 text-left">

                            {/*============================
                                INDIVIDUAL CONFIGURATION 
                            ===============================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Individual configuration</span>
                            </li>

                            {/*============================
                                NO SETUP, OR HIDDEN FEES
                            ===============================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>No setup, or hidden fees</span>
                            </li>

                            {/*=============
                                TEAM SIZE
                            ================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Team size: <span className="font-semibold">10 developers</span></span>
                            </li>

                            {/*===================
                                PREMIUM SUPPORT
                            ======================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Premium support: <span className="font-semibold">24 months</span></span>
                            </li>

                            {/*================
                                FREE UPDATES
                            ===================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Free updates: <span className="font-semibold">24 months</span></span>
                            </li>

                        </ul>

                        {/*======================
                            GET STARTED BUTTON 
                        =========================*/}
                        <a href="#" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">
                            Get started
                        </a>

                    </div>

                    {/*===================
                        ENTERPRISE PLAN
                    =======================*/}
                    <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">

                        {/*=========
                            TITLE
                        ============*/}
                        <h3 className="mb-4 text-2xl font-semibold">
                            Enterprise
                        </h3>

                        {/*========
                            TEXT
                        ===========*/}
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            Best for large scale uses and extended redistribution rights.
                        </p>

                        {/*=========
                            PRICE
                        ============*/}
                        <div className="flex items-baseline justify-center my-8">

                            {/*==========
                                AMOUNT
                            =============*/}
                            <span className="mr-2 text-5xl font-extrabold">
                                $499
                            </span>

                            {/*==========
                                PERIOD
                            =============*/}
                            <span className="text-gray-500 dark:text-gray-400">
                                /month
                            </span>

                        </div>

                        {/*============
                            FEATURES
                        ===============*/}
                        <ul role="list" className="mb-8 space-y-4 text-left">

                            {/*============================
                                INDIVIDUAL CONFIGURATION 
                            ===============================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Individual configuration</span>
                            </li>

                            {/*============================
                                NO SETUP, OR HIDDEN FEES
                            ===============================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>No setup, or hidden fees</span>
                            </li>

                            {/*=============
                                TEAM SIZE
                            ================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Team size: <span className="font-semibold">100+ developers</span></span>
                            </li>

                            {/*===================
                                PREMIUM SUPPORT
                            ======================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Premium support: <span className="font-semibold">36 months</span></span>
                            </li>

                            {/*================
                                FREE UPDATES
                            ===================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Free updates: <span className="font-semibold">36 months</span></span>
                            </li>

                        </ul>

                        {/*======================
                            GET STARTED BUTTON 
                        =========================*/}
                        <a href="#" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">
                            Get started
                        </a>

                    </div>

                </div>

            </div>

        </section>

    )

}
