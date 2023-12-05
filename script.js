// new

document.addEventListener('DOMContentLoaded', function() {

    // Search functionality
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.getElementById('search-input');

    searchButton.addEventListener('click', function() {
        const searchText = searchInput.value;
        alert("Search for: " + searchText);  // For demonstration; in a real scenario, you would handle the search differently.
    });

    // Carousel functionality
    const carousel = document.querySelector('.carousel-slide');
    let carouselIndex = 0;

    document.querySelector('.carousel-btn.left').addEventListener('click', function() {
        moveSlide(-1);
    });

    document.querySelector('.carousel-btn.right').addEventListener('click', function() {
        moveSlide(1);
    });

    function moveSlide(direction) {
        const totalSlides = carousel.children.length;
        carouselIndex += direction;

        // Loop around if at the end or beginning
        if (carouselIndex >= totalSlides) {
            carouselIndex = 0;
        } else if (carouselIndex < 0) {
            carouselIndex = totalSlides - 1;
        }

        const slideWidth = carousel.children[0].offsetWidth;
        carousel.style.transform = 'translateX(' + (-slideWidth * carouselIndex) + 'px)';
    }

});


// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Search functionality
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.getElementById('search-input');

    searchButton.addEventListener('click', function() {
        const searchText = searchInput.value;
        alert("Search for: " + searchText); // Replace with actual search functionality
    });

    // Modal functionality
    const modal = document.getElementById("getStartedModal");
    const btn = document.querySelector(".cta-button");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Handle the form submission in the modal
    const form = document.getElementById("getStartedForm");
    form.onsubmit = function(e) {
        e.preventDefault();
        alert('Form submitted!'); // Replace with actual form submission functionality
        modal.style.display = "none";
    }

    // Carousel functionality
    const carousel = document.querySelector('.carousel-slide');
    let carouselIndex = 0;

    document.querySelector('.carousel-btn.left').addEventListener('click', function() {
        moveSlide(-1);
    });

    document.querySelector('.carousel-btn.right').addEventListener('click', function() {
        moveSlide(1);
    });

    function moveSlide(direction) {
        const totalSlides = carousel.children.length;
        carouselIndex += direction;

        if (carouselIndex >= totalSlides) {
            carouselIndex = 0;
        } else if (carouselIndex < 0) {
            carouselIndex = totalSlides - 1;
        }

        const slideWidth = carousel.children[0].offsetWidth;
        carousel.style.transform = 'translateX(' + (-slideWidth * carouselIndex) + 'px)';
    }

});



document.addEventListener('DOMContentLoaded', function() {
    const courseLinks = document.querySelectorAll('.course-card .button');
    const videoLinks = document.querySelectorAll('.video-card iframe');

    courseLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert("Course details coming soon!");
        });
    });

    videoLinks.forEach(iframe => {
        iframe.addEventListener('click', () => {
            alert('Launching video lecture...');
        });
    });
});



// faq

document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
                closeAllOtherAnswers(this);
            }
        });
    });

    function closeAllOtherAnswers(activeQuestion) {
        faqQuestions.forEach(question => {
            if (question !== activeQuestion) {
                question.nextElementSibling.style.display = 'none';
            }
        });
    }
});

// support functionality


function openChat() {
    // Placeholder for chat functionality
    toggleChatbot();
    
    
    // This would normally initiate a chat widget or redirect to a chat interface
}

function openMail() {
    const email = 'example@example.com'; // Replace with your recipient's email address
    const subject = 'Subject of the email'; // Replace with the desired subject
    const body = 'Body of the email'; // Replace with the desired email body text

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the default email client
    window.open(mailtoLink);
}

