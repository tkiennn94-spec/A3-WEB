const trendingItems = document.querySelectorAll('.trending-item');
    const prevButton = document.getElementById('trending-prev');
    const nextButton = document.getElementById('trending-next');
    const pageSize = 5;
    let currentPage = 0;
    const totalPages = Math.ceil(trendingItems.length / pageSize);

    function renderTrendingPage() {
        trendingItems.forEach((item, index) => {
            const itemPage = Math.floor(index / pageSize);
            item.style.display = itemPage === currentPage ? '' : 'none';
        });
        prevButton.disabled = currentPage === 0;
        nextButton.disabled = currentPage === totalPages - 1;
    }

    prevButton.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage -= 1;
            renderTrendingPage();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages - 1) {
            currentPage += 1;
            renderTrendingPage();
        }
    });

    renderTrendingPage();

