import React from 'react'
import { FaTwitter, FaFacebookF, FaGithub} from 'react-icons/fa' 

function Footer() {
    const aYear = new Date().getFullYear ()
  return (
    <footer>
      <div className='footer'>
        <div className='main'>
          <div className='footnote'>
            <h3 className='follow'>FOLLOW US</h3>
            <ul className='list fa'>
              <li><a className='link_list' href='./'> <FaTwitter/> </a> </li>
              <li><a className='link_list ' href='./'> <FaFacebookF/> </a></li>
              <li><a className='link_list ' href='./'> <FaGithub/> </a></li>
            </ul>
          </div>
          <div className='footnote contacts'>
            <h3>CONTACTS</h3>
            <ul className="list">
              <li>Phone: +2348004005000</li>
              <li>Email: teamgithub@example.com</li>
              <li>Address: 124, WTF road, Teams city, Nigeria.</li>  
            </ul>
          </div>
          <div className="footnote news">
            <h3>RECENT NEWS</h3>
            <ul className="list">
              <li><a className='link_list' href='/'>About us</a></li>
              <li><a className='link_list' href='/'>Services</a></li>
              <li><a className='link_list' href='/'>Get in Touch</a></li>
            </ul>
          </div>
        </div>
        <div className='year'>
        <p>
          &copy; {aYear} Shop Quality by TeamGitHub. All rights reserved.
        </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
