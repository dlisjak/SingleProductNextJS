import React from 'react';

const Navbar = () => {
  return (
    <div className="main__header position__relative header__sticky">
      <div className="container">
        <div className="main__header--inner d-flex justify-content-between align-items-center">
          <div className="offcanvas__header--menu__open ">
            <a
              className="offcanvas__header--menu__open--btn"
              href="javascript:void(0)"
              data-offcanvas
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon offcanvas__header--menu__open--svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="32"
                  d="M80 160h352M80 256h352M80 352h352"
                />
              </svg>
              <span className="visually-hidden">Offcanvas Menu Open</span>
            </a>
          </div>
          <div className="main__logo">
            <h1 className="main__logo--title">
              <a className="main__logo--link" href="index.html">
                <img
                  className="main__logo--img"
                  src="assets/img/logo/nav-logo.webp"
                  alt="logo-img"
                />
              </a>
            </h1>
          </div>
          <div className="header__menu d-none d-lg-block">
            <nav className="header__menu--navigation">
              <ul className="d-flex">
                <li className="header__menu--items">
                  <a className="header__menu--link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="header__menu--items">
                  <a className="header__menu--link" href="about.html">
                    About US{' '}
                  </a>
                </li>
                <li className="header__menu--items">
                  <a className="header__menu--link" href="blog.html">
                    Blog
                  </a>
                </li>
                <li className="header__menu--items">
                  <a className="header__menu--link " href="#">
                    Pages
                  </a>
                </li>
                <li className="header__menu--items">
                  <a className="header__menu--link" href="contact.html">
                    Contact{' '}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__account">
            <ul className="d-flex">
              <li className="header__account--items  header__account--search__items d-md-none">
                <a
                  className="header__account--btn search__open--btn"
                  href="javascript:void(0)"
                  data-offcanvas
                >
                  <svg
                    className="header__search--button__svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26.51"
                    height="23.443"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="32"
                      d="M338.29 338.29L448 448"
                    />
                  </svg>
                  <span className="visually-hidden">Search</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
