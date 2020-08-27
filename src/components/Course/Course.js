import React, { useState } from 'react';
import './Course.css';
import fackData from '../../fakeData/course';
import CourseItem from '../CourseItem/CourseItem';
import Purchase from '../Purchase/Purchase';




const Course = () => {
    const [courses] = useState(fackData);
    const [purchase, setPurchase] = useState([]);

    const handleAddEnroll = (enroll) => {
        const newPurchase = [...purchase, enroll];
        setPurchase(newPurchase);
    }
    
    return (
        <div className="course">
            <div >
                {
                    courses.map(courses => <CourseItem course={courses} handleAddEnroll={handleAddEnroll} key={courses.id}></CourseItem>)
                }
            </div>
            <div>
                <Purchase purchase={purchase}></Purchase>
            </div>
        </div>    
        
    );
};

export default Course;