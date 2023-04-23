import React from 'react';
import { Link } from 'react-router-dom';
import "./categories.css";

function Categories() {
    return (
        <div>
            <div className="main-container">
                <div className="notification-boxes row">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="box">
                            <i className="fa fa-user-md"></i>
                            <h4>Helpline</h4>
                            <p>
                                Lorem ipsum dolorit amet consetur adipiscing Morbi sollicitudin just non odio molestie.
                            </p>
                            <Link to="/" className="btn btn-transparent">Read More</Link>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="box">
                            <i className="fa fa-stethoscope"></i>
                            <h4>Medical</h4>
                            <p>
                                Lorem ipsum dolorit amet consetur adipiscing Morbi sollicitudin just non odio molestie.
                            </p>
                            <Link to="/" className="btn btn-transparent">Read More</Link>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="box">
                            <i className="fa fa-flask"></i>
                            <h4>First-Aid</h4>
                            <p>
                                Lorem ipsum dolorit amet consetur adipiscing Morbi sollicitudin just non odio molestie.
                            </p>
                            <Link to="/" className="btn btn-transparent">Read More</Link>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="box">
                            <i className="fa fa-comments-o"></i>
                            <h4>Blog</h4>
                            <p>
                                Lorem ipsum dolorit amet consetur adipiscing Morbi sollicitudin just non odio molestie.
                            </p>
                            <Link to="/blog" className="btn btn-transparent">Read More</Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Categories