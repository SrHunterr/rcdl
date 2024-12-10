
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');

openMenu.addEventListener('click', () => {
	menu.style.display = "flex";
	menu.style.right = (menu.offsetWidth * -1) + 'px';

	setTimeout(() => {
		menu.style.opacity = '1';
		menu.style.right = "0";
		openMenu.style.display = 'none';
	}, 10);
});

closeMenu.addEventListener('click', () => {
	menu.style.opacity = '0';
	menu.style.right = (menu.offsetWidth * -1) + 'px';
	setTimeout(() => {
		menu.removeAttribute('style');
		openMenu.removeAttribute('style');
	}, 200);
});


const cards = document.querySelectorAll('.cards');

cards.forEach(card => {

    card.addEventListener('mouseover', () => {

        card.classList.add('animacao');
        

        const h3 = card.querySelector('h3');
        const h4 = card.querySelector('h4');

        h3.style.display = 'block';
        h4.style.display = 'block';
    });


    card.addEventListener('mouseout', () => {

        card.classList.remove('animacao');

        const h3 = card.querySelector('h3');
        const h4 = card.querySelector('h4');

        h3.style.display = 'none';
        h4.style.display = 'none';
    });
});
