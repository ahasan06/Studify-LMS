import React from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';
import Home from './pages/students/Home';
import CourseList from './pages/students/CourseList';
import CourseDetails from './pages/students/CourseDetails';
import Player from './pages/students/Player';
import Loading from './components/students/Loading';
import MyEnrollments from './pages/students/MyEnrollments';
import Educator from './pages/educators/Educator';
import Dashboard from './pages/educators/Dashboard';
import AddCourse from './pages/educators/AddCourse';
import StudentEnrolled from './pages/educators/StudentEnrolled';
import Mycourses from './pages/educators/Mycourses';
import Navbar from './components/students/Navbar';

function App() {
  const isEducatorRoute = useMatch('/educator/*')
  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute && <Navbar/>}
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Course-list' element={<CourseList />} />
      <Route path='/Course-list/:input' element={<CourseList />} />
      <Route path='/Course/:id' element={<CourseDetails />} />
      <Route path='/my-enrollments' element={<MyEnrollments />} />
      <Route path='/player/:courseId' element={<Player />} />
      <Route path='/loading/:path' element={<Loading />} />
      {/* Nested routes for educator */}
      <Route path='/educator' element={<Educator />}>
        <Route path='educator' element={<Dashboard />} />
        <Route path='add-course' element={<AddCourse />} />
        <Route path='student-enrolled' element={<StudentEnrolled />} />
        <Route path='my-course' element={<Mycourses />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
