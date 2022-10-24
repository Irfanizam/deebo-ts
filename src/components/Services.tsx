import React from 'react';

export default function Services() {
    return(
        <>
            {/* Section Services */}
            <div id="services" className="section_services">
                <div className="container">
                    <div className="services_wrapper">
                        <div className="services_title">
                            <h3>Services Provided</h3>
                        </div>
                        <div className="services_content">
                            <div className="service_direct">
                                <ul>
                                    <li>
                                        <div className="direct_wrapper">
                                            <div className="service_direct_left_bar">
                                                <div className="img_wrapper">
                                                    <div className="abs_img" style={{"backgroundImage":"url(img/service/15.png)"}}></div>
                                                    <img src="img/thumb/550-300.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="service_direct_right_bar">
                                                <h2>Websites for streaming</h2>
                                                <p className="start_from">Price</p>
                                                <p className="price">RM4.00</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="direct_wrapper">
                                            <div className="service_direct_left_bar">
                                                <div className="img_wrapper">
                                                    <div className="abs_img" style={{"backgroundImage":"url(img/service/12.png)"}}></div>
                                                    <img src="img/thumb/550-300.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="service_direct_right_bar">
                                                <h2>Spotify</h2>
                                                <p className="start_from">Price</p>
                                                <p className="price">RM49.20</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="direct_wrapper">
                                            <div className="service_direct_left_bar">
                                                <div className="img_wrapper">
                                                    <div className="abs_img" style={{"backgroundImage":"url(img/service/13.png)"}}></div>
                                                    <img src="img/thumb/550-300.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="service_direct_right_bar">
                                                <h2>Advertising &amp; selling product</h2>
                                                <p className="start_from">Price</p>
                                                <p className="price">RM100.32</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="direct_wrapper">
                                            <div className="service_direct_left_bar">
                                                <div className="img_wrapper">
                                                    <div className="abs_img" style={{"backgroundImage":"url(img/service/14.png)"}}></div>
                                                    <img src="img/thumb/550-300.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="service_direct_right_bar">
                                                <h2>Platform for news</h2>
                                                <p className="start_from">Price</p>
                                                <p className="price">RM4420.50</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Section Services */}
        </>
    );
}
