const form = document.querySelector("[data-form");

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log('submitted form');
});

const ancla = document.querySelector('[data-anchor]');

ancla.addEventListener('click', e => {
    e.preventDefault();
    console.log('warmoth site');
})