function RFL(givenList) {
    return givenList[Math.floor(Math.random() * givenList.length)];
}

function CTL(firstList, secondList) {
    return firstList.concat(secondList);
}

function Main() {
    let settings = [1, 1, 1, 5];

    let v = ["A", "E", "U"];
    let c = ["W", "R", "T", "P", "S", "D", "F", "G", "H", "K", "L", "C", "B", "N", "M", "Sh"];
    let dV = ["I", "O"];
    let dC = ["Q", "Y", "J", "Gh", "Kh", "Z", "V", "Ch", "Th"];
    let aV = ["Ə", "Æ", "Ö", "Ü", "I", "Á", "Ė", "Í", "Â", "Á"];
    let aC = ["Ğ", "Ç", "Ð", "Þ", "Ş"];
    let iteration = [0, 2, 4, 6, 8, 10, 12, 14, 16];

    if (settings[0] === 1) v = CTL(v, dV);
    if (settings[1] === 1) c = CTL(c, dC);

    if (settings[2] === 1) {
        for (let e = 0; e < settings[3]; e++) {
            c = CTL(c, c);
            v = CTL(v, v);
        }
        c = CTL(c, aC);
        v = CTL(v, aV);
    }

    // Store results so we can return them
    let results = [];

    let nationName = "";
    let lengthOf = Math.floor(Math.random() * (7 - 4 + 1)) + 4;
    let flipBetween = Math.floor(Math.random() * 5);
    let start = 0;

    for (let i = 0; i < lengthOf; i++) {
        if (iteration.includes(flipBetween)) {
            nationName += (start === 0) ? RFL(v) : RFL(v).toLowerCase();
        } else {
            nationName += (start === 0) ? RFL(c) : RFL(c).toLowerCase();
        }

        if (flipBetween >= 12) {
            flipBetween = Math.floor(Math.random() * 2);
        }
        if (Math.floor(Math.random() * 20) !== 1) {
            flipBetween++;
        }
        start++;
    }
    results.push(GenerateTypes(nationName));

    return results; // return the list of names

    function GenerateTypes(nat) {
        let govBack = ["Folk", "Kingdom", "Empire", "Theocracy", "Federation", "Union", "Republic", "Confederation"];
        let suffixes = ["an", "ian", "ite", "id", "", "", ""];
        let frontOrBack = Math.floor(Math.random() * 2);

        if (frontOrBack === 1) {
            return RFL(govBack) + " of" + RFL([" ", " the "]) + nat;
        } else {
            return nat + RFL(suffixes) + " " + RFL(govBack);
        }
    }
}

function DoIt() {
    let generatedNames = Main();
    document.getElementById("demo").innerText = generatedNames.join("\n");
}
