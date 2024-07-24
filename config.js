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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/cdbaf12b1b80054e8177a.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PSUHAIL_07_53_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA4MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgODAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUyLFxuICAgICAgICAxOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMixcbiAgICAgICAgOTMsXG4gICAgICAgIDc1LFxuICAgICAgICA5NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDg5LFxuICAgICAgICA1MixcbiAgICAgICAgODAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDUsXG4gICAgICAgIDkyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1LFxuICAgICAgICA2MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDk0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NSxcbiAgICAgICAgODYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDkzLFxuICAgICAgICA1OSxcbiAgICAgICAgMixcbiAgICAgICAgODYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MyxcbiAgICAgICAgOTksXG4gICAgICAgIDI5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjU1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzksXG4gICAgICAgIDM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU5LFxuICAgICAgICA3LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvY2EwSWphd0JjdjlGWWVRbXd5aDAyZnNqNGNsb3c1cEJOQ1QyZUF3RHlRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzdlZyWkNXLVQzT3oxTXcwX3RMN0V3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjg1ZDZiMmI4LWMyZjgtNDMzZC05ZGJlLWM4YTg5ZGEzYzVkZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjgsXG4gICAgICA4NCxcbiAgICAgIDMwLFxuICAgICAgMTcxLFxuICAgICAgNzksXG4gICAgICAxMTIsXG4gICAgICA0MCxcbiAgICAgIDI0MSxcbiAgICAgIDE5NCxcbiAgICAgIDE1LFxuICAgICAgMTAwLFxuICAgICAgMjI0LFxuICAgICAgNTcsXG4gICAgICAxOTgsXG4gICAgICA2MixcbiAgICAgIDEwLFxuICAgICAgNTEsXG4gICAgICA1OSxcbiAgICAgIDIxMyxcbiAgICAgIDIxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTAsXG4gICAgICAxMDEsXG4gICAgICAxNDksXG4gICAgICAxMDQsXG4gICAgICAyNDcsXG4gICAgICAzNyxcbiAgICAgIDI0MCxcbiAgICAgIDE2NixcbiAgICAgIDE0NyxcbiAgICAgIDYzLFxuICAgICAgMjA5LFxuICAgICAgMTUzLFxuICAgICAgMTEyLFxuICAgICAgNjEsXG4gICAgICA2MixcbiAgICAgIDE5OSxcbiAgICAgIDExLFxuICAgICAgMjQ0LFxuICAgICAgODMsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRzRKOEdaV1ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA3OTA1OTk4MzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmrPwnZCSIPCdmqvwnZq08J2QhvCdmrXwnZCLXCIsXG4gICAgXCJsaWRcIjogXCIyMTk2OTE3NzE2MTg0MDoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOblc3d2tRN3Z6eXRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImM2anBXQUxXNUJGNER3OEU2V1pSZ1VkL3J5bU1Fc1ZoMXUvWEZvZGlSSGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTzRxU203YTVCN1cwcWlPemI3MWNCRkdRRnNRRGczblViMnVhZDZoN2xWaU5UR3A0UHFBT1JvN1RkRXZVN1ZIdk52YXpUUHFwRENhOENQbTVlVUQyREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY1NQYVBxalRHUjQ2STY2NkRLdEVHck1QYVNiQ1BOcWFOeEFaaVFsZXIwZ2E4UkhRUHdYWTVycnZLWHl1RUtubW5vWk5pRFNBYkMxdmhiSmRXUE1MaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDc5MDU5OTgzOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1NDg0MDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQSmFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBKYS5qc29uIjogIntcImtleURhdGFcIjpcImlYeUN5Vm1XN3RVVUJXYXpnaDlOZnBuQVdCMzZXcm8wTXp3OTNHSmhuS2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA3MDQwODcsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==UT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Ansha-Md",
  ownername:process.env.OWNER_NAME|| "Angel",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
