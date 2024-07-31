import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './ChatLayout.css';

export const ChatLayout = () => {

  const [isDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    document.body.classList.add('chat-layout-styles');
    return () => {
      document.body.classList.remove('chat-layout-styles');
    };
  }, []);

  return (

    <main className={`font-sans flex flex-row mt-7 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>

      <section className="mx-3 sm:mx-20 flex flex-col w-full h-[calc(100vh-50px)] bg-opacity-10 p-5 rounded-3xl">

        <div className="flex flex-row h-full">

          <div className="flex flex-col flex-auto h-full p-1">

            <Outlet />

          </div>

        </div>

      </section>

    </main>

  );

};