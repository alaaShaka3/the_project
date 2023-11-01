document.getElementById('show-form-btn').addEventListener('click', function () {
    document.getElementById('contact-form').classList.remove('hidden');
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('contact-form').classList.add('hidden');
    document.getElementById('success-message').classList.remove('hidden');
});
