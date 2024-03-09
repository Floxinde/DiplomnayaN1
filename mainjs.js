const sliderContent = document.querySelector('.slider-content');
let slideIndex = 0;

function showSlides() {
    slideIndex++;
    if (slideIndex >= 3) {
        slideIndex = 0;
    }
    sliderContent.style.transform = `translateX(-${slideIndex * 100}%)`;
    setTimeout(showSlides, 5000);
}

showSlides();

function filterProducts(category) {
    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
        article.style.display = 'none';
    });

    if (category === 'all') {
        articles.forEach(article => {
            article.style.display = 'block';
        });
    } else {
        const filteredArticles = document.querySelectorAll(`.${category}`);
        filteredArticles.forEach(article => {
            article.style.display = 'block';
        });
    }
}
