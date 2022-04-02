let color = '#3aa757';

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

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});