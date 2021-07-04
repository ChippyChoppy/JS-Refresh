
function caseInSwitch(val) {
    let answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma"
            break;
        case 4:
            answer = "delta"
            break;
    }
    return answer;
}

console.log(caseInSwitch(1))
console.log(caseInSwitch(2))
console.log(caseInSwitch(3))
console.log(caseInSwitch(4))
console.log(caseInSwitch(5))

//default option in switch

function switchy(val) {
    let bebe = "";
    switch (val) {
        case "a":
            bebe = "boo"
            break;
        case "b":
            bebe = "bae"
            break;
        case "c":
            bebe = "babe"
            break;
        case "d":
            bebe = "sugar"
            break;
        case "e":
            bebe = "honey"
            break;
        default:
            bebe = "darlin'"
            break;
    }
    return bebe;
}
console.log(switchy("g"))

//multiple identical outputs

function switchAgain() {
    let answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid";
            break;

    }
}

// if elses to switch

function ifToSwitch(val) {
    let answer = "";
    if (val === "bob") {
        answer = "Marley";
    } else if (val === 42) {
        answer = "The answer";
    } else if (val === 1) {
        answer = "There is no #1";
    } else if (val === 99) {
        answer = "Missed me by thismuch!";
    } else if (val === 7) {
        answer = "Ate nine";
    }
    return answer;
}
console.log(ifToSwitch(42))

function nowItsSwitch(val) {
    let answer = "";
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by thismuch!";
            break;
        case 7:
            answer = "Ate nine";
            break;
    }
    return answer;
}
console.log(nowItsSwitch(42))

//returning boolean from function

function less(a,b) {
    if(a<b) {
        return true;
    } 
    return false;
}
console.log(less(20,15))

function lessTrue(a,b){
    return a < b;
}
console.log(lessTrue(20, 15))