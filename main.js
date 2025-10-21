//Helper Functions
function RFL(givenList) { // Returns a random value from a list
    return givenList[Math.floor(Math.random() * givenList.length)];
}

function CTL(firstList, secondList) { // Combines two given lists
    return firstList.concat(secondList);
}


function GenerateRandomName(type) {

    // --- Full Aesthetic Program Settings
    let settingBox1 = document.getElementById("complexV").checked; // Whether the final product will include complex vowels
    let settingBox2 = document.getElementById("complexC").checked; // Whether the final product will include complex consonants
    let settingBox3 = document.getElementById("accentedBox").checked; // Whether the final product will include accents
    let settingRange = document.getElementById("amount").value; // The amount that accented characters are distilled by normal characters

    // --- Letters
    let v = ["A", "U"];
    let c = ["R", "T", "P", "S", "D", "G", "K", "B"];
    let dV = ["I", "O","E"];
    let dC = ["Q","W", "Y", "J", "Gh", "Kh", "Z", "V", "Ch", "Th", "F", "H", "L", "Sh", "N", "M", "C"];
    let aV = ["Ə", "Æ", "Ö", "Ü", "I", "Á", "Ė", "Í", "Â", "Á"];
    let aC = ["Ğ", "Ç", "Ð", "Þ", "Ş"];

    
    let iteration = [0, 2, 4, 6, 8, 10, 12, 14, 16];

    if (settingBox1 === true) v = CTL(v, dV);
    if (settingBox2 === true) c = CTL(c, dC);

    if (settingBox3 === true) {
        for (let e = 0; e < settingRange; e++) {
            c = CTL(c, c);
            v = CTL(v, v);
        }
        c = CTL(c, aC);
        v = CTL(v, aV);
    }

    // Store results so we can return them
    let results = [];

    let rName = "";
    let lengthOf = Math.floor(Math.random() * (7 - 4 + 1)) + 4;
    let flipBetween = Math.floor(Math.random() * 5);
    let start = 0;

    for (let i = 0; i < lengthOf; i++) {
        if (iteration.includes(flipBetween)) {
            rName += (start === 0) ? RFL(v) : RFL(v).toLowerCase();
        } else {
            rName += (start === 0) ? RFL(c) : RFL(c).toLowerCase();
        }

        if (flipBetween >= 12) {
            flipBetween = Math.floor(Math.random() * 2);
        }
        if (Math.floor(Math.random() * 20) !== 1) {
            flipBetween++;
        }
        start++;
    }

    if(type === "nation")
    {
        results.push(NationType(rName));
        finale = rName;
    }
    else if(type === "city")
    {
        results.push(CityType(rName))
    }
    else if(type === "alliance")
    {
        results.push(AllianceType(rName));
    }
    else if(type === "leader")
    {
        results.push(LeaderType(rName));
    }
    return results; // return the list of names

    function NationType(nat) {
        let governmentTypes = Math.floor(Math.random() * 6);
        let frontOrBack = Math.floor(Math.random() * 2);
        dynastical = 0;

        

        let govBack;
        if(governmentTypes === 0) //
        {
            govBack = ["Republic","Democracy","Senate","Consulship","Autonomy","Sovereignty"];
        }
        else if(governmentTypes === 1) //
        {
            dynastical = Math.floor(Math.random() * 2);
            govBack = ["Dynasty","County","Barony","Kingdom","Empire","Duchy","Archduchy"];
        }   
        else if(governmentTypes === 2) //
        {
            govBack = ["Dictatorship","Regime","Fascism","Autocracy","Despotism"];
        }
        else if(governmentTypes === 3) //
        {
            govBack = ["Reserve","Tribe","Folk","Chiefdom","Clan","House","Kinfolk","Clique"];
        }
        else if(governmentTypes === 4)
        {
            govBack = ["Confederation","Federation","Theocracy","Priestdom","State","Union","Khanate","Khaganate"];
        }
        else
        {
            govBack = ["Soviet Republic","Syndicate","Socialist Republic","Social Democracy","People's Republic"];
        }
 

        let suffixes = ["an", "ian", "ite", "id","ids","", "", ""];
        
        if (frontOrBack === 1) {
            return RFL(govBack) + " of" + RFL([" ", " the "]) + nat;
        } else {
            return nat + RFL(suffixes) + " " + RFL(govBack);
        }
    
    }
    function CityType(nat) {
        let govBack = ["North", "South", "East", "West", "New","","","","","","","","","","","","","","","","","","","","","","",""];
        let suffixes = ["ia", "ople", "ville", "town", " City", "furt", "polis","","","","","",""];

        return(RFL(govBack)+" "+nat+RFL(suffixes))
    }
    function AllianceType(nat) {
        const prefixes = ["Union of","Alliance of","Federation of","Confederation of","Pact of","Empire of","Republic of","Council of","Compact of","Treaty of"];
        const suffixes = ["Union","Alliance","Federation","Confederation","Pact","Empire","Republic","Council","Compact","Treaty","Combine"]
        const nameHaps = [
        "Difficulty",
        "The Mountain",
        "The Wounded",
        "Indication",
        "Media",
        "Mutuality",
        "Trade",
        "Populace",
        "Blood",
        "War",
        "The Double",
        "Bronze",
        "Gold",
        "Guidance",
        "Manufacturing",
        "Platinum",
        "Information",
        "Steel",
        "Failure",
        "Victory",
        "Stone",
        "Empire",
        "Church",
        "Confusion",
        "Management",
        "Freedom",
        "Liberty",
        "Aspects",
        "Economy",
        "Decisions",
        "Opportunity",
        "Introduction",
        "Food",
        "Basics",
        "Reading",
        "Culture",
        "Tradition",
        "Responsibility",
        "Industry",
        "Height",
        "Attention",
        "Preference",
        "Democracy",
        "Obligation",
        "Security",
        "Preparation",
        "Consuls",
        "Power",
        "Education",
        "Non-Aggression",
        "Strangers",
        "War",
        "The Divine",
        "God",
        "The Heavenly"
        ];
        let base = "";
        let hasName = Math.floor(Math.random() * 2);
        let isSuffix = Math.floor(Math.random() * 2);
        if(hasName === 1){
            base = nat;
        }
        else{
            base = RFL(nameHaps);
        }

        if(isSuffix === 1)
        {
            return(RFL(prefixes)+" "+base)
        }
        else{
            return(base+" "+RFL(suffixes))
        }
    }
    function LeaderType(nat) {
        return(nat)
    }
}
let numName = 0;
function DoIt() {
    numName++;
    let generatedNames = GenerateRandomName("nation");
    let generatedCity = GenerateRandomName("city");
    let generatedAlliance = GenerateRandomName("alliance");
    let suffix = ["","","","","","","","","","","","","","","","","","","","","","","","","","","Jr.","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII"];
    let generatedLeader = GenerateRandomName("leader");
    let generatedLast = GenerateRandomName("leader");

    document.getElementById("demo").innerText = generatedNames.join("\n");
    document.getElementById("city").innerText = generatedCity.join("\n");
    document.getElementById("numName").innerText = numName;
    document.getElementById("alliance").innerText = generatedAlliance.join("\n");
    document.getElementById("leader").innerText = generatedLeader.join("\n");
    if(dynastical === 0)
    {
    document.getElementById("last").innerText = generatedLast.join("\n");
    }
    else
    {
        document.getElementById("last").innerText = finale;
    }
    document.getElementById("suffix").innerHTML = RFL(suffix);
    document.getElementById("language").innerText = finale+RFL(["ic","ic","ic","ic","ish","an","in","","","","","","","","",""]);


    document.getElementById("admin").innerHTML = `${RFL(["A","C","U","F","S"])}${RFL(["Tr","Cl","Th","Ty","Ol","Re","De","Dy","Ci","Ec","Te","An"])}:${RFL(["0","1","2","3","4"])}`;
}
