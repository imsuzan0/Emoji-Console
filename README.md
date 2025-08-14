# Log Emoji 🎉

**Logmoji** is a lightweight, zero-dependency Node.js logger that makes your console output **fun, colorful, and easy to read** using emojis + ANSI colors. Perfect for CLI tools, backend logs, or just making debugging less boring!

---

## ✨ Features

- 🎨 **20+ color options** (ANSI escape codes, no dependencies)
- 🚀 **15+ predefined log types** (`success`, `error`, `warning`, `info`, `debug`, `start`, `stop`, `update`, `complete`, `loading`, `upload`, `download`, `connect`, `disconnect`, `search`, `save`, `delete`)
- 🌟 **Custom log support** — choose your own emoji, color, and label
- 🕒 Automatic timestamps for every log
- ⚡ Tiny and dependency-free

---

## 📦 Installation

````bash
npm install @imsuzan0/log-emoji
````


# 🚀 Usage

```javascript
import { log } from "@imsuzan0/log-emoji";

// Predefined log types
log.success("Server started successfully");
log.error("Database connection failed");
log.warning("Low disk space");
log.info("Listening on port 3000");
log.debug("User is authenticated");
log.start("Deployment initiated");
log.update("Pulling latest changes");
log.complete("Deployment successful");
log.loading("Fetching data...");
log.upload("Uploading file to server...");
log.download("Downloading report...");
log.connect("Connected to database");
log.disconnect("Disconnected from server");
log.search("Looking for config file...");
log.save("Configuration saved");
log.delete("Old logs removed");

//💻 Custom logs
log.custom("🌟", "brightMagenta", "HIGHLIGHT", "Special log message");
log.custom("🔥", "brightRed", "ALERT", "Server CPU usage is high!");
````

# 🖌️ Available Colors

- **Basic Colors:** `black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`
- **Bright Colors:** `brightBlack`, `brightRed`, `brightGreen`, `brightYellow`, `brightBlue`, `brightMagenta`, `brightCyan`, `brightWhite`

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
