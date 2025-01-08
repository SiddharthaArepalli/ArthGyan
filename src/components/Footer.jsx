import "../styling/Footer.css"
function Footer() {
    return (
        <>
            <footer>
                <div className="logo">

                </div>
                <div className="nav">
                    <li className="link"><a href="/home" className="link-home">Home</a></li>
                    <li className="link"><a href="/trends" className="link-trends">Trends</a></li>
                    <li className="link"><a href="/tools" className="link-tools">Tools</a></li>
                    <li className="link"><a href="/blogs" className="link-blogs">Blogs</a></li>
                    <li className="link"><a href="/chatbot" className="link-finbot">FinBot</a></li>
                </div>

                <div className="news-letter">
                    <h1>SUBSCRIBE</h1>
                    <p>Join our newsletter to stay up to date on features and releases.</p>
                    <input type="text" placeholder="Enter your email.." />
                </div>
            </footer>
        </>
    );
}

export default Footer;
