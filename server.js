const express = require('express');
const cors = require('cors');
const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');

// --- CONFIGURAÇÃO ---
const app = express();
app.use(cors());
app.use(express.json());

// Seu Project ID (está correto)
const projectId = 'chatbot-clinica-sa-de-ewqm';

// Crie o cliente de sessão do Dialogflow
const sessionClient = new dialogflow.SessionsClient({
    // ESTA É A FORMA CORRETA:
    // Ele vai procurar o arquivo 'credentials.json' na mesma pasta do server.js
    keyFilename: './credentials.json'
});
// --------------------

// Endpoint que recebe a mensagem do usuário
app.post('/send-message', async (req, res) => {
    const { message, sessionId } = req.body;
    const finalSessionId = sessionId || uuid.v4();

    const sessionPath = sessionClient.projectAgentSessionPath(projectId, finalSessionId);

    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: message,
                languageCode: 'pt-br',
            },
        },
    };

    try {
        const responses = await sessionClient.detectIntent(request);
        const result = responses[0].queryResult;
        res.send({ reply: result.fulfillmentText });
    } catch (error) {
        console.error('ERRO NO DIALOGFLOW:', error);
        res.status(500).send({ error: 'Erro ao conectar com o Dialogflow' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});