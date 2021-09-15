var tab_youtube = document.getElementById("tab_youtube");
var tab_audio = document.getElementById("tab_audio");
var tab_contact = document.getElementById("tab_contact");
function changeTabStatus(e,name){
    tab_youtube.classList.remove("active-tab")
    tab_audio.classList.remove("active-tab")
    tab_contact.classList.remove("active-tab")
    e.target.classList.add("active-tab")
    console.log(name)
}