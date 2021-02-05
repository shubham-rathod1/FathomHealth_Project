
const mobileView = window.matchMedia('(max-width: 600px)');
const mediumView = window.matchMedia('(min-width: 770px)');

function mobShow(e) {
    if (e.matches) {
        var cont = document.querySelector("#nvidia-text");
        cont.parentNode.remove();
        console.log("MobileView");
    }
}

function medShow(e) {
    if (e.matches) {
        var cont = document.querySelector("#nvidia-cont");
        // if (cont.childNodes != null) {
        //     cont.childNodes.remove();
        // }
        var div = document.createElement("div");
        var p = document.createElement("p");
        p.textContent = "Read NVDIA's spotlight on Fathom: The Cure of the Common Code";
        p.setAttribute("class", "center");
        p.setAttribute("id", "nvidia-text");
        div.appendChild(p);
        cont.appendChild(div);
        console.log("LargeView")
    }
}
mediumView.addListener(medShow);
mobileView.addListener(mobShow);

// <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
// <script>
//     AOS.init({
//         offset: 120,
//         duration: 800
//     });

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the header
var header = document.getElementById("layout");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
