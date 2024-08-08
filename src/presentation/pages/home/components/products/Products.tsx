import SALESMANAGERAPP from '../../../../assets/images/sales-manager.png';
import EMAILMARKETINGRAPP from '../../../../assets/images/email-marketing.png';
import CRMDASHBOARDAPP from '../../../../assets/images/crm-dashboard.png';
import HRAPP from '../../../../assets/images/hr-app.png';
import PODCASTAPP from '../../../../assets/images/podcast-app.png';
import ECOMMERCEAPP from '../../../../assets/images/ecommerce-app.png';
import EVENTSCHEDULERAPP from '../../../../assets/images/events-scheduler.png';
import PROJECTWORKSPACEAPP from '../../../../assets/images/project-workspace.png';

export const Products = () => {

    return (

        <section id="products" className="bg-gray-50 dark:bg-gray-800 select-none">

            <div className="mx-8 pb-8">

                <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
                    Productos que Ofrecemos
                </h1>

                <div className="grid grid-cols-4 gap-6">

                    {/* SALES MANAGER */}
                    <div className="cursor-pointer mb-2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md min-h-[300px] transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
                        <a href="https://preview.keenthemes.com/metronic8/demo9/index.html?mode=light" target='_blank'>
                            <img src={SALESMANAGERAPP} alt="Sales Manager" className="w-full h-64 object-cover rounded-t-lg" />
                            <p className="mt-7 text-center text-2xl font-bold text-gray-900 dark:text-gray-200">
                                Manejador de ventas
                            </p>
                        </a>
                    </div>

                    {/* EMAIL MARKETING */}
                    <div className="cursor-pointer mb-2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md min-h-[300px] transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
                        <a href="https://preview.keenthemes.com/metronic8/demo38/index.html?mode=light" target='_blank'>
                            <img src={EMAILMARKETINGRAPP} alt="Marketing de Correo" className="w-full h-64 object-cover rounded-t-lg" />
                            <p className="mt-7 text-center text-2xl font-bold text-gray-900 dark:text-gray-200">
                                Marketing de Correo
                            </p>
                        </a>
                    </div>

                    {/* CRM DASHBOARD */}
                    <div className="cursor-pointer mb-2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md min-h-[300px] transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
                        <a href="https://preview.keenthemes.com/metronic8/demo60/index.html?mode=light" target="_blank">
                            <img src={CRMDASHBOARDAPP} alt="Dashboard CRM" className="w-full h-64 object-cover rounded-t-lg" />
                            <p className="mt-7 text-center text-2xl font-bold text-gray-900 dark:text-gray-200">
                                Dashboard CRM
                            </p>
                        </a>
                    </div>

                    {/* HR APP */}
                    <div className="cursor-pointer mb-2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md min-h-[300px] transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
                        <a href="https://preview.keenthemes.com/metronic8/demo40/index.html?mode=light" target="_blank">
                            <img src={HRAPP} alt="Aplicación de Recursos Humanos" className="w-full h-64 object-cover rounded-t-lg" />
                            <p className="mt-7 text-center text-2xl font-bold text-gray-900 dark:text-gray-200">
                                Aplicación de Recursos Humanos
                            </p>
                        </a>
                    </div>

                    {/* PODCAST APP */}
                    <div className="cursor-pointer mb-2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md min-h-[300px] transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
                        <a href="https://preview.keenthemes.com/metronic8/demo16/index.html?mode=light" target="_blank">
                            <img src={PODCASTAPP} alt="Aplicación de Recursos Humanos" className="w-full h-64 object-cover rounded-t-lg" />
                            <p className="mt-7 text-center text-2xl font-bold text-gray-900 dark:text-gray-200">
                                Aplicación de Podcasts
                            </p>
                        </a>
                    </div>

                    {/* ECOMMERCE APP */}
                    <div className="cursor-pointer mb-2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md min-h-[300px] transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
                        <a href="https://preview.keenthemes.com/metronic8/demo28/index.html?mode=light" target="_blank">
                            <img src={ECOMMERCEAPP} alt="Aplicación de Recursos Humanos" className="w-full h-64 object-cover rounded-t-lg" />
                            <p className="mt-7 text-center text-2xl font-bold text-gray-900 dark:text-gray-200">
                                Aplicación de eCommerce
                            </p>
                        </a>
                    </div>

                    {/* EVENTS SCHEDULER */}
                    <div className="cursor-pointer mb-2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md min-h-[300px] transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
                        <a href="https://preview.keenthemes.com/metronic8/demo17/index.html?mode=light" target='_blank'>
                            <img src={EVENTSCHEDULERAPP} alt="Aplicación de Recursos Humanos" className="w-full h-64 object-cover rounded-t-lg" />
                            <p className="mt-7 text-center text-2xl font-bold text-gray-900 dark:text-gray-200">
                                Programador de Eventos
                            </p>
                        </a>
                    </div>

                    {/* PROJECT WORKPLACE */}
                    <div className="cursor-pointer mb-2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md min-h-[300px] transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
                        <a href="https://preview.keenthemes.com/metronic8/demo14/index.html?mode=light" target="_blank">
                            <img src={PROJECTWORKSPACEAPP} alt="Aplicación de Recursos Humanos" className="w-full h-64 object-cover rounded-t-lg" />
                            <p className="mt-7 text-center text-2xl font-bold text-gray-900 dark:text-gray-200">
                                Workplace de proyectos
                            </p>
                        </a>
                    </div>

                </div>

            </div>
            
        </section>

    )
}
