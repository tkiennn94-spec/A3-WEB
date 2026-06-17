document.addEventListener("DOMContentLoaded", function () {

    const trendingItems = document.querySelectorAll(".trending-item");
    const prevButton = document.getElementById("trending-prev");
    const nextButton = document.getElementById("trending-next");

    if (!trendingItems.length || !prevButton || !nextButton) {
        return;
    }

    const pageSize = 5;
    let currentPage = 0;
    const totalPages = Math.ceil(trendingItems.length / pageSize);

    function renderTrendingPage() {

        trendingItems.forEach((item, index) => {

            const itemPage = Math.floor(index / pageSize);

            item.style.display =
                itemPage === currentPage ? "" : "none";
        });

        prevButton.disabled = currentPage === 0;
        nextButton.disabled = currentPage === totalPages - 1;
    }

    prevButton.addEventListener("click", function () {

        if (currentPage > 0) {
            currentPage--;
            renderTrendingPage();
        }

    });

    nextButton.addEventListener("click", function () {

        if (currentPage < totalPages - 1) {
            currentPage++;
            renderTrendingPage();
        }

    });

    renderTrendingPage();

});