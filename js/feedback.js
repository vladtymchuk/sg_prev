const feedbackUrl = `https://ite.vin.gov.ua/ws/webservice.asmx/Execute`;

const checkText = (strText) => {
    return strText.replaceAll('"', `\"`)
}
function feedback(submit) {
    let $form = $(submit).parent();

    let email = `${$form.find('input[type="email"]').val()}`;
    let fullName = `${$form.find('input[type="text"]').val()}`.replaceAll('"', "'");
    let message = `${$form.find('textarea').val()}`.replaceAll('"', "'");

    console.log(email);
    console.log(fullName);
    console.log(message);

    

    if (!fullName.trim()) {
        alert('Вкажіть ПІБ!');
        return false
    }

    if (!email.trim()) {
        alert('Вкажіть e-mail адресу!');
        return false
    }

    if ($form.find('input[type="email"]').is(":invalid")) {
        alert('Поле E-Mail має бути у форматі example@site.com');
        return false
    }

    if (!message.trim()) {
        alert('Вкажіть повідомлення!');
        return false
    }
    // alert(fullName)
    sendEmail(email, fullName, message)
}

const goodResponse = `<h3>Дякуємо за ваше звернення.</h3><h3>Ми зв'яжемося з Вами найближчим часом.</h3>`;
const badResponse = `<h3>Виникла помилка, спробуйте ще.<h3>`;

function sendEmail(email, fullName, message) {

    $.ajax({
        url: feedbackUrl,
        method: "POST",
        type: "application/json",
        data: {
            "calcId": "_SG_SEND_EMAIL",
            "args": `{fio: "${fullName}", email:"${email}", message: "${message}"}`
        },
        beforeSend: () => {
            $('.bd-example-modal-lg').modal('hide');
            $('#loader-modal').modal('show');
        },
        success: (resp) => {
            try {
                loaderModalResponse(
                    JSON.parse(resp.getElementsByTagName("string")[0].textContent.toLowerCase())
                        ? goodResponse
                        : badResponse
                );
            } catch (e) {
                loaderModalResponse(badResponse)
            }
            clearFieldsModal();
            clearFields();
        },
        error: (resp) => {
            loaderModalResponse(badResponse)
        }
    });

    function loaderModalResponse(response) {
        $('#loader-modal').modal('hide');
        $('#modal-loader-complete .feedback-loader-text').html(response);
        $('#modal-loader-complete').modal('show');
    }
}