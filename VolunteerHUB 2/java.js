const actions = [
    {
        name: 'Distribuição de Alimentos',
        description: 'Distribuir alimentos para os mais necessitados.',
        location: 'Lisboa',
        date: '2024-12-20',
        organization: 'Cruz Vermelha Portuguesa'
    },
    {
        name: 'Limpeza de Parque',
        description: 'Ajudar a limpar o Parque Eduardo VII.',
        location: 'Lisboa',
        date: '2024-12-21',
        organization: 'Câmara Municipal de Lisboa'
    },
    {
        name: 'Assistência em Abrigos',
        description: 'Apoiar em abrigos locais.',
        location: 'Porto',
        date: '2024-12-22',
        organization: 'Associação Abraço'
    },
    {
        name: 'Educação Comunitária',
        description: 'Ensinar crianças desfavorecidas.',
        location: 'Coimbra',
        date: '2024-12-23',
        organization: 'Fundação Bissaya Barreto'
    },
    {
        name: 'Recolha de Alimentos',
        description: 'Recolher alimentos para bancos alimentares.',
        location: 'Braga',
        date: '2024-12-20',
        organization: 'Banco Alimentar Contra a Fome'
    },
    {
        name: 'Reflorestação',
        description: 'Participar em ações de plantação de árvores.',
        location: 'Sintra',
        date: '2024-12-24',
        organization: 'Plantar Uma Árvore'
    },
    {
        name: 'Campanha de Recreação',
        description: 'Ajudar a organizar campanhas de recreação.',
        location: 'Aveiro',
        date: '2024-12-25',
        organization: 'Casa da Criança'
    },
    {
        name: 'Proteção de Animais',
        description: 'Ajudar a preservar animais em situações de perigo.',
        location: 'Bragança',
        date: '2024-12-26',
        organization: 'Sociedade de Proteção dos Animais'
    },
    {
        name: 'Ajuda a Famílias Sem Terra',
        description: 'Ajudar famílias sem terra a se organizarem.',
        location: 'Aveiro',
        date: '2024-12-27',
        organization: 'Casa da Criança'
    },
    {
        name: 'Ensino de Inglês',
        description: 'Ajudar a ensinar crianças a ler e escrever em inglês.',
        location: 'Porto',
        date: '2024-12-28',
        organization: 'Fundação Casa da Criança'
    },
    {
        name: 'Ação de Limpeza',
        description: 'Ajudar a limpar a cidade.',
        location: 'Porto',
        date: '2024-12-29',
        organization: 'Câmara Municipal de Porto'
    }
];

const users = [
    {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        location: 'Lisboa',
        interests: ['Recolha de Alimentos', 'Educação Comunitária']
    },
    {
        name: 'Jane Smith',
        email: 'jane@example.com',
        phone: '9876543210',
        location: 'Porto',
        interests: ['Assistência em Abrigos', 'Proteção de Animais']
    },
    {
        name: 'Mike Johnson',
        email: 'mike@example.com',
        phone: '0987654321',
        location: 'Braga',
        interests: ['Reflorestação', 'Ação de Limpeza']
    },
    {
        name: 'Sarah Wilson',
        email: 'sarah@example.com',
        phone: '2345678901',
        location: 'Coimbra',
        interests: ['Ensino de Inglês', 'Ajuda a Famílias Sem Terra']
    },
    {
        name: 'Emily Davis',
        email: 'emily@example.com',
        phone: '3456789012',
        location: 'Aveiro',
        interests: ['Distribuição de Alimentos', 'Campanha de Recreação']
    }
];

function filterActions() {
    const location = document.getElementById('location').value;
    const actionsDiv = document.getElementById('actions');
    actionsDiv.innerHTML = ''; // Clear previous actions

    const eventData = JSON.parse(sessionStorage.getItem('actions')) || [];
    console.log('event data:',eventData);
    //console.log("actions:", actions);
    

    eventData
        .filter(action => location === 'all' || action.location === location)
        .forEach(action => {
            actionsDiv.innerHTML +=
                `<div class="action-card" style="border: 1px solid #ccc; padding: 15px; margin: 10px auto; width: 50%;">
            <h3>${action.name}</h3>
            <p><strong>Location:</strong> ${action.location}</p>
            <p>${action.description}</p>
            <p><strong>Organized by:</strong> ${action.organization}</p>
            <p><strong>Date:</strong> ${action.date}</p>
            <a href="form.html?name=${encodeURIComponent(action.name)}&description=${encodeURIComponent(action.description)}&location=${encodeURIComponent(action.location)}&date=${encodeURIComponent(action.date)}&organization=${encodeURIComponent(action.organization)}" class="apply-button">Apply Now</a>
        </div>`
        });
};
function addEventToActions(event) {
    console.log('helloooooo');
   // alert('yey');
    actions.push(event); // Add the event to the array
    sessionStorage.setItem('actions', JSON.stringify(actions)); // Update sessionStorage
    console.log('Event added:', event); // Debugging log
    console.log('actions array', actions);
    
}



