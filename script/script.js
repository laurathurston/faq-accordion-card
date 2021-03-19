const accHeaders = document.querySelectorAll(".accordion_header");

accHeaders.forEach((accHeader) => {
  accHeader.addEventListener("click", (event) => {
    accHeader.classList.toggle("active");
  });
});
