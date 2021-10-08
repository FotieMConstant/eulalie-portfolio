import React from 'react';


function AboutMe(){
    return(
        <div>
            {/* hero */}
        <div class="hero bg-gray-100 py-16">
          {/* container */}
          <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
            {/* hero wrapper */}
            <div
              class="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              {/* hero text */}
              <div class="text-center md:text-left hero-text col-span-6">
                <h1
                  id="text-1"
                  class="font-bold text-2xl md:text-4xl max-w-xl text-gray-900 leading-tight"
                >
                  Howdy,
                </h1>
                <h1
                  id="text-2"
                  class="font-bold text-2xl md:text-4xl max-w-xl text-gray-900 leading-tight"
                >
                  <span id="text-2-span">I'm Eulalie</span>
                </h1>
                <span class="text-black">
                  <h4 class="subheading font-weight-thin">
                    <span class="textAnimated text-gray-700">Full-stack web developer </span>
                  </h4>
                </span>
              </div>

              {/* hero image  */}
              <div class="hero-image col-span-6">
                <img
                  class="floating md:mt-0 rounded-full w-40 shadow-sm ml-auto mr-auto "
                  src="https://avatars.githubusercontent.com/u/45496074?v=4"
                  alt="Eulalie profile"
                />
              </div>
            </div>
          </div>
        </div>
            {/* end hero */}


  <div>
    <div class="mt-3 md:mt-6">
      <div class=" lg:py-12 lg:flex lg:justify-center">
        <div
          class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg"
        >
          <div class="lg:w-1/2">
            <div
              class="h-64 bg-cover lg:rounded-lg lg:h-full __aboutHeroImg"
            />
          </div>
          <div class="py-6 px-6 max-w-xl lg:max-w-5xl lg:w-1/2 text-left">
            <h2 class="text-3xl text-gray-800 font-bold">
            (  Get to know <span class="text-indigo-600">Me )</span>
            </h2>
            <p class="mt-4 text-gray-600 mt-1">
            I'm pursuing a Full-Stack Web Development Certificate from Georgia Tech and have extensive management experience as an environmental geologist and marketer.
            I have a passion for creating clean, polished UI designs using HTML, CSS, & JavaScript, keeping user functionality in mind.
            </p>
            <p class="mt-5 text-md leading-none font-medium">
              <a class="" href="#nothing" title="Heading Link">
                About me
              </a>
            </p>
            <p class="mt-2 text-xs text-gray-500">
              Full-stack Developer from San Diego, California, United States.
            </p>
            <p class="mt-1 text-gray-600">
              lorem ipsum dolor sit am 
              lorem ipsum dolor sit am
              lorem ipsum dolor sit am
              lorem ipsum dolor sit am
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
    )
}

export default AboutMe;
