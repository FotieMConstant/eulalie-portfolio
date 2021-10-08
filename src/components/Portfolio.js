import React, {useState, useEffect} from 'react';

function Portfolio(){

      //State for details
  const [Project, setProject] = useState([]);
  function __initProjects(){
      setProject([
        {
          id: 1,
          name: 'Metal Fighters',
          lang: [{ name: 'JavaScript' }, { name: 'HTML5' }],
          description:
            'lorem ipsum dolor sit am lorem ipsum dolor sit am lorem ipsum dolor sit am lorem ipsum dolor sit am.',
          date: '2020',
          thumbnail:
            'https://raw.githubusercontent.com/FotieMConstant/fotiemconstant.github.io/vue-portfolio/img/portfolio/metal-fighters.PNG',
          liveView: 'https://fotiemconstant.github.io/Metal-Fighters/',
          githubRepo: 'https://github.com/FotieMConstant/Metal-Fighters'
        },
        {
          id: 2,
          name: 'Restaurant-review',
          lang: [
            { name: 'JavaScript' },
            { name: 'React' },
            { name: 'Material UI' }
          ],
          description:
            'lorem ipsum dolor sit am lorem ipsum dolor sit am lorem ipsum dolor sit am lorem ipsum dolor sit am.',
          date: '2020',
          thumbnail:
            'https://raw.githubusercontent.com/FotieMConstant/fotiemconstant.github.io/vue-portfolio/img/portfolio/restaurant.PNG',
          liveView: null,
          githubRepo: 'https://github.com/FotieMConstant/Restaurant-review'
        },
        {
          id: 3,
          name: 'Quote Generator',
          lang: [{ name: 'JavaScript' }, { name: 'HTML5' }, { name: 'jQuery' }],
          description:
            'lorem ipsum dolor sit am lorem ipsum dolor sit am lorem ipsum dolor sit am lorem ipsum dolor sit am.',
          date: '2020',
          thumbnail:
            'https://raw.githubusercontent.com/FotieMConstant/fotiemconstant.github.io/vue-portfolio/img/portfolio/quote-generator.PNG',
          liveView: 'https://fotiemconstant.github.io/Project-5/',
          githubRepo: 'https://github.com/FotieMConstant/Project-5'
        },
      ])
  }
      useEffect(() => {
        __initProjects();
        console.log(Project)
    }, []);

    return(
    <div id="portfolio">
          <div class="container mt-16">
    <div class="text-2xl text-center text-gray-600 font-bold">
      Portfolio and Open source
    </div>
    <div class="text-center text-gray-600 text-sm mt-3">
      Check out my latest projects and Open source projects to which i
      contribute
    </div>
    <div class="md:flex md:flex-wrap md:justify-center mt-5">

    {Project.length !== 0 && Project ? (
                    Project.map((Project, index) => (
                        <div class="max-w-sm mx-3 my-3">
                            <div
                            class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg"
                            >
                            <a
                                href={Project.githubRepo}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img class="rounded-t-lg" src={Project.thumbnail} alt="" />
                            </a>
                            <div class="py-6 px-8 rounded-lg bg-white text-left">
                                <a
                                href={Project.githubRepo}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <span
                                    class="text-gray-700 font-bold text-xl mb-3 hover:text-gray-900 hover:cursor-pointer"
                                >
                                   {Project.name}
                                </span>
                                </a>
                                {Project.liveView ? (
                                    <a class="ml-1" href={Project.liveView} target="_BLANK" rel="noreferrer">
                                        <span
                                            class="py-1 px-2 bg-green-500 hover:bg-green-600 cursor-pointer text-white rounded-xl text-xs"
                                        >
                                            <span class="text-md">Live view</span>
                                        </span>
                                    </a>) : (null)}
                                <p class="text-gray-600 tracking-wide mt-3 text-sm">
                                    {Project.description}
                                </p>
                                <div class="mt-3 flex">
                                {
                                Project.lang.map((lg, index) => (
                                    <div
                                    class="w-28 flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-purple-700 bg-purple-100 hover:bg-purple-200 cursor-pointer border border-purple-300 "
                                >
                                    <div
                                    class="text-xs font-normal leading-none max-w-full flex-initial"
                                    >
                                    {lg.name }
                                    </div>
                                </div>
                                ))}
                    
                                </div>
                            </div>
                            </div>
                        </div>
                    ))) : (
                        <div>No projects found</div>
                    )}
      </div>
    </div>
  </div>
    )
}

export default Portfolio;
