import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { darkModeState } from "./atoms/atoms";
import { BiMoon } from 'react-icons/bi'
import { ImSun } from 'react-icons/im';

const DarkModeButton = () => {
   const setIsDark = useSetRecoilState(darkModeState);
   const isDark = useRecoilValue(darkModeState)

   const setDarkMode = () => {
      if (localStorage.getItem('color-theme')) {
         if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            setIsDark(true);
         } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            setIsDark(false);
         }

         // if NOT set via local storage previously
      } else {
         if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            setIsDark(false);
         } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            setIsDark(true);
         }
      }
   }

   useEffect(() => {
      if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
         document.documentElement.classList.add('dark');
         setIsDark(true);
      } else {
         document.documentElement.classList.remove('dark');
         setIsDark(false);
      }
   }, [setIsDark])

   return (
      <button
         aria-label="Open live demo"
         title="Dark/Light mode"
         onClick={setDarkMode}
         className='absolute top-5 right-5
               text-liSec bg-liBg dark:hover:text-light dark:hover:bg-bgAlt 
               hover:bg-liSec hover:text-liBg
                transition ease-linear duration-300
                w-max py-1 px-3 rounded-lg cursor-pointer border-solid border-[1px] 
                border-liSec dark:border-primary dark:bg-primaryAlt dark:text-bg
                print:text-xs flex items-center gap-2'>
         {isDark ? <ImSun size={'1.5em'} /> : <BiMoon size={'1.5em'} />}
      </button>
   )
}

export default DarkModeButton;