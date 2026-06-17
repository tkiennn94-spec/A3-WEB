document.addEventListener("DOMContentLoaded", function () {

    const currentPage =
        window.location.pathname.split("/").pop();

    // MENU CHA
    document.querySelectorAll(".nav-link").forEach(link => {

        const href = link.getAttribute("href");

        if (!href || href === "#") return;

        const page = href.split("/").pop();

        if (page === currentPage) {
            link.classList.add("active");
        }

    });

    // MENU CON
    document.querySelectorAll(".dropdown").forEach(dropdown => {

        const parentLink =
            dropdown.querySelector(".nav-link");

        dropdown.querySelectorAll(".dropdown-item")
            .forEach(item => {

                const href =
                    item.getAttribute("href");

                if (!href) return;

                const page =
                    href.split("/").pop();

                if (page === currentPage) {

                    item.classList.add("active");

                    if (parentLink) {
                        parentLink.classList.add("active");
                    }
                }
            });
    });

});