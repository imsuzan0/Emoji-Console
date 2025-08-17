# Log Emoji 🎉

**Logmoji** is a lightweight, zero-dependency Node.js logger that makes your console output **fun, colorful, and easy to read** using emojis + ANSI colors. Perfect for CLI tools, backend logs, or just making debugging less boring!

---

## ✨ Features

- 🎨 **40+ color & style options** (basic, bright, and background ANSI colors, no dependencies)
- 🚀 **30+ predefined log types**:  
  - **Standard:** `success`, `error`, `warning`, `info`, `debug`  
  - **Process:** `start`, `stop`, `complete`, `loading`, `update`, `pending`, `successAlt`  
  - **File & Data:** `save`, `delete`, `upload`, `download`, `search`  
  - **Network & System:** `connect`, `disconnect`, `retry`, `security`, `unlock`, `network`, `crash`
- 🌟 **Custom log support** — choose your own emoji, color, label, and message
- 🕒 Automatic timestamps for every log
- ⚡ Tiny, dependency-free, and colorful


---

## 📦 Installation

````bash
npm install @imsuzan0/log-emoji
````


# 🚀 Usage

```javascript
import { log } from "@imsuzan0/log-emoji";

// Standard logs
log.success("Server started successfully");
log.error("Database connection failed");
log.warning("Low disk space");
log.info("Listening on port 3000");
log.debug("User is authenticated");

// Process logs
log.start("Deployment initiated");
log.stop("Deployment halted");
log.complete("Deployment successful");
log.loading("Fetching data...");
log.update("Pulling latest changes");
log.pending("Waiting for approval");
log.successAlt("Task completed");

// File & data logs
log.save("Configuration saved");
log.delete("Old logs removed");
log.upload("Uploading file to server...");
log.download("Downloading report...");
log.search("Looking for config file...");

// Network & system logs
log.connect("Connected to database");
log.disconnect("Disconnected from server");
log.retry("Retrying request...");
log.security("Security scan complete");
log.unlock("User account unlocked");
log.network("Network check passed");
log.crash("Server crashed unexpectedly!");

//💻 Custom logs
log.custom("🌟", "brightMagenta", "HIGHLIGHT", "Special log message");
log.custom("🔥", "brightRed", "ALERT", "Server CPU usage is high!");
````

## 🖌️ Available Colors

- **Basic Colors:** `black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`
- **Bright Colors:** `brightBlack`, `brightRed`, `brightGreen`, `brightYellow`, `brightBlue`, `brightMagenta`, `brightCyan`, `brightWhite`
- **Background Colors:** `bgRed`, `bgGreen`, `bgYellow`, `bgBlue`, `bgMagenta`, `bgCyan`, `bgWhite`


# 💻 Example Output
![Screenshot](https://i.postimg.cc/tCCMTFrs/Screenshot-2025-08-14-144733.png)

# 🔧 Custom Log

```javascript
log.custom(emoji, color, label, message);
```

- emoji → Your chosen emoji
- color → Any color from the list above
- label → Label to appear in the log
- message → Your log message
