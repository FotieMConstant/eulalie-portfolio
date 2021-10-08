import React, {useEffect} from 'react';

function Appbar(){
    // run only when DOM is ready
    useEffect(() => {
        console.log('Appbar after render');
        __appBarSelfInit();
    }, []);

    // init app bar function
    function __appBarSelfInit() {
        const nav = document.getElementById('site-menu')
        const header = document.getElementById('top')
    
        window.addEventListener('scroll', function () {
          if (window.scrollY >= 400) {
            // adjust this value based on site structure and header image height
            nav.classList.add('nav-sticky')
            header.classList.add('pt-scroll')
          } else {
            nav.classList.remove('nav-sticky')
            header.classList.remove('pt-scroll')
          }
        })
    }
  
    
    // function to navToggle menu on mobile
  function navToggle(){
        const btn = document.getElementById('menuBtn');
        const nav = document.getElementById('menu');

        btn.classList.toggle('open');
        nav.classList.toggle('flex');
        nav.classList.toggle('hidden');
    }

    return(
    <div>
        <header
        id="top"
        class="w-full flex flex-col fixed sm:relative bg-white pin-t pin-r pin-l z-10"
        >
        <nav
            id="site-menu"
            class="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white shadow sm:shadow-none border-t-4 border-red-900"
        >
            <div
            class="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center"
            >
            <a href="https://github.com/eulagee" target="_blank" rel="noreferrer" class="no-underline py-1">
                <h1 class="font-bold text-lg tracking-widest">
                <div class="w-28">Eulalie</div></h1></a>
            <button
                id="menuBtn"
                class="hamburger block sm:hidden focus:outline-none"
                type="button"
                onClick={navToggle}
            >
                <span class="hamburger__top-bun" />
                <span class="hamburger__bottom-bun" />
            </button>
            </div>
            <div
            id="menu"
            class="w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden"
            >
            <a
                class="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2"
                href="#aboutme"
            >About Me</a>
            <a
                class="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2"
                href="#portfolio"
            >Portfolio</a>
            <a
                class="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2"
                href="#contact"
            >Contact</a>
                <a
                class="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2"
                href="#resume"
            >Resume</a>
            </div>
        </nav>
        </header>
    </div>
    )
}

export default Appbar;
