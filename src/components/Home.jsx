import React, { useState } from 'react'
import me from '../assets/me.png'
import about from '../assets/about.png'
import {ImFacebook2, ImInstagram, ImLinkedin, ImGithub,
    ImHtmlFive} from 'react-icons/im'
import { DiCss3, DiReact, DiGit, DiNpm } from 'react-icons/di'
import { SiIndeed, SiPhp, SiTailwindcss, SiBootstrap, SiJavascript,
    SiPython, SiMysql, SiFirebase, SiNetlify } from 'react-icons/si'
import { GrNode } from 'react-icons/gr'
import { CgFigma } from 'react-icons/cg'
import resume from '../assets/resume-ace.pdf'
import cert0 from '../assets/cert0.png'
import cert1 from '../assets/cert1.png'
import cert2 from '../assets/cert2.png'
import cert3 from '../assets/cert3.png'
import cert4 from '../assets/cert4.png'
import cert5 from '../assets/cert5.png'
import cert7 from '../assets/cert7.png'
import cert8 from '../assets/cert8.png'
import set1 from '../assets/set1.png'
import set2 from '../assets/set2.png'


const Home = () => {

    const [recipient, setRecipient] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')

    const currentYear = new Date().getFullYear();


    const [currentIndex, setCurrentIndex] = useState(0);
    const cards = [
        {image: cert0},
        {image: cert1},
        {image: cert2},
        {image: cert3},
        {image: cert4},
        {image: cert5},
        {image: cert7},
        {image: cert8}
    ]
    const project = [
        {image: set1, description: 'Portfolio with React, tailwind, ReactIcons'},
        {image: set2, description: 'Thesis System with Data Visualization on E-commerce and Jobs Management, PHP, JavaScript, MYSQL, Tailwindcss,Scss, CSS'},
    ]
    // const handleNext = () => {
    //     setCurrentIndex((currentIndex + 1) % cards.length);
    // };

    return (
        <div>
            <section className={`w-auto h-auto xl:h-screen `}>
                <div className='fixed w-screen h-auto bg-black/30'>
                    <h1 className='p-6 text-2xl xl:text-2xl 2xl:text-5xl text-orange-500'>ACE</h1>
                </div>
                <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 pt-20 xl:mx-20`}>
                    <div className='flex justify-center'>
                        <img src={me} 
                            className={`w-[36rem] 2xl:w-[45rem] aspect-square`}
                        />
                    </div>
                    <div className={`flex items-center mx-10 2xl:mx-12 mb-20`}>
                        <div className={``}>
                            <span className='text-white xl:text-3xl 2xl:text-2xl'>Hi, I'm</span>
                            <h1 className='text-orange-500 text-3xl xl:text-8xl 2xl:text-8xl'>Ace Malto</h1>
                            <h2 className='text-white text-2xl xl:text-6xl 2xl:text-6xl mt-2'>Full Stack Developer</h2>
                            <p className='text-white text-justify text-lg xl:text-xl 2xl:text-2xl mt-3'>
                                I'm passionate web and developer. I love Creating Codes❤️, 
                                and I'm open for freelancing and working on open source projects
                            </p>
                            <div className={`flex xs:mt-10 xl:mt-5 2xl:mt-10 sm:mt-2`}>
                                <a href='https://www.facebook.com/achuu15/'>
                                    <ImFacebook2 className='text-white text-4xl xl:text-3xl mx-3'/>
                                </a>
                                <a href='https://www.instagram.com/cs_duke101/'>
                                    <ImInstagram className='text-red-500 hover:text-red-600 text-4xl xl:text-3xl mx-3'/>
                                </a>
                                <a href='https://github.com/axlduke'>
                                    <ImGithub className='text-white hover:text-gray-500 text-4xl xl:text-3xl mx-3'/>
                                </a>
                                <a href='www.linkedin.com/in/cs-ace'>
                                    <ImLinkedin className='text-sky-500 hover:text-sky-600 text-4xl xl:text-3xl mx-3'/>
                                </a>
                                <a href='https://profile.indeed.com/acemalto/'>
                                    <SiIndeed className='text-blue-400 hover:text-blue-500 text-4xl xl:text-3xl mx-3'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`w-auto h-auto xl:h-screen my-10 `}>
                <div className='text-center mt-5'>
                    <h1 className='text-3xl 2xl:text-6xl text-white'>About</h1>
                </div>
                <div className={`grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 xl:mx-20 2xl:mx-20`}>
                    <div className='flex justify-center'>
                        <img src={about} 
                            className={`w-[36rem] 2xl:w-[45rem] aspect-square`}
                        />
                    </div>
                    <div className={`flex items-center`}>
                        <div className={`xs:mx-8 sm:mx-7 md:mx-10 lg:mx-12`}>
                            <p className='text-white text-xl mt-3 text-justify'>
                                My name is <strong className='text-orange-500'>Ace Malto</strong>, and I am a <strong className='text-orange-500'>computer science</strong> student specialising in software. 
                                I am a dedicated software engineer that works on small to medium-sized projects. 
                                Medium project as well as freelancing system, and my interest when I have free time 
                                is producing UI UX design in figma for future projects I also have over <strong className='text-orange-500'>3 years of project 
                                experience</strong> in PHP, HTML, CSS, and JAVASCRIPT. and aspiring to be a full-stack React Developer developer.
                            </p>
                            <div className={`flex mt-4`}>
                                <a href={resume} download={resume}>
                                    <button className={`bg-orange-400 rounded-md py-2 px-4 text-white`}
                                    >
                                        resume
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`w-auto h-auto xl:h-screen my-10  2xl:mb-12`}>
                <div className='flex justify-center'>
                    <h1 className='text-white text-4xl 2xl:text-6xl xs:mt-10 sm:mt-10'>Technology</h1>
                </div>
                <div className={`flex justify-center items-center`}>
                    <div className={`grid grid-cols-1 xs:grid-cols-2 xs:gap-4 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:mx-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-5 mt-10`}>
                        <div className='bg-black/30 w-44 rounded-md aspect-square flex justify-center items-center'>
                            <ImHtmlFive className='text-blue-400 text-8xl'/>
                        </div>
                        <div className='bg-black/30 w-44 rounded-md aspect-square flex justify-center items-center'>
                            <DiCss3 className='text-yellow-400 text-8xl'/>
                        </div>
                        <div className='bg-black/30 w-44 rounded-md aspect-square flex justify-center items-center'>
                            <SiTailwindcss className='text-teal-400 text-8xl'/>
                        </div>
                        <div className='bg-black/30 w-44 rounded-md aspect-square flex justify-center items-center'>
                            <SiBootstrap className='text-red-400 text-8xl'/>
                        </div>
                        <div className='bg-black/30 w-44 rounded-md aspect-square flex justify-center items-center'>
                            <DiReact className='text-sky-400 text-8xl'/>
                        </div>
                        <div className='bg-black/30 w-44 rounded-md aspect-square flex justify-center items-center'>
                            <DiGit className='text-white text-8xl'/>
                        </div>
                        <div className='bg-black/30 w-44 rounded-md aspect-square flex justify-center items-center'>
                            <DiNpm className='text-red-500 text-8xl'/>
                        </div>
                        <div className='bg-black/30 w-44 rounded-md aspect-square flex justify-center items-center'>
                            <SiPhp className='text-violet-400 text-8xl'/>
                        </div>
                        <div className='bg-black/30 w-44 rounded-md aspect-square flex justify-center items-center'>
                            <SiJavascript className='text-yellow-500 text-8xl'/>
                        </div>
                        <div className='bg-black/30 w-44 rounded-md aspect-square flex justify-center items-center'>
                            <SiPython className='text-blue-600 text-8xl'/>
                        </div>
                        <div className='bg-black/30 w-44 rounded-md aspect-square flex justify-center items-center'>
                            <SiMysql className='text-sky-400 text-8xl'/>
                        </div>
                        <div className='bg-black/30 w-44 rounded-md aspect-square flex justify-center items-center'>
                            <SiFirebase className='text-yellow-400 text-8xl'/>
                        </div>
                        <div className='bg-black/30 w-44 rounded-md aspect-square flex justify-center items-center'>
                            <SiNetlify className='text-teal-400 text-8xl'/>
                        </div>
                        <div className='bg-black/30 w-44 rounded-md aspect-square flex justify-center items-center'>
                            <GrNode className='text-green-400 text-8xl'/>
                        </div>
                        <div className='bg-black/30 w-44 rounded-md aspect-square flex justify-center items-center'>
                            <CgFigma className='text-red-600 text-8xl'/>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`w-auto h-auto xl:h-screen my-10 sm:mt-14 2xl:mx-20`}>
                <div className='flex justify-center'>
                    <h1 className='text-white text-4xl 2xl:text-6xl xs:mt-10 sm:mt-9 xl:mt-12'>Certificates</h1>
                </div>
                <div className={`flex justify-center items-center`}>
                    <div className={`grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-10 mx-5`}>
                        {cards.map((card, index) =>(
                            <div key={index} className='flex justify-center xl:w-60 aspect-square text-white'>
                                <img src={card.image} className={`rounded-md`}/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className={`w-auto h-auto xl:h-screen my-10 sm:mt-14 2xl:mx-20`}>
                <div className='flex justify-center'>
                    <h1 className='text-white text-4xl 2xl:text-6xl mt-10'>Projects</h1>
                </div>
                <div className={`flex justify-center items-center`}>
                    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-10 mx-5`}>
                        {project.map((projects, index) =>(
                            <div key={index} className='flex justify-center xl:w-80 h-52 text-white relative'>
                                <img src={projects.image} className={`rounded-md`}/>
                                <div className={`opacity-0 hover:opacity-100 transition duration-150
                                    ease-in-out xl:w-80 w-96 h-52 md:w-80 2xl:w-72 lg:w-72 p-2 rounded-md bg-black/40 text-white absolute flex justify-center items-center bottom-0 right-0`}>
                                    <p>{projects.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section class="mb-32 text-gray-800 my-24 px-6 mx-auto ">
                <div class="flex flex-wrap">
                    <div class="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-3 lg:px-6">
                        <h2 class="text-3xl font-bold mb-6 text-orange-500">Contact Me</h2>
                        <p class="text-gray-500 mb-6 text-justify">
                            I am excited to offer my skills and expertise to help bring your project to fruition. 
                            Whether you are looking for assistance with a small task or a larger, more complex project, 
                            I am confident that I have the knowledge and experience necessary to help you achieve your goals.
                            If you are interested in working with me, or if you would like to hire me for a small or medium-sized 
                            project, I would be more than happy to discuss your needs and come up with a plan of action. 
                            You can reach me via email, and I would love to collaborate with you to create something truly great.
                            With my attention to detail, problem-solving abilities, and determination to succeed, 
                            I am confident that I can help you achieve your objectives and take your business or project 
                            to the next level. So, don't hesitate to contact me, and let's start working together to 
                            make great things happen.
                        </p>
                        <p class="text-gray-500 mb-2">Albay, Tabaco City, Philippine</p>
                        <p class="text-gray-500 mb-2">+ 63 920 692 8571</p>
                        <p class="text-gray-500 mb-2">maltoace9@gmail.com</p>
                    </div>
                    <div class="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-3 lg:px-6">
                        <form>
                            <div class="form-group mb-6">
                                <input type="email" class="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                                placeholder="Email" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
                            </div>
                            <div class="form-group mb-6">
                                <input type="text" class="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                                placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                            </div>
                            <div class="form-group mb-6">
                                <textarea class="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                " id="exampleFormControlTextarea13" rows="3" placeholder="Message" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                            </div>
                            <a href={`mailto:${recipient}?subject=${subject}&body=${body}`}>
                                <button class="
                                    w-full
                                    px-6
                                    py-2.5
                                    bg-orange-600
                                    text-white
                                    font-medium
                                    text-xs
                                    leading-tight
                                    uppercase
                                    rounded
                                    shadow-md
                                    hover:bg-orange-700 hover:shadow-lg
                                    focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0
                                    active:bg-orange-800 active:shadow-lg
                                    transition
                                    duration-150
                                    ease-in-out">Send
                                </button>
                            </a>
                        </form>
                    </div>
                </div>
            </section>
            <footer className={`flex justify-center items-center w-auto h-52 bg-black/40 `}>
                <div className={`flex justify-center`}>
                    <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3'>
                        <div className='flex justify-center'>
                            <h1 className='text-xl sm:text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl mx-20 text-orange-500'>ACE MALTO</h1>
                        </div>  
                        <div className='grid grid-rows-2'>
                            <div className='text-center'>
                                <span className='text-white 2xl:text-5xl'>Full Stack Developer</span>
                            </div>
                            <div className={`flex justify-center items-center`}>
                                <a href='https://www.facebook.com/achuu15/'>
                                    <ImFacebook2 className='text-white text-4xl xl:text-3xl mx-3'/>
                                </a>
                                <a href='https://www.instagram.com/cs_duke101/'>
                                    <ImInstagram className='text-white text-4xl xl:text-3xl mx-3'/>
                                </a>
                                <a href='https://github.com/axlduke'>
                                    <ImGithub className='text-white text-4xl xl:text-3xl mx-3'/>
                                </a>
                                <a href='www.linkedin.com/in/cs-ace'>
                                    <ImLinkedin className='text-white text-4xl xl:text-3xl mx-3'/>
                                </a>
                                <a href='https://profile.indeed.com/acemalto/'>
                                    <SiIndeed className='text-white text-4xl xl:text-3xl mx-3'/>
                                </a>
                            </div>
                        </div>
                        <div className='flex justify-center items-center mt-2'>
                            <p className='text-white 2xl:text-5xl'>&copy; {currentYear} <strong className='text-orange-500'>acedev_</strong></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home