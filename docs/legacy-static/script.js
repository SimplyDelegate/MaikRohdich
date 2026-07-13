const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const callButton = document.querySelector(".call-menu button");
const callOptions = document.querySelector("#call-options");
const openCallButtons = document.querySelectorAll("[data-open-call]");

function setCallMenu(open) {
  if (!callButton || !callOptions) return;
  callButton.setAttribute("aria-expanded", String(open));
  callOptions.hidden = !open;
}

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    mainNav.classList.toggle("is-open", !isOpen);
  });

  mainNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navToggle.setAttribute("aria-expanded", "false");
      mainNav.classList.remove("is-open");
    }
  });
}

if (callButton && callOptions) {
  callButton.addEventListener("click", () => {
    const isOpen = callButton.getAttribute("aria-expanded") === "true";
    setCallMenu(!isOpen);
  });
}

openCallButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setCallMenu(true);
    callButton?.focus();
  });
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Node)) return;
  if (!document.querySelector(".call-menu")?.contains(target) && !(target instanceof HTMLElement && target.hasAttribute("data-open-call"))) {
    setCallMenu(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setCallMenu(false);
    navToggle?.setAttribute("aria-expanded", "false");
    mainNav?.classList.remove("is-open");
  }
});
