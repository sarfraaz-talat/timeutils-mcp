#!/usr/bin/env node
const { McpServer } = require("@modelcontextprotocol/sdk/server/mcp.js");
const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio.js");

const server = new McpServer({
  name: "TimeUtilsMCP",
  version: "0.0.5",
  capabilities: { tools: {} }
});

// Basic console log so you know it started
console.log("[TimeUtilsMCP] Starting MCP server...");

// Define tools
server.tool("getTime", "Returns current local time", async (input) => {
  const now = new Date().toLocaleTimeString();
  console.log(`[TimeUtilsMCP] getTime called → ${now}`);
  return { content: [{ type: "text", text: now }] };
});

server.tool("getDate", "Returns current local date", async (input) => {
  const today = new Date().toLocaleDateString();
  console.log(`[TimeUtilsMCP] getDate called → ${today}`);
  return { content: [{ type: "text", text: today }] };
});

// Connect via stdio
const transport = new StdioServerTransport();

server.connect(transport)
  .then(() => console.log("[TimeUtilsMCP] Server running via stdio"))
  .catch((err) => {
    console.error("[TimeUtilsMCP] Failed to start:", err);
    process.exit(1);
  });
