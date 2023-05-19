console.log(`
███╗░░░███╗░█████╗░███╗░░██╗░██████╗████████╗███████╗██████╗░░█████╗░░█████╗░████████╗
████╗░████║██╔══██╗████╗░██║██╔════╝╚══██╔══╝██╔════╝██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝
██╔████╔██║██║░░██║██╔██╗██║╚█████╗░░░░██║░░░█████╗░░██████╔╝██║░░╚═╝███████║░░░██║░░░
██║╚██╔╝██║██║░░██║██║╚████║░╚═══██╗░░░██║░░░██╔══╝░░██╔══██╗██║░░██╗██╔══██║░░░██║░░░
██║░╚═╝░██║╚█████╔╝██║░╚███║██████╔╝░░░██║░░░███████╗██║░░██║╚█████╔╝██║░░██║░░░██║░░░
╚═╝░░░░░╚═╝░╚════╝░╚═╝░░╚══╝╚═════╝░░░░╚═╝░░░╚══════╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░░                                        
░█████╗░██╗░░░░░░█████╗░███╗░░██╗███████╗
██╔══██╗██║░░░░░██╔══██╗████╗░██║██╔════╝
██║░░╚═╝██║░░░░░██║░░██║██╔██╗██║█████╗░░
██║░░██╗██║░░░░░██║░░██║██║╚████║██╔══╝░░
╚█████╔╝███████╗╚█████╔╝██║░╚███║███████╗                                         
`);

const menu = document.querySelector(".hamburger");
const ham = document.querySelector(".ri-menu-line");
const sidebar = document.querySelector(".sidebar");
const menu_close = document.querySelector(".close-icon");
// For Loader
document.addEventListener("DOMContentLoaded", function () {
  var loader = document.getElementById("loader");

  // Hide the loader when the page is fully loaded
  window.addEventListener("load", function () {
    loader.style.display = "none";
  });
});
menu.addEventListener("click", (e) => {
  sidebar.classList.add("open");
});
menu_close.addEventListener("click", (e) => {
  sidebar.classList.remove("open");
  
});

document.addEventListener("click", (e) => {
  const target = e.target;
  if (target !== sidebar && !sidebar.contains(target) && target != ham) {
    sidebar.classList.remove("open");
  }
});

document.addEventListener("DOMContentLoaded", (e) => {
  const droplinks = document.getElementsByClassName("droplink");

  for (var i = 0; i < droplinks.length; i++) {
    (function (i) {
      var title = droplinks[i].querySelector(".x-item");
      var dropdown = droplinks[i].querySelector(".dropdown");
      title.addEventListener("click", (e) => {
        dropdown.classList.toggle("drop-open");
        const allChildrens = e.target;
        const arrowRight = allChildrens.querySelector(
          ".ri-arrow-drop-right-line"
        );
        const arrowDown = allChildrens.querySelector(
          ".ri-arrow-drop-down-line"
        );
        arrowDown.classList.toggle("close");
        arrowRight.classList.toggle("close");
      });
    })(i);
  }
});
