import NESTLELOGO from '../../../../assets/images/Nestlé.svg';
import PARMALATLOGO from '../../../../assets/images/Parmalat_logo.svg';
import LISTINDIARIOLOGO from '../../../../assets/images/Listin_diario_logo.svg';
import SAMSUNGLOGO from '../../../../assets/images/Samsung_wordmark.svg';
import VISALOGO from '../../../../assets/images/Visa_2021.svg';
import CLAROLOGO from '../../../../assets/images/Logo_de_Claro.svg';

export const Brands = () => {

    return (

        <section className="bg-white dark:bg-gray-900 select-none">

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
                        <img src={NESTLELOGO} alt="Nestle Logo" className="h-9 hover:text-gray-900 dark:hover:text-white select-none"></img>
                    </a>

                    {/* PARMALAT */}
                    <a className="cursor-pointer flex items-center lg:justify-center">
                        <img src={PARMALATLOGO} alt="Parmalat Logo" className="h-9 hover:text-gray-900 dark:hover:text-white select-none" />
                    </a>

                    {/* LISTIN DIARIO */}
                    <a className="cursor-pointer flex items-center lg:justify-center">
                        <img src={LISTINDIARIOLOGO} alt="Listin Diario Logo" className="h-10 hover:text-gray-900 dark:hover:text-white select-none" />
                    </a>

                    {/* SAMSUNG */}
                    <a className="cursor-pointer flex items-center lg:justify-center">
                        <img src={SAMSUNGLOGO} alt="Samsung Logo" className="h-9 hover:text-gray-900 dark:hover:text-white select-none" />
                    </a>

                    {/* VISA */}
                    <a className="cursor-pointer flex items-center lg:justify-center">
                        <img src={VISALOGO} alt="Visa Logo" className="h-8 hover:text-gray-900 dark:hover:text-white select-none" />
                    </a>

                    {/* CLARO */}
                    <a className="cursor-pointer flex items-center lg:justify-center">
                        <img src={CLAROLOGO} alt="Claro Logo" className="h-10 hover:text-gray-900 dark:hover:text-white select-none" />
                    </a>

                </div>

            </div>

        </section>

    )

}
