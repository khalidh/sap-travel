import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { dirname, extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const host = "127.0.0.1";
const preferredPort = Number.parseInt(process.env.PORT ?? "8080", 10);
const maxAttempts = 20;

const contentTypes = {
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".mjs": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".xml": "application/xml; charset=utf-8",
    ".properties": "text/plain; charset=utf-8",
    ".txt": "text/plain; charset=utf-8",
    ".md": "text/markdown; charset=utf-8"
};

function resolveRequestPath(url) {
    const requestPath = decodeURIComponent(new URL(url, `http://${host}`).pathname);
    const relativePath = requestPath === "/" ? "/index.html" : requestPath;
    const normalizedPath = normalize(relativePath).replace(/^(\.\.[/\\])+/, "");

    return join(root, normalizedPath);
}

function createStaticServer() {
    return createServer((request, response) => {
        const filePath = resolveRequestPath(request.url ?? "/");

        if (!filePath.startsWith(root) || !existsSync(filePath) || !statSync(filePath).isFile()) {
            response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
            response.end("Not found");
            return;
        }

        response.writeHead(200, {
            "Content-Type": contentTypes[extname(filePath)] ?? "application/octet-stream"
        });
        createReadStream(filePath).pipe(response);
    });
}

async function listenOnAvailablePort() {
    for (let offset = 0; offset < maxAttempts; offset += 1) {
        const port = preferredPort + offset;
        const server = createStaticServer();

        try {
            await new Promise((resolve, reject) => {
                server.once("error", reject);
                server.listen(port, host, resolve);
            });

            if (port !== preferredPort) {
                console.log(`Port ${preferredPort} is already in use. Using ${port} instead.`);
            }

            console.log(`SAP Travel running at http://localhost:${port}`);
            return;
        } catch (error) {
            server.close();

            if (error.code !== "EADDRINUSE") {
                throw error;
            }
        }
    }

    throw new Error(`No available port found from ${preferredPort} to ${preferredPort + maxAttempts - 1}.`);
}

listenOnAvailablePort().catch((error) => {
    console.error(error.message);
    process.exit(1);
});
