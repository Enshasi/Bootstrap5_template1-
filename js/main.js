//scrool where in click The Links
let link = document.querySelectorAll(".navbar .navbar-nav .nav-link");
link.forEach((el) => {
    el.addEventListener("click", (e) => {
        link.forEach((el) => {
            el.classList.remove("active");
        });
        e.target.classList.add("active");

        e.preventDefault();
        document.querySelector(`#${e.target.dataset.scroll}`).scrollIntoView({
            behavior: "smooth",
        });
    });
});

//table in image
let linkes = document.querySelectorAll(".our-work ul li");
let image = document.querySelectorAll(".our-work .box  ");

linkes.forEach((linke) => {
    linke.addEventListener("click", (li) => {
        linkes.forEach((el) => {
            el.classList.remove("active");
        });
        li.target.classList.add("active");
        image.forEach((img) => {
            img.style.display = "none";
        });
        document.querySelectorAll(li.target.dataset.image).forEach((box) => {
            box.style.display = "block";
        });
    });
});