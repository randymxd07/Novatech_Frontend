
export const Brands = () => {

    return (

        <section className="bg-white dark:bg-gray-900">

            {/*===========
                CONTENT 
            ==============*/}
            <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">

                {/*========
                    GRID
                ===========*/}
                <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400 pt-4">

                    {/* NESTLE */}
                    <a className="cursor-pointer flex items-center lg:justify-center">
                        <img src="/public/images/Nestlé.svg" alt="Nestle Logo" className="h-9 hover:text-gray-900 dark:hover:text-white select-none"></img>
                    </a>

                    {/* PARMALAT */}
                    <a className="cursor-pointer flex items-center lg:justify-center">
                        <img src="/public/images/Parmalat_logo.svg" alt="Parmalat Logo" className="h-9 hover:text-gray-900 dark:hover:text-white select-none" />
                    </a>

                    {/* LISTIN DIARIO */}
                    <a className="cursor-pointer flex items-center lg:justify-center">
                        <img src="/public/images/Listin_diario_logo.svg" alt="Listin Diario Logo" className="h-10 hover:text-gray-900 dark:hover:text-white select-none" />
                    </a>

                    {/* SAMSUNG */}
                    <a className="cursor-pointer flex items-center lg:justify-center">
                        <img src="/public/images/Samsung_wordmark.svg" alt="Samsung Logo" className="h-9 hover:text-gray-900 dark:hover:text-white select-none" />
                    </a>

                    {/* VISA */}
                    <a className="cursor-pointer flex items-center lg:justify-center">
                        <img src="/public/images/Visa_2021.svg" alt="Visa Logo" className="h-8 hover:text-gray-900 dark:hover:text-white select-none" />
                    </a>

                    {/* CLARO */}
                    <a className="cursor-pointer flex items-center lg:justify-center">
                        <img src="/public/images/Logo_de_Claro.svg" alt="Claro Logo" className="h-10 hover:text-gray-900 dark:hover:text-white select-none" />
                    </a>

                </div>

            </div>

        </section>

    )

}
