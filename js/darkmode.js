const lightMode = document.querySelector(".light-dark-icon");
const headerHome = document.querySelector(".intro-header");
const BGmodechange = document.querySelector("#ldmode");
const barColor = document.querySelector(".bar-icon");


lightMode.addEventListener("click",() => {
    if (BGmodechange.classList.contains("fa-moon")) {
        BGmodechange.classList.remove("fa-solid","fa-moon");
        BGmodechange.classList.add("fa-regular","fa-sun");
        document.body.style.backgroundColor = "rgba(0,0,0,.8)";
        document.body.style.color = "white";
        headerHome.style.color = "#ddd";
        barColor.style.color = "white";
        
        } else if (BGmodechange.classList.contains("fa-sun")) {
        BGmodechange.classList.remove("fa-regular","fa-sun");
        BGmodechange.classList.add("fa-solid","fa-moon");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        headerHome.style.color = "#333";
        barColor.style.color = "black";
        }
});