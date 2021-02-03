import React, { useRef, useState } from "react"
import Logo from "../../images/xiir.png"
import "./Header.css"
import gsap from "gsap"
import Button from "../Button"
const Header = () => {
 
  const hiddenMenu = useRef(null)

  return (
    <div className="website-header">
      <header className="site-header fixed-top ">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col header-icon">
              <img src={Logo} alt="logo" />
            </div>
            <div className="col text-center main-text">
              <h1> smart compliance oversight
              </h1>
            </div>
            <div className="col main-triger">
              <div style={{textAlign: "right"}}>
              <button>
                <span>menu</span>
              </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </header>
    </div>
  )
}

// <div className='website-header'>
//         <header className="site-header fixed-top">
//           <div className="container">
//             <div className="row">
//               <div className="col">
//                 <img src={Logo} alt="logo" height="40px" />
//               </div>
//               <div className="col text-center">
//                 <h1 className="siteText">smart compliance oversight</h1>
//               </div>
//               <div className="col text-right">
//                 <button className="btn" onClick={() => showMenu()}>
//                   <span>menu</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </header>
//       </div>
//       {showM ? (
//         <div ref={menu} className="overlay">
//           <header className="siteHeader">
//             <div className="container">
//               <div className="row">
//                 <div className="col">
//                   <img src={Logo} alt="logo" height="40px" />
//                 </div>
//                 <div className="col text-center">
//                   <h1 className="siteText">smart compliance oversight</h1>
//                 </div>
//                 <div className="col text-right">
//                   <button className="btn" onClick={() => showMenu()}>
//                     <span>menu</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </header>
//           {/* <button
//             onClick={() => {
//               gsap.to(menu.current, { width: "0" })
//               // setShowM(false)
//             }}
//           >
//             x
//           </button>
//            */}
//           <div className="row">
//             <div className="container-fluid main-menu d-flex justify-content-center flex-column align-items-center">
//               <ul>
//                 <li>
//                   <button>services</button>
//                 </li>
//                 <li>
//                   <button>parthners</button>
//                 </li>
//                 <li>
//                   <button>test drive</button>
//                 </li>
//                 <li>
//                   <button>about us</button>
//                 </li>
//                 <li>
//                   <button>blogs</button>
//                 </li>
//                 <li>
//                   <button>contact</button>
//                 </li>
//               </ul>
//             </div>
//             <div className="container-fluid menu-footer d-flex justify-content-between">
//               <div className="col menu-tagline">
//                 <h2>smart compliance oversight</h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         ""
//       )}
export default Header
