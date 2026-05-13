import fs from 'node:fs/promises';
import path from 'node:path';
import CONSTANTS from '../../bootstrap/config.js';

export default async function EnvironmentController(request, response) {
    try {
        // Verificar se está rodando no Docker
        const isDocker = process.env.IS_DOCKER === 'true';

        let environmentData;

        if (isDocker) {
            // Rodando no Docker
            environmentData = {
                environment: "docker",
                database: {
                    host: "postgres_host",
                    port: 5432
                },
                web: {
                    host: "nodeweb_host",
                    port: 8080
                }
            };
        } else {
            // Rodando localmente
            environmentData = {
                environment: "local",
                database: {
                    host: process.env.POSTGRES_HOST || "localhost",
                    port: parseInt(process.env.POSTGRES_PORT) || 6789
                },
                web: {
                    host: "localhost",
                    port: parseInt(process.env.NODE_WEB_PORT) || 3000
                }
            };
        }

        response.json(environmentData);
    } catch (error) {
        response.status(500).json({ error: "Erro ao obter informações do ambiente" });
    }
}