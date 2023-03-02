function Header() {
  return (
    <>
      <div>
        <header
          className="site-header site-header--menu-right fugu-header-section"
          id="sticky-menu"
        >
          <div className="container-fluid">
            <nav className="navbar site-navbar">
              <div className="brand-logo">
                <a href="/index">
                  <img
                    src="assets/images/logo/Airygo.png"
                    alt
                    className="light-version-logo"
                  />
                </a>
              </div>
              <div className="menu-block-wrapper">
                <div className="menu-overlay" />
                <nav className="menu-block" id="append-menu-header">
                  <div className="mobile-menu-head">
                    <div className="go-back">
                      <i className="fa fa-angle-left" />
                    </div>
                    <div className="current-menu-title" />
                    <div className="mobile-menu-close">×</div>
                  </div>
                  <ul className="site-menu-main">
                    <li className="nav-item nav-item-has-children">
                      <a href="/" className="nav-link-item drop-trigger">
                        Home
                      </a>
                    </li>
                    <li className="nav-item nav-item-has-children">
                      <a href="/blog" className="nav-link-item drop-trigger">
                        Blog <i className="fas fa-angle-down" />
                      </a>
                      <ul className="sub-menu" id="submenu-2">
                        <li className="sub-menu--item nav-item-has-children">
                          <a
                            href="/blog"
                            data-menu-get="h3"
                            className="drop-trigger"
                          >
                            About <i className="fas fa-angle-down" />
                          </a>
                          <ul className="sub-menu shape-none" id="submenu-3">
                            <li className="sub-menu--item">
                              <a href="/about">About Dark</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="/about">About light 01</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="/about">About light 02</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a
                            href="#"
                            data-menu-get="h3"
                            className="drop-trigger"
                          >
                            blog light <i className="fas fa-angle-down" />
                          </a>
                          <ul className="sub-menu shape-none" id="submenu-4">
                            <li className="sub-menu--item">
                              <a href="/blog">blog light</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="/blog">blog light sidebar 01</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="blog-light-sidebar.html">
                                blog light sidebar 02
                              </a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="/blog">blog light details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a
                            href="#"
                            data-menu-get="h3"
                            className="drop-trigger"
                          >
                            blog dark <i className="fas fa-angle-down" />
                          </a>
                          <ul className="sub-menu shape-none" id="submenu-5">
                            <li className="sub-menu--item">
                              <a href="/blog">blog dark</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="/blog">blog dark sidebar</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="/blog">blog dark details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a
                            href="#"
                            data-menu-get="h3"
                            className="drop-trigger"
                          >
                            Service
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="sub-menu shape-none" id="submenu-6">
                            <li className="sub-menu--item">
                              <a href="">service</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="">single service</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a
                            href="#"
                            data-menu-get="h3"
                            className="drop-trigger"
                          >
                            Team
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="sub-menu shape-none" id="submenu-7">
                            <li className="sub-menu--item">
                              <a href="">Team dark</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="">Team light 01</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="">Team light 02</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="">single team</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a
                            href="#"
                            data-menu-get="h3"
                            className="drop-trigger"
                          >
                            Career
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="sub-menu shape-none" id="submenu-8">
                            <li className="sub-menu--item">
                              <a href="">Career</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="">single Career</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a
                            href="#"
                            data-menu-get="h3"
                            className="drop-trigger"
                          >
                            Portfolio
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="sub-menu shape-none" id="submenu-9">
                            <li className="sub-menu--item">
                              <a href="">Portfolio Classic</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="">Portfolio Minimal</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="">Portfolio Modern</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="">Single Portfolio</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a
                            href="#"
                            data-menu-get="h3"
                            className="drop-trigger"
                          >
                            Pricing Light
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="sub-menu shape-none" id="submenu-10">
                            <li className="sub-menu--item">
                              <a href="">pricing light 01</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="">pricing light 02</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a
                            href="#"
                            data-menu-get="h3"
                            className="drop-trigger"
                          >
                            Pricing Dark
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="sub-menu shape-none" id="submenu-11">
                            <li className="sub-menu--item">
                              <a href="">pricing dark 01</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="">pricing dark 02</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a
                            href="#"
                            data-menu-get="h3"
                            className="drop-trigger"
                          >
                            Privacy Policy
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="sub-menu shape-none" id="submenu-12">
                            <li className="sub-menu--item">
                              <a href="/privacy-policy">Privacy Policy light</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="/privacy-policy">Privacy Policy dark</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a
                            href=""
                            data-menu-get="h3"
                            className="drop-trigger"
                          >
                            Utility
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="sub-menu shape-none" id="submenu-13">
                            <li className="sub-menu--item">
                              <a href="">faq</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="">Error 404</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="">testimonial</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="">Coming Soon</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-has-children has-megamenu">
                      <a href="/about" className="nav-link-item drop-trigger">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item nav-item-has-children">
                      <a href="/tnc" className="nav-link-item drop-trigger">
                        Terms and Conditions
                      </a>
                    </li>
                    <li className="nav-item nav-item-has-children">
                      <a href="/contact" className="nav-link-item drop-trigger">
                        Contact us
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
                <a className="fugu-header-btn" href></a>
              </div>
              <div className="mobile-menu-trigger">
                <span />
              </div>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
export default Header;
