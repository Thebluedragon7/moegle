// import "content.js"

function locJS() {
    var checkBox = document.getElementById("moegle_switch");
    var moegleStatus = document.getElementById("moegle_status");
    if (checkBox.checked == true){
      moegleStatus.style.display = "block";
      // ipHunt();
    } else {
       moegleStatus.style.display = "none";
    }
}

locJS();