import React from 'react';

const TopBar = () => {
  return (
    <header className="header__section">
      <div className="header__topbar bg__secondary color-scheme-2">
        <div className="container">
          <div className="header__topbar--inner d-flex align-items-center justify-content-between">
            <ul className="header__contact--info style3 d-flex align-items-center">
              <li className="header__contact--info__list text-white">
                <svg
                  className="header__contact--info__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.57"
                  height="13.13"
                  viewBox="0 0 31.57 31.13"
                >
                  <path
                    d="M30.413,4H5.157C3.421,4,2.016,5.751,2.016,7.891L2,31.239c0,2.14,1.421,3.891,3.157,3.891H30.413c1.736,0,3.157-1.751,3.157-3.891V7.891C33.57,5.751,32.149,4,30.413,4Zm0,7.783L17.785,21.511,5.157,11.783V7.891l12.628,9.728L30.413,7.891Z"
                    transform="translate(-2 -4)"
                    fill="currentColor"
                  ></path>
                </svg>
                <a className="text-white" href="mailto:support@anxiety-rings.com">
                  support@anxiety-rings.com
                </a>
              </li>
              <li className="header__contact--info__list text-white">
                <svg
                  className="header__contact--info__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="14"
                  viewBox="0 0 14 18"
                >
                  <path
                    d="M12,2C8.13,2,5,4.817,5,8.3,5,13.025,12,20,12,20s7-6.975,7-11.7C19,4.817,15.87,2,12,2Zm0,8.55A2.386,2.386,0,0,1,9.5,8.3,2.386,2.386,0,0,1,12,6.05,2.386,2.386,0,0,1,14.5,8.3,2.386,2.386,0,0,1,12,10.55Z"
                    transform="translate(-5 -2)"
                    fill="currentColor"
                  ></path>
                </svg>
                Manhattan 1, New York
              </li>
            </ul>
            <div className="header__top--sidebar d-flex align-items-center">
              <div className="language__currency d-none d-lg-block">
                <ul className="d-flex align-items-center">
                  <li className="language__currency--list">
                    <a className="language__switcher text-white" href="#">
                      <span>ENG</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11.797"
                        height="9.05"
                        viewBox="0 0 9.797 6.05"
                      >
                        <path
                          d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z"
                          transform="translate(-6 -8.59)"
                          fill="currentColor"
                          opacity="0.7"
                        />
                      </svg>
                    </a>
                    <div className="dropdown__language">
                      <ul>
                        <li className="language__items">
                          <a className="language__text" href="#">
                            France
                          </a>
                        </li>
                        <li className="language__items">
                          <a className="language__text" href="#">
                            Russia
                          </a>
                        </li>
                        <li className="language__items">
                          <a className="language__text" href="#">
                            Spanish
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="language__currency--list">
                    <a className="account__currency--link text-white" href="#">
                      <span>USD</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11.797"
                        height="9.05"
                        viewBox="0 0 9.797 6.05"
                      >
                        <path
                          d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z"
                          transform="translate(-6 -8.59)"
                          fill="currentColor"
                          opacity="0.7"
                        />
                      </svg>
                    </a>
                    <div className="dropdown__currency">
                      <ul>
                        <li className="currency__items">
                          <a className="currency__text" href="#">
                            CAD
                          </a>
                        </li>
                        <li className="currency__items">
                          <a className="currency__text" href="#">
                            CNY
                          </a>
                        </li>
                        <li className="currency__items">
                          <a className="currency__text" href="#">
                            EUR
                          </a>
                        </li>
                        <li className="currency__items">
                          <a className="currency__text" href="#">
                            GBP
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <ul className="header__social d-flex">
                <li className="header__social--list">
                  <a
                    className="header__social--list__icon"
                    target="_blank"
                    href="https://www.facebook.com"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10.239"
                      height="17.984"
                      viewBox="0 0 11.239 20.984"
                    >
                      <path
                        data-name="Icon awesome-facebook-f"
                        d="M11.575,11.8l.583-3.8H8.514V5.542A1.9,1.9,0,0,1,10.655,3.49h1.657V.257A20.2,20.2,0,0,0,9.371,0c-3,0-4.962,1.819-4.962,5.112V8.006H1.073v3.8H4.409v9.181H8.514V11.8Z"
                        transform="translate(-1.073)"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="visually-hidden">Facebook</span>
                  </a>
                </li>
                <li className="header__social--list">
                  <a
                    className="header__social--list__icon"
                    target="_blank"
                    href="https://twitter.com"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="17.492"
                      viewBox="0 0 24 19.492"
                    >
                      <path
                        data-name="Icon awesome-twitter"
                        d="M21.533,7.112c.015.213.015.426.015.64A13.9,13.9,0,0,1,7.553,21.746,13.9,13.9,0,0,1,0,19.538a10.176,10.176,0,0,0,1.188.061,9.851,9.851,0,0,0,6.107-2.1,4.927,4.927,0,0,1-4.6-3.411,6.2,6.2,0,0,0,.929.076,5.2,5.2,0,0,0,1.294-.167A4.919,4.919,0,0,1,.975,9.168V9.107A4.954,4.954,0,0,0,3.2,9.731,4.926,4.926,0,0,1,1.675,3.152,13.981,13.981,0,0,0,11.817,8.3,5.553,5.553,0,0,1,11.7,7.173a4.923,4.923,0,0,1,8.513-3.365A9.684,9.684,0,0,0,23.33,2.619,4.906,4.906,0,0,1,21.167,5.33,9.861,9.861,0,0,0,24,4.569a10.573,10.573,0,0,1-2.467,2.543Z"
                        transform="translate(0 -2.254)"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="visually-hidden">Twitter</span>
                  </a>
                </li>
                <li className="header__social--list">
                  <a
                    className="header__social--list__icon"
                    target="_blank"
                    href="https://www.instagram.com"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17.497"
                      height="17.492"
                      viewBox="0 0 19.497 19.492"
                    >
                      <path
                        data-name="Icon awesome-instagram"
                        d="M9.747,6.24a5,5,0,1,0,5,5A4.99,4.99,0,0,0,9.747,6.24Zm0,8.247A3.249,3.249,0,1,1,13,11.238a3.255,3.255,0,0,1-3.249,3.249Zm6.368-8.451A1.166,1.166,0,1,1,14.949,4.87,1.163,1.163,0,0,1,16.115,6.036Zm3.31,1.183A5.769,5.769,0,0,0,17.85,3.135,5.807,5.807,0,0,0,13.766,1.56c-1.609-.091-6.433-.091-8.042,0A5.8,5.8,0,0,0,1.64,3.13,5.788,5.788,0,0,0,.065,7.215c-.091,1.609-.091,6.433,0,8.042A5.769,5.769,0,0,0,1.64,19.341a5.814,5.814,0,0,0,4.084,1.575c1.609.091,6.433.091,8.042,0a5.769,5.769,0,0,0,4.084-1.575,5.807,5.807,0,0,0,1.575-4.084c.091-1.609.091-6.429,0-8.038Zm-2.079,9.765a3.289,3.289,0,0,1-1.853,1.853c-1.283.509-4.328.391-5.746.391S5.28,19.341,4,18.837a3.289,3.289,0,0,1-1.853-1.853c-.509-1.283-.391-4.328-.391-5.746s-.113-4.467.391-5.746A3.289,3.289,0,0,1,4,3.639c1.283-.509,4.328-.391,5.746-.391s4.467-.113,5.746.391a3.289,3.289,0,0,1,1.853,1.853c.509,1.283.391,4.328.391,5.746S17.855,15.705,17.346,16.984Z"
                        transform="translate(0.004 -1.492)"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="visually-hidden">Instagram</span>
                  </a>
                </li>
                <li className="header__social--list">
                  <a
                    className="header__social--list__icon"
                    target="_blank"
                    href="https://www.linkedin.com"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17.419"
                      height="17.419"
                      viewBox="0 0 19.419 19.419"
                    >
                      <path
                        data-name="Icon awesome-linkedin-in"
                        d="M4.347,19.419H.321V6.454H4.347ZM2.332,4.686A2.343,2.343,0,1,1,4.663,2.332,2.351,2.351,0,0,1,2.332,4.686ZM19.415,19.419H15.4V13.108c0-1.5-.03-3.433-2.093-3.433-2.093,0-2.414,1.634-2.414,3.325v6.42H6.869V6.454H10.73V8.223h.056A4.23,4.23,0,0,1,14.6,6.129c4.075,0,4.824,2.683,4.824,6.168v7.122Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="visually-hidden">Linkedin</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
