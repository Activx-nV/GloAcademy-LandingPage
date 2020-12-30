const togglePopUp = () => {
    let opacityIn = 0;
    let opacityOut = 1;
    const popUp = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn');

    const formName = document.getElementById('form3-name'),
        formPhone = document.getElementById('form3-phone'),
        formEmail = document.getElementById('form3-email'),
        formBtns = document.querySelectorAll('.form-btn');
    //popUpClose = document.querySelector('.popup-close');

    popupBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            if (document.documentElement.clientWidth >= 768) {
                opacityIn = 0;
                popUp.style.display = 'block';
                let opacityInterval;
                const opacityAnimate = function() {
                    opacityInterval = requestAnimationFrame(opacityAnimate);
                    opacityIn += 0.01;
                    if (opacityIn < 1.01) {
                        popUp.style.opacity = opacityIn;
                    } else if (opacityIn >= 1) {
                        cancelAnimationFrame(opacityInterval);
                    }
                };
                opacityInterval = requestAnimationFrame(opacityAnimate);
            } else {
                popUp.style.display = 'block';
                popUp.style.opacity = 1;
            }
        });
        popUp.addEventListener('click', event => {
            let target = event.target;
            formBtns.forEach(item => {
                item.removeAttribute('disabled', true);
                item.textContent = 'Оставить заявку!';
            });


            if (target.classList.contains('popup-close')) {
                if (document.documentElement.clientWidth >= 768) {
                    let opacityInterval;
                    opacityOut = 1;
                    const opacityAnimate = function() {
                        opacityInterval = requestAnimationFrame(opacityAnimate);
                        opacityOut -= 0.01;
                        if (opacityOut > 0.01) {
                            popUp.style.opacity = opacityOut;
                        } else {
                            popUp.style.display = 'none';
                            formName.value = '';
                            formPhone.value = '';
                            formEmail.value = '';
                            cancelAnimationFrame(opacityInterval);
                        }
                    };
                    opacityInterval = requestAnimationFrame(opacityAnimate);
                } else {
                    formName.value = '';
                    formPhone.value = '';
                    formEmail.value = '';
                    popUp.style.display = 'none';
                }
                //popUp.style.display = 'none';
            } else {
                formBtns.forEach(item => {
                    item.removeAttribute('disabled', true);
                    item.textContent = 'Оставить заявку!';
                });

                target = target.closest('.popup-content');
                if (!target) {
                    if (document.documentElement.clientWidth >= 768) {
                        let opacityInterval;
                        opacityOut = 1;
                        const opacityAnimate = function() {
                            opacityInterval = requestAnimationFrame(opacityAnimate);
                            opacityOut -= 0.01;
                            if (opacityOut > 0.01) {
                                popUp.style.opacity = opacityOut;
                            } else {
                                popUp.style.display = 'none';
                                formName.value = '';
                                formPhone.value = '';
                                formEmail.value = '';
                                cancelAnimationFrame(opacityInterval);
                            }
                        };
                        opacityInterval = requestAnimationFrame(opacityAnimate);
                    } else {
                        formName.value = '';
                        formPhone.value = '';
                        formEmail.value = '';
                        popUp.style.display = 'none';
                    }

                    //popUp.style.display = 'none';
                }
            }

        });
    });

    // popUpClose.addEventListener('click', () => {
    //     let opacityInterval;
    //     opacityOut = 1;
    //     const opacityAnimate = function () {
    //         opacityInterval = requestAnimationFrame(opacityAnimate);
    //         opacityOut -= 0.01;
    //         if (opacityOut > 0.01) {
    //             popUp.style.opacity = opacityOut;
    //         } else {
    //             popUp.style.display = 'none';
    //             cancelAnimationFrame(opacityInterval);
    //         }
    //     };
    //     opacityInterval = requestAnimationFrame(opacityAnimate);
    // });
};

export default togglePopUp;
