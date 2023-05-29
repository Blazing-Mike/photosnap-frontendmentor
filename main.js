const NavBarToggle = document.querySelector('.Navbar__link-toggle')

function classToggle() {
  const navs = document.querySelectorAll('.Nav__invitebtn');
navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__link-toggle').addEventListener('click', classToggle);

NavBarToggle.addEventListener('click', function() {
  NavBarToggle.classList.toggle("change");
});

function myFunction(x) {
  x.classList.toggle("change");
}
