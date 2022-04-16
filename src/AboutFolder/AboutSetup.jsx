import React from 'react'
import '../CSS_Style/about.css'
import aboutpic from '../images/aboutpic.jpg'
import closeButton from '../images/x-circle-fill.svg'


function AboutSetup() {
    return (
        <div>
            <div className='mt-20'>
                <div className='main-about mb-32'>
                    <div className='AboutUsHeading text-white'>
                        <h2 className='font-serif'>About Us</h2>
                    </div>
                    <div className='about-content text-white'>
                        <h4 className='font-serif text-lg'>
                            The name of the community- <span className='font-bold'>CYCLOLOGY INDIA</span> is derived from the two words <span>'cycle'</span> and 'logy'
                            which means the knowledge of cycling. The word Cyclology stands for everything that
                            cycling is and what we can achieve on a cycle.
                            For this reason our tagline is <span className='font-bold'>RIDE EXPLORE INSPIRE</span> .
                            The whole aim of Cyclology team is to celebrate sheer Joy of
                            cycling coupled with  exploring with the help of cycling, reaching far off places,
                            educate about cycling and inspire communities to cycle so that everyone can reap its benefits.
                            The logo uses the color of the sky and the earth at different times of the day, symbolizing that
                            cycling is well connected with both and can be done at any time of the day. We have made sure
                            to keep the structure of the cycling frame as simple as possible  because Cyclology India is for
                            everyone whether you are an adventurer on your MTB or a speed racer or an individual who is in
                            love with cycles and exploring every nook and cranny on them and maintaining a healthy sustainable lifestyle.
                        </h4>
                    </div>
                    <div className='founder-member-pic mt-20 md:ml-40 ml-24'>
                        <div>
                            <div className='founder-member-pictures'>
                                <img src={aboutpic} className='rounded-full' alt='image1' data-bs-toggle="modal" data-bs-target="#exampleModal1"></img>
                                <p className='text-xl font-serif mt-3'>Subham Bhattacharya</p>
                                <p className='text-xl font-serif mb-2'>CEO, Founder Member</p>
                                <div className='footer-link-items flex flex-row space-x-6'>
                                    <a href='https://www.facebook.com/CycloLogyIndia/'>
                                        <svg fill="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" alt="Telegram" title="Telegram"></path>
                                        </svg>
                                    </a>
                                    <a href='https://www.instagram.com/cyclologyindia/' className=''><svg fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24" alt="Telegram" title="Telegram">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                    </a>
                                    <a href='https://www.linkedin.com/company/cyclologyindia' className=''><svg fill="currentColor" stroke="currentColor" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24" alt="Telegram" title="Telegram">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                    </a>
                                    <a href='https://www.facebook.com/CycloLogyIndia/'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-twitter" viewBox="0 0 24 24">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content bg-black text-white">
                                        <div className='Modal-image'>
                                            <button type="button" style={{ float: 'right' }} data-bs-dismiss="modal" aria-label="Close"><img className='w-8 mt-3 bg-white rounded-full' src={closeButton} alt=''></img></button>
                                            <img src={aboutpic} alt='about-image1' className='rounded-full md:w-52 w-40'></img>
                                            <p className='mt-4'>
                                                Person 1
                                                places, educate about cycling and inspire communities to cycle so that everyone can reap its benefits.
                                                The logo uses the color of the sky and the earth at different times of the day, symbolizing that cycling
                                                is well connected with both and can be done at any time of the day. We have made sure to keep the structure of
                                                the cycling frame as simple as possible because Cyclology India is for everyone whether you are an adventurer
                                                on your MTB or a speed racer or an individual
                                                who is in love with cycles and exploring every nook and cranny on them and maintaining a
                                                healthy sustainable lifestyle.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='founder-member-pictures'>
                                <img src={aboutpic} className='rounded-full' alt='image1' data-bs-toggle="modal" data-bs-target="#exampleModal1"></img>
                                <p className='text-xl font-serif mt-3'>Subham Bhattacharya</p>
                                <p className='text-xl font-serif mb-2'>CEO, Founder Member</p>
                                <div className='footer-link-items flex flex-row space-x-6'>
                                    <a href='https://www.facebook.com/CycloLogyIndia/'>
                                        <svg fill="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" alt="Telegram" title="Telegram"></path>
                                        </svg>
                                    </a>
                                    <a href='https://www.instagram.com/cyclologyindia/' className=''><svg fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24" alt="Telegram" title="Telegram">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                    </a>
                                    <a href='https://www.linkedin.com/company/cyclologyindia' className=''><svg fill="currentColor" stroke="currentColor" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24" alt="Telegram" title="Telegram">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                    </a>
                                    <a href='https://www.facebook.com/CycloLogyIndia/'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-twitter" viewBox="0 0 24 24">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content bg-black text-white">
                                        <div className='Modal-image'>
                                            <button type="button" style={{ float: 'right' }} data-bs-dismiss="modal" aria-label="Close"><img className='w-8 mt-3 bg-white rounded-full' src={closeButton} alt=''></img></button>
                                            <img src={aboutpic} alt='about-image1' className='rounded-full md:w-52 w-40'></img>
                                            <p className='mt-4'>
                                                Person 1

                                                places, educate about cycling and inspire communities to cycle so that everyone can reap its benefits.
                                                The logo uses the color of the sky and the earth at different times of the day, symbolizing that cycling
                                                is well connected with both and can be done at any time of the day. We have made sure to keep the structure of
                                                the cycling frame as simple as possible because Cyclology India is for everyone whether you are an adventurer
                                                on your MTB or a speed racer or an individual
                                                who is in love with cycles and exploring every nook and cranny on them and maintaining a
                                                healthy sustainable lifestyle.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='founder-member-pictures'>
                                <img src={aboutpic} className='rounded-full' alt='image3' data-bs-toggle="modal" data-bs-target="#exampleModal3"></img>
                                <p className='text-xl font-serif mt-3'>Subham Bhattacharya</p>
                                <p className='text-xl font-serif mb-2'>CEO, Founder Member</p>
                                <div className='footer-link-items flex flex-row space-x-6'>
                                    <a href='https://www.facebook.com/CycloLogyIndia/'>
                                        <svg fill="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" alt="Telegram" title="Telegram"></path>
                                        </svg>
                                    </a>
                                    <a href='https://www.instagram.com/cyclologyindia/' className=''><svg fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24" alt="Telegram" title="Telegram">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                    </a>
                                    <a href='https://www.linkedin.com/company/cyclologyindia' className=''><svg fill="currentColor" stroke="currentColor" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24" alt="Telegram" title="Telegram">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                    </a>
                                    <a href='https://www.facebook.com/CycloLogyIndia/'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-twitter" viewBox="0 0 24 24">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content bg-black text-white">
                                        <div className='Modal-image'>
                                            <button type="button" style={{ float: 'right' }} data-bs-dismiss="modal" aria-label="Close"><img className='w-8 mt-3 bg-white rounded-full' src={closeButton} alt=''></img></button>
                                            <img src={aboutpic} alt='about-image3' className='rounded-full md:w-52 w-40'></img>
                                            <p className='mt-4'>
                                                Person 3
                                                places, educate about cycling and inspire communities to cycle so that everyone can reap its benefits.
                                                The logo uses the color of the sky and the earth at different times of the day, symbolizing that cycling
                                                is well connected with both and can be done at any time of the day. We have made sure to keep the structure of
                                                the cycling frame as simple as possible because Cyclology India is for everyone whether you are an adventurer
                                                on your MTB or a speed racer or an individual
                                                who is in love with cycles and exploring every nook and cranny on them and maintaining a
                                                healthy sustainable lifestyle.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className='founder-member-pictures'>
                                <img src={aboutpic} className='rounded-full' alt='image4' data-bs-toggle="modal" data-bs-target="#exampleModal4"></img>
                                <p className='text-xl font-serif mt-3'>Subham Bhattacharya</p>
                                <p className='text-xl font-serif mb-2'>CEO, Founder Member</p>
                                <div className='footer-link-items flex flex-row space-x-6'>
                                    <a href='https://www.facebook.com/CycloLogyIndia/'>
                                        <svg fill="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" alt="Telegram" title="Telegram"></path>
                                        </svg>
                                    </a>
                                    <a href='https://www.instagram.com/cyclologyindia/' className=''><svg fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24" alt="Telegram" title="Telegram">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                    </a>
                                    <a href='https://www.linkedin.com/company/cyclologyindia' className=''><svg fill="currentColor" stroke="currentColor" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24" alt="Telegram" title="Telegram">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                    </a>
                                    <a href='https://www.facebook.com/CycloLogyIndia/'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-twitter" viewBox="0 0 24 24">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="modal fade" id="exampleModal4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content bg-black text-white">
                                        <div className='Modal-image'>
                                            <button type="button" style={{ float: 'right' }} data-bs-dismiss="modal" aria-label="Close"><img className='w-8 mt-3 bg-white rounded-full' src={closeButton} alt=''></img></button>
                                            <img src={aboutpic} alt='about-image4' className='rounded-full md:w-52 w-40'></img>
                                            <p className='mt-4'>
                                                Person 4
                                                places, educate about cycling and inspire communities to cycle so that everyone can reap its benefits.
                                                The logo uses the color of the sky and the earth at different times of the day, symbolizing that cycling
                                                is well connected with both and can be done at any time of the day. We have made sure to keep the structure of
                                                who is in love with cycles and exploring every nook and cranny on them and maintaining a
                                                healthy sustainable lifestyle.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSetup;