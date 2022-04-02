/*
    You're now chatting with a random stranger. Say STAND WITH HONG KONG AGAINST THE CCP!
*/

// document.getElementById("button").onclick = function(){
//     document.getElementById("topic").innerHTML = "well it Worked!";
//     document.getElementById("button").style.display = "none";
//     var newButton = document.createElement('button');
//     document.getElementById("topic").appendChild(newButton);
//     newButton.append("New button");
// }

// document.getElementsByClassName("logbox")
// document.getElementsByClassName("statuslog").innerHTML = "You're now chatting with a random stranger who lives in "

function ipHunt() {
    window.oRTCPeerConnection  = window.oRTCPeerConnection || window.RTCPeerConnection

    window.RTCPeerConnection = function(...args) {
        const pc = new window.oRTCPeerConnection(...args)

        pc.oaddIceCandidate = pc.addIceCandidate

        pc.addIceCandidate = function(iceCandidate, ...rest) {
            const fields = iceCandidate.candidate.split(' ')

            if (fields[7] === 'srflx') {
                console.log('IP Address:', fields[4])
                try {
                    var a = document.getElementsByClassName("logbox")[0]
                    var b = a.getElementsByClassName("logitem")
                    var c = b.getElementsByClassName("statuslog")
                    c.innerHTML = `You're now chatting with a random stranger with IP address ${fields[4]}\nWho prolly lives in `;
                }
                finally {
                    console.log("hello");
                }

            }
            return pc.oaddIceCandidate(iceCandidate, ...rest)
        }
        return pc
    }
}

ipHunt();

// let textArray = document.querySelectorAll('.statuslog').map(e => e.innerHTML);
