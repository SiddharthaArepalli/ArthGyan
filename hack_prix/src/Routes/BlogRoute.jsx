import React from 'react'
import '../styling/BlogsRoute.css'
// import '../components/BlogCard.jsx'
import BlogCard from '../components/BlogCard'
import img1 from '../assets/blogImages/img1.jpg'
import img2 from '../assets/blogImages/img2.jpg'
import img3 from '../assets/blogImages/img3.jpg'
import img4 from '../assets/blogImages/img4.jpg'


const BlogsRoute = () => {
  return (
    <div className='cards' >
      <BlogCard img_path={img3} desc={"How to 10x your Generational Wealth?"} ></BlogCard>
      <BlogCard img_path={img2}   desc={"How to deal with Unknown Risks in Life and Investing?"} ></BlogCard>
      <BlogCard img_path={img3}   desc={"Why investing in stocks is better than fixed deposit?"} ></BlogCard>
      <BlogCard img_path={img4}   desc={"Marriage, Kids, and Money"} ></BlogCard>
      <BlogCard img_path={img2}   desc={"Mastering For Unknown Risks in Life and Investing?"} ></BlogCard>
      <BlogCard img_path={img3}   desc={" Preparing Your Portfolio for the Unknown"} ></BlogCard></div>
  )
}
export default BlogsRoute;
