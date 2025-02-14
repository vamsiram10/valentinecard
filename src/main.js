import "./styles/style.css";
import gsap from "gsap";

document.querySelector(".nobutton").addEventListener("mouseover", function () {
  let x = Math.floor(Math.random() * (250 - -250 + 1)) + -250;
  let y = Math.floor(Math.random() * (250 - -250 + 1)) + -250;
  gsap.to(".nobutton", {
    x,
    y,
    duration: 0.1,
  });
});
