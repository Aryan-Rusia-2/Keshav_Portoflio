import React from 'react'

const Experience = () => {
    return (
        <div className='exp pb-24'>
            <div id='experience' >
                <p className="text-4xl font-bold pt-32 p-2 text-center text-white">
                    Work Experience
                </p>
                <p className="py-6 mt-2 text-white text-center">Here I have mentioned my work experience</p>
            </div>
            <div className="container">
                <div className="drop">
                    <div className="content">
                        <h2>Software Developer</h2>
                        <h3 className='font-semibold'>Software Intern at Upkey</h3>
                        <p>Internship on Software development and implementation and use of Python and Go Programming, Summer 2021</p>
                    </div>
                </div>
                <div className="drop" ><div className="content">
                    <h2>Web Developer</h2>
                    <h3 className='font-semibold'>FSWD Intern at Cognizant</h3>
                    <p>Virtual internship on frontend and backend languages using HTML, CSS , Java, C++, PHP, and SQL, Summer 2021</p></div>
                </div>
                <div className="drop"><div className="content">
                    <h2>Software Engineer</h2>
                    <h3 className='font-semibold'>Surya Comtrade llp, in India</h3>
                    <p>I am currently working as a part time software engineer intern online in Surya Comtrade llp, in India, with expected completion date December, 2022.</p></div>
                </div>
            </div>
        </div>
    )
}

export default Experience;