import React from 'react';

function Footer(){

    return(
    <div class="mb-2">
        <div class="text-sm text-gray-500">
           Copyright &copy; {new Date().getFullYear()} Built with ❤ by <a class="text-blue-600" href="https://github.com/eulagee" rel="noreferrer" target="_blank">eulagee</a>
        </div>
    </div>
    )
}

export default Footer;
