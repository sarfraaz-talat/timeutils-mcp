# 🕰️ TimeUtilsMCP
### An MCP Server which tells time because LLMS are wayyy ahead of it

The **TimeUtilsMCP** server is a **Model Context Protocol (MCP)** implementation designed to solve one of the most common limitations of Large Language Models (LLMs): providing accurate, real-time time and date information.

This server exposes two highly useful tools to the Gemini CLI:

  * **`getTime`**: Fetches the current time.
  * **`getDate`**: Fetches the current date.

## ⚙️ Setup & Installation

This section details the one-time setup required to integrate the **TimeUtilsMCP** server from this private GitHub repository into your local Gemini CLI environment.

### 1\. Prerequisites

  * **Access:** Your **SSH key** must be authorized to access this private repository (`sarfraaz-talat/timeutils-mcp.git`).
  * **Tools:** **Node.js**, **npm**, and the **Gemini CLI** are required.

### 2\. Configuration Command

Run this single command to configure the MCP server in your Gemini CLI settings. This leverages `npx` to fetch and run the server code directly from the Git URL every time the tool is called (using the efficient **Stdio** transport).

```bash
gemini mcp add TimeUtilsMCP \
  npx \
  --transport stdio \
  -- \
  git+ssh://git@github.com:sarfraaz-talat/timeutils-mcp.git \
  --timeutils-mcp \
  --mcp-transport=stdio
```

### 3\. Verification

Once configured, start the Gemini CLI and confirm the connection status:

1.  **Start CLI:** `gemini`
2.  **Verify:** Type `/mcp` and check that **TimeUtilsMCP** is listed as **🟢 Ready**.

## 🧪 Usage Examples

Prompt the model to use the tool naturally:

| Tool | Prompt Example |
| :--- | :--- |
| **`getTime`** | "What time it is right now?" |
| **`getDate`** | "What day it is today?" |

The actual use of this tool is when the agent/cli is working with complex issue which requires current time information. For ex. When ts working on a task to create a meeting 3 days from now, it needs to know current date/time. So it would be actually more useful in those context, we are quite aware that no one is going to come to llms asking what time it is. It saves you lot of `today is "so & so"` in your prompts when you are working with time sensitive tasks.

## 🧹 Cleanup

To remove the server configuration at any time:

```bash
gemini mcp remove TimeUtilsMCP
```