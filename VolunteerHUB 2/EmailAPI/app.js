document.getElementById('volunteerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        location: document.getElementById('location').value,
        interests: document.getElementById('interests').value,
        selectedApplication: document.getElementById('selectedApplication').value,
        actionDescription: document.getElementById('actionDescription').value,
        actionLocation: document.getElementById('actionLocation').value,
        actionDate: document.getElementById('actionDate').value,
        actionOrganization: document.getElementById('actionOrganization').value,
    };

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => alert('Your application has been submitted!'))
    .catch(error => alert('Error submitting form.'));
});
