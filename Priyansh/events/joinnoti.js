module.exports.config = {
	name: "join",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "Leiam Nash",
	description: "Notify bots or people entering the group",
	dependencies: {
		"fs-extra": ""
	}
};
module.exports.run = async function({ api, event }) {

	const request = require("request");
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`𝗕𝗢𝗧 ${global.config.BOTNAME} 【 ${global.config.PREFIX} 】`, threadID, api.getCurrentUserID());
		return api.sendMessage(`${global.config.BOTNAME} 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗰𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱\n𝗻𝗼𝘄 𝘆𝗼𝘂𝗿 𝗴𝗿𝗼𝘂𝗽 𝗰𝗮𝗻 𝘂𝘀𝗲 𝗯𝗼𝘁\n\n𝗽𝗿𝗲𝗳𝗶𝘅: ${global.config.PREFIX} \n ${global.config.PREFIX} HELP FOR LIST COMMAND`, threadID);
	}
	else {
		try {
    const request = require("request");
			const fs = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			
			var mentions = [], nameArray = [], memLength = [], i = 0;
			
    let addedParticipants1 = event.logMessageData.addedParticipants;
        for (let newParticipant of addedParticipants1) {
   let userID = newParticipant.userFbId
api.getUserInfo(parseInt(userID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var userName = data[obj].name.replace("@", "");     	if (userID !== api.getCurrentUserID()) {  
    
				nameArray.push(userName);
				mentions.push({ tag: userName, id: userID, fromIndex: 0 });
      
				memLength.push(participantIDs.length - i++);
memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "𝐇𝐄𝐋𝐋𝐎 {uName}\n 𝐖𝐄𝐋𝐂𝐎𝐌 to\n{threadName}\n𝐘𝐎𝐔'𝐑𝐄 𝐓𝐇𝐄 {soThanhVien} 𝐓𝐇 𝐌𝐄𝐍𝐁𝐀𝐑 𝐎𝐍 𝐓𝐇𝐈𝐒 𝐆𝐑𝐎𝐔𝐏 𝐏𝐋𝐄𝐒𝐒 𝐄𝐍𝐉𝐎𝐘\n𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍 𝐌𝐈𝐀𝐍 𝐀𝐌𝐈𝐑" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{uName}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'you' : 'Friend')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);			

      var link = [
"https://i.imgur.com/MgljdD1.gif",
"",
"",
"",
      ];
				var callback = () => api.sendMessage({ body: msg, attachment: fs.createReadStream(__dirname + "/cache/leiamnashJ.gif"), mentions }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashJ.gif"));
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashJ.gif")).on("close", () => callback());       
      	    }
})
        }
    }catch (err) {
            return console.log("ERROR: "+err);
    }
	}
  }