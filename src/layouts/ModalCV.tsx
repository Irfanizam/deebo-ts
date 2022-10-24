import React from 'react';
import { SVG_Facebook, SVG_Five_Stars, SVG_Instagram, SVG_Pinterest, SVG_Twitter, SVG_Youtube } from '../../public/svg/svg';

export default function ModalCV({ resumeTrueFalse }) {
    return (
        <>
            {/* Modal CV Card  */}
            <div className="deebo_fn_cv">

                {/* CV Closer  */}
                <a onClick={resumeTrueFalse} href="#" className="closer"></a>
                {/* /CV Closer  */}

                {/* CV Inner  */}
                <div className="deebo_fn__cv">

                    {/* CV Background  */}
                    <div className="cv__bg"></div>
                    <div className="cv__bg2"></div>
                    {/* /CV Background  */}

                    {/* CV Left Side  */}
                    <div className="cv__header">
                        <div className="in">
                            <div className="avatar">
                                <img src="img/header/9.png" alt="" />
                            </div>
                            <h3><span>Muhd</span> Irfan</h3>
                            <p>I am currently looking for a full-time job. <br></br>Hire me up !</p>
                            <ul className="social">
                                <li>
                                    <a href="#" target="_blank" title="twitter.com">
                                        <SVG_Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" title="facebook.com">
                                        <SVG_Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" title="instagram.com">
                                        <SVG_Instagram />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" title="printerest.com">
                                        <SVG_Pinterest />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" title="youtube.com">
                                        <SVG_Youtube />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* /CV Left Side  */}

                    {/* /CV Content Side  */}
                    <div className="cv__content">


                        {/* CV: Biography Section  */}
                        <section id="cv_biography">
                            <div className="section_title">
                                <h3>My Profile</h3>
                            </div>
                            <p>I am a student in Computer Science Bachelor Degree and also a freelancer part-time Front-end and Back-end developer with 3 years of experience. I am from Bandar Baru Bangi, Selangor. I love coding and create new connection with peoples that are from the same interest background.</p>
                            <div className="fn_cs_info_items">
                                <ul>
                                    <li><p>Name: <span>Muhd Irfan</span></p></li>
                                    <li><p>Birthday: <span>September 3, 2000</span></p></li>
                                    <li><p>Languages: <span>Malay and English</span></p></li>
                                    <li><p>Age: <span>22 Years old</span></p></li>
                                    <li><p>Nationality: <span>Malaysian</span></p></li>
                                    <li><p>Adress: <span>Bandar Baru Bangi Seksyen 8</span></p></li>
                                    <li><p>Telegram: <span>Available</span></p></li>
                                    <li><p>Phone: <span><a href="tel:0182964039">018-2964039</a></span></p></li>
                                    <li><p>Instagram: <span>Private</span></p></li>
                                    <li><p>Email: <span><a href="mailto:farhad1009@gmail.com">irfanizam34@gmail.com</a></span></p></li>
                                </ul>
                            </div>
                        </section>
                        {/* /CV: Biography Section  */}


                        {/* CV: Education Section  */}
                        <section id="cv_education">
                            <div className="section_title">
                                <h3>Education</h3>
                            </div>
                            <div className="fn_cs_boxed_list">
                                <ul>
                                    <li>
                                        <div className="item">
                                            <div className="item_top">
                                                <h5>UiTM Jasin, Melaka</h5>
                                                <span>( 2022 - 2024 )</span>
                                            </div>
                                            <h3>Computer Science</h3>
                                            <p> Degree </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_top">
                                                <h5>UiTM Tapah</h5>
                                                <span>( 2019 - 2021 )</span>
                                            </div>
                                            <h3>Applied Science</h3>
                                            <p> Diploma </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_top">
                                                <h5>MRSM Lenggong</h5>
                                                <span>( 2012 - 2017  )</span>
                                            </div>
                                            <h3>Science</h3>
                                            <p> High School </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        {/* /CV: Education Section  */}


                        {/* CV: Experience Section  */}
                        <section id="cv_experience">
                            <div className="section_title">
                                <h3>Experience</h3>
                            </div>
                            <div className="fn_cs_boxed_list">
                                <ul>
                                    <li>
                                        <div className="item">
                                            <div className="item_top">
                                                <h5>React JS</h5>
                                                <span>( 20122 — Today )</span>
                                            </div>
                                            <h3>Back-end Engineer</h3>
                                            <p>Build websites.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_top">
                                                <h5>NASA</h5>
                                                <span>( 2022 - Today)</span>
                                            </div>
                                            <h3>Astronaut</h3>
                                            <p>First human on moon.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_top">
                                                <h5>Typescript</h5>
                                                <span>( Learning )</span>
                                            </div>
                                            <h3>Back-end</h3>
                                            <p>Build websites.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        {/* /CV: Experience Section  */}


                        {/* CV: Skills Section  */}
                        <section id="cv_skills">
                            <div className="section_title">
                                <h3>Professionality</h3>
                            </div>
                            <div className="fn_cs_progress_bar">
                                <div className="progress_item open" data-value={92}>
                                    <div className="item_in">
                                        <h3 className="progress_title">Adobe Photoshop</h3>
                                        <span
                                            className="progress_percent"
                                            style={{ right: "8%" }}
                                        >
                                            92%
                                        </span>
                                        <div className="bg_wrap">
                                            <div className="progress_bg" style={{ width: "92%" }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="progress_item open" data-value={95}>
                                    <div className="item_in">
                                        <h3 className="progress_title">HTML5 &amp; CSS3</h3>
                                        <span
                                            className="progress_percent"
                                            style={{ right: "5%" }}
                                        >
                                            95%
                                        </span>
                                        <div className="bg_wrap">
                                            <div className="progress_bg" style={{ width: "95%" }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="progress_item open" data-value={80}>
                                    <div className="item_in">
                                        <h3 className="progress_title">WordPress</h3>
                                        <span
                                            className="progress_percent"
                                            style={{ right: "20%" }}
                                        >
                                            80%
                                        </span>
                                        <div className="bg_wrap">
                                            <div className="progress_bg" style={{ width: "80%" }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="progress_item open" data-value={85}>
                                    <div className="item_in">
                                        <h3 className="progress_title">Adobe Illustrator</h3>
                                        <span
                                            className="progress_percent"
                                            style={{ right: "15%" }}
                                        >
                                            85%
                                        </span>
                                        <div className="bg_wrap">
                                            <div className="progress_bg" style={{ width: "85%" }} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>
                        {/* /CV: Skills Section  */}


                        {/* CV: Services Section  */}
                        <section id="cv_services">
                            <div className="section_title">
                                <h3>Product</h3>
                            </div>
                            <p>Fix website's</p>
                            <div className="fn_cs_service_list">
                                <ul>
                                    <li>
                                        <div className="item">
                                            <div className="item_left">
                                                <h3>Websites &amp; related</h3>
                                                <p>Build websites according to requirements &amp; fixing errors.</p>
                                            </div>
                                            <div className="item_right">
                                                <p>Starts from</p>
                                                <h3>RM 10 negotiable</h3>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_left">
                                                <h3>Mobile design</h3>
                                                <p>Design interface for mobile application.</p>
                                            </div>
                                            <div className="item_right">
                                                <p>Starts from</p>
                                                <h3>RM 50 negotiable</h3>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_left">
                                                <h3>Advertise</h3>
                                                <p>Helps advertise product or brands.</p>
                                            </div>
                                            <div className="item_right">
                                                <p>Starts from</p>
                                                <h3>RM 5 negotiable</h3>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_left">
                                                <h3>Produce design ideas</h3>
                                                <p>Create new usable ideas for users.</p>
                                            </div>
                                            <div className="item_right">
                                                <p>Starts from</p>
                                                <h3>RM 42 negotiable</h3>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        {/* /CV: Services Section  */}

                        {/* CV: Testimonials  */}
                        <section id="cv_testimonials">
                            <div className="section_title">
                                <h3>Review</h3>
                            </div>
                            <p></p>

                            <div className="fn_cs_testimonials">
                                <ul>
                                    <li>
                                        <div className="item">
                                            <div className="item_left">
                                                <p>Best services provided. Good communication.</p>
                                            </div>
                                            <div className="item_right">
                                                <div className="t_ava">
                                                    <div className="ava_in" data-bg-img="img/testimonials/5.png"></div>
                                                </div>
                                                <div className="t_name">
                                                    <p>Mr Spongebob</p>
                                                </div>
                                                <div className="t_rating" data-stars="5">
                                                    <div className="rating_in">
                                                        <div className="rating_active"><SVG_Five_Stars /></div>
                                                        <div className="rating_regular"><SVG_Five_Stars /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_left">
                                                <p>Code is developed very well and error is fixed. I would recommend for others to try!</p>
                                            </div>
                                            <div className="item_right">
                                                <div className="t_ava">
                                                    <div className="ava_in" data-bg-img="img/testimonials/6.png"></div>
                                                </div>
                                                <div className="t_name">
                                                    <p>Mr Squidward</p>
                                                </div>
                                                <div className="t_rating" data-stars="5">
                                                    <div className="rating_in">
                                                        <div className="rating_active"><SVG_Five_Stars /></div>
                                                        <div className="rating_regular"><SVG_Five_Stars /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_left">
                                                <p>The design provided to me was very details and met all the requirements.</p>
                                            </div>
                                            <div className="item_right">
                                                <div className="t_ava">
                                                    <div className="ava_in" data-bg-img="img/testimonials/7.png"></div>
                                                </div>
                                                <div className="t_name">
                                                    <p>Mr Patrick</p>
                                                </div>
                                                <div className="t_rating" data-stars="5">
                                                    <div className="rating_in">
                                                        <div className="rating_active"><SVG_Five_Stars /></div>
                                                        <div className="rating_regular"><SVG_Five_Stars /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_left">
                                                <p>Response is very quick and trusted.</p>
                                            </div>
                                            <div className="item_right">
                                                <div className="t_ava">
                                                    <div className="ava_in" data-bg-img="img/testimonials/8.png"></div>
                                                </div>
                                                <div className="t_name">
                                                    <p>Mr Crab</p>
                                                </div>
                                                <div className="t_rating" data-stars="5">
                                                    <div className="rating_in">
                                                        <div className="rating_active"><SVG_Five_Stars /></div>
                                                        <div className="rating_regular"><SVG_Five_Stars /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>


                        </section>
                        {/* /CV: Testimonials  */}


                    </div>
                    {/* /CV Content Side  */}

                </div>
                {/* CV Inner  */}

            </div>
            {/* /Modal CV Card  */}
        </>
    );
}
