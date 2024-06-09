import React from 'react';
import '../styling/BlogsRoute.css';
import BlogCard from '../components/BlogComponents/BlogCard';
import img1 from '../assets/blogImages/img1.jpg';
import img2 from '../assets/blogImages/img2.jpg';
import img3 from '../assets/blogImages/img3.jpg';
import img4 from '../assets/blogImages/img4.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogsRoute = () => {
  return (
    <>
      <Navbar />
      <div className='cards-blog'>
        <BlogCard img_path={img1} blogId={1} desc={"How to 10x your Generational Wealth?"} />
        <BlogCard img_path={img2} blogId={2} desc={"How to deal with Unknown Risks in Life and Investing?"} />
        <BlogCard img_path={img3} blogId={3} desc={"Why investing in stocks is better than fixed deposit?"} />
        <BlogCard img_path={img4} blogId={4} desc={"Marriage, Kids, and Money"} />
        <BlogCard img_path={img2} blogId={5} desc={"Mastering For Unknown Risks in Life and Investing?"} />
        <BlogCard img_path={img3} blogId={6} desc={"Preparing Your Portfolio for the Unknown"} />
      </div>
      <Footer />
    </>
  ); 
}

export default BlogsRoute;
