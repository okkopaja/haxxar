import React from 'react'

function page() {
  return (
    <>
    <body>
    <nav>
        <div className="nav-bar">
            <i className='bx bx-menu sidebarOpen' ></i>
            <span className="logo navLogo"><a href="#">Haxxar</a></span>
            <div className="menu">
                <div className="logo-toggle">
                    <span className="logo"><a href="#">Haxxar</a></span>
                    <i className='bx bx-x siderbarClose'></i>
                </div>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>

                    <div className="login">
                    <button> Login / Register </button>
                </div>

                </ul>
                
            </div>
            <div className="darkLight-searchBox">
                <div className="dark-light">
                    <i className='bx bx-moon moon'></i>
                    <i className='bx bx-sun sun'></i>
                </div>
                <div className="searchBox">
                   <div className="searchToggle">
                    <i className='bx bx-x cancel'></i>
                    <i className='bx bx-search search'></i>
                   </div>
                    <div className="search-field">
                        <input type="input" placeholder="Search..." />
                        <i className='bx bx-search'></i>
                    </div>
                </div>
            </div>
            
        </div>
    </nav> 

    <div className="container"></div>
    <footer  className="min-height: 5vh">
        
        <section className="ft-main">
          <div className="ft-main-item">
            <h2 className="ft-title">About</h2>
            <ul>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Resources</h2>
            <ul>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">eBooks</a></li>
              <li><a href="#">Webinars</a></li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Contact</h2>
            <ul>
              <li><a href="#">Help</a></li>
              <li><a href="#">Sales</a></li>
              <li><a href="#">Advertise</a></li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Stay Updated</h2>
            <p id="change">Subscribe to our newsletter to get our latest news.</p>
            <form>
              <input type="email" name="email" placeholder="Enter email address" />
             
              <button type="button" id="demo">Subscribe</button>
            </form>
          </div>
        </section>
      
        <section className="ft-social">
          <ul className="ft-social-list">
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-github"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
          </ul>
        </section>
      
        <section className="ft-legal">
          <ul className="ft-legal-list">
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li>&copy; 2019 Copyright Nowrap Inc.</li>
          </ul>
        </section>
      </footer>

</body>
    </>
  )
}

export default page