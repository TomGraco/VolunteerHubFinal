

/*document.getElementById('volunteerForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve form values
    const volunteer = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        location: document.getElementById('location').value,

    };

    // Send data to the server as JSON
    fetch('/form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(volunteer)
    })
    .then(response => {
        if (response.ok) {
            alert('Volunteer added successfully!');
            document.getElementById('volunteerForm').reset(); // Clear the form
        } else {
            alert('Error adding volunteer');
        }
    })
    .catch(error => console.error('Error:', error));
});

async function populateVolunteers() {
    const volunteerTable = document.getElementById("volunteersList");
    volunteerTable.innerHTML="";
    */

    document.addEventListener('DOMContentLoaded', function () {
        const params = new URLSearchParams(window.location.search);
        console.log('query params:', window.location.search);
    
        const name = params.get('name');
        const description = params.get('description');
        const location = params.get('location');
        const date = params.get('date');
        const organization = params.get('organization');
    
        console.log('stuff',{name, description, location, date, organization});

        if (name && description && location && date && organization) {
            document.getElementById('selectedApplication').textContent = name;
            document.getElementById('actionDescription').textContent = `Description: ${description}`;
            document.getElementById('actionLocation').textContent = `Location: ${location}`;
            document.getElementById('actionDate').textContent = `Date: ${date}`;
            document.getElementById('actionOrganization').textContent = `Organized by: ${organization}`;
        } else {
            console.log('Error');
            
        }
        
        // Check if we are on form.html
        const formElement = document.getElementById('volunteerForm');
        if (formElement) {
            formElement.addEventListener('submit', function (event) {
                event.preventDefault(); // Prevent the default form submission behavior
    
                // Retrieve form values
                const volunteer = {
                    name: document.getElementById('name').value,
                    age: document.getElementById('age') ? document.getElementById('age').value : null, // Handle age if it exists
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    location: document.getElementById('location').value,
                    organization: organization
                };
    
                // Save the volunteer in sessionStorage
                const volunteers = JSON.parse(sessionStorage.getItem('volunteers')) || [];
                volunteers.push(volunteer);
                sessionStorage.setItem('volunteers', JSON.stringify(volunteers));
    
                alert('Volunteer added successfully!');
                formElement.reset(); // Clear the form

                setTimeout(function () {
                    window.location.href = 'main.html';
                }, 500); 
            });
        }
    });
    
    