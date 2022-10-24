import React from 'react';

export default function Work() {
    return (
        <>
            {/* Section Work */}
            <section id="work" className="section_work">
                <div className="container">
                    <div className="work_title">
                        <h3>Projects Example</h3>
                    </div>
                    <div className="work_content">
                        <div className="work_content_left_bar">
                            <h2>Pokemon</h2>
                            <p className="about_deduma">Website that display list of pokemons.</p>
                            <p className="goal_deduma"></p>
                        </div>
                        <div className="work_content_right_bar">
                            <div className="right_bar_wrapper">
                                <div className="deduma_image" style={{"backgroundImage":"url(img/about/11.png)"}}></div>
                                <img src="img/thumb/square.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Section Work */}
        </>
    );
}
