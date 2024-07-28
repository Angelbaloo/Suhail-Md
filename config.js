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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // SUHAIL_19_13_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA3LFxuICAgICAgICA0NixcbiAgICAgICAgODgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDksXG4gICAgICAgIDI5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMixcbiAgICAgICAgMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAwLFxuICAgICAgICAxMjksXG4gICAgICAgIDQzLFxuICAgICAgICAwLFxuICAgICAgICA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0LFxuICAgICAgICA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMixcbiAgICAgICAgMjAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYzLFxuICAgICAgICA5NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA1LFxuICAgICAgICA5MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNixcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDYxLFxuICAgICAgICA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzLFxuICAgICAgICA4MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg0LFxuICAgICAgICA5MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTA2LFxuICAgICAgICA3MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxODQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMixcbiAgICAgICAgODgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjcsXG4gICAgICAgIDQsXG4gICAgICAgIDE3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDczLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDU1LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTksXG4gICAgICAgIDUwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NixcbiAgICAgICAgNTUsXG4gICAgICAgIDYwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDY4LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmUVZtUk50eGFMWUw3ekZxbEM2NGlDczhIU05NaUgveHp6eWQ4WmIwWXJRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3OTA1OTk4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEJCM0IyN0I2QzEwMEJBQjc4NjBCRENGNkMzMDA4MjhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMTkzOTgzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlVGbkMweEw5U1JHTDBJcUdnYllIR1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDMyOWE3MzktYWM2Yy00MGYyLWFjOWQtYmYzNmY2ZTJkNGQyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI4LFxuICAgICAgMTMsXG4gICAgICAxMjgsXG4gICAgICA2OCxcbiAgICAgIDc0LFxuICAgICAgMjQ1LFxuICAgICAgMjQ2LFxuICAgICAgMjU1LFxuICAgICAgNTMsXG4gICAgICAyMTYsXG4gICAgICAyMixcbiAgICAgIDE2MCxcbiAgICAgIDcsXG4gICAgICAyMyxcbiAgICAgIDE2LFxuICAgICAgMTEzLFxuICAgICAgOTYsXG4gICAgICA4NSxcbiAgICAgIDIyMSxcbiAgICAgIDIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM3LFxuICAgICAgMixcbiAgICAgIDE3NSxcbiAgICAgIDg4LFxuICAgICAgODUsXG4gICAgICAxMDAsXG4gICAgICAxNzEsXG4gICAgICAxMTQsXG4gICAgICA2MyxcbiAgICAgIDIzMixcbiAgICAgIDE4MyxcbiAgICAgIDIzLFxuICAgICAgNTAsXG4gICAgICAxMzQsXG4gICAgICAyNDUsXG4gICAgICAyMDQsXG4gICAgICAyMixcbiAgICAgIDI0MixcbiAgICAgIDksXG4gICAgICAyMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSkRWOUJIWTlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA3OTA1OTk4MzoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmrPwnZCSIPCdmqvwnZq08J2QhvCdmrXwnZCLXCIsXG4gICAgXCJsaWRcIjogXCIyMTk2OTE3NzE2MTg0MDoyNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOdlc3d2tRdHJDYXRRWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImM2anBXQUxXNUJGNER3OEU2V1pSZ1VkL3J5bU1Fc1ZoMXUvWEZvZGlSSGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicmpJcytXdXd5MjhIY3lOa25BYm5uSk5RaWJMTkhkekZkTE52Tlp1dTY4cmR5WkNraUh1OTVESVJaRnlOenJlaEhPaENKTDZMQ3MrZjU2dUlMRkxGQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicU1kM05qNktZR2dwZzhMUWE2am1US3ZpdDdHckNQWENkQkJJSTYyWkhmakF5SnV5WG9jSDN6MStWVG9FYUNGcWRzT3drbEJuYThyeVRlRnhteXZlQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDc5MDU5OTgzOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxOTM5NzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQSnFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBKcS5qc29uIjogIntcImtleURhdGFcIjpcIlZMTmNXT1A1ZXg0MGc1UDRkVFlycmNJN0tEN0o0eDArcnBTa0NjQjVtRVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA3MDQwODksXCJjdXJyZW50SW5kZXhcIjo5LFwiZGV2aWNlSW5kZXhlc1wiOlswLDldfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==


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
