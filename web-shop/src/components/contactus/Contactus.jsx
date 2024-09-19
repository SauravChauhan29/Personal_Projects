import React from 'react'
import  './contactus.css'
// import LazyLoader from '../lazyLoader/LazyLoader2'



const Contactus = () => {
 
  return (
    <>
{/* <LazyLoader/> */}
      <div className="contact-container">
  <div className="contact-wrapper">
    <div className="contact-heading">
      <div className="head">
        <h1> Contact Us</h1>
      </div>
      <div className="contact-info">
        <div className="static-info">
          <p>
            We’d love to hear from you! Whether you have a question, feedback,
            or just want to say hello, feel free to reach out to us.
          </p>
          <h2>Get in Touch</h2>
          <p>For general inquiries or support, drop us an email at:</p>
          <label>Email:</label>   <br />
          <span>📧 support@yourwebsite.com</span>
          <br />
          <a href="mailto:sauravchauhan@gmail.com" className="linker">
            Mail us
          </a>
          <hr />
          <p>Speak directly to one of our team members.</p>
          <label>Phone:</label>   <br />
          <span>📞 +123-456-7890</span>
          <br />
          <a href="tel:+917486069868" className="linker">
            {" "}
            Call Now
          </a>
          <h2>Business Hours:</h2>
          <p>We’re available during the following hours:</p>
          <p>🕒 Monday - Friday: 9 AM - 6 PM</p>
          <p>🕒 Saturday: 10 AM - 2 PM</p>
          <p>🕒 Sunday: Closed</p>
          <h2>Follow Us:</h2>
          <p>
            Connect with us on social media to stay up-to-date with our latest
            news:
          </p>
          <ul>
            <li>
              <a href="to"> Facebook</a>
            </li>
            <li>
              <a href="to"> Instagram</a>
            </li>
            <li>
              <a href="to"> Twitter</a>
            </li>
          </ul>
        </div>
        <div className="dynamic-info">
          <h2>Inquiry Form:</h2>
          <p>
            For an Order querry detail, you can fill out the form below, and
            we'll get back to you as soon as possible.
          </p>
          <form action="">
            <label htmlFor=""> Name:</label>
            <input type="text" placeholder="ENTER YOUR NAME" />
            <label htmlFor=""> Email:</label>
            <input type="email" placeholder="ENTER YOUR EMAIL" />
            <label htmlFor=""> Order ID:</label>
            <input type="number" placeholder="#Order_ID" />
            <label htmlFor=""> Message:</label>
            <textarea
              rows={5}
              id=""
              placeholder="Enter Your Query"
              defaultValue={""}
            />
            <input type="submit" defaultValue="Submit Querry" />
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Contactus
