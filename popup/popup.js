chrome.runtime.sendMessage({command: "getStoredValues"});
chrome.runtime.onMessage.addListener(incomingMessages);

document.addEventListener("DOMContentLoaded", function(event) {
	
	//Verified
	//document.getElementById('groupUnassigned').addEventListener("click", groupUnassigned);


});

function incomingMessages(message, sender, sendResponse) {

	if(message.subject == "hereAreTheKeys"){
		document.getElementById("spiderFrequency").value = message.defaultSDTimerNow;
		document.getElementById("spiderFrequencyShow").value = message.defaultSDTimerNow + "s";

		if(message.status == false){
			// Do on start of Extension
			document.getElementById("startSpider").disabled = false;
			document.getElementById("stopSpider").disabled = true;
			document.getElementById("sdTimer").textContent = "⏸️";
			document.getElementById("sdLed").textContent = "🔴"

		} 
		if(message.status == true) {
			document.getElementById("stopSpider").disabled = false;
			document.getElementById("startSpider").disabled = true;
			document.getElementById("sdLed").textContent = "🟢";
		}

	}
	if (message.command === "spiderLoading") {
		document.querySelector(".SDloader").style.display = "none"; 
		document.getElementById("successfulSd").style.display = "inline-block";
	}
	if(message.command === "stopAllSpiders"){
		stopSpider();
		document.querySelector(".SDloader").style.display = "none"; 
		document.getElementById("successfulSd").style.display = "none"; 
	}
	if(message.command === "sdTimer"){

		document.getElementById("sdLed").textContent = "🟢";
		
		if(message.data < message.defaultTime){
			document.getElementById("successfulSd").style.display = "none";
			document.getElementById("sdTimer").innerText = message.data;
			document.querySelector(".SDloader").style.display = "none"; 
		}
		if(message.data == message.defaultTime){
			document.querySelector(".SDloader").style.display = "inline-block";
			document.getElementById("sdTimer").innerText = "Running..."
		}
		if(message.data > message.defaultTime){
			document.querySelector(".SDloader").style.display = "inline-block";
		}

	}
	if(message.scope == "spiderReport"){

		let today = new Date();
		let time = today.getHours() + ":" + today.getMinutes()
		var li = document.createElement("li");
		
		if(message.error){
			var errorli = document.createElement("li"); errorli.style.color = "red";
			errorli.innerHTML = message.error ? time + " " + message.error : null;
			document.getElementById("displayMessages").appendChild(errorli)
		}

		if(message.p1 == "0" && message.p2 == "0" && !message.error) li.innerHTML = `<span style="color: gray;"> <a target="_blank" rel="noopener noreferrer" href="${message.href}" >${message.location}</a> ${time} </span>` + "🦄❤️ - " + message.total_tickets + " tickets."
		if(message.p1 !== "0" && message.p2 == "0" && !message.error) li.innerHTML = `<span style="color: gray;"><a target="_blank" rel="noopener noreferrer" href="${message.href}" >${message.location}</a>  ${time} </span>` + " P1 : " + message.p1 + " SD Tickets : " + message.total_tickets 
		if(message.p1 == "0" && message.p2 !== "0" && !message.error) li.innerHTML = `<span style="color: gray;"><a target="_blank" rel="noopener noreferrer" href="${message.href}" >${message.location}</a>  ${time} </span>` + " P2 : " + message.p2 + " SD Tickets : " + message.total_tickets
		if(message.p1 !== "0" && message.p2 !== "0" && !message.error) li.innerHTML = `<span style="color: gray;"><a target="_blank" rel="noopener noreferrer" href="${message.href}" >${message.location}</a>  ${time} </span>` + " P1 : " + message.p1 + " P2 : " + message.p2 + " SD Tickets : " + message.total_tickets

		document.getElementById("displayMessages").appendChild(li);
		document.getElementById("displayMessages").scrollTop = document.getElementById("displayMessages").scrollHeight;
	}


}

