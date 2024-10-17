document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById('calculate');
    const quantityInput = document.getElementById('quantity');
    const productSelect = document.getElementById('product');
    const resultDisplay = document.getElementById('result');
    const productImage = document.getElementById('product-image');

    // Изменение изображения при выборе товара
    productSelect.addEventListener('change', function() {
        const selectedOption = productSelect.options[productSelect.selectedIndex];
        // const dataType = selectedOption.getAttribute('data-type');
        // if (dataType == 'Thriller') {
        //     document.getElementById('checkboxDiv').classList.remove('d-none')
        // }

        const imageSrc = selectedOption.getAttribute('data-image');
        productImage.src = imageSrc;
    });

    calculateButton.addEventListener('click', function(event) {
        event.preventDefault();
        const quantity = quantityInput.value.trim();
        const price = parseFloat(productSelect.value);

        // Проверка, что количество - это число
        const quantityRegex = /^[1-9][0-9]*$/;
        if (!quantityRegex.test(quantity)) {
            resultDisplay.textContent = "Ошибка: введите корректное количество.";
            resultDisplay.classList.add('show'); // Показать результат с анимацией
            return;
        }

        const totalCost = price * parseInt(quantity);
        resultDisplay.textContent = 'Общая стоимость: ' + totalCost + '$';

        // Добавляем класс для активации анимации
        resultDisplay.classList.add('show');
    });
});
