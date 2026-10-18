const navigationLinks = [...document.querySelectorAll(".site-header nav a")];
const navigationSections = navigationLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter((section) => section !== null);
const siteHeader = document.querySelector(".site-header");

function setActiveNavigationLink() {
    const marker = window.scrollY + siteHeader.offsetHeight + window.innerHeight * 0.35;
    let activeSection = navigationSections[0];

    for (const section of navigationSections) {
        if (section.offsetTop <= marker) {
            activeSection = section;
        }
    }

    for (const link of navigationLinks) {
        const isActive = link.hash === `#${activeSection.id}`;
        link.classList.toggle("active", isActive);

        if (isActive) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    }
}

window.addEventListener("scroll", setActiveNavigationLink, { passive: true });
window.addEventListener("resize", setActiveNavigationLink);
window.addEventListener("hashchange", setActiveNavigationLink);
setActiveNavigationLink();