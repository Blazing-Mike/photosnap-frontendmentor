class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="Navbar">
      <div class="Navbar__logo Navbar__Link-brand">
        <!--LOGO-->
        <img src="/assets/shared/desktop/logo.svg" alt="logo" class="logo" />
      </div>

      <div class="Navbar__link-toggle">
        <!--HAMBURGER ICON-->
        <div class="bar1 bar"></div>
        <div class="bar3 bar"></div>
      </div>

      <div class="Nav__invitebtn">
        <nav class="Navbar__items">
          <!--NAVBAR ITEMS/LINKS-->
          <a href="/stories.html" class="Navbar__link">Stories</a>
          <a href="/features.html" class="Navbar__link">Features</a>
          <div class="line"></div>
        </nav>

        <button class="Navbar__btn">Get an invite</button>
      </div>
    </div>
    `;
  }

}

customElements.define('header-component', Header);
