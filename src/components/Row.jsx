import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import axios from "axios";
import { Movie } from "./Movie";

export const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

 const slideLeft = ()=>{
    let slider = document.getElementById('slider'+ rowId )
    slider.scrollLeft = slider.scrollLeft - 500;
 }
 const slideRight = ()=>{
    let slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft + 500;
 } 
  return (
    <>
      <h2 className="text-white text-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center text-white w-full group">
        <MdChevronLeft
            onClick={slideLeft}
          className="text-black left-4 bg-white rounded-full absolute opacity-50 hover:opacity-100  cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((movie, id) => (
            <Movie key={id} movie={movie} />
          ))}
        </div>
        <MdChevronRight
        onClick={slideRight}
          className="text-black right-4  bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};
