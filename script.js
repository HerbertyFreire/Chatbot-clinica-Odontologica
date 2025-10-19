document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    // Cria um ID de sessão único para este usuário e o armazena
    let sessionId = crypto.randomUUID();

    // Função para adicionar mensagem na tela
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${sender}-message`);
        // Converte quebras de linha \n em tags <br> para exibição correta
        messageDiv.innerHTML = text.replace(/\n/g, '<br>');
        chatBox.appendChild(messageDiv);
        // Rola para a mensagem mais recente
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Função para enviar mensagem para o backend
    async function sendMessage() {
        const messageText = userInput.value.trim();
        if (messageText === '') return;

        addMessage(messageText, 'user');
        userInput.value = '';

        try {
            const response = await fetch('http://localhost:3000/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // AGORA ENVIAMOS O ID DA SESSÃO JUNTO COM A MENSAGEM
                body: JSON.stringify({ message: messageText, sessionId: sessionId }),
            });

            const data = await response.json();
            addMessage(data.reply, 'bot');

        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
            addMessage('Desculpe, estou com problemas para me conectar. Tente novamente mais tarde.', 'bot');
        }
    }

    // Event listeners
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Mensagem de boas-vindas inicial do bot (esta não vai para o Dialogflow, é só local)
    addMessage('Olá! 😊 Sou seu assistente virtual da Clínica Sorriso Saudável! Como posso ajudar?', 'bot');
});