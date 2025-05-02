function printMsg(msg) {
    if (Array.isArray(msg)) {
        msg.forEach(function (m) { return console.log(m); });
    }
    else if (isNumber(msg)) {
        console.log(msg);
    }
    else {
        console.log(msg);
    }
    console.log(msg);
}
printMsg(4);
function isNumber(n) {
    return typeof n === "number";
}
