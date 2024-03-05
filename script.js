document.addEventListener('DOMContentLoaded', function () {
    function ingresarnumero(valor) {
        let input = document.forms['Calculadora'].elements['txtboxnros'];
        if (input.value == '0') input.value = valor;
        else input.value += valor;
    }

    function resultado() {
        let input = document.forms['Calculadora'].elements['txtboxnros'];
        try {
            input.value = eval(input.value);
        } catch (e) {
            input.value = 'Error';
        }
    }



    function limpiar() {
        document.forms['Calculadora'].elements['txtboxnros'].value = '0';
    }


    let botones = document.getElementsByTagName('input');
    for (let i = 0; i < botones.length; i++) {
        if (botones[i].type === 'button') {
            botones[i].addEventListener('click', function () {
                switch (this.value) {
                    case 'C':
                        limpiar();
                        break;
                    case '=':
                        resultado();
                        break;
                    default:
                        ingresarnumero(this.value);
                }
            });
        }
    }
});
