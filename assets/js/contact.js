document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const fields = {
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        issue: document.getElementById('issue'),
        message: document.getElementById('message')
    };

    const errorMessages = {
        nameError: document.getElementById('name__error'),
        emailError: document.getElementById('email__error'),
        issueError: document.getElementById('issue__error'),
        messageError: document.getElementById('message__error'),
    };

    const submitMessage = document.getElementById('submit__message');

    Object.values(errorMessages).forEach(error => {
        error.textContent = '';
    });
    if (submitMessage) {
        submitMessage.textContent = '';
    }

    Object.values(fields).forEach(field => {
        field.classList.remove('error');
    });

    let valid = true;

    valid = validateField(fields.name, errorMessages.nameError, 'Ingresa tu nombre...') && valid;
    valid = validateField(fields.email, errorMessages.emailError, 'Ingresa tu correo electrónico...') && valid;
    valid = validateEmailField(fields.email, errorMessages.emailError) && valid;
    valid = validateField(fields.issue, errorMessages.issueError, 'Ingresa el asunto...') && valid;
    valid = validateField(fields.message, errorMessages.messageError, 'Ingresa el mensaje...') && valid;

    if (valid) {
        if (submitMessage) {
            submitMessage.textContent = 'Datos enviados correctamente.';
        }
        document.getElementById('form').reset();
    }
});

function validateField(field, errorElement, errorMessage) {
    if (field.value.trim() === '') {
        errorElement.textContent = errorMessage;
        field.classList.add('error');
        return false;
    }
    return true;
}

function validateEmailField(field, errorElement) {
    if (!validateEmail(field.value.trim())) {
        errorElement.textContent = 'Ingresa un correo electrónico válido.';
        field.classList.add('error');
        return false;
    }
    return true;
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase());
}
