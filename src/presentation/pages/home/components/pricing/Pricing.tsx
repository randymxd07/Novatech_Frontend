
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
                        Diseñado para equipos empresariales como el suyo
                    </h2>

                    {/*========
                        TEXT
                    ===========*/}
                    <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        En NOVATECH nos centramos en mercados donde la tecnología, la innovación y el capital pueden generar valor a largo plazo e impulsar el crecimiento económico.
                    </p>

                </div>

                {/*=================
                    PRICING CARDS
                ====================*/}
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">

                    {/*=============
                        FREE PLAN
                    ================*/}
                    <div className="select-none flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">

                        {/*=========
                            TITLE
                        ============*/}
                        <h3 className="mb-4 text-2xl font-semibold">
                            Gratuito
                        </h3>

                        {/*========
                            TEXT
                        ===========*/}
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            Este plan está diseñado para pequeñas empresas que desean explorar las funcionalidades básicas de NOVATECH sin ningún costo.
                        </p>

                        {/*=========
                            PRICE
                        ============*/}
                        <div className="flex items-baseline justify-center my-8">

                            {/*==========
                                AMOUNT
                            =============*/}
                            <span className="mr-2 text-5xl font-extrabold">
                                $0
                            </span>

                            {/*==========
                                PERIOD
                            =============*/}
                            <span className="text-gray-500 dark:text-gray-400">
                                /mes
                            </span>

                        </div>

                        {/*============
                            FEATURES
                        ===============*/}
                        <ul role="list" className="mb-8 space-y-4 text-left">

                            {/*==================================
                                ACCESS TO BASIC ANALYSIS TOOLS
                            =====================================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Acceso a herramientas básicas de análisis.</span>
                            </li>

                            {/*=====================
                                LIMITED REPORTING
                            ========================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Informes limitados.</span>
                            </li>

                            {/*===============================
                                COMMUNITY TECHNICAL SUPPORT
                            ==================================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Soporte técnico comunitario.</span>
                            </li>

                        </ul>

                        {/*======================
                            GET STARTED BUTTON 
                        =========================*/}
                        <a className="cursor-pointer text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 mt-auto text-center dark:text-white dark:focus:ring-blue-900">
                            Empezar
                        </a>

                    </div>

                    {/*==============
                        BASIC PLAN
                    =================*/}
                    <div className="select-none flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">

                        {/*=========
                            TITLE
                        ============*/}
                        <h3 className="mb-4 text-2xl font-semibold">
                            Básico
                        </h3>

                        {/*========
                            TEXT
                        ===========*/}
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            Este plan es ideal para pequeñas empresas que están comenzando a digitalizar sus operaciones y necesitan funcionalidades esenciales.
                        </p>

                        {/*=========
                            PRICE
                        ============*/}
                        <div className="flex items-baseline justify-center my-8">

                            {/*==========
                                AMOUNT
                            =============*/}
                            <span className="mr-2 text-5xl font-extrabold">
                                $1,000
                            </span>

                            {/*==========
                                PERIOD
                            =============*/}
                            <span className="text-gray-500 dark:text-gray-400">
                                /mes
                            </span>

                        </div>

                        {/*============
                            FEATURES
                        ===============*/}
                        <ul role="list" className="mb-8 space-y-4 text-left">

                            {/*==========================================
                                LIMITED ACCESS TO BASIC ANALYSIS TOOLS 
                            =============================================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Acceso limitado a herramientas básicas de análisis.</span>
                            </li>

                            {/*=====================
                                UNLIMITED REPORTS
                            ========================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Informes ilimitados.</span>
                            </li>

                            {/*===========================
                                BASIC TECHNICAL SUPPORT
                            ==============================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Soporte técnico básico.</span>
                            </li>

                        </ul>

                        {/*======================
                            GET STARTED BUTTON 
                        =========================*/}
                        <a className="cursor-pointer text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 mt-auto text-center dark:text-white  dark:focus:ring-blue-900">
                            Empezar
                        </a>

                    </div>

                    {/*=====================
                        INTERMEDIATE PLAN
                    ========================*/}
                    <div className="select-none flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">

                        {/*=========
                            TITLE
                        ============*/}
                        <h3 className="mb-4 text-2xl font-semibold">
                            Intermedio
                        </h3>

                        {/*========
                            TEXT
                        ===========*/}
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            Este plan ofrece un equilibrio entre costo y valor, adecuado para empresas en crecimiento que buscan mejorar su eficiencia operativa.
                        </p>

                        {/*=========
                            PRICE
                        ============*/}
                        <div className="flex items-baseline justify-center my-8">

                            {/*==========
                                AMOUNT
                            =============*/}
                            <span className="mr-2 text-5xl font-extrabold">
                                $1,500
                            </span>

                            {/*==========
                                PERIOD
                            =============*/}
                            <span className="text-gray-500 dark:text-gray-400">
                                /mes
                            </span>

                        </div>

                        {/*============
                            FEATURES
                        ===============*/}
                        <ul role="list" className="mb-8 space-y-4 text-left">

                            {/*================================
                                ACCESS TO ALL ANALYSIS TOOLS
                            ===================================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Acceso a todas las herramientas de análisis.</span>
                            </li>

                            {/*=====================
                                UNLIMITED REPORTS
                            ========================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Informes ilimitados.</span>
                            </li>

                            {/*==============================
                                PRIORITY TECHNICAL SUPPORT
                            =================================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Soporte técnico prioritario.</span>
                            </li>

                            {/*=====================================
                                ADDITIONAL CUSTOMIZATION FEATURES
                            ========================================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Funcionalidades adicionales de personalización.</span>
                            </li>

                        </ul>

                        {/*======================
                            GET STARTED BUTTON 
                        =========================*/}
                        <a className="cursor-pointer text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 mt-auto text-center dark:text-white dark:focus:ring-blue-900">
                            Empezar
                        </a>

                    </div>

                    {/*=================
                        ADVANCED PLAN
                    ====================*/}
                    <div className="select-none flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">

                        {/*=========
                            TITLE
                        ============*/}
                        <h3 className="mb-4 text-2xl font-semibold">
                            Avanzado
                        </h3>

                        {/*========
                            TEXT
                        ===========*/}
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            Este plan está dirigido a empresas que requieren análisis más profundos y soluciones personalizadas para tomar decisiones estratégicas.
                        </p>

                        {/*=========
                            PRICE
                        ============*/}
                        <div className="flex items-baseline justify-center my-8">

                            {/*==========
                                AMOUNT
                            =============*/}
                            <span className="mr-2 text-5xl font-extrabold">
                                $2,500
                            </span>

                            {/*==========
                                PERIOD
                            =============*/}
                            <span className="text-gray-500 dark:text-gray-400">
                                /mes
                            </span>

                        </div>

                        {/*============
                            FEATURES
                        ===============*/}
                        <ul role="list" className="mb-8 space-y-4 text-left">

                            {/*=============================================
                                ALL THE FEATURES OF THE INTERMEDIATE PLAN 
                            ================================================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Todas las características del plan intermedio.</span>
                            </li>

                            {/*===================================
                                ACCESS TO ADVANCED DATA REPORTS
                            ======================================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Acceso a reportes avanzados de datos.</span>
                            </li>

                            {/*========================================================
                                PERSONALIZED ARTIFICIAL INTELLIGENCE RECOMMENDATIONS
                            ===========================================================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Recomendaciones personalizadas de inteligencia artificial.</span>
                            </li>

                        </ul>

                        {/*======================
                            GET STARTED BUTTON 
                        =========================*/}
                        <a className="cursor-pointer text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 mt-auto text-center dark:text-white  dark:focus:ring-blue-900">
                            Empezar
                        </a>

                    </div>
                    
                    {/*================
                        PREMIUM PLAN
                    ===================*/}
                    <div className="select-none flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">

                        {/*=========
                            TITLE
                        ============*/}
                        <h3 className="mb-4 text-2xl font-semibold">
                            Premium
                        </h3>

                        {/*========
                            TEXT
                        ===========*/}
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            Este plan es para empresas que buscan el máximo nivel de soporte y funcionalidades avanzadas para optimizar su transformación digital.
                        </p>

                        {/*=========
                            PRICE
                        ============*/}
                        <div className="flex items-baseline justify-center my-8">

                            {/*==========
                                AMOUNT
                            =============*/}
                            <span className="mr-2 text-5xl font-extrabold">
                                $3,500
                            </span>

                            {/*==========
                                PERIOD
                            =============*/}
                            <span className="text-gray-500 dark:text-gray-400">
                                /mes
                            </span>

                        </div>

                        {/*============
                            FEATURES
                        ===============*/}
                        <ul role="list" className="mb-8 space-y-4 text-left">

                            {/*=========================================
                                FULL ACCESS TO ALL TOOLS AND SERVICES 
                            ============================================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Acceso total a todas las herramientas y servicios.</span>
                            </li>

                            {/*==========================
                                24/7 TECHNICAL SUPPORT
                            =============================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Soporte técnico 24/7.</span>
                            </li>

                            {/*================================
                                ADVANCED PREDICTIVE ANALYSIS
                            ===================================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Análisis predictivo avanzado.</span>
                            </li>
                            
                            {/*===========================
                                PERSONALIZED CONSULTING
                            ==============================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Consultoría personalizada.</span>
                            </li>

                        </ul>

                        {/*======================
                            GET STARTED BUTTON 
                        =========================*/}
                        <a className="cursor-pointer text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 mt-auto text-center dark:text-white  dark:focus:ring-blue-900">
                            Empezar
                        </a>

                    </div>
                    
                    {/*=====================
                        PERSONALIZED PLAN
                    ========================*/}
                    <div className="select-none flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">

                        {/*=========
                            TITLE
                        ============*/}
                        <h3 className="mb-4 text-2xl font-semibold">
                            Plan Personalizado
                        </h3>

                        {/*========
                            TEXT
                        ===========*/}
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            Con este plan tu defines lo que necesitas para tu empresa, este se enfoca en las experiencias personalizadas y los precios pueden variar.
                        </p>

                        {/*=========
                            PRICE
                        ============*/}
                        <div className="flex items-baseline justify-center my-8">

                            {/*==========
                                AMOUNT
                            =============*/}
                            <span className="mr-2 text-5xl font-extrabold">
                                -
                            </span>

                            {/*==========
                                PERIOD
                            =============*/}
                            <span className="text-gray-500 dark:text-gray-400">
                                /mes
                            </span>

                        </div>

                        {/*============
                            FEATURES
                        ===============*/}
                        <ul role="list" className="mb-8 space-y-4 text-left">

                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Herramientas y servicios personalizados.</span>
                            </li>

                            {/*==========================
                                24/7 TECHNICAL SUPPORT
                            =============================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Soporte técnico personalizado.</span>
                            </li>
                            
                            {/*===========================
                                PERSONALIZED CONSULTING
                            ==============================*/}
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                <span>Consultoría personalizada.</span>
                            </li>

                        </ul>

                        {/*======================
                            GET STARTED BUTTON 
                        =========================*/}
                        <a className="cursor-pointer text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 mt-auto text-center dark:text-white  dark:focus:ring-blue-900">
                            Empezar
                        </a>

                    </div>

                </div>

            </div>

        </section>

    )

}
