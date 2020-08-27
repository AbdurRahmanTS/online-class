import React from 'react';
import './Course.css';



const Course = (props) => {
    const {name, price, image, trainer} = props.course;
    
    return (
        <div className="course">
            <div className="card mb-3" style={{maxwidth: "540px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4 course-img">
                        <img src={image} className="card-img" alt=""/>
                    </div>
                    <div className="col-md-8 course-text">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Trainer By: {trainer}</p>
                            <h2>${price}</h2>
                            <p className="card-text"><small className="text-muted"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Enroll Now</button></small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1>time</h1>
            </div>
        </div>
    );
};

export default Course;