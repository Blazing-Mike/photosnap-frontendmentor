class Footer extends HTMLElement {
  constructor() {
    super();
  }

connectedCallback() {
  this.innerHTML = `
  <footer class="c-footer flex">
  <div class="left flex">
  <div class="first-left">

  <img
    src="/assets/shared/desktop/logo-light.svg"
    alt="logo"
    class="logo"
  />
  <div class="social-icons">
    <img
      src="/assets/shared/desktop/facebook.svg"
      alt="facebook"
      class="social-icon"
    />
    <img
      src="/assets/shared/desktop/twitter.svg"
      alt="twitter"
      class="social-icon"
    />
    <img
      src="/assets/shared/desktop/pinterest.svg"
      alt="pinterest"
      class="social-icon"
    />
    <img
      src="/assets/shared/desktop/instagram.svg"
      alt="instagram"
      class="social-icon"
    />
    <img
      src="/assets/shared/desktop/youtube.svg"
      alt="instagram"
      class="social-icon"
    />
  </div>
</div>
<div class="footer-nav">
    <a href="/stories.html" class="Navbar__link">Stories</a>
    <a href="/features.html" class="Navbar__link">Features</a>
    <a href="/pricing.html" class="Navbar__link">Pricing</a>
    <a href="#" class="Navbar__link">Home</a>
  </div>
</div>


  <div class="second-right perfect-flex">
  
  <button class="primary-btn">
    <span> Get an invite </span>
    <img src="/assets/shared/desktop/light-arrow.svg" alt="arrow" class="arrow"/>
  </button>

  <p class="para">Copyright 2019. All Rights Reserved</p>
</div>


</footer>
  `;
}
}

customElements.define("footer-component", Footer);