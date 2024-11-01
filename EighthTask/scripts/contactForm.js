$(document).ready(function () {
    // Открытие модального окна и изменение URL
    $('#openFormBtn').click(function () {
      $('#feedbackModal').modal('show');
      window.history.pushState({form: true}, "", "?feedbackForm");
    });
  
    // Закрытие модального окна при нажатии "назад" в браузере
    window.onpopstate = function (event) {
      if (event.state && event.state.form) {
        $('#feedbackModal').modal('show');
      } else {
        $('#feedbackModal').modal('hide');
      }
    };
  
    // Закрытие модального окна с возвратом URL
    $('#feedbackModal').on('hidden.bs.modal', function () {
      window.history.back();
    });
  
    // Заполнение формы значениями из LocalStorage при загрузке
    if (localStorage.getItem("feedbackForm")) {
      const savedData = JSON.parse(localStorage.getItem("feedbackForm"));
      $('#fullName').val(savedData.fullName);
      $('#email').val(savedData.email);
      $('#phone').val(savedData.phone);
      $('#organization').val(savedData.organization);
      $('#message').val(savedData.message);
    }
  
    // Отправка формы через AJAX
    $('#feedbackForm').submit(function (e) {
      e.preventDefault();
  
      const formData = {
        fullName: $('#fullName').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
        organization: $('#organization').val(),
        message: $('#message').val()
      };
  
      // Сохранение данных формы в LocalStorage
      localStorage.setItem("feedbackForm", JSON.stringify(formData));
  
      // AJAX запрос к Formcarry
      $.ajax({
        url: "https://formcarry.com/s/ndFUApmBXOL", // Укажите ваш токен от formcarry.com
        type: "POST",
        data: formData,
        dataType: "json",
        success: function () {
          $('#formStatus').removeClass('d-none alert-danger').addClass('alert-success').text('Форма отправлена успешно!');
          localStorage.removeItem("feedbackForm");
          $('#feedbackForm')[0].reset();
        },
        error: function () {
          $('#formStatus').removeClass('d-none alert-success').addClass('alert-danger').text('Произошла ошибка при отправке.');
        }
      });
    });
  });