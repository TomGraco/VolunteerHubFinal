document.addEventListener('DOMContentLoaded', function () {
    const formElement = document.getElementById('organizationForm'); // Ensure this matches the form ID
    if (formElement) {
        formElement.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission behavior

            // Retrieve form values
            /*const organization = {
                organizationName: document.getElementById("org_name").value,
                location: document.getElementById("location").value,
                name: document.getElementById("event_name").value,
                description: document.getElementById("description").value,
                date: document.getElementById("date").value,
                email: document.getElementById("email").value
            };*/

            const organization = {
                name: document.getElementById("event_name").value,
                location: document.getElementById("location").value,
                description: document.getElementById("description").value,
                organization: document.getElementById("org_name").value,
                date: document.getElementById("date").value,

            };
    
            // Call the function to add the new event to the actions array
            addEventToActions(organization);

            // Debugging: Print the form data to console
            console.log("Form Data Submitted:");
            console.log(`Organization: ${organization.organizationName}`);
            console.log(`Location: ${organization.location}`);
            console.log(`Event Name: ${organization.eventName}`);
            console.log(`Description: ${organization.description}`);
            console.log(`Date: ${organization.eventDate}`);
            console.log(`Email: ${organization.email}`);

            // Retrieve the existing actions from localStorage or initialize an empty array
            //const actions = JSON.parse(localStorage.getItem('actions')) || [];

            // Create a new action
           /* const newAction = {
                name:organization.name,
                description: organization.description,
                location: organization.location,
                date: organization.eventDate,
                organization: organization.organization,
                email: organization.email
            };*/

            // Add the new action to the array
           // actions.push(organization);
            

            // Save the updated actions back to localStorage
           // localStorage.setItem('actions', JSON.stringify(actions));

            alert('Event added successfully!');
            formElement.reset(); // Clear the form

            // Redirect to another page after a short delay
            setTimeout(function () {
                window.location.href = 'main.html';
            }, 500); // 500ms delay before redirect to ensure everything is saved
        });
    } else {
        console.error("Form element not found.");
    }
});



/*window.onload = function(){
    const formElement = document.getElementById('organizationForm');
    console.log(formElement);

if (formElement) {
    formElement.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Retrieve form values
        const organization = {
            organizationName: document.getElementById("org_name").value,
            location: document.getElementById("location").value,
            name: document.getElementById("event_name").value,
            description: document.getElementById("description").value,
            date: document.getElementById("date").value,
            email: document.getElementById("email").value
        };

        console.log(organization);
        

        // Call the function to add the new event to the actions array
        addEventToActions(organization);

        alert('Event added successfully!');
        formElement.reset(); // Clear the form

        window.location.href = 'main.html'; // Redirect to main page
    });
}
}*/





    