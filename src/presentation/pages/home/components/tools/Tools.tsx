import SALESMANAGERAPP from '../../../../assets/images/sales-manager.png';
import EMAILMARKETINGRAPP from '../../../../assets/images/email-marketing.png';
import CRMDASHBOARDAPP from '../../../../assets/images/crm-dashboard.png';
import HRAPP from '../../../../assets/images/hr-app.png';
import PODCASTAPP from '../../../../assets/images/podcast-app.png';
import ECOMMERCEAPP from '../../../../assets/images/ecommerce-app.png';
import EVENTSCHEDULERAPP from '../../../../assets/images/events-scheduler.png';
import PROJECTWORKSPACEAPP from '../../../../assets/images/project-workspace.png';

export const Tools = () => {

    return (

        <section className="bg-gray-50 dark:bg-gray-800">

            {/*===========
                CONTENT
            ==============*/}
            <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">

                {/*=============
                    SECTION 1
                ================*/}
                <section className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">

                    {/*===============
                        INFORMATION
                    ==================*/}
                    <article className="text-gray-500 sm:text-lg dark:text-gray-400">

                        {/*=========
                            TITLE
                        ============*/}
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                            Trabaja con nuestras propias herramientas
                        </h2>

                        {/*========
                            TEXT
                        ===========*/}
                        <p className="mb-8 font-light lg:text-xl">
                            Ofrecemos excelentes experiencias de servicios y productos, no tienes la necesidad de depender de soluciones tradicionales, acelara el tiempo de desarrollo, elimine el trabajo duro e implemente cambios con facilidad.
                        </p>

                        {/*========
                            LIST
                        ===========*/}
                        <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">

                            {/* CONTINUOUS INTEGRATION AND DEPLOYMENT */}
                            <li className="flex space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Integración e implementación continuas</span>
                            </li>

                            {/* DEVELOPMENT WORKFLOW */}
                            <li className="flex space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Flujo de trabajo de desarrollo</span>
                            </li>

                            {/* KNOWLEDGE MANAGEMENT */}
                            <li className="flex space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Conocimiento administrativo</span>
                            </li>

                        </ul>

                        {/*========
                            TEXT 
                        ===========*/}
                        <p className="mb-8 font-light lg:text-xl">
                            Ofrecemos excelentes experiencias de servicios y productos rápidamente, sin recurrir a soluciones tradicionales.
                        </p>

                    </article>

                    {/*=========
                        IMAGE
                    ============*/}
                    <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="./images/feature-1.png" alt="dashboard feature image"></img>

                </section>

                {/*=============
                    SECTION 2
                ================*/}
                <section className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">

                    {/*=========
                        IMAGE
                    ============*/}
                    <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="./images/feature-2.png" alt="feature image 2"></img>

                    {/*===============
                        INFORMATION
                    ==================*/}
                    <div className="text-gray-500 sm:text-lg dark:text-gray-400">

                        {/*=========
                            TITLE
                        ============*/}
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                            Nosotros creemos en el potencial de crecimiento de tu empresa
                        </h2>

                        {/*========
                            TEXT
                        ===========*/}
                        <p className="mb-8 font-light lg:text-xl">
                            Acelere el trabajo de desarrollo crítico, elimine el trabajo duro e implemente cambios con facilidad.
                        </p>

                        {/*========
                            LIST
                        ===========*/}
                        <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">

                            {/* DYNAMIC REPORTS AND DASHBOARDS */}
                            <li className="flex space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Informes y paneles dinámicos</span>
                            </li>

                            {/* TEMPLATES FOR EVERYONE */}
                            <li className="flex space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Plantillas para todos</span>
                            </li>

                            {/* DEVELOPMENT WORKFLOW */}
                            <li className="flex space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Flujo de trabajo de desarrollo</span>
                            </li>

                            {/* LIMITLESS BUSINESS AUTOMATION */}
                            <li className="flex space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Automatización empresarial ilimitada</span>
                            </li>

                            {/* KNOWLEDGE MANAGEMENT */}
                            <li className="flex space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Conocimiento administrativo</span>
                            </li>

                        </ul>

                        {/*========
                            TEXT
                        ===========*/}
                        <p className="font-light lg:text-xl">
                            Ofrecemos excelentes experiencias de servicios y productos rápidamente, sin recurrir a soluciones tradicionales.
                        </p>

                    </div>

                </section>

            </div>

            <div className="mx-8 pb-8">

                <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
                    Productos que Ofrecemos
                </h1>

                <div className="grid grid-cols-4 gap-6">

                    {/* SALES MANAGER */}
                    <div className="cursor-pointer mb-2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md min-h-[300px] transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
                        <img src={SALESMANAGERAPP} alt="Sales Manager" className="w-full h-64 object-cover rounded-t-lg" />
                        <p className="mt-7 text-center text-2xl font-bold text-gray-900 dark:text-gray-200">
                            Manejador de ventas
                        </p>
                    </div>

                    {/* EMAIL MARKETING */}
                    <div className="cursor-pointer mb-2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md min-h-[300px] transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
                        <img src={EMAILMARKETINGRAPP} alt="Marketing de Correo" className="w-full h-64 object-cover rounded-t-lg" />
                        <p className="mt-7 text-center text-2xl font-bold text-gray-900 dark:text-gray-200">
                            Marketing de Correo
                        </p>
                    </div>

                    {/* CRM DASHBOARD */}
                    <div className="cursor-pointer mb-2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md min-h-[300px] transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
                        <img src={CRMDASHBOARDAPP} alt="Dashboard CRM" className="w-full h-64 object-cover rounded-t-lg" />
                        <p className="mt-7 text-center text-2xl font-bold text-gray-900 dark:text-gray-200">
                            Dashboard CRM
                        </p>
                    </div>

                    {/* HR APP */}
                    <div className="cursor-pointer mb-2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md min-h-[300px] transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
                        <img src={HRAPP} alt="Aplicación de Recursos Humanos" className="w-full h-64 object-cover rounded-t-lg" />
                        <p className="mt-7 text-center text-2xl font-bold text-gray-900 dark:text-gray-200">
                            Aplicación de Recursos Humanos
                        </p>
                    </div>
                    
                    {/* PODCAST APP */}
                    <div className="cursor-pointer mb-2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md min-h-[300px] transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
                        <img src={PODCASTAPP} alt="Aplicación de Recursos Humanos" className="w-full h-64 object-cover rounded-t-lg" />
                        <p className="mt-7 text-center text-2xl font-bold text-gray-900 dark:text-gray-200">
                            Aplicación de Podcasts
                        </p>
                    </div>
                    
                    {/* ECOMMERCE APP */}
                    <div className="cursor-pointer mb-2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md min-h-[300px] transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
                        <img src={ECOMMERCEAPP} alt="Aplicación de Recursos Humanos" className="w-full h-64 object-cover rounded-t-lg" />
                        <p className="mt-7 text-center text-2xl font-bold text-gray-900 dark:text-gray-200">
                            Aplicación de eCommerce
                        </p>
                    </div>
                    
                    {/* EVENTS SCHEDULER */}
                    <div className="cursor-pointer mb-2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md min-h-[300px] transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
                        <img src={EVENTSCHEDULERAPP} alt="Aplicación de Recursos Humanos" className="w-full h-64 object-cover rounded-t-lg" />
                        <p className="mt-7 text-center text-2xl font-bold text-gray-900 dark:text-gray-200">
                            Programador de Eventos
                        </p>
                    </div>
                    
                    {/* PROJECT WORKPLACE */}
                    <div className="cursor-pointer mb-2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md min-h-[300px] transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
                        <img src={PROJECTWORKSPACEAPP} alt="Aplicación de Recursos Humanos" className="w-full h-64 object-cover rounded-t-lg" />
                        <p className="mt-7 text-center text-2xl font-bold text-gray-900 dark:text-gray-200">
                            Workplace de proyectos
                        </p>
                    </div>

                </div>

            </div>

        </section>

    )

}
