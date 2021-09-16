var tab_youtube = document.getElementById("tab_youtube");
var tab_audio = document.getElementById("tab_audio");
var tab_contact = document.getElementById("tab_contact");
var youtube_section = document.getElementById("youtube-section");
var audio_section = document.getElementById("audio-section");
var contact_section = document.getElementById("contact-section");
function changeTabStatus(e,name){
    tab_youtube.classList.remove("active-tab")
    tab_audio.classList.remove("active-tab")
    tab_contact.classList.remove("active-tab")
    e.target.classList.add("active-tab")
    changeSection(name)
}

function changeSection(id){
    youtube_section.style.display = "none"
    audio_section.style.display = "none"
    contact_section.style.display = "none"
    if(id === "youtube-section"){
        document.getElementById(id).style.display = "grid"
    }else{
        document.getElementById(id).style.display = "block"
    }
}