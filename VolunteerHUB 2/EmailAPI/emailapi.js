const API_KEY = 'SG.94XTBLFDYMGDPCBQ2XH287VZ';
const express = require('express');
const sendgrid = require('@sendgrid/mail');
const bodyParser = require('body-parser');

// Initialize Express
const app = express();
const port = 3000;

// SendGrid API Key
sendgrid.setApiKey(API_KEY);  // Replace with your SendGrid API key

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route to handle the form submission and send the email
app.post('/submit', async (req, res) => {
    const { name, email, phone, location, interests, selectedApplication,actionDescription, actionLocation,actionDate,actionOrganization} = req.body;

    const msg = {
        to: email,  // Send to the user's email address
        from: 'volunteerhub@hotmail.com',  // Replace with your email address
        subject: 'Thank You for Your VolunteerHub Application',
        text: `Hello ${name},

Thank you for your application. Here are the details you submitted:

Action:

${selectedApplication}
Description: ${actionDescription}
Location: ${actionLocation}
DAte: ${actionDate}
Organization: ${actionOrganization}


Personal info:

Name: ${name}
Email: ${email}
Phone: ${phone}
Location: ${location}
Interests: ${interests}

We will get back to you soon.

Best regards,
The Volunteer Hub Team`,
    };

    try {
        await sendgrid.send(msg);
        res.status(200).send('Email sent successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error sending email.');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
