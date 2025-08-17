// ANSI colors & styles
const colors = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  italic: "\x1b[3m",
  underline: "\x1b[4m",

  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",

  brightBlack: "\x1b[90m",
  brightRed: "\x1b[91m",
  brightGreen: "\x1b[92m",
  brightYellow: "\x1b[93m",
  brightBlue: "\x1b[94m",
  brightMagenta: "\x1b[95m",
  brightCyan: "\x1b[96m",
  brightWhite: "\x1b[97m",

  // Extra background colors
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m",
};

// Timestamp helper
function timestamp() {
  return new Date().toISOString();
}

// Logger object with many styles
export const log = {
  success: (msg) => console.log(`${colors.green}✅ [SUCCESS] ${timestamp()} - ${msg}${colors.reset}`),
  error: (msg) => console.log(`${colors.red}❌ [ERROR] ${timestamp()} - ${msg}${colors.reset}`),
  warning: (msg) => console.log(`${colors.yellow}⚠️  [WARNING] ${timestamp()} - ${msg}${colors.reset}`),
  info: (msg) => console.log(`${colors.blue}ℹ️  [INFO] ${timestamp()} - ${msg}${colors.reset}`),
  debug: (msg) => console.log(`${colors.magenta}🐛 [DEBUG] ${timestamp()} - ${msg}${colors.reset}`),

  // Process logs
  start: (msg) => console.log(`${colors.cyan}🚀 [START] ${timestamp()} - ${msg}${colors.reset}`),
  stop: (msg) => console.log(`${colors.brightRed}🛑 [STOP] ${timestamp()} - ${msg}${colors.reset}`),
  complete: (msg) => console.log(`${colors.brightGreen}🏁 [COMPLETE] ${timestamp()} - ${msg}${colors.reset}`),
  loading: (msg) => console.log(`${colors.yellow}⏳ [LOADING] ${timestamp()} - ${msg}${colors.reset}`),
  update: (msg) => console.log(`${colors.brightBlue}🔄 [UPDATE] ${timestamp()} - ${msg}${colors.reset}`),

  // File & data logs
  save: (msg) => console.log(`${colors.brightBlue}💾 [SAVE] ${timestamp()} - ${msg}${colors.reset}`),
  delete: (msg) => console.log(`${colors.brightRed}🗑️ [DELETE] ${timestamp()} - ${msg}${colors.reset}`),
  upload: (msg) => console.log(`${colors.brightMagenta}📤 [UPLOAD] ${timestamp()} - ${msg}${colors.reset}`),
  download: (msg) => console.log(`${colors.brightCyan}📥 [DOWNLOAD] ${timestamp()} - ${msg}${colors.reset}`),
  search: (msg) => console.log(`${colors.brightYellow}🔍 [SEARCH] ${timestamp()} - ${msg}${colors.reset}`),

  // Network & system
  connect: (msg) => console.log(`${colors.green}🔌 [CONNECT] ${timestamp()} - ${msg}${colors.reset}`),
  disconnect: (msg) => console.log(`${colors.red}❎ [DISCONNECT] ${timestamp()} - ${msg}${colors.reset}`),
  retry: (msg) => console.log(`${colors.yellow}🔁 [RETRY] ${timestamp()} - ${msg}${colors.reset}`),
  security: (msg) => console.log(`${colors.brightMagenta}🔒 [SECURITY] ${timestamp()} - ${msg}${colors.reset}`),
  unlock: (msg) => console.log(`${colors.brightGreen}🔓 [UNLOCK] ${timestamp()} - ${msg}${colors.reset}`),
  network: (msg) => console.log(`${colors.cyan}🌐 [NETWORK] ${timestamp()} - ${msg}${colors.reset}`),

  // System states
  crash: (msg) => console.log(`${colors.bgRed}${colors.white}💥 [CRASH] ${timestamp()} - ${msg}${colors.reset}`),
  successAlt: (msg) => console.log(`${colors.bgGreen}${colors.white}🎉 [DONE] ${timestamp()} - ${msg}${colors.reset}`),
  pending: (msg) => console.log(`${colors.brightYellow}🕒 [PENDING] ${timestamp()} - ${msg}${colors.reset}`),

  // Custom logger
  custom: (emoji, color, label, msg) =>
    console.log(`${colors[color] || colors.reset}${emoji} [${label.toUpperCase()}] ${timestamp()} - ${msg}${colors.reset}`)
};
