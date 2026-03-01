
let cards = document.querySelectorAll('.card');
let currentIndex = 0;
let isScrolling = false;

window.addEventListener('wheel', (event) => {
    if (isScrolling) return;
    isScrolling = true;

    if (event.deltaY > 0) { // التمرير لأسفل
        let nextIndex = (currentIndex + 1) % cards.length;
        changeCard(nextIndex);
    } else { // التمرير لأعلى
        let prevIndex = (currentIndex - 1 + cards.length) % cards.length;
        changeCard(prevIndex);
    }

    setTimeout(() => {
        isScrolling = false;
    }, 600);
});

function changeCard(newIndex) {
    cards[currentIndex].classList.remove('visible');
    cards[newIndex].classList.add('visible');
    cards[newIndex].style.top = '0';
    cards[currentIndex].style.top = newIndex > currentIndex ? '-120%' : '120%';
    currentIndex = newIndex;
}



