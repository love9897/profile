var typed = new Typed(".typing",{
    strings:[" ","Web Developer","Flutter Developer","Software Developer"],
    typedSpeed:100,
    BackSpeed:20,
    loop:true
})


document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            
            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            
            this.classList.add("active");
        });
    });
});
