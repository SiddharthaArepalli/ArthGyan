import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const BlogDetail = () => {
    const { blogId } = useParams();
    
    let blogData;
    
    if (blogId === '1') {
        blogData = {
            title: "How to 10x your Generational Wealth?",
            desc: "This blog discusses strategies to significantly increase your generational wealth.",
            img: "path/to/your/image1.jpg"
        };
    } else if (blogId === '2') {
        blogData = {
            title: "How to deal with Unknown Risks in Life and Investing?",
            desc: "This blog provides insights on managing unknown risks in life and investments.",
            img: "path/to/your/image2.jpg"
        };
    } else if (blogId === '3') {
        blogData = {
            title: "Why investing in stocks is better than fixed deposit?",
            desc: "This blog explains why stock investments can be more beneficial than fixed deposits.",
            img: "path/to/your/image3.jpg"
        };
    } else if (blogId === '4') {
        blogData = {
            title: "Marriage, Kids, and Money",
            desc: "This blog explores the financial implications of marriage and having kids.",
            img: "path/to/your/image4.jpg"
        };
    } else if (blogId === '5') {
        blogData = {
            title: "Mastering For Unknown Risks in Life and Investing?",
            desc: "This blog delves into strategies for mastering unknown risks in life and investing.",
            img: "path/to/your/image5.jpg"
        };
    } else if (blogId === '6') {
        blogData = {
            title: "Preparing Your Portfolio for the Unknown",
            desc: "This blog discusses how to prepare your investment portfolio for unknown risks.",
            img: "path/to/your/image6.jpg"
        };
    } else {
        blogData = {
            title: "Unknown Blog",
            desc: "The blog you are looking for does not exist.",
            img: "path/to/default/image.jpg"
        };
    }

    return (
        <div className="tool-detail">
            <Navbar />
            <div className="tool-img" style={{ backgroundImage: `url(${blogData.img})` }}></div>
            <h1>{blogData.title}</h1>
            <p>{blogData.desc}</p>
            <Footer />
        </div>
    );
}

export default BlogDetail;
