// function: toggle nav
const navLink = document.querySelector(".links__nav-link");
const nav = document.querySelector(".nav");
const navCloseIcon = document.querySelector(".nav__icon-close");

const toggleNav = () => {
  nav.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
};

navLink.addEventListener("click", () => {
  toggleNav();
});
navCloseIcon.addEventListener("click", () => {
  toggleNav();
});
const links = document.querySelectorAll(".nav__menu-link");
links.forEach((link) => {
  link.addEventListener("click", () => {
    toggleNav();
  });
});

// function: toggle speech bubble
const memberNames = document.querySelectorAll(".member-names__img");
const memberBubbles = document.querySelectorAll(".member-bubbles__bubble");

memberNames.forEach((name) => {
  name.addEventListener("click", (e) => {
    const memberName = e.currentTarget.dataset.id;
    const selectedMember = document.getElementById(memberName);

    // add underline for selected user
    memberNames.forEach((name) => {
      name.classList.remove("member-names__img--selected");
    });
    e.currentTarget.classList.add("member-names__img--selected");
    // display speech bubble
    memberBubbles.forEach((bubble) => {
      bubble.classList.add("hidden");
    });
    selectedMember.classList.remove("hidden");
  });
});
