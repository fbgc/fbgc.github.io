const navLinks = document.querySelector('.nav-links')
const openButton = document.querySelector('.fa-bars')
const closeButton = document.querySelector('.fa-xmark')

// s.js

function x(){
    navLinks.addEventListener('click',(e)=>{
        navLinks.style.right = '-200px'
    })
    
    
    openButton.addEventListener('click', () => {
        
        navLinks.style.right = '0'
        
    });
    
    closeButton.addEventListener('click',()=>{
        
        navLinks.style.right = '-200px'
    })
}

x()


async function sendDataToBot(name) {
    const botToken = '6786254564:AAFCC9_iPAGM_11C8h-ke0K8xWrHyYH09p8'; // Replace with your Telegram bot token
    const chatIds = ['5356385703', '6746320410']; // Replace with your Telegram chat IDs
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    for (const chatId of chatIds) {
        const data = {
            chat_id: chatId,
            text: `Contact with this person: ${name}`
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log(`Message sent to chat ID: ${chatId}`);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            throw error;
        }
    }

    return 'Message sent successfully';
}

document.querySelector('#contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const link = document.querySelector('#link').value.trim();

    if (link === '') {
        alert('Enter any link to contact');
    } else {
        try {
            const result = await sendDataToBot(link);
            alert(result);
            window.location.reload();
        } catch (error) {
            // Handle error if message sending failed
            // console.error(error);
            alert(error)
            alert('Try again')
            window.location.reload();
        }
    }
});
