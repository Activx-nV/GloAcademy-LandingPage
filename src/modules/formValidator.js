const formValidator = () => {
    const formPhone = document.querySelectorAll('.form-phone');
    const formName = document.querySelectorAll('.form-name');
    const expandedFormName = document.querySelector('.top-form');
    const expandedFormMessage = document.querySelector('.mess');
    const formBtns = document.querySelectorAll('.form-btn');
    formPhone.forEach(item => {
        item.setAttribute('autocomplete', 'off');
    });
    formName.forEach(item => {
        item.setAttribute('autocomplete', 'off');
    });
    expandedFormName.setAttribute('autocomplete', 'off');
    expandedFormMessage.setAttribute('autocomplete', 'off');

    const validatePhoneInput = dom => {
        dom.forEach(item => {
            item.addEventListener('input', () => {
                if (item.value !== '') {
                    if (!item.value.match(/^(\+?[0-9]*)$/g)) {
                        //item.value = item.value.substr(0, item.value.length - 1);
                        formBtns.forEach(btns => {
                            btns.setAttribute('disabled', true);
                        });
                    } else {
                        formBtns.forEach(btns => {
                            btns.removeAttribute('disabled', true);
                        });
                    }
                }
            });
        });
        dom.forEach(item => {
            item.addEventListener('change', () => {
                if (item.value !== '') {
                    if (!item.value.match(/^(\+?[0-9]*)$/g)) {
                        item.value = '';
                    }
                }
            });
        });
    };
    const validateStringInput = dom => {
        dom.forEach(item => {
            item.addEventListener('input', () => {

                // if (!item.value[item.value.length - 1].match(/^[а-яА-Я ]/)) {
                //     item.value = item.value.substr(0, item.value.length - 1);
                // }

                item.value = item.value.replace(/[^А-Яа-яЁё ]/g, "");
            });
        });
    };
    validatePhoneInput(formPhone);
    validateStringInput(formName);
    expandedFormName.addEventListener('input', () => {
        // if (!expandedFormName.value[expandedFormName.value.length - 1].match(/^[а-яА-Я ]/)) {
        //     expandedFormName.value = expandedFormName.value.substr(0, expandedFormName.value.length - 1);
        // }
        expandedFormName.value = expandedFormName.value.replace(/[^А-Яа-яЁё ]/g, "");


    });
    expandedFormMessage.addEventListener('input', () => {
        // if (!expandedFormMessage.value[expandedFormMessage.value.length - 1].match(/^[а-яА-Я ]/)) {
        //     expandedFormMessage.value = expandedFormMessage.value.substr(0, expandedFormMessage.value.length - 1);
        // }
        expandedFormMessage.value = expandedFormMessage.value.replace(/[^А-Яа-яЁё.,!? ]/g, "");
    });
};

export default formValidator;
