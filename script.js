// Loader
function randomColor() {
    return '#' + Math.random().toString(16).slice(-6);
}

function setRandomColors () {
    document.querySelector('.color1').style.backgroundColor = randomColor();
    document.querySelector('.color2').style.backgroundColor = randomColor();
    document.querySelector('.color3').style.backgroundColor = randomColor();
}

setRandomColors();

setInterval(setRandomColors, 2000);

setTimeout(() => {
    document.querySelector('.loader-container').style.display = 'none'
    document.querySelectorAll('.item').forEach(el => {el.style.opacity = '1'});
}, 3000)


function checkScroll () {
    const navbar = document.getElementById('nav-bar');
    const logo = document.getElementById('logo');
    let scrollPosition = window.scrollY;

    // Add/remove scroll class based on position
    if (scrollPosition > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    //Calc new fontsize based on scroll position
    let newSize = 3 - (scrollPosition * 0.03);

    // Clamping fontsize 1.5rem - 3rem
    newSize = Math.max(1.5, newSize);
    newSize = Math.min(3, newSize);

    logo.style.fontSize = newSize + 'rem';
}

window.addEventListener('scroll', checkScroll);

// Modal view
const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.title = 'Click To Enlarge';
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        //create modal div
        const modal = document.createElement('div');
        modal.classList.add('modal');
        //create img element
        const imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.alt = "Enlarged abstract image";
        //Append img to modal div
        modal.appendChild(imgElement);
        //add modal to body
        document.body.appendChild(modal);
        setTimeout(() => {
            imgElement.classList.add('reveal')
        }, 10);
        //Remove Modal after click
        modal.addEventListener('click', () => {
            imgElement.classList.remove('reveal');
            setTimeout(() => {
                modal.remove();
            }, 300);
        });
    });
});