import React from 'react'
import "./categories.css"

function Categories() {
    return (
        <div>
            <div className="main-container">

                <div className="notification-boxes row">
                    {/* <!-- Box #1 Starts --> */}
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="box">
                            <i className="fa fa-user-md"></i>
                            <h4>Medical</h4>
                            <p>
                                Lorem ipsum dolorit amet consetur adipiscing Morbi sollicitudin just non odio molestie.
                            </p>
                            <a href="#" className="btn btn-transparent">Read More</a>
                        </div>
                    </div>
                    {/* <!-- Box #1 Ends --> */}
                    {/* <!-- Box #2 Starts --> */}
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="box">
                            <i className="fa fa-stethoscope"></i>
                            <h4>Blog</h4>
                            <p>
                                Lorem ipsum dolorit amet consetur adipiscing Morbi sollicitudin just non odio molestie.
                            </p>
                            <a href="#" className="btn btn-transparent">Read More</a>
                        </div>
                    </div>
                    {/* <!-- Box #2 Ends -->
      <!-- Box #3 Starts --> */}
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="box">
                            <i className="fa fa-flask"></i>
                            <h4>First-Aid</h4>
                            <p>
                                Lorem ipsum dolorit amet consetur adipiscing Morbi sollicitudin just non odio molestie.
                            </p>
                            <a href="#" className="btn btn-transparent">Read More</a>
                        </div>
                    </div>
                    {/* <!-- Box #3 Ends -->
      <!-- Box #4 Starts --> */}
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="box">
                            <i className="fa fa-comments-o"></i>
                            <h4>Helpline</h4>
                            <p>
                                Lorem ipsum dolorit amet consetur adipiscing Morbi sollicitudin just non odio molestie.
                            </p>
                            <a href="#" className="btn btn-transparent">Read More</a>
                        </div>
                    </div>
                    {/* <!-- Box #4 Ends --> */}
                </div>
                {/* <!-- Notification Boxes Ends -->
    <!-- Welcome Section Starts --> */}
                <section className="welcome-area">
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <h2 className="main-heading1 lite">We Offer Fast &amp; Reliable</h2>
                            <h2 className="main-heading2">Medical &amp; Healthcare Needs</h2>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content.
                            </p>
                            <p>
                                Making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved
                                over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                        </div>
                        {/* <div className="col-md-6 col-xs-12">
                            <img src="images/image1.jpg" alt="image" className="img-responsive img-style1" />
                        </div> */}
                    </div>
                </section>
                {/* <!-- Welcome Section Ends --> */}
            </div>
        </div>
    )
}

export default Categories