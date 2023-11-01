/* sophisticated_code.js */

// This code creates a chatbot to simulate a conversation with a user

// Define the Chatbot class
class Chatbot {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello! My name is ${this.name}. How can I assist you today?`);
  }

  processUserInput(input) {
    // Process the user's input and generate appropriate response
    if (input.includes('hello') || input.includes('hi')) {
      console.log(`Nice to meet you! How can I help?`);
    } else if (input.includes('weather')) {
      console.log(`I'm sorry, I am not programmed to check the weather.`);
    } else if (input.includes('time')) {
      const now = new Date();
      const currentTime = now.toLocaleTimeString();
      console.log(`The current time is ${currentTime}.`);
    } else if (input.includes('joke')) {
      this.tellJoke();
    } else if (input.includes('quit')) {
      console.log(`Goodbye! It was nice talking to you.`);
      return;
    } else {
      console.log(`I'm sorry, I don't understand.`);
    }
    this.promptUser();
  }

  tellJoke() {
    console.log(`Why don't scientists trust atoms? Because they make up everything!`);
  }

  promptUser() {
    console.log(`What else would you like to know?`);
  }
}

// Create a new instance of the Chatbot class
const chatbot = new Chatbot('Sophie');

// Start the conversation
console.log(`Chatbot Initialization Complete!`);
chatbot.sayHello();
chatbot.promptUser();

// Handle user input
let readlineSync;
try {
  readlineSync = require('readline-sync'); // For Node.js
} catch (error) {
  // For browser compatibility
  readlineSync = {
    question: (prompt) => {
      return prompt;
    },
  };
}

while (true) {
  const userInput = readlineSync.question('> ');
  chatbot.processUserInput(userInput.toLowerCase());
}
