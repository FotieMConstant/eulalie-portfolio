import React from 'react';
import html from '../assets/images/html.png'
import javascript from '../assets/images/javascript.png'
import reactjs from '../assets/images/reactjs.png'
import git from '../assets/images/git.png'

function Footer(){

    return(
    <div class="mt-3">
        <div class="container">
            <div class="text-2xl text-center text-gray-600 font-bold">
            Skill / What I nerd out about
            </div>
            <div class="flex flex-wrap justify-center my-9">
            <div class="m-4 floating">
                <img class="w-12" src={html} alt="html5"/>
            </div>
            <div class="m-4 floating">
                <img class="w-12" src={javascript} alt="html5"/>
            </div>
            <div class="m-4 floating">
                <img class="w-9" src={reactjs} alt="html5"/>
            </div>
            <div class="m-4 floating">
                <img class="w-16" src={git} alt="html5"/>
            </div>
        </div>
        </div>
        <button class="mt-2 py-2 px-4 rounded inline-flex items-center">
            <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span class="text-grey-300 font-bold">Download My Resume</span>
        </button>
    </div>
    )
}

export default Footer;
