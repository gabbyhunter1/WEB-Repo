document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculate");
  const quantityInput = document.getElementById("quantity");
  const productSelect = document.getElementById("product");
  const resultDisplay = document.getElementById("result");
  const productImage = document.getElementById("product-image");
  const form = document.getElementById("merch-form");

  function checkFormValidity() {
    if (form.checkValidity()) {
      form.classList.remove("was-validated");
    }
  }

  productSelect.addEventListener("change", function () {
    resultDisplay.classList.remove("show");
    resultDisplay.classList.add("d-none");
    const selectedOption = productSelect.options[productSelect.selectedIndex];
    const dataType = selectedOption.getAttribute("data-type");
    if (dataType == "Bad") {
      document.getElementById("checkboxDiv").classList.add("d-none");
      document.getElementById("radioDiv").classList.add("d-none");
      const inputs = document.getElementsByName("merchClothType");
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].required = false;
      }
    } else if (dataType == "Thriller") {
      document.getElementById("checkboxDiv").classList.remove("d-none");
      document.getElementById("radioDiv").classList.add("d-none");
    } else {
      document.getElementById("checkboxDiv").classList.add("d-none");
      document.getElementById("radioDiv").classList.remove("d-none");
      const inputs = document.getElementsByName("merchClothType");
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].required = true;
      }
    }

    const imageSrc = selectedOption.getAttribute("data-image");
    productImage.src = imageSrc;
    checkFormValidity();
  });

  calculateButton.addEventListener("click", function (event) {
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add("was-validated");
      return;
    }

    const quantity = quantityInput.value.trim();
    const price = parseFloat(productSelect.value);
    var totalCost = price * parseInt(quantity);
    if (
      productSelect.options[productSelect.selectedIndex].getAttribute(
        "data-type"
      ) == "Thriller"
    ) {
      const checkboxes = document.querySelectorAll(
        "#checkboxDiv .form-check-input"
      );
      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          totalCost += parseFloat(checkbox.value);
        }
      });
    } else if (
      productSelect.options[productSelect.selectedIndex].getAttribute(
        "data-type"
      ) == "HSSWM"
    ) {
      const radios = document.querySelectorAll("#radioDiv .form-check-input");
      radios.forEach((radio) => {
        if (radio.checked) {
          totalCost += parseFloat(radio.value);
        }
      });
    }
    resultDisplay.textContent = "Общая стоимость: " + totalCost + "$";
    resultDisplay.classList.remove("d-none");
    resultDisplay.classList.add("show");
  });
});
