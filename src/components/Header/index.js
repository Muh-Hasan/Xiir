import React from "react"
import Logo from "../../images/xiir.png"
import styles from "./index.module.css"
const Header = () => {
  return (
    <header className={styles.siteHeader}>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={Logo} alt="logo" height="40px" />
          </div>
          <div className="col text-center">
            <h1 className={styles.siteText}>smart compliance oversight</h1>
          </div>
          <div className="col text-right">
            <button className={styles.btn}>
              <span>menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
