const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu');
    // closeBtn = document.querySelector('.close-btn'),
    // menuItems = menu.querySelectorAll('ul>li');
    let count = 0;

    const handlerMenu = () => {
        if (!menu.style.transform || menu.style.transform === 'translate(-100%)') {
            menu.style.transform = `translate(0)`;
            let flyInterval;
            const flyAnimate = function() {
                flyInterval = requestAnimationFrame(flyAnimate);
                count += 20;
                if (count < 1000 && document.documentElement.clientWidth > 1900) {
                    menu.style.left = count + 'px';
                } else if (count < 700 && document.documentElement.clientWidth < 1900 &&
                    document.documentElement.clientWidth > 1200) {
                    menu.style.left = count + 'px';
                } else if (count < 550 && document.documentElement.clientWidth < 1920 &&
                    document.documentElement.clientWidth > 1000) {
                    menu.style.left = count + 'px';
                } else if (count < 850 && document.documentElement.clientWidth < 1920 &&
                    document.documentElement.clientWidth >= 1600) {
                    menu.style.left = count + 'px';
                } else if (document.documentElement.clientWidth > 768) {
                    cancelAnimationFrame(flyInterval);
                }
            };
            flyInterval = requestAnimationFrame(flyAnimate);
        } else {
            count = 0;
            menu.style.transform = `translate(-100%)`;
            menu.style.left = "";
        }
        //menu.classList.toggle('active-menu');

    };

    btnMenu.addEventListener('click', handlerMenu);
    // closeBtn.addEventListener('click', handlerMenu);
    // menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));
    menu.addEventListener('click', event => {
        const target = event.target;

        if (target.classList.contains('close-btn')) {
            handlerMenu();
        } else if (target.closest('ul')) {
            handlerMenu();
        }
    });
};

export default toggleMenu;
