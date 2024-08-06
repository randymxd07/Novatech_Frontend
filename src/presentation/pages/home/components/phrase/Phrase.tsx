
export const Phrase = () => {

    return (

        <section className="bg-gray-50 dark:bg-gray-800">

            {/*===========
                CONTENT
            ==============*/}
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">

                {/*=============
                    CONTAINER
                ================*/}
                <figure className="max-w-screen-md mx-auto">

                    {/*========
                        ICON
                    ===========*/}
                    <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                    </svg>

                    {/*========
                        TEXT
                    ===========*/}
                    <blockquote>
                        <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
                            "NOVATECH es una muy buena plataforma, nuestro equipo utiliza miles de componentes y páginas prediseñadas, la elección perfecta para la transformacion digital de tu empresa".
                        </p>
                    </blockquote>

                    {/*==========
                        AUTHOR
                    =============*/}
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">

                        {/*=========
                            IMAGE 
                        ============*/}
                        <img className="w-6 h-6 rounded-full" src="https://m.media-amazon.com/images/I/71DZX+tbF+L._AC_UF894,1000_QL80_.jpg" alt="profile picture"></img>

                        {/*=======================
                            NAME AND OCCUPATION
                        ==========================*/}
                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <div className="pr-3 font-medium text-gray-900 dark:text-white">Randy Martínez</div>
                            <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO de NOVATECH</div>
                        </div>

                    </figcaption>

                </figure>

            </div>

        </section>

    )

}
