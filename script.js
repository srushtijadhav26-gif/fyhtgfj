function toggleMenu() {
    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");
}


function submitForm(event) {

    event.preventDefault();

    alert(
        "Thank you for contacting SAKEC! Your message has been received."
    );

    event.target.reset();
}


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelector(".nav-links")
            .classList.remove("active");

    });

});
