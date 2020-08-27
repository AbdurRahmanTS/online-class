import React from 'react';
import './CouseItem.css'

const CourseItem = (props) => {
    const{image, name, trainer, price} = props.course;
    return (
        <div>
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
                            <p className="card-text"><small className="text-muted"><button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => props.handleAddEnroll(props.course)}>Enroll Now</button></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseItem;