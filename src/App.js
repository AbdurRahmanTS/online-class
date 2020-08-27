import React from 'react';
import Header from './components/Header/Header';
import Course from './components/Course/Course';
import fackData from './fakeData/course';
import { useState } from 'react';


function App() {
  const [courses] = useState(fackData);
  
  
  
  return (
    <div>
      <Header></Header>
      {
        courses.map(courses => <Course course={courses} key={courses.id}></Course>)
      }
    </div>
  );
}

export default App;