function showMessage() {
    const message = document.getElementById('message');
    message.style.display = 'block';
    setTimeout(() => (message.style.display = 'none'), 3000);
}

//local storrage for aplications
function saveApplications(name, email, phone, location, interests, action) {
    const applications = JSON.parse(localStorage.getItem('applications')) || [];
    applications.push({ name, email, phone, location, interests, action });
    localStorage.setItem('applications', JSON.stringify(applications));
}
function loadApplications() {
    const applications = JSON.parse(localStorage.getItem('applications')) || [];
    const eventsContainer = document.getElementById('eventsContainer');
    eventsContainer.innerHTML = '';

    if (applications.length === 0) {
        eventsContainer.innerHTML = '<p>No applications yet.</p>';
    } else {

        applications.forEach(app => {
            eventsContainer.innerHTML +=
                `<div class="application-card">
        <h3>${app.name}</h3>
        <p><strong>Email:</strong> ${app.email}</p>
        <p><strong>Phone:</strong> ${app.phone}</p>
        <p><strong>Location:</strong> ${app.location}</p>
        <p><strong>Interests:</strong> ${app.interests.join(', ')}</p>
        <p><strong>Applied for:</strong> ${app.action}</p>
        </div>`;
        });
    }
}

/*function loadFormDetails() {
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
}*/

function handleSubmitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value;
    //const interests = document.getElementById('interests').value;
    const action = document.getElementById('selectedApplication').textContent;

    saveApplications(name, email, phone, location, interests, action);
    alert('Application submitted successfully!')
    window.location.href = 'community.html';
}



/*function handleSubmitEvent(event) {
    event.preventDefault();
    console.log("form1");

    const name = document.getElementById('event_name').value;
    const description = document.getElementById('description').value;
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;
    const organization = document.getElementById('org_name').value;

    console.log({ name, organization, date, location, description });


    const newAction = {
        name,
        description,
        location,
        date,
        organization,
    };

    actions.push(newAction);
    console.log("updated:", actions);


    localStorage.setItem('actions', JSON.stringify(actions));

    alert('Event submitted successfully!');
    window.location.href = 'main.html';

}*/
function toggleChatbot() {
    const chatbot = document.getElementById('chatbot-container');
    chatbot.style.display = chatbot.style.display === 'flex' ? 'none' : 'flex';
}

// Chatbot Logic
const chatbotContent = document.getElementById('chatbot-content');

const chatbotFlow = {
    start: {
        message: "Hi! How can I help you?",
        options: [
            { text: "What services do you offer?", next: "services" },
            { text: "How can I contact support?", next: "contact" },
            { text: "Tell me a joke!", next: "joke" }
        ]
    },
    services: {
        message: "We offer volunteering opportunities in various fields. Anything specific?",
        options: [
            { text: "Tell me more.", next: "details" },
            { text: "Go back to start.", next: "start" }
        ]
    },
    contact: {
        message: "You can reach us at volunteershub@gmail.com.",
        options: [
            { text: "Thanks!", next: "end" },
            { text: "Go back to start.", next: "start" }
        ]
    },
    joke: {
        message: "Why did the volunteer bring a ladder to work? Because they wanted to reach new heights! 😄",
        options: [
            { text: "Tell me another joke!", next: "joke" },
            { text: "Go back to start.", next: "start" }
        ]
    },
    details: {
        message: "We connect volunteers with NGOs for education, healthcare, and community projects.",
        options: [
            { text: "Great!", next: "end" },
            { text: "Go back to start.", next: "start" }
        ]
    },
    end: {
        message: "Glad I could help! Have a great day!",
        options: []
    }
};

// Display Chat Content
function displayChat(node) {
    const chatbotContent = document.getElementById('chatbot-content');
    chatbotContent.innerHTML = ""; // Clear previous content

    // Get the message and options from the chatbot flow
    const { message, options } = chatbotFlow[node];

    // Display the message
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    chatbotContent.appendChild(messageDiv);

    // Display the options as buttons
    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.className = "chatbot-option";
        button.onclick = () => displayChat(option.next); // Recursively display the next chat node
        chatbotContent.appendChild(button);
    });
}

// Start Chatbot


window.onload = function () {
    displayChat("start");
   // loadFormDetails();
    if (document.getElementById('volunteerForm')) {
        document.getElementById('volunteerForm').addEventListener('submit', handleSubmitForm);
    }
    if (document.getElementById('eventsContainer')) {
        loadApplications();
    }
    const form = document.getElementById('organizationForm');
    if (form) {
        form.addEventListener('submit', handleSubmitEvent);
    }


};

