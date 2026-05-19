window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.getElementById("navbar").style.backgroundColor = "black";
    document.getElementById("navbar").style.transition =
      "background-color 0.5s";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.transition =
      "background-color 0.5s";
  }
});
// window.addEventListener("click", () => {
//     if (condition||whatcheker) {
        
//         solcheker = false;
//           document.getElementById("navbar").style.backgroundColor = "transparent";
//           document.getElementById("navbar").style.transition =
//             "background-color 0.5s";
//           sol.style.transform = "translateY(-20px)";
//           sol.style.opacity = "0";
//           extend.style.width = "0%";
//           whatcheker = false;
//           document.getElementById("navbar").style.backgroundColor = "transparent";
//           document.getElementById("navbar").style.transition =
//             "background-color 0.5s";
//           what.style.transform = "translateY(-20px)";
//           what.style.opacity = "0";
//           extend2.style.width = "0%";
//     }
// });

let solcheker = false;
let sol = document.getElementById("solution");
let extend = document.getElementById("e1");
document.getElementById("solutionbutton").addEventListener("click", () => {
  if (solcheker) {
    solcheker = false;
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.transition =
      "background-color 0.5s";
    sol.style.transform = "translateY(-20px)";
    sol.style.opacity = "0";
    sol.style.display = "none";
    extend.style.width = "0%";
  } else {
    resourcecheker = false;
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.transition =
      "background-color 0.5s";
    resources.style.transform = "translateY(-20px)";
    resources.style.display= "none";
    resources.style.opacity = "0";
    extend3.style.width = "0%";
    whatcheker = false;
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.transition =
    "background-color 0.5s";
      what.style.transform = "translateY(-20px)";
    what.style.display= "none";
    what.style.opacity = "0";
    extend2.style.width = "0%";
      extend.style.width = "100%";
    document.getElementById("navbar").style.backgroundColor = "black";
    document.getElementById("navbar").style.transition =
    "background-color 0.5s";
    solcheker = true;
    // sol.style.visibility = "visible";
    sol.style.display = "grid";
    sol.style.transition= "transform 0.5s, opacity 0.9s";
    sol.style.transform = "translateY(0px)";
    sol.style.opacity = "1";
  }
});

let whatcheker = false;
let what = document.getElementById("whats-new");
let extend2 = document.getElementById("e2");
document.getElementById("whats-newbutton").addEventListener("click", () => {
  if (whatcheker) {
    whatcheker = false;
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.transition =
    "background-color 0.5s";
    what.style.transform = "translateY(-20px)";
    what.style.opacity = "0";
    extend2.style.width = "0%";
    what.style.display= "none";
  } else {
    resourcecheker = false;
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.transition =
      "background-color 0.5s";
      resources.style.transform = "translateY(-20px)";
      resources.style.display= "none";
      resources.style.opacity = "0";
      extend3.style.width = "0%";
      //------
      solcheker = false;
      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("navbar").style.transition =
      "background-color 0.5s";
      sol.style.transform = "translateY(-20px)";
      sol.style.opacity = "0";
      sol.style.display = "none";
      extend.style.width = "0%";
      extend2.style.width = "100%";
      document.getElementById("navbar").style.backgroundColor = "black";
      document.getElementById("navbar").style.transition =
      "background-color 0.5s";
      whatcheker = true;
      what.style.display= "grid";
      what.style.transition= "transform 0.5s, opacity 0.9s";
      what.style.transform = "translateY(0px)";
      what.style.opacity = "1";
    }
  });
  let resourcecheker = false;
  let resources = document.getElementById("resource");
  let extend3 = document.getElementById("e3");
  document.getElementById("resources-button").addEventListener("click", () => {
    if (resourcecheker) {
      resourcecheker = false;
      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("navbar").style.transition =
      "background-color 0.5s";
      resources.style.transform = "translateY(-20px)";
      resources.style.opacity = "0";
      resources.style.display= "none";
      extend3.style.width = "0%";
    } else {
      whatcheker = false;
      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("navbar").style.transition =
      "background-color 0.5s";
      what.style.display= "none";
      what.style.transform = "translateY(-20px)";
      what.style.opacity = "0";
      extend2.style.width = "0%";
      //----
      solcheker = false;
      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("navbar").style.transition =
      "background-color 0.5s";
      sol.style.transform = "translateY(-20px)";
      sol.style.opacity = "0";
      extend.style.width = "0%";
      sol.style.display = "none";
      // ------
      extend3.style.width = "100%";
      document.getElementById("navbar").style.backgroundColor = "black";
      document.getElementById("navbar").style.transition =
      "background-color 0.5s";
    resourcecheker = true;

    resources.style.transform = "translateY(0px)";
      resources.style.display= "grid";
    resources.style.opacity = "1";
  }
});
// function toggleMenu(menuId, buttonId) {
//     const menuElement = document.getElementById(menuId);
//     const extenderElement = document.getElementById(menuElement.dataset.extenderId);
    
//     const navbar = document.getElementById("navbar");

//     const isVisible = menuElement.classList.contains('active');

//     // 1. Hide ALL menus (using display: none)
//     document.querySelectorAll('.dropdown-menu').forEach(menu => {
//         const ext = document.getElementById(menu.dataset.extenderId);
//         menu.classList.remove('active');
//         menu.style.transform = "translateY(-20px)";
//         menu.style.opacity = "0";
//         // ✅ Uses display: "none"
//         menu.style.display = "none"; 
//         if (ext) ext.style.width = "0%";
//     });

//     navbar.style.backgroundColor = "transparent";
//     navbar.style.transition = "background-color 0.5s";

//     // 2. Open the clicked menu if it was not already open (using display: grid)
//     if (!isVisible) {
//         menuElement.classList.add('active');
//         // ✅ Uses display: "grid"
//         menuElement.style.display = "grid"; 
        
//         // Timeout for smooth CSS transition (opacity/transform) to work after display change
//         setTimeout(() => {
//             menuElement.style.transform = "translateY(0px)";
//             menuElement.style.opacity = "1";
//         }, 10);

//         if (extenderElement) extenderElement.style.width = "100%";
//         navbar.style.backgroundColor = "black";
//     }
// }

// document.getElementById("solutionbutton").addEventListener("click", () => {
//     toggleMenu("solution", "solutionbutton");
// });

// document.getElementById("whats-newbutton").addEventListener("click", () => {
//     toggleMenu("whats-new", "whats-newbutton");
// });

// document.getElementById("resources-button").addEventListener("click", () => {
//     toggleMenu("resource", "resources-button");
// });