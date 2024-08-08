
export const Message = () => {

    return (

        <section className="bg-gray-50 dark:bg-gray-800 select-none">

            {/*===========
                CONTENT
            ==============*/}
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">

                {/*=============
                    CONTAINER
                ================*/}
                <div className="max-w-screen-sm mx-auto text-center">

                    {/*=========
                        TITLE
                    ============*/}
                    <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                        Comience su prueba gratis hoy
                    </h2>

                    {/*========
                        TEXT
                    ===========*/}
                    <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                        Pruebe la plataforma NOVATECH durante 30 días. No se requiere tarjeta de crédito.
                    </p>

                    {/*=================================
                        FREE TRIAL FOR 30 DAYS BUTTON
                    ====================================*/}
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Prueba gratuita durante 30 días
                    </a>

                </div>

            </div>

        </section>

    )

}
