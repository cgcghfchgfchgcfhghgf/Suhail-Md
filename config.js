const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94715898396";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_41_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxODQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDkyLFxuICAgICAgICA4NixcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDksXG4gICAgICAgIDg1LFxuICAgICAgICAxMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDM2LFxuICAgICAgICA2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgODEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxODksXG4gICAgICAgIDEwOSxcbiAgICAgICAgODksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODksXG4gICAgICAgIDcyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY4LFxuICAgICAgICA1MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyLFxuICAgICAgICA2NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMixcbiAgICAgICAgNDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICA0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2MixcbiAgICAgICAgMTcyLFxuICAgICAgICA2MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5rY0hhTnQwTldmd2pUMWZkQUs5em5KalhkcEtqZ3hvYUtnS1BjSjE3N2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInV5cGxfc3AtUUFHaWI1TkVDS0RxZlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2I3YzQyYWItMGMzNi00ZDg4LWE0MmYtZDU0NzJjMWM1NzQyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNSxcbiAgICAgIDI0MixcbiAgICAgIDE0NSxcbiAgICAgIDMyLFxuICAgICAgMTcwLFxuICAgICAgNjgsXG4gICAgICAxNDAsXG4gICAgICAyMCxcbiAgICAgIDEwMixcbiAgICAgIDE0OCxcbiAgICAgIDUwLFxuICAgICAgNTIsXG4gICAgICA5OSxcbiAgICAgIDI0NCxcbiAgICAgIDExNixcbiAgICAgIDI0NyxcbiAgICAgIDE0MCxcbiAgICAgIDEzLFxuICAgICAgMjU1LFxuICAgICAgMTU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OSxcbiAgICAgIDI0LFxuICAgICAgMTM3LFxuICAgICAgMTQ4LFxuICAgICAgMTUzLFxuICAgICAgNDAsXG4gICAgICAyMjYsXG4gICAgICAxMTEsXG4gICAgICA5MCxcbiAgICAgIDE2LFxuICAgICAgMjM3LFxuICAgICAgMTkxLFxuICAgICAgMTQyLFxuICAgICAgNDMsXG4gICAgICAyMSxcbiAgICAgIDQsXG4gICAgICA0LFxuICAgICAgMTcwLFxuICAgICAgMjAxLFxuICAgICAgMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMzI3RUpaN0NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzE1ODk4Mzk2OjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODIzMjMzNzUxNDY3OTo0M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJWDNyTDRHRUtpL3dMVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIndDbkVBWi9vcit2TnNFdTRJckp3RytHamZ2ajR1MUE0azNEZ25za0NyVms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMy9STCtxTUJwMndUQnVibE94WWsxaWJSK2ZTQ1d2RHlqeEY1US9QYVByUFA2aWVsRG9UbERCU3R3OWN3UzQ4b2tGcVM4OE55VC9vRG9sa1MwUitJQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNjV6bE03ZW9YL0NvSlhhRzVnbUJIRjhWNWprbkdFWDhFQWJBYzBjcUlLekFxYmR4VHg1Qks2NFlhVkNTeXA1a3JPMzN2YXJtNGp0L3VYMXdYYnBTalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MTU4OTgzOTY6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyODE4NDc0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
