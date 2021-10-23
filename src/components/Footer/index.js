import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="logo-container">
      <img
        src="https://res.cloudinary.com/poreddysrikanth/image/upload/v1634736012/Frame_275_quuhwq_helqgm.png"
        alt="website-footer-logo"
        className="logo"
      />
      <h1 className="heading">Tasty Kitchen</h1>
    </div>
    <p className="description">
      The only thing we are serious about is food.
      <br /> Contact us on
    </p>
    <div className="social-icons-container">
      <FaPinterestSquare
        data-testid="pintrest-social-icon"
        className="social-icons"
      />
      <FaInstagram
        data-testid="instagram-social-icon"
        className="social-icons"
      />
      <FaTwitter data-testid="twitter-social-icon" className="social-icons" />
      <FaFacebookSquare
        data-testid="facebook-social-icon"
        className="social-icons"
      />
    </div>
  </div>
)

export default Footer
