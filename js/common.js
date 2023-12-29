class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="top-header">
        <div class="topnav">
          <img class="topnav-logo" src="https://github.com/Brandon-Matran/Dabin_Clone/blob/master/resources/dabin-top-logo.jpg?raw=true" />
        </div>
        <div class="nav-bottom-row">
          <ul>
            <li class="level-1-link"><a class="home" href="./index.html">HOME</a></li>
            <li class="level-1-link">
              <a class="tickets" href="./shows.html">TOUR</a>
            </li>

            <li class="level-1-link"><a>MUSIC</a></li>
            <li class="level-1-link"><a>ABOUT</a></li>
            <li class="level-1-link">
              <a href="#" class="help-link" aria-expanded="false" onmouseover="toggleAriaExpanded(true, this)"
                onmouseout="setTimeout(() => toggleAriaExpanded(false, this), 500)">
                <span>HELP</span>
              </a>
              <div class="help-list-container" onmouseenter="onContainerMouseEnter()"
                onmouseleave="onContainerMouseLeave()">
                <ul class="help-list" style="display: block">
                  <li class="help-list-link">
                    <a href="RETURNS">RETURNS PORTAL</a>
                  </li>
                  <li class="help-list-link">
                    <a href="RETURNS">RETURNS PORTAL</a>
                  </li>
                  <li class="help-list-link">
                    <a href="RETURNS">RETURNS PORTAL</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </header>`
    }


}

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = ` <div class="shopify-footer-container">
        <footer class="shopify-footer">
          <div class="footer-blocks">
            <div class="footer-block">
              <div class="footer-heading">ABOUT</div>
              <div class="footer-body">
                <div class="footer-body-paragraph" style="width:400px;">
                  <p>Dabin is a JUNO nominated music producer &amp; instrumentalist originally from Toronto. Having spent his teens learning to play the piano, drums and guitar, Dabin started producing electronic music in 2011.</p>
                </div>
                <div class="footer-socials">
                  <a href="https://www.facebook.com/dabinmusic/">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                      <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"></path>
                  </svg>
                  </a>
                  <a href="https://twitter.com/iamdabinlee">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                      <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
                  </svg>
                  </a>
                  <a href="https://www.instagram.com/dabinmusic/">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                      <path d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"></path>
                      </svg>
                  </a>
                  <a href="https://www.youtube.com/channel/UCc1dxCpQAFPCvN3HOrYBipQ">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                      <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
                  </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="footer-block info-block-parent">
              <div class="footer-block-container-middle">
                <div class="footer-heading">INFO</div>
                <div class="footer-body">
                <ul class="footer-menu" style="padding: 0;">
                  <li><a>MERCH</a></li>
                  <li>MUSIC</li>
                  <li>ABOUT</li>
                  </ul>
              </div>
            </div>
            </div>
            <div class="footer-block">
              <div class="footer-block-container-last">
                <div class="footer-heading">SUPPORT</div>
                <div class="footer-body">
                  <ul class="footer-menu" aria-label="Navigation" style="padding: 0;">

                    <li>
                      <a href="https://dabin.topdrawer.support/en-US/return-portal-284813" title="RETURNS" target="_blank">
                        RETURNS
                      </a>
                    </li>

                    <li>
                      <a href="https://dabin.topdrawer.support/en-US" title="HELP DESK" target="_blank">
                        HELP DESK
                      </a>
                    </li>

                    <li>
                      <a href="https://dabin.topdrawer.support/en-US/contact" title="CONTACT" target="_blank">
                        CONTACT
                      </a>
                    </li>

                    <li>
                      <a href="https://dabinmusic.com/pages/terms-of-service" title="TERMS OF SERVICE">
                        TERMS OF SERVICE
                      </a>
                    </li>

                    <li>
                      <a href="https://dabinmusic.com/pages/privacy-policy" title="PRIVACY POLICY">
                        PRIVACY POLICY
                      </a>
                    </li>

                </ul>
                </div>
              </div>
               </div>
          </div>
          <div class="footer-sub-container">
            <div class="footer-sub-paragraph">
              <p>Powered by Top Drawer Merchant</p>
          </div>
          <div class="footer-sub-block" data-type="payment-icons">
            <div class="footer-sub-container">
              <div class="payment-icons-root">
                <ul class="payment-icons-list">
                  <li class="payment-icons-item">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="32px" height="32px"><path fill="#1976D2" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"/><path fill="#FFF" d="M22.255 20l-2.113 4.683L18.039 20h-2.695v6.726L12.341 20h-2.274L7 26.981h1.815l.671-1.558h3.432l.682 1.558h3.465v-5.185l2.299 5.185h1.563l2.351-5.095v5.095H25V20H22.255zM10.135 23.915l1.026-2.44 1.066 2.44H10.135zM37.883 23.413L41 20.018h-2.217l-1.994 2.164L34.86 20H28v6.982h6.635l2.092-2.311L38.767 27h2.21L37.883 23.413zM33.728 25.516h-4.011v-1.381h3.838v-1.323h-3.838v-1.308l4.234.012 1.693 1.897L33.728 25.516z"/></svg>
                  </li>
                  <li class="payment-icons-list"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 50 50">
                    <path d="M 9.984375 15.001953 C 9.149375 15.041953 8.1182969 15.573313 7.5292969 16.320312 C 6.9892969 16.964312 6.5275313 18.010188 6.6445312 18.992188 C 7.5875313 19.074188 8.5301406 18.500438 9.1191406 17.773438 C 9.6991406 17.026437 10.082375 16.024953 9.984375 15.001953 z M 18 17 L 18 32 L 20.375 32 L 20.375 27 L 23.625 27 C 26.608 27 28.75 24.925 28.75 22 C 28.75 19.075 26.647125 17 23.703125 17 L 18 17 z M 20.375 19 L 23.125 19 C 25.172 19 26.375 20.105 26.375 22 C 26.375 23.895 25.182 25 23.125 25 L 20.375 25 L 20.375 19 z M 9.875 19.5 C 8.5 19.5 7.517 20.25 6.875 20.25 C 6.223 20.25 5.25 19.509766 4.125 19.509766 C 2.75 19.509766 1.4033594 20.372859 0.69335938 21.630859 C -0.76564063 24.145859 0.31460937 27.869016 1.7246094 29.916016 C 2.4156094 30.930016 3.25 32 4.375 32 C 5.406 31.961 5.755 31.375 7 31.375 C 8.254 31.375 8.625 32 9.75 32 C 10.875 32 11.556094 30.969078 12.246094 29.955078 C 13.034094 28.805078 13.356 27.684 13.375 27.625 C 13.356 27.606 11.197734 26.77725 11.177734 24.28125 C 11.158734 22.19525 12.879031 21.200578 12.957031 21.142578 C 11.984031 19.700578 10.375 19.5 10 19.5 L 9.875 19.5 z M 34.199219 21 C 31.710219 21 29.870734 22.395453 29.802734 24.314453 L 31.912109 24.314453 C 32.086109 23.402453 32.948859 22.804688 34.130859 22.804688 C 35.563859 22.804688 36.373047 23.460969 36.373047 24.667969 L 36.375 25.5 L 33.443359 25.654297 C 30.722359 25.815297 29.25 26.908594 29.25 28.808594 C 29.25 30.727594 30.770219 32.001953 32.949219 32.001953 C 34.421219 32.001953 35.78725 31.270328 36.40625 30.111328 L 36.455078 30.111328 L 36.455078 31.886719 L 38.623047 31.886719 L 38.623047 24.515625 C 38.624047 22.376625 36.882219 21 34.199219 21 z M 39.5 21 L 43.507812 31.949219 L 43.292969 32.615234 C 42.930969 33.744234 42.344828 34.177734 41.298828 34.177734 C 41.119828 34.177734 40.781 34.159625 40.625 34.140625 L 40.625 35.945312 C 40.783 35.980313 41.332906 36 41.503906 36 C 43.810906 36 44.896703 35.132047 45.845703 32.498047 L 50 21 L 47.595703 21 L 44.808594 29.884766 L 44.759766 29.884766 L 41.972656 21 L 39.5 21 z M 36.375 27 L 36.367188 27.867188 C 36.367188 29.254188 35.166125 30.242188 33.578125 30.242188 C 32.329125 30.242188 31.535156 29.653953 31.535156 28.751953 C 31.535156 27.820953 32.300672 27.279359 33.763672 27.193359 L 36.375 27 z"></path>
                </svg></li>
                  <li class="payment-icons-list">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 64 64">
                      <linearGradient id="pSXX1VUq3tm0is3Ae_wm1a_50921_gr1" x1="32" x2="32" y1="11" y2="53.553" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#pSXX1VUq3tm0is3Ae_wm1a_50921_gr1)" d="M58,16H6c-1.654,0-3,1.346-3,3v30c0,1.654,1.346,3,3,3h52c1.654,0,3-1.346,3-3V19 C61,17.346,59.654,16,58,16z M59,49c0,0.552-0.448,1-1,1H6c-0.552,0-1-0.448-1-1V19c0-0.552,0.448-1,1-1h52c0.552,0,1,0.448,1,1V49z"></path><linearGradient id="pSXX1VUq3tm0is3Ae_wm1b_50921_gr2" x1="32" x2="32" y1="11" y2="53.553" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#pSXX1VUq3tm0is3Ae_wm1b_50921_gr2)" d="M5 12H59V14H5z"></path><linearGradient id="pSXX1VUq3tm0is3Ae_wm1c_50921_gr3" x1="32" x2="32" y1="11" y2="53.553" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#pSXX1VUq3tm0is3Ae_wm1c_50921_gr3)" d="M35,22h-6c-6.617,0-12,5.383-12,12s5.383,12,12,12h6c6.617,0,12-5.383,12-12S41.617,22,35,22z M19,34c0-5.514,4.486-10,10-10s10,4.486,10,10s-4.486,10-10,10S19,39.514,19,34z M35.675,43.966C38.884,41.81,41,38.148,41,34 s-2.116-7.81-5.325-9.966C40.874,24.384,45,28.714,45,34S40.874,43.616,35.675,43.966z"></path><linearGradient id="pSXX1VUq3tm0is3Ae_wm1d_50921_gr4" x1="24" x2="24" y1="25.875" y2="41.675" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#pSXX1VUq3tm0is3Ae_wm1d_50921_gr4)" fill-rule="evenodd" d="M27,26.25v15.5c-3.45-0.89-6-4.02-6-7.75 C21,30.27,23.55,27.14,27,26.25z" clip-rule="evenodd"></path><linearGradient id="pSXX1VUq3tm0is3Ae_wm1e_50921_gr5" x1="34" x2="34" y1="25.875" y2="41.675" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#pSXX1VUq3tm0is3Ae_wm1e_50921_gr5)" fill-rule="evenodd" d="M37,34c0,3.73-2.55,6.86-6,7.75v-15.5 C34.45,27.14,37,30.27,37,34z" clip-rule="evenodd"></path>
                      </svg>
                  </li>
                  <li class="payment-icons-list">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 48 48">
                      <path fill="#E1E7EA" d="M45,35c0,2.2-1.8,4-4,4H7c-2.2,0-4-1.8-4-4V13c0-2.2,1.8-4,4-4h34c2.2,0,4,1.8,4,4V35z"></path><path fill="#FF6D00" d="M45,35c0,2.2-1.8,4-4,4H16c0,0,23.6-3.8,29-15V35z M22,24c0,1.7,1.3,3,3,3s3-1.3,3-3c0-1.7-1.3-3-3-3S22,22.3,22,24z"></path><path d="M11.2,21h1.1v6h-1.1V21z M17.2,24c0,1.7,1.3,3,3,3c0.5,0,0.9-0.1,1.4-0.3v-1.3c-0.4,0.4-0.8,0.6-1.4,0.6c-1.1,0-1.9-0.8-1.9-2c0-1.1,0.8-2,1.9-2c0.5,0,0.9,0.2,1.4,0.6v-1.3c-0.5-0.2-0.9-0.4-1.4-0.4C18.5,21,17.2,22.4,17.2,24z M30.6,24.9L29,21h-1.2l2.5,6h0.6l2.5-6h-1.2L30.6,24.9z M33.9,27h3.2v-1H35v-1.6h2v-1h-2V22h2.1v-1h-3.2V27z M41.5,22.8c0-1.1-0.7-1.8-2-1.8h-1.7v6h1.1v-2.4h0.1l1.6,2.4H42l-1.8-2.5C41,24.3,41.5,23.7,41.5,22.8z M39.2,23.8h-0.3v-1.8h0.3c0.7,0,1.1,0.3,1.1,0.9C40.3,23.4,40,23.8,39.2,23.8z M7.7,21H6v6h1.6c2.5,0,3.1-2.1,3.1-3C10.8,22.2,9.5,21,7.7,21z M7.4,26H7.1v-4h0.4c1.5,0,2.1,1,2.1,2C9.6,24.4,9.5,26,7.4,26z M15.3,23.3c-0.7-0.3-0.9-0.4-0.9-0.7c0-0.4,0.4-0.6,0.8-0.6c0.3,0,0.6,0.1,0.9,0.5l0.6-0.8C16.2,21.2,15.7,21,15,21c-1,0-1.8,0.7-1.8,1.7c0,0.8,0.4,1.2,1.4,1.6c0.6,0.2,1.1,0.4,1.1,0.9c0,0.5-0.4,0.8-0.9,0.8c-0.5,0-1-0.3-1.2-0.8l-0.7,0.7c0.5,0.8,1.1,1.1,2,1.1c1.2,0,2-0.8,2-1.9C16.9,24.2,16.5,23.8,15.3,23.3z"></path>
                      </svg>
                  </li>
                  <li class="payment-icons-list">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 48 48">
                      <path fill="#0081fb" d="M47,29.36l-2.193,1.663L42.62,29.5c0-0.16,0-0.33-0.01-0.5c0-0.16,0-0.33-0.01-0.5	c-0.14-3.94-1.14-8.16-3.14-11.25c-1.54-2.37-3.51-3.5-5.71-3.5c-2.31,0-4.19,1.38-6.27,4.38c-0.06,0.09-0.13,0.18-0.19,0.28	c-0.04,0.05-0.07,0.1-0.11,0.16c-0.1,0.15-0.2,0.3-0.3,0.46c-0.9,1.4-1.84,3.03-2.86,4.83c-0.09,0.17-0.19,0.34-0.28,0.51	c-0.03,0.04-0.06,0.09-0.08,0.13l-0.21,0.37l-1.24,2.19c-2.91,5.15-3.65,6.33-5.1,8.26C14.56,38.71,12.38,40,9.51,40	c-3.4,0-5.56-1.47-6.89-3.69C1.53,34.51,1,32.14,1,29.44l4.97,0.17c0,1.76,0.38,3.1,0.89,3.92C7.52,34.59,8.49,35,9.5,35	c1.29,0,2.49-0.27,4.77-3.43c1.83-2.53,3.99-6.07,5.44-8.3l1.37-2.09l0.29-0.46l0.3-0.45l0.5-0.77c0.76-1.16,1.58-2.39,2.46-3.57	c0.1-0.14,0.2-0.28,0.31-0.42c0.1-0.14,0.21-0.28,0.31-0.41c0.9-1.15,1.85-2.22,2.87-3.1c1.85-1.61,3.84-2.5,5.85-2.5	c3.37,0,6.58,1.95,9.04,5.61c2.51,3.74,3.82,8.4,3.97,13.25c0.01,0.16,0.01,0.33,0.01,0.5C47,29.03,47,29.19,47,29.36z"></path><linearGradient id="wSMw7pqi7WIWHewz2_TZXa_PvvcWRWxRKSR_gr1" x1="42.304" x2="13.533" y1="24.75" y2="24.75" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0081fb"></stop><stop offset=".995" stop-color="#0064e1"></stop></linearGradient><path fill="url(#wSMw7pqi7WIWHewz2_TZXa_PvvcWRWxRKSR_gr1)" d="M4.918,15.456	C7.195,11.951,10.483,9.5,14.253,9.5c2.184,0,4.354,0.645,6.621,2.493c2.479,2.02,5.122,5.346,8.419,10.828l1.182,1.967	c2.854,4.746,4.477,7.187,5.428,8.339C37.125,34.606,37.888,35,39,35c2.82,0,3.617-2.54,3.617-5.501L47,29.362	c0,3.095-0.611,5.369-1.651,7.165C44.345,38.264,42.387,40,39.093,40c-2.048,0-3.862-0.444-5.868-2.333	c-1.542-1.45-3.345-4.026-4.732-6.341l-4.126-6.879c-2.07-3.452-3.969-6.027-5.068-7.192c-1.182-1.254-2.642-2.754-5.067-2.754	c-1.963,0-3.689,1.362-5.084,3.465L4.918,15.456z"></path><linearGradient id="wSMw7pqi7WIWHewz2_TZXb_PvvcWRWxRKSR_gr2" x1="7.635" x2="7.635" y1="32.87" y2="13.012" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0081fb"></stop><stop offset=".995" stop-color="#0064e1"></stop></linearGradient><path fill="url(#wSMw7pqi7WIWHewz2_TZXb_PvvcWRWxRKSR_gr2)" d="M14.25,14.5	c-1.959,0-3.683,1.362-5.075,3.465C7.206,20.937,6,25.363,6,29.614c0,1.753-0.003,3.072,0.5,3.886l-3.84,2.813	C1.574,34.507,1,32.2,1,29.5c0-4.91,1.355-10.091,3.918-14.044C7.192,11.951,10.507,9.5,14.27,9.5L14.25,14.5z"></path><path d="M21.67,20.27l-0.3,0.45l-0.29,0.46c0.71,1.03,1.52,2.27,2.37,3.69l0.21-0.37c0.02-0.04,0.05-0.09,0.08-0.13 c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27z M24.94,15.51c-0.11,0.14-0.21,0.28-0.31,0.42 c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c0.04-0.06,0.07-0.11,0.11-0.16c0.06-0.1,0.13-0.19,0.19-0.28 c-0.76-1.12-1.5-2.13-2.23-3.03C25.15,15.23,25.04,15.37,24.94,15.51z" opacity=".05"></path><path d="M21.67,20.27l-0.3,0.45c0.71,1.02,1.51,2.24,2.37,3.65c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27 z M24.63,15.93c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c-0.77-1.14-1.52-2.16-2.24-3.06 C24.83,15.65,24.73,15.79,24.63,15.93z" opacity=".07"></path>
                      </svg>
                  </li>
                  <li class="payment-icons-list">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 100 100">
                      <path fill="#c7ede6" d="M87.215,56.71C88.35,54.555,89,52.105,89,49.5c0-6.621-4.159-12.257-10.001-14.478 C78.999,35.015,79,35.008,79,35c0-11.598-9.402-21-21-21c-9.784,0-17.981,6.701-20.313,15.757C36.211,29.272,34.638,29,33,29 c-7.692,0-14.023,5.793-14.89,13.252C12.906,43.353,9,47.969,9,53.5C9,59.851,14.149,65,20.5,65c0.177,0,0.352-0.012,0.526-0.022 C21.022,65.153,21,65.324,21,65.5C21,76.822,30.178,86,41.5,86c6.437,0,12.175-2.972,15.934-7.614C59.612,80.611,62.64,82,66,82 c4.65,0,8.674-2.65,10.666-6.518C77.718,75.817,78.837,76,80,76c6.075,0,11-4.925,11-11C91,61.689,89.53,58.727,87.215,56.71z"></path><path fill="#fff" d="M28.5,75h-10c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h10c0.276,0,0.5,0.224,0.5,0.5 S28.777,75,28.5,75z M31.5,75h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5S31.777,75,31.5,75z M36.491,77H27.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h8.991c0.276,0,0.5,0.224,0.5,0.5S36.767,77,36.491,77z M25.5,77h-1 c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5S25.777,77,25.5,77z M22.5,77h-2 c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5S22.777,77,22.5,77z M28.5,79h-2 c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5S28.776,79,28.5,79z M31.5,70c-0.177,0-0.823,0-1,0 c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5c0.177,0,0.823,0,1,0c0.276,0,0.5-0.224,0.5-0.5S31.776,70,31.5,70z M31.5,72 c-0.177,0-4.823,0-5,0c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5c0.177,0,4.823,0,5,0c0.276,0,0.5-0.224,0.5-0.5 S31.776,72,31.5,72z M36.5,74c-0.177,0-2.823,0-3,0c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5c0.177,0,2.823,0,3,0 c0.276,0,0.5-0.224,0.5-0.5S36.776,74,36.5,74z"></path><path fill="#fff" d="M69.5,23h-10c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h10c0.276,0,0.5,0.224,0.5,0.5 S69.776,23,69.5,23z M73.5,23h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5S73.776,23,73.5,23z M78.5,25h-10c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h10c0.276,0,0.5,0.224,0.5,0.5S78.777,25,78.5,25z M66.5,25h-1 c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5S66.776,25,66.5,25z M63.47,25H61.5 c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1.97c0.276,0,0.5,0.224,0.5,0.5S63.746,25,63.47,25z M72.5,21h-5 c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h5c0.276,0,0.5,0.224,0.5,0.5S72.777,21,72.5,21z M69.5,27h-2 c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5S69.776,27,69.5,27z"></path><path fill="#fdfcef" d="M40.594,28.433c0,0,1.567,0,3.5,0s3.5-1.567,3.5-3.5c0-1.781-1.335-3.234-3.055-3.455 c0.028-0.179,0.055-0.358,0.055-0.545c0-1.933-1.567-3.5-3.5-3.5c-1.032,0-1.95,0.455-2.59,1.165 c-0.384-1.808-1.987-3.165-3.91-3.165c-2.209,0-4,1.791-4,4c0,0.191,0.03,0.374,0.056,0.558c-0.428-0.344-0.964-0.558-1.556-0.558 c-1.228,0-2.245,0.887-2.455,2.055c-0.179-0.028-0.358-0.055-0.545-0.055c-1.933,0-3.5,1.567-3.5,3.5s1.567,3.5,3.5,3.5 s7.5,0,7.5,0v0.5h7V28.433z"></path><path fill="#472b29" d="M42.344,23.933c-0.138,0-0.25-0.112-0.25-0.25c0-1.223,0.995-2.218,2.218-2.218 c0.034,0.009,0.737-0.001,1.244,0.136c0.133,0.036,0.212,0.173,0.176,0.306c-0.036,0.134-0.173,0.213-0.306,0.176 c-0.444-0.12-1.1-0.12-1.113-0.118c-0.948,0-1.719,0.771-1.719,1.718C42.594,23.821,42.482,23.933,42.344,23.933z M35.594,27.933 c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5S35.87,27.933,35.594,27.933z"></path><path fill="#472b29" d="M44.094,28.933h-3.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h3.5c1.654,0,3-1.346,3-3 c0-1.496-1.125-2.768-2.618-2.959c-0.134-0.018-0.255-0.088-0.336-0.196s-0.115-0.244-0.094-0.377 c0.023-0.154,0.048-0.308,0.048-0.468c0-1.654-1.346-3-3-3c-0.85,0-1.638,0.355-2.219,1c-0.125,0.139-0.321,0.198-0.5,0.148 c-0.182-0.049-0.321-0.195-0.36-0.379c-0.341-1.604-1.78-2.769-3.421-2.769c-1.93,0-3.5,1.57-3.5,3.5 c0,0.143,0.021,0.28,0.041,0.418c0.029,0.203-0.063,0.438-0.242,0.54s-0.396,0.118-0.556-0.01 c-0.365-0.293-0.794-0.448-1.243-0.448c-0.966,0-1.792,0.691-1.963,1.644c-0.048,0.267-0.296,0.446-0.569,0.405 c-0.154-0.024-0.308-0.049-0.468-0.049c-1.654,0-3,1.346-3,3s1.346,3,3,3h7.5c0.276,0,0.5,0.224,0.5,0.5s-0.224,0.5-0.5,0.5h-7.5 c-2.206,0-4-1.794-4-4s1.794-4,4-4c0.059,0,0.116,0.002,0.174,0.006c0.414-1.186,1.537-2.006,2.826-2.006 c0.349,0,0.689,0.061,1.011,0.18c0.165-2.333,2.115-4.18,4.489-4.18c1.831,0,3.466,1.127,4.153,2.774 c0.68-0.498,1.502-0.774,2.347-0.774c2.206,0,4,1.794,4,4c0,0.048-0.001,0.095-0.004,0.142c1.743,0.448,3.004,2.027,3.004,3.858 C48.094,27.139,46.3,28.933,44.094,28.933z"></path><path fill="#472b29" d="M38.594,27.933c-0.159,0-0.841,0-1,0c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5 c0.159,0,0.841,0,1,0c0.276,0,0.5-0.224,0.5-0.5S38.87,27.933,38.594,27.933z"></path><path fill="#9898ad" d="M56.708,41.194c1.024,0.453,1.81,1.104,2.357,1.95c0.547,0.848,0.819,1.855,0.819,3.018 c0,1.151-0.273,2.152-0.819,3.008c-0.546,0.855-1.332,1.509-2.357,1.964c-1.023,0.453-2.226,0.68-3.608,0.68h-3.596v4.584h-2.961 V40.513H53.1C54.481,40.513,55.684,40.74,56.708,41.194z M55.9,48.5c0.668-0.545,1.003-1.323,1.003-2.337 c0-1.013-0.335-1.792-1.003-2.336c-0.668-0.544-1.647-0.817-2.937-0.817h-3.46v6.308h3.46C54.254,49.316,55.232,49.045,55.9,48.5 z M71.211,45.425c0.948,0.854,1.423,2.144,1.423,3.869v7.102h-2.687l-0.012-1.085c-0.182,0.182-0.834,0.544-1.479,0.825 c-0.646,0.279-1.423,0.419-2.333,0.419c-0.912,0-1.707-0.156-2.391-0.466c-0.683-0.309-1.211-0.741-1.582-1.293 c-0.373-0.552-0.558-1.176-0.558-1.872c0-1.09,0.405-1.964,1.219-2.621c0.812-0.658,2.09-0.987,3.837-0.987h3.142v-0.181 c0-0.847-0.254-1.498-0.762-1.952c-0.509-0.454-1.264-0.68-2.266-0.68c-0.683,0-1.354,0.107-2.015,0.317 c-0.66,0.212-1.219,0.508-1.674,0.885l-1.115-2.064c0.637-0.485,1.404-0.855,2.299-1.112c0.896-0.257,1.845-0.385,2.846-0.385 C68.892,44.144,70.262,44.571,71.211,45.425z M69.788,52.608v-1.407h-2.937c-1.64,0-2.459,0.537-2.459,1.611 c0,0.516,0.301,1.679,2.322,1.679C68.659,54.489,69.56,53.212,69.788,52.608z M81.74,57.374 c-0.532,1.315-1.731,3.453-4.691,3.583c-0.606,0.027-1.206-0.098-1.798-0.294c-0.593-0.196-1.078-0.469-1.457-0.817l1.138-2.088 c0.274,0.257,0.596,0.461,0.968,0.612c0.373,0.151,0.748,0.227,1.127,0.227c0.501,0,0.914-0.129,1.24-0.386 c0.327-0.257,0.626-0.688,0.9-1.293l0.204-0.476L74.067,44.28h2.959l3.825,8.964l3.848-8.964h2.733L81.74,57.374z"></path><path fill="#472b29" d="M76.886,61.46c-0.55,0-1.139-0.106-1.792-0.323c-0.655-0.217-1.206-0.528-1.638-0.923 c-0.169-0.155-0.211-0.406-0.101-0.608l1.139-2.087c0.073-0.136,0.206-0.23,0.359-0.254c0.151-0.025,0.309,0.023,0.421,0.129 c0.229,0.214,0.503,0.387,0.813,0.513c0.7,0.286,1.442,0.25,1.869-0.088c0.261-0.205,0.514-0.577,0.754-1.106l0.115-0.269 L73.608,44.48c-0.067-0.154-0.053-0.333,0.04-0.474c0.092-0.141,0.249-0.226,0.418-0.226h2.959c0.2,0,0.381,0.12,0.46,0.304 l3.366,7.889l3.389-7.89c0.078-0.184,0.259-0.303,0.459-0.303h2.732c0.169,0,0.326,0.085,0.418,0.226 c0.093,0.141,0.107,0.319,0.041,0.473l-5.689,13.087c-1.002,2.476-2.728,3.784-5.13,3.89 C77.011,61.459,76.948,61.46,76.886,61.46z M74.434,59.717c0.275,0.189,0.602,0.348,0.975,0.471 c0.61,0.203,1.15,0.292,1.619,0.269c2.006-0.088,3.396-1.158,4.249-3.271c0.002-0.004,0.004-0.008,0.005-0.012l5.388-12.394 h-1.641l-3.719,8.661c-0.078,0.184-0.259,0.303-0.459,0.303c0,0,0,0-0.001,0c-0.199,0-0.38-0.12-0.459-0.304l-3.695-8.66H74.83 l4.999,11.463c0.056,0.126,0.056,0.271,0.001,0.397l-0.205,0.476c-0.314,0.696-0.657,1.18-1.05,1.488 c-0.712,0.562-1.832,0.648-2.863,0.229c-0.221-0.09-0.428-0.197-0.621-0.321L74.434,59.717z M66.123,57.055 c-0.977,0-1.851-0.172-2.597-0.51c-0.766-0.346-1.368-0.841-1.791-1.469c-0.426-0.63-0.643-1.354-0.643-2.15 c0-1.244,0.472-2.256,1.403-3.01c0.913-0.739,2.271-1.098,4.151-1.098h2.627c-0.052-0.544-0.243-0.958-0.58-1.261 c-0.411-0.367-1.062-0.553-1.933-0.553c-0.624,0-1.251,0.099-1.864,0.293c-0.595,0.192-1.103,0.459-1.506,0.793 c-0.115,0.094-0.265,0.134-0.415,0.105c-0.146-0.028-0.273-0.121-0.344-0.253l-1.115-2.064c-0.117-0.217-0.06-0.486,0.137-0.636 c0.682-0.52,1.511-0.921,2.464-1.194c0.936-0.269,1.939-0.404,2.983-0.404c1.909,0,3.404,0.474,4.443,1.409h0.001 c1.054,0.949,1.589,2.376,1.589,4.24v7.102c0,0.276-0.224,0.5-0.5,0.5h-2.688c-0.273,0-0.497-0.22-0.5-0.494l-0.002-0.187 c-0.286,0.151-0.579,0.288-0.79,0.38C67.948,56.9,67.097,57.055,66.123,57.055z M66.647,49.816c-1.619,0-2.805,0.294-3.522,0.875 c-0.694,0.562-1.032,1.292-1.032,2.233c0,0.602,0.154,1.122,0.472,1.591c0.318,0.473,0.78,0.849,1.374,1.117 c0.616,0.28,1.352,0.421,2.185,0.421c0.836,0,1.555-0.127,2.135-0.378c0.71-0.31,1.23-0.627,1.322-0.718 c0.143-0.142,0.358-0.185,0.543-0.109c0.186,0.076,0.31,0.255,0.312,0.456l0.007,0.59h1.693v-6.602 c0-1.569-0.424-2.745-1.259-3.497c-0.85-0.765-2.119-1.152-3.774-1.152c-0.95,0-1.861,0.123-2.708,0.365 c-0.674,0.193-1.272,0.457-1.785,0.786l0.633,1.171c0.398-0.252,0.851-0.46,1.352-0.622c0.713-0.226,1.442-0.341,2.169-0.341 c1.124,0,1.998,0.271,2.599,0.807c0.616,0.552,0.929,1.334,0.929,2.326v0.181c0,0.276-0.224,0.5-0.5,0.5H66.647z M49.504,56.898 h-2.961c-0.276,0-0.5-0.224-0.5-0.5V40.513c0-0.276,0.224-0.5,0.5-0.5H53.1c1.445,0,2.728,0.244,3.811,0.725l0,0 c1.11,0.491,1.977,1.209,2.575,2.136c0.597,0.925,0.898,2.031,0.898,3.289c0,1.242-0.302,2.344-0.896,3.277 c-0.599,0.935-1.465,1.659-2.576,2.152c-1.084,0.48-2.366,0.723-3.812,0.723h-3.096v4.084 C50.004,56.674,49.78,56.898,49.504,56.898z M47.043,55.898h1.961v-4.084c0-0.276,0.224-0.5,0.5-0.5H53.1 c1.305,0,2.451-0.214,3.406-0.637c0.929-0.412,1.648-1.01,2.139-1.776c0.49-0.769,0.739-1.69,0.739-2.738 c0-1.062-0.248-1.986-0.738-2.747c-0.491-0.76-1.211-1.353-2.14-1.764c0,0,0,0-0.001,0c-0.955-0.424-2.101-0.639-3.405-0.639 h-6.057V55.898z M66.711,54.99c-1.021,0-1.79-0.271-2.284-0.807c-0.483-0.524-0.535-1.134-0.535-1.372 c0-0.963,0.514-2.11,2.959-2.11h2.938c0.276,0,0.5,0.224,0.5,0.5v1.407c0,0.061-0.011,0.121-0.032,0.177 c-0.31,0.819-1.404,2.205-3.542,2.205C66.713,54.99,66.712,54.99,66.711,54.99z M66.851,51.701c-1.959,0-1.959,0.807-1.959,1.11 c0,0.121,0.026,0.429,0.271,0.694c0.293,0.317,0.828,0.485,1.549,0.485c0.001,0,0.002,0,0.003,0c1.764,0,2.428-1.169,2.574-1.484 v-0.805H66.851z M69.788,52.608h0.01H69.788z M52.963,49.817h-3.46c-0.276,0-0.5-0.224-0.5-0.5v-6.308c0-0.276,0.224-0.5,0.5-0.5 h3.46c1.401,0,2.495,0.312,3.252,0.929c0.788,0.642,1.188,1.559,1.188,2.724s-0.399,2.083-1.187,2.725 C55.461,49.503,54.366,49.816,52.963,49.817z M50.003,48.817h2.96c1.167-0.001,2.048-0.238,2.62-0.705l0,0 c0.552-0.45,0.819-1.088,0.819-1.95s-0.268-1.5-0.818-1.949c-0.574-0.467-1.456-0.704-2.621-0.704h-2.96V48.817z"></path><path fill="#fdfcef" d="M79.176,74.561v0.5h3v-0.5c0,0,4.242,0,5.5,0c2.485,0,4.5-2.015,4.5-4.5 c0-2.333-1.782-4.229-4.055-4.455c0.022-0.181,0.055-0.358,0.055-0.545c0-2.485-2.015-4.5-4.5-4.5 c-1.438,0-2.703,0.686-3.527,1.736c-0.14-2.636-2.302-4.736-4.973-4.736c-2.761,0-5,2.239-5,5c0,0.446,0.077,0.87,0.187,1.282 c-0.642-0.777-1.601-1.282-2.687-1.282c-1.781,0-3.234,1.335-3.455,3.055c-0.181-0.022-0.358-0.055-0.545-0.055 c-2.485,0-4.5,2.015-4.5,4.5s2.015,4.5,4.5,4.5c2.485,0,9.5,0,9.5,0H79.176z"></path><path fill="#472b29" d="M75.176,57.061c-3.033,0-5.5,2.467-5.5,5.5c0,0.016,0,0.031,0,0.047 c-0.602-0.355-1.29-0.547-2-0.547c-1.831,0-3.411,1.261-3.858,3.005c-0.047-0.003-0.094-0.005-0.142-0.005c-2.757,0-5,2.243-5,5 c0,2.757,2.243,5,5,5h15.5c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5h-15.5c-2.206,0-4-1.794-4-4s1.794-4,4-4 c0.117,0,0.23,0.017,0.343,0.032l0.141,0.019c0.021,0.003,0.041,0.004,0.062,0.004c0.246,0,0.462-0.185,0.495-0.437 c0.191-1.493,1.463-2.618,2.959-2.618c0.885,0,1.723,0.401,2.301,1.1c0.098,0.118,0.241,0.182,0.386,0.182 c0.078,0,0.156-0.018,0.228-0.056c0.209-0.107,0.314-0.346,0.254-0.573c-0.115-0.435-0.169-0.801-0.169-1.153 c0-2.481,2.019-4.5,4.5-4.5c2.381,0,4.347,1.872,4.474,4.263c0.011,0.208,0.15,0.387,0.349,0.45 c0.05,0.016,0.101,0.024,0.152,0.024c0.15,0,0.296-0.069,0.392-0.192c0.771-0.982,1.912-1.545,3.133-1.545c2.206,0,4,1.794,4,4 c0,0.117-0.017,0.23-0.032,0.343l-0.019,0.141c-0.016,0.134,0.022,0.268,0.106,0.373c0.084,0.105,0.207,0.172,0.34,0.185 c2.056,0.205,3.605,1.907,3.605,3.958c0,2.206-1.794,4-4,4h-5.5c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h5.5 c2.757,0,5-2.243,5-5c0-2.397-1.689-4.413-4.003-4.877c0.002-0.041,0.003-0.082,0.003-0.123c0-2.757-2.243-5-5-5 c-1.176,0-2.293,0.416-3.183,1.164C79.895,58.821,77.731,57.061,75.176,57.061L75.176,57.061z"></path><path fill="#472b29" d="M73.676,64.061c-1.403,0-2.609,0.999-2.913,2.341c-0.367-0.222-0.786-0.341-1.212-0.341 c-1.202,0-2.198,0.897-2.353,2.068c-0.203-0.046-0.396-0.068-0.585-0.068c-1.529,0-2.811,1.2-2.918,2.732 c-0.009,0.138,0.095,0.258,0.232,0.268c0.006,0,0.012,0,0.018,0c0.13,0,0.24-0.101,0.249-0.232 c0.089-1.271,1.151-2.268,2.419-2.268c0.229,0,0.47,0.042,0.738,0.127c0.022,0.007,0.045,0.01,0.067,0.01 c0.055,0,0.11-0.02,0.156-0.054c0.064-0.046,0.102-0.128,0.102-0.208c0-1.034,0.841-1.875,1.875-1.875 c0.447,0,0.885,0.168,1.231,0.473c0.047,0.041,0.106,0.063,0.165,0.063c0.032,0,0.063-0.006,0.093-0.019 c0.088-0.035,0.148-0.117,0.155-0.212c0.104-1.293,1.193-2.305,2.481-2.305c0.208,0,0.425,0.034,0.682,0.107 c0.023,0.007,0.047,0.01,0.07,0.01c0.109,0,0.207-0.073,0.239-0.182c0.038-0.133-0.039-0.271-0.172-0.309 C74.193,64.101,73.932,64.061,73.676,64.061L73.676,64.061z M87.559,65.561c-1.326,0-2.508,0.897-2.874,2.182 c-0.038,0.133,0.039,0.271,0.172,0.309c0.024,0.006,0.047,0.009,0.069,0.009c0.109,0,0.209-0.072,0.24-0.182 c0.305-1.07,1.289-1.818,2.393-1.818c0.117,0,0.23,0.014,0.342,0.029c0.012,0.002,0.023,0.003,0.035,0.003 c0.121,0,0.229-0.092,0.246-0.217c0.019-0.137-0.077-0.263-0.214-0.281C87.834,65.577,87.698,65.561,87.559,65.561L87.559,65.561z"></path><g><path fill="#eb7897" d="M37.766,40.252l-3.794,4.237c-1.42-1.363-3.351-2.192-5.475-2.192 c-2.703,0-6.735,3.407-6.735,3.407l-4.566-3.078c2.453-3.623,6.599-6.008,11.301-6.008C32.075,36.617,35.335,38.003,37.766,40.252 z"></path></g><g><path fill="#83c9f6" d="M42.127,49.111v1.136c0,3.896-1.636,7.417-4.259,9.893l-4.271-3.794 c0.875-0.738,1.59-1.647,2.09-2.692h-6.054v-4.543H42.127z"></path></g><g><path fill="#72c8ad" d="M34.219,56.094c-1.381,1.154-3.781,2.104-5.721,2.104c-3.368,0-6.037-1.647-7.195-4.604 l-4.375,3.125c2.258,4.405,6.28,7.158,11.57,7.158c3.631,0,7.132-1.406,9.575-3.72L34.219,56.094z"></path></g><g><path fill="#f7e1ac" d="M21.905,45.801l-4.709-3.176c-1.471,2.176-2.328,4.799-2.328,7.621c0,2.238,1,4.505,1.955,6.368 l4.479-2.812c-0.353-0.9-0.755-2.532-0.755-3.555C20.547,48.6,21.048,47.07,21.905,45.801z"></path></g><path fill="#472b29" d="M43.059,49.137c0-0.387-0.313-0.7-0.7-0.7H29.865c-0.387,0-0.7,0.313-0.7,0.7v4.543 c0,0.387,0.313,0.7,0.7,0.7h4.841c-0.371,0.536-0.816,1.024-1.329,1.457l0.001,0.001c-1.302,1.087-2.952,1.686-4.649,1.686 c-3.006,0-5.656-1.808-6.752-4.605l-0.001,0c-0.33-0.842-0.497-1.732-0.497-2.646c0-1.453,0.428-2.854,1.238-4.053l-0.02-0.013 c0.028-0.028,0.065-0.045,0.088-0.078c1.346-1.945,3.568-3.106,5.944-3.106c1.876,0,3.648,0.709,4.99,1.997 c0.137,0.132,0.326,0.197,0.511,0.195c0.19-0.007,0.369-0.091,0.495-0.233l3.793-4.237c0.255-0.285,0.234-0.721-0.046-0.98 c-2.664-2.464-6.124-3.821-9.744-3.821c-4.761,0-9.203,2.361-11.881,6.316l0.58,0.393l-0.58-0.392 c-1.602,2.37-2.448,5.141-2.448,8.013c0,2.3,0.529,4.497,1.572,6.531l0.001,0c2.466,4.81,7.354,7.799,12.757,7.799 c3.683,0,7.183-1.395,9.855-3.926l-0.003-0.003c2.845-2.686,4.477-6.477,4.477-10.4V49.137z M28.729,37.344 c3.037,0,5.949,1.058,8.275,2.994l-2.858,3.193c-1.524-1.235-3.421-1.908-5.417-1.908c-2.685,0-5.195,1.255-6.82,3.359 l-3.713-2.183C20.63,39.384,24.537,37.344,28.729,37.344z M15.8,50.273c0-2.359,0.638-4.638,1.841-6.64l3.702,2.176 c-0.816,1.347-1.265,2.876-1.265,4.464c0,1.09,0.2,2.152,0.595,3.158l0,0c0.015,0.038,0.037,0.072,0.053,0.11l-3.63,2.351 C16.245,54.133,15.8,52.247,15.8,50.273z M17.561,56.782l3.602-2.333c1.507,2.746,4.362,4.475,7.565,4.475 c2.005,0,3.955-0.703,5.5-1.976l3.002,3.048c-2.358,2.064-5.352,3.206-8.502,3.206C24.091,63.202,19.877,60.758,17.561,56.782z M41.659,50.273c0,3.378-1.352,6.635-3.704,9.032l-2.992-3.037c0.651-0.676,1.183-1.441,1.586-2.285 c0.104-0.217,0.089-0.472-0.039-0.675c-0.128-0.204-0.352-0.327-0.592-0.327h-5.354v-3.143h11.094V50.273z"></path>
                      </svg>
                  </li>
                  <li class="payment-icons-list">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 48 48">
                      <path fill="#3F51B5" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"></path><path fill="#FFC107" d="M30 14A10 10 0 1 0 30 34A10 10 0 1 0 30 14Z"></path><path fill="#FF3D00" d="M22.014,30c-0.464-0.617-0.863-1.284-1.176-2h5.325c0.278-0.636,0.496-1.304,0.637-2h-6.598C20.07,25.354,20,24.686,20,24h7c0-0.686-0.07-1.354-0.201-2h-6.598c0.142-0.696,0.359-1.364,0.637-2h5.325c-0.313-0.716-0.711-1.383-1.176-2h-2.973c0.437-0.58,0.93-1.122,1.481-1.595C21.747,14.909,19.481,14,17,14c-5.523,0-10,4.477-10,10s4.477,10,10,10c3.269,0,6.162-1.575,7.986-4H22.014z"></path>
                      </svg>
                  </li>
                  <li class="payment-icons-list">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 48 48">
                      <path fill="#1565C0" d="M18.7,13.767l0.005,0.002C18.809,13.326,19.187,13,19.66,13h13.472c0.017,0,0.034-0.007,0.051-0.006C32.896,8.215,28.887,6,25.35,6H11.878c-0.474,0-0.852,0.335-0.955,0.777l-0.005-0.002L5.029,33.813l0.013,0.001c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,0.991,1,0.991h8.071L18.7,13.767z"></path><path fill="#039BE5" d="M33.183,12.994c0.053,0.876-0.005,1.829-0.229,2.882c-1.281,5.995-5.912,9.115-11.635,9.115c0,0-3.47,0-4.313,0c-0.521,0-0.767,0.306-0.88,0.54l-1.74,8.049l-0.305,1.429h-0.006l-1.263,5.796l0.013,0.001c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,1,1,1h7.333l0.013-0.01c0.472-0.007,0.847-0.344,0.945-0.788l0.018-0.015l1.812-8.416c0,0,0.126-0.803,0.97-0.803s4.178,0,4.178,0c5.723,0,10.401-3.106,11.683-9.102C42.18,16.106,37.358,13.019,33.183,12.994z"></path><path fill="#283593" d="M19.66,13c-0.474,0-0.852,0.326-0.955,0.769L18.7,13.767l-2.575,11.765c0.113-0.234,0.359-0.54,0.88-0.54c0.844,0,4.235,0,4.235,0c5.723,0,10.432-3.12,11.713-9.115c0.225-1.053,0.282-2.006,0.229-2.882C33.166,12.993,33.148,13,33.132,13H19.66z"></path>
                      </svg>
                  </li>
                  <li class="payment-icons-list">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 40 40">
                      <path fill="#b6dcfe" d="M10,37.5c-4.136,0-7.5-3.364-7.5-7.5V10c0-4.136,3.364-7.5,7.5-7.5h20c4.136,0,7.5,3.364,7.5,7.5v20 c0,4.136-3.364,7.5-7.5,7.5H10z"></path><path fill="#4788c7" d="M30,3c3.86,0,7,3.14,7,7v20c0,3.86-3.14,7-7,7H10c-3.86,0-7-3.14-7-7V10c0-3.86,3.14-7,7-7H30 M30,2H10c-4.418,0-8,3.582-8,8v20c0,4.418,3.582,8,8,8h20c4.418,0,8-3.582,8-8V10C38,5.582,34.418,2,30,2L30,2z"></path><g><path fill="#fff" d="M22.333,30h-9.167l-2.5-18.333l6.667-0.834L19,24.167c1.528-2.432,3.333-6.561,3.333-9.167 c0-1.426-0.443-2.533-0.833-3.333L28.167,10C28.878,11.148,29,13.163,29,14.655C29,19.417,25.708,25.657,22.333,30z"></path></g>
                      </svg>
                  </li>
                  <li class="payment-icons-list">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 48 48">
                      <path fill="#1565C0" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"></path><path fill="#FFF" d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"></path><path fill="#FFC107" d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"></path>
                      </svg>
                  </li>
                  </ul>
              </div>
            </div>

          </div>

          </div>
          <div class="footer-logo-parent">
            <div class="logo-child">
              <img src="./public/factor-logo.webp"/>
            </div>
            <div class="logo-child canada">
              <img src="./public/canada-logo.webp"/>
            </div>
          </div>
        </footer>
         </div>`
    }

}
customElements.define("header-component", Header)
customElements.define("footer-component", Footer)
