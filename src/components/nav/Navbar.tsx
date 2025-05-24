import '../../assets/css/nav.css'
import logoBrown from '../../assets/logo/icon logo/SVG/WM Private_iconlogo_1.svg';
function Navbar() {
  return (
    <div className='fixed-nav'>
    <div className="nav-container">
      <div className='logo-container'>
        <img src={logoBrown} alt="alt logo" />
       <h3><span>WM</span>FINANCIAL GROUP</h3>
       
      </div>
      
      <div className='nav-items'>
        <a href="" className='underline-hover'>Home</a>
        <a href="" className='underline-hover'>Products</a>
        <a href="" className='underline-hover'>Solutions</a>
        <a href="" className='underline-hover'>Testimonials</a>
        <a href="" className='underline-hover'>Contact Us</a>
      </div>
      </div>
      </div>
  )
}

export default Navbar