document.addEventListener('DOMContentLoaded', function() {
    // Chatbot functionality
    window.toggleChatbot = function() {
        const chatbot = document.getElementById('chatbot');
        const body = chatbot.querySelector('.chatbot-body');
        const input = chatbot.querySelector('.chatbot-input');
        const toggle = chatbot.querySelector('.chatbot-toggle');

        if (body.style.display === 'none') {
            body.style.display = 'block';
            input.style.display = 'block';
            toggle.textContent = '-';
        } else {
            body.style.display = 'none';
            input.style.display = 'none';
            toggle.textContent = '+';
        }
    };

    window.sendMessage = function() {
        const inputField = document.querySelector('.chatbot-input input');
        const message = inputField.value;
        if (message) {
            const chatBody = document.querySelector('.chatbot-body');
            const newMessage = document.createElement('p');
            newMessage.textContent = `You: ${message}`;
            chatBody.appendChild(newMessage);
            inputField.value = '';
    
            // Simulate chatbot responses based on user input
            setTimeout(() => {
                let botMessage = '';
                switch (message.toLowerCase()) {
                    case 'hello':
                        botMessage = `VaSid: Hi there! How can I assist you today?`;
                        break;
                    case 'how do I place an order?':
                        botMessage = `VaSid: To place an order, follow these steps...`;
                        break;
                    case 'what are the trading hours?':
                        botMessage = `VaSid: Our trading hours are...`;
                        break;
                    case 'account balance':
                        botMessage = `VaSid: You can check your account balance by...`;
                        break;
                    default:
                        botMessage = `VaSid: I'm sorry, I didn't understand your question. Can you please rephrase it?`;
                        break;
                }
                const botResponse = document.createElement('p');
                botResponse.textContent = botMessage;
                chatBody.appendChild(botResponse);
            }, 1000);
        }
    };
    
    toggleChatbot(); // Initialize chatbot in closed state
});

window.sendMessage = function() {
    // ... (your existing sendMessage function code)
    // After appending the user and chatbot messages, scroll to the bottom
    chatBody.scrollTop = chatBody.scrollHeight;
};

function clearChat() {
    const chatBody = document.querySelector('.chatbot-body');
    chatBody.innerHTML = ''; // Clear the chat by removing all child elements
}

function closeChat() {
    const chatBody = document.querySelector('.chatbot-body');
    chatBody.style.display = 'none'; // Hide the chatbot
}





// Add any other support functionalities as required

// demo 

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('demoLoginForm');
    const sandboxEnv = document.querySelector('.sandbox-environment');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Login successful!');
        loginForm.style.display = 'none';
        sandboxEnv.style.display = 'block';
    });

    // Additional JavaScript for sandbox interactions
    // ... Existing functionality ...

function toggleInfo(button) {
    var infoContent = button.nextElementSibling;
    infoContent.style.display = infoContent.style.display === 'none' ? 'block' : 'none';
    button.textContent = infoContent.style.display === 'block' ? 'Show Less' : 'Learn More';
}


    document.addEventListener('DOMContentLoaded', function() {
        // Existing login functionality...
        // Simulate updating market statistics
        setInterval(function() {
            document.querySelectorAll('.market-stats .stat-item strong').forEach(function(item) {
                // This is just a placeholder. Real data would come from a financial data API.
                var currentValue = parseFloat(item.innerText.replace(',', ''));
                var change = (Math.random() - 0.5) * 10;
                var newValue = currentValue + change;
                item.innerText = newValue.toFixed(2);
                item.nextElementSibling.innerText = (change >= 0 ? "+" : "") + change.toFixed(2) + "%";
                item.nextElementSibling.className = "change " + (change >= 0 ? "positive" : "negative");
            });
        }, 5000); // Update every 5 seconds
    });
    
    
});


// new code js

document.addEventListener('DOMContentLoaded', function() {
    // Get the popup and its elements
    var popup = document.getElementById("popup");
    var btn = document.getElementById("Buy/Sell");
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the popup 
    btn.onclick = function() {
        popup.style.display = "block";
    }

    // When the user clicks on <span> (x), close the popup
    span.onclick = function() {
        popup.style.display = "none";
    }

    // When the user clicks anywhere outside of the popup, close it
    window.onclick = function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    }
});