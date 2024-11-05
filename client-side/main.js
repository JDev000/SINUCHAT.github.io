const socket = io();

// Event listener for connection
socket.on('connect', () => {
    console.log('Connected to server');

    // Send a message to the server (optional, you can remove this if not needed)
    // socket.emit('clientMessage', 'Hello from the client!');
});

// Listen for the message from the server
socket.on('message', (msg) => {
    console.log(msg); // Log the message to the console

    // Display the message on the page
    setTimeout(() => {
        const messageDiv = document.createElement('div');
        messageDiv.setAttribute('id', 'back-end-msg');
        messageDiv.textContent = msg;
        document.body.appendChild(messageDiv);
    },2000)
});

// Additional event listeners or emit events can go here

const form = document.querySelector('.form');
const input = document.querySelector('#input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat_message', input.value);
    input.value = '';
  }
});