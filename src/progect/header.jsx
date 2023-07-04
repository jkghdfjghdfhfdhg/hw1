import React from 'react'
import Logo from '../assets/Rectangle 50.svg'
import '../progect/style.css'
import Code from '../assets/MyHeart.svg'
import Host from '../assets/lumpabtn.svg'
import Icon from '../assets/Korzinaexe.svg'
import Icon_nav from '../assets/sexygirl.svg'
import AI from '../assets/levokortinanepon.svg'
import Active from '../assets/BigCircl.svg'
import Elipsie from '../assets/Cirkl1.svg'
import Elipsie1 from '../assets/Cirkl2.svg'
import Elipsie2 from '../assets/Circl3.svg'
import Img from '../assets/Group 13.svg'
import Img2 from '../assets/Group 21.svg'
import BI from '../assets/Kortinafull.svg'
import BE from '../assets/pravokortinanepon.svg'
import Arrow from '../assets/strelka.svg'
const Header = () => {
  return (
<header className='header'>
    <div className='section'>
     
        <nav  className='header_nav'>
            <h1 className='header_title'>
                <img src={Logo} alt="" />
            </h1>
            
            
              <p className='menu'>Funiro.</p>
              <p className='menu_item'>Products</p>
              <p className='menu_text'>Rooms</p>
              <p className='menu_box'>Inspirations</p>
           
            <p className='img-p'>
           
            <img src={Host} alt="" />
            </p>
           <p className='Funiro'>
           <img src={Code} alt="" />
           </p>
           <p className='icon_nav'>
            <img src={Icon} alt="" />
           </p>
            <div className="componets">
              <img src={Icon_nav} alt="" />
            </div>
            <p className="aijamal">
        <img src={AI} alt="" />
      </p>
      <p className='cs'>
        {/* <img src= { Active} alt="" />
        <img src={Elipsie}className='roberto' alt="" />
        <img src={Elipsie1}className='alex' alt="" />
        <img src={Elipsie2}className='ronaldo' alt="" /> */}
      </p>
      <div className="photo">
        {/* <img src={Img} alt="" />
        <img src={Img2} alt="" /> */}
      </div>
            <div className="img">
              <img src={BI} alt="" />
              <div className="img-end">
                <img src={BE} alt="" />
              </div>
            </div>
                
        </nav>
    </div>
    <div className="second-block">
      <div className="second-text-block">
        <p>
          High-Quality Furniture Just For You
        </p>
        <div className="second-op-block">
          <p>
          Our furniture is made from selected and best quality materials that are suitable for your dream home
          </p>
          <button className='second-button-block'>Shop Now</button>
        </div>
      </div>
    </div>
    <div className="third-block">
      <div className="third-block-text">
        <p>
          Bohauss
        </p>
        <div className="third-op-block">
          <p>
          Luxury big sofa 2-seat
          </p>
          <div className="third-price-block">
            <p>
            Rp 17.000.000
            </p>
            <div className="third-block-img">
              <img src={Arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
</header>
  )
}

export default Header;