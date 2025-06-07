document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const outside = document.querySelector('.outside');
    const giftContainer = document.querySelector('.gift-container');

    // Open card when clicking the outside
    outside.addEventListener('click', () => {
        card.classList.add('open');
    });

    // Open YouTube link when clicking the gift
    giftContainer.addEventListener('click', () => {
        window.open('https://youtu.be/ho08YLYDM88?si=6RsPSDnA7delmkb5', '_blank');
    });
}); 