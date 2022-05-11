const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if(e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });
        input.addEventListener('change', () => {
            if(input.value.match(/[a-z 0-9]/ig)){
                input.value = '';
            }
        });
    });
}

export default checkTextInputs;