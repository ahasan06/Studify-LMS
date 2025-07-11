import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { dummyTestimonial } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY
  const navigate = useNavigate()
  const [allCourses, setAllCourses] = useState([])
  const [testimonial,setTestimonial] = useState([])
  const [isEducator,setIsEducator] = useState(true)

  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses)
  }
  const fetchTestimonal = async () => {
    setTestimonial(dummyTestimonial)
  }
  // Function to calculate average rating of course
  const calculateRating = (course) => {
    if (course.courseRatings && course.courseRatings.length > 0) {
      let totalRating = 0;
      course.courseRatings.forEach(rating => {
        totalRating += rating.rating;
      });
      return totalRating / course.courseRatings.length;
    }
    return 0;
  }


  useEffect(() => {
    fetchAllCourses();
    fetchTestimonal();
  }, [])
  const value = {
    navigate,currency, allCourses, calculateRating,isEducator,setIsEducator,testimonial
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
