const rtf = new Intl.RelativeTimeFormat(undefined, { style: "short", numeric: "auto" });
const nowSeconds = Math.floor(Date.now()/1000);

function getRelativeTimeString(seconds){
    if (seconds > -60){
        return rtf.format(Math.floor(seconds), "seconds");
    }
    const minutes = seconds / 60;
    if (minutes > -60){
        return rtf.format(Math.floor(minutes), "minutes");
    }
    const hours = minutes / 60;
    if (hours > -24){
        return rtf.format(Math.floor(hours), "hours");
    }
    const days = hours / 24;
    if (days > -7){
        return rtf.format(Math.floor(days), "days");
    }
    const weeks = days / 7;
    if (weeks > -3){
        return rtf.format(Math.floor(weeks), "weeks");
    }
    return "";
}

document.querySelectorAll(".relativeTime").forEach((e) => {
    const postTimestamp = Number(e.getAttribute("timestamp"));
    const elapsedSeconds = postTimestamp - nowSeconds;
    const relativeTimeString = getRelativeTimeString(elapsedSeconds);
    if (relativeTimeString != ""){
        e.textContent = relativeTimeString+":";
    }
})