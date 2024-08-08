import ILUSTRACION1 from '../../../../assets/images/ilustration-1.png';

export const MainTextAndImage = () => {

    return (

        <main id="main" className="bg-white dark:bg-gray-900">

            {/*========
                GRID 
            ===========*/}
            <article className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">

                {/*====================
                    TEXT AND BUTTONS 
                =======================*/}
                <section className="mr-auto place-self-center lg:col-span-7">

                    {/*=========
                        TITLE
                    ============*/}
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white select-none">
                        Transforma tu negocio con nosotros.
                    </h1>

                    {/*=============
                        MAIN TEXT
                    ================*/}
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 select-none">
                        Esta es la platforma perfecta para que comiences a realizar la transformación digital de tu empresa, NOVATECH es una plataforma que te brinda soporte técnico las 24 horas del día, si no tienes departamento de tecnología o necesitas algún consejo tecnológico esta es tu plataforma.
                    </p>

                    {/*===========
                        BUTTONS
                    ==============*/}
                    <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">

                        {/*=========================
                            VIEW ON GITHUB BUTTON
                        ============================*/}
                        <a className="cursor-pointer inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center bg-blue-600 text-white border border-gray-200 rounded-lg sm:w-auto hover:bg-blue-700 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-blue-700 dark:focus:ring-gray-800 select-none">
                            Comience la prueba gratuita de 30 días
                        </a>

                        {/*=========================
                            GET FIGMA FILE BUTTON
                        ============================*/}
                        <a className="cursor-pointer inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 select-none">
                            Precios & Preguntas Frecuentes
                        </a>

                    </div>

                </section>

                {/*=========
                    IMAGE 
                ============*/}
                <section className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={ILUSTRACION1} alt="Ilustration 1" />
                </section>

            </article>

        </main>

    )

}
