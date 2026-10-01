// ---- | Helper Functions | ---- //
const Help =
{
    RFL(givenList)
    { // Returns a random value from a list
        return givenList[Math.floor(Math.random() * givenList.length)];
    },
    CTL(firstList, secondList)
    { // Combines two given lists
        return firstList.concat(secondList);
    },
    Find(listList, fromList, whatInList)
    { // Find an item in a list from a corresponding location in another list
        return listList[fromList.indexOf(whatInList)];
    },
    RandomNumber(min,max) // Returns a random number in-between two values
    {
        max++;
        return Math.floor(Math.random() * (max - min) + min);
    },
    SuperSplice(givenList,howMany)
    {
        while (givenList.length > howMany)
        {
            givenList.splice(Help.RandomNumber(0,givenList.length-1),1);
        }
        return givenList;
    },
    Translate(number,terms) // Takes a pre-generated number and applies it to a translation list
    {
        for (let i = 0; i < 10 ; i++)
        {
            if(i*10 <= number && number < (i+1)*10)
            {
                return(terms[i]);
            }
        }
    },
    Dropdown(howMany,variable,htmlID)
    {
        for(let i = 0; i < howMany; i++)
        {
            document.getElementById(htmlID+""+i).innerText = variable[i];
        }
    },
    Breakdown(givenList,amount,htmlID,other)
    {
        let percentOf = 10000;
        let takeAway;

        let currentItem;
        let itemList = [];

        for(let i = 0; i < amount; i++) {
            takeAway = Help.RandomNumber(percentOf/100,percentOf);
            percentOf -= takeAway;

            currentItem = Help.RFL(givenList);

            itemList.push((currentItem) + ": " + takeAway / 100 + "% ");
            givenList.splice(givenList.indexOf(currentItem), 1);
        }
        document.getElementById(htmlID+""+amount).innerText = other+": "+(percentOf/100+"%");
        Help.Dropdown(amount,itemList,htmlID);
    },
    U(which,number)
    {
        let omRange = parseInt(document.getElementById("omMount").value);
        let codeType =
        [
            [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
             ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
             ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]],
            [["♔","#","♡","𓐍","∡","🏙","🗺","﹩","→","←","❖","☠","!","⛑","🛢","🗞","⛿","𐰅","♱","🏛","🕮","𝄞","𝄢","🏝","⌂","𐦆","⇝"],
             ["♚","#","♡","𓐍","≞","🏙","🗺","₼","←","→","❖","☠","❣","⛑","🛢","🗞","⛿","ت","☪","🏛","🕮","𝄇","𝄇","🏝","🏘","𐦂","⇜"],
             ["◈ ","◈","◈","◈","◈","◈","⍩","⍩","⍩","Δ","Δ","⧖","🛠","🛠","🛠","🛠","🛠","🛠","🛠","🛠","🏝","🛢","🛢","⧗","⍩","⍩","🛠","🛠","🛠","𓃖","⍩","⍩","⍩","Δ","⍩","⧗","⧗","☤","🛢","☢","🛢","Δ","⚒","⚒","⤬","⤬","⚒","🖌","🖌","⚒","🖌","✝","🖌"]],
            [["👑","🔢","🤝","🌐","📏","🏙️","🗺️","💰","➡️","⬅️","💎","😀","😈","🚔","🪾","📰","🏴","🔤","⛪","🗼","📚","🎶","🎵","🏞️","🏡","🏛️","💥"],
             ["✊","🔡","🤝","🌐","📐","🌆","🗺️","🪙","⬅️","➡️","🪵","😡","🫰","🚔","🌳","🗞️","🏳️","🔤","🕌","🗿","🖼️","🎶","🎵","🌅","🛖","🏛️","🕊️"],
             ["⌛️","💎","💎","💎","💎","⛏","🌽","🥦","🍐","🐏","🧶","🪟","⛏","⛏","⛏","⛏","⛏","⛏","⛏","⛏","🪓","🏭","🛢","🧂","🍰","🥭","🪨","⛏","⛏","🐄","🥩","🍞","🍚","🐄","🍝","💧","🍺","💊","🏭","☢️","🏭","🧶","⛓","⛓","❌","❌","🖥","✒️","🖼","🎻","🏭","☯️","🎭"]]
        ];

        return codeType[omRange][which][number];
    }
}
function BaseSeq(v,c)
{
        // Create basic variables
    let rName = ""; // Will be the basic generated string of characters applied to all complex names
    let lengthOf = Math.floor(Math.random() * (7 - 4 + 1)) + 4; // Picks a random length for the name
    let flipBetween = Math.floor(Math.random() * 5); // Picks whether the letter is a consonant or vowel
    let start = 0;
    let iteration = [0, 2, 4, 6, 8, 10, 12, 14, 16]; // Makes it so every other letter should be different type

    // Generates a random string of letters with some structure
    for (let i = 0; i < lengthOf; i++) {
        if (iteration.includes(flipBetween)) {
            rName += (start === 0) ? Help.RFL(v) : Help.RFL(v).toLowerCase();
        } else {
            rName += (start === 0) ? Help.RFL(c) : Help.RFL(c).toLowerCase();
        }

        if (flipBetween >= 12) {
            flipBetween = Math.floor(Math.random() * 2);
        }
        if (Math.floor(Math.random() * 20) !== 1) {
            flipBetween++;
        }
        start++;
    }
    return rName;
}
// ---- | Main Program Functions | ---- //
const generate =  // Holds the code required to generate a variety of name types
{
    NationType(nat,union,isSide)
    {
        // (debug/front | 1) : Nation name will be in front of government name
        let debug = document.getElementById("dkey").value;
        let debugVariable = document.getElementById("dvar").value;
        if(debug === "debug/name")
        {
            nat = debugVariable;
        }
        let maintainDynastical;
        if(isSide) {maintainDynastical = dynastical}
        dynastical = 0;
        let governmentTypes = Help.RandomNumber(0,10);
        let frontOrBack = Help.RandomNumber(1,2);
        if(debug === "debug/front")
        {
            frontOrBack = parseInt(debugVariable);
        }
        let basicLeaders = ["King","President","Chancellor","Leader","Emperor","Minister","Governor"];
        let government;
        let suffixes = ["an", "ian", "ite", "id","id","", "", ""];
        let leaderType;
        let leaderTypes;
        let unionType = "";
        let ifUnion = "";
        let specials = Help.RandomNumber(1,20);

        if(debug === "debug/union")
        {
            specials = parseInt(debugVariable);
        }
        if(specials <= 3)
        {
            nat = nat+"-"+union;
        } else if(specials === 4)
        {
            ifUnion = "s";
            if(frontOrBack === 1)
            {
                unionType = Help.RFL(["United ", "Federal ", "Allied "]);
            } else {
                unionType = Help.RFL(["Union of ","Federation of ","Confederation of ","Alliance of ","Commonwealth of "]);
            }
        }
        let govBack;
        let gPrimary;
        let partyType;
        let gSecondary = Help.RFL(["Representative","Absolute","Constitutional","Tyrannical","Libertarian","Liberal","Conservative"]);
        if(governmentTypes === 0) // Democracy
        {
            partyType = ["Congress","Parliament","Legislature","Senate","House of Reps","Representatives","Electors"];
            gPrimary = ["Republic","Democracy","Dictatorship","Junta","Pseudo-Republic","Republic","Democracy","Republic","Democracy"];
            govBack = ["Republic","Democrac","Senate","Consulship","Autonom","Sovereignt"];
            leaderTypes = [["President","Prime Minister","Chancellor"],["President","Prime Minister","Chancellor"],["Senator","Lead Senator","Speaker"],["Consul","Pro-Consul"],basicLeaders,basicLeaders];
            government = Help.RFL(govBack);
            leaderType = Help.RFL(Help.Find(leaderTypes,govBack,government));
        }
        else if(governmentTypes === 1) // Monarchy
        {
            partyType = ["Parliament","Court","Council"];
            gPrimary = ["Monarchy","Dynasty","Monarchy","Monarchy","Dictatorship"];
            govBack = ["Count","Baron","Kingdom","Empire","Duch","Archduch"];
            leaderTypes = [["Count","Governor"],["Baron","Governor"],["King","Emperor","Archduke"],["Emperor","High King"],["Duke"],["Duke","High Duke","Archduke"]];
            government = Help.RFL(govBack);
            leaderType = Help.RFL(Help.Find(leaderTypes,govBack,government));
            dynastical = Help.RandomNumber(0,3);
        }
        else if(governmentTypes === 2) // Tyranny
        {
            partyType = ["Cabinet","Inner Circle"];
            gPrimary = ["Dictatorship","Fascism","Autocracy","Junta","Republic"];
            govBack = ["Dictatorship","Regime","Fascism","Autocrac","Despotism"];
            leaderTypes = [["Dictator","Supreme Leader","Leader"],basicLeaders,["Dictator","Leader"],["Dictator","Leader"],["Despot","Minister","Dictator","General","Commander"]];
            government = Help.RFL(govBack);
            leaderType = Help.RFL(Help.Find(leaderTypes,govBack,government));

            dynastical = Help.RandomNumber(0,1);
        }
        else if(governmentTypes === 3) // Tribal
        {
            partyType = ["Council","Leadership"];
            gPrimary = ["Republic","Monarchy","Democracy","Anarchy","Commune","Tribe"];
            govBack = ["Reserve","Tribe","Folk","Chiefdom","Clan","House","Kinfolk","Clique"];
            leaderTypes = [["Chief","King","Governor","Leader"],["Chief","King"],["Chief","Leader","Emperor"],["Chief"],["Chief","King","Emperor"],["Chief","Head","Emperor"],["Chief","Head","Emperor"],["Warlord","Leader","General","Commander","King","Dictator"]];
            government = Help.RFL(govBack);
            leaderType = Help.RFL(Help.Find(leaderTypes,govBack,government));

            dynastical = Help.RandomNumber(0,1);
        }
        else if(governmentTypes === 4) // Religious
        {
            partyType = ["Clergy","Council","Mass"];
            gPrimary = ["Theocracy","Monarchy","Dictatorship","Republic"];
            govBack = ["Theocrac","Priestdom","Cult"];
            leaderTypes = ["Theocrat","Priest","Pope","Caliph","Imam","Bishop","Cardinal","Oracle","Elder","Father"];
            government = Help.RFL(govBack);
            leaderType = Help.RFL(leaderTypes);
        }
        else if(governmentTypes === 5) // Socialist
        {
            partyType = ["Congress","Council","Parliament","Cabinet","Senate","People's Congress"];
            gPrimary = ["Social Democracy","Socialism","Communism","Commune","Republic"];
            govBack = ["Soviet Republic","Syndicate","Socialist Republic","Social Democrac","People's Republic"];
            leaderTypes = ["Minister","Prime Minister","Chancellor","Secretary","General Secretary","President","Chairman","Officer","Supreme Leader"];
            government = Help.RFL(govBack);
            leaderType = Help.RFL(leaderTypes);
        } else if(governmentTypes === 6) // Dynastic
        {
            partyType = ["Court","Advisors"];
            gPrimary = ["Monarchy","Dynasty"];
            govBack = ["Dynast","Empire","Kingdom","Clan"];
            leaderTypes = [["Emperor","Head"],["Emperor"],["King"],["King","Leader","Head"]];
            government = Help.RFL(govBack);
            leaderType = Help.RFL(Help.Find(leaderTypes,govBack,government));

            dynastical = 0;
        } else if(governmentTypes === 7) // Union
        {
            partyType = ["Council","High Council","Senate","Congress","Group"];
            gPrimary = ["Monarchy","Union","Federation","Confederation","Nation-State","Republic"];
            govBack = ["Union","Federation","Confederation","State"];
            government = Help.RFL(govBack);
            leaderType = Help.RFL(basicLeaders);
        } else if(governmentTypes === 8) // Muslim / Persian / Arabic
        {
            partyType = ["Court"];
            gPrimary = ["Monarchy","Dynasty"];
            govBack = ["Sultanate","Caliphate","Imamate","Emirate","Shahdom","Sheikhdom","Empire"];
            leaderTypes = [["Sultan","Caliph"],["Caliph","Sultan"],["Imam"],["Shah"],["Sheikh"],["Sultan","Caliph","Imam","Shah","Sheikh"]]
            government = Help.RFL(govBack);
            leaderType = Help.RFL(Help.Find(leaderTypes,govBack,government));

            dynastical = Help.RandomNumber(0,9);
            suffixes = ["id","id","id","id","id","id","an","","",""];
        } else if(governmentTypes === 9) // Exotic
        {
            partyType = ["Advisors","Court","Council","Congress"];
            gPrimary = ["Monarchy","Trade Company"];
            govBack = ["Tsardom","Empire","Compan"];
            leaderTypes = [["Tsar"],["Tsar","Caesar","Kaiser","Imperator"],basicLeaders,["CEO","Executive","Governor","Supervisor"]];
            government = Help.RFL(govBack);
            leaderType = Help.RFL(Help.Find(leaderTypes,govBack,government));
        } else if(governmentTypes === 10) // Nomadic
        {
            partyType = ["Court","Council","Gathering"];
            gPrimary = ["Horde","Tribe","Republic","Monarchy"];
            govBack = ["Khanate", "Khaganate", "Confederation","Clique"];
            leaderTypes = ["Khan","Khagan","Emperor","King","Warlord"];
            government = Help.RFL(govBack);
            leaderType = Help.RFL(leaderTypes);
        }
        gPrimary.push("Oligarchy");
        if(isSide === false) {
            let parties = ["Communist","Socialist","Democratic Socialist","Progressive","Liberal","Moderate","Fascist","Conservative","Libertarian","Anarchist","Capitalist","Democratic","Republican","Monarchist","Federalist","Nationalist"];
            document.getElementById("government").innerText = gSecondary+" "+Help.RFL(gPrimary);
            Help.Breakdown(parties,4,"Party","Other");
            document.getElementById("Party").innerText = Help.RFL(["Unicameral","Unicameral","Unicameral","Unicameral","Bicameral","Bicameral","Bicameral","Tricameral","Quadcameral","","","","",""])+" "+Help.RFL(partyType);
        }
        let acies = ["Democrac","Autonom","Sovereignt","Autocrac","Count","Baron","Duch","Archduch","Compan","Social Democrac","Theocrac","Dynast"];
        if(debug === "debug/government")
        {
            government = debugVariable;
        }
        if(acies.includes(government))
        {
            if(ifUnion === "s")
            {
                ifUnion = "ies";
            } else
            {
                government = government + "y";
            }
        }
        if(government === "Reserve" && ifUnion === "s")
        {
            government = "Reservation";
        }
        if(isSide === false) {
            document.getElementById("leadership").innerText = Help.U(0,0) + " " + leaderType;
        }
        if(isSide)
        {
            dynastical = maintainDynastical;
        }
        if(debug === "debug/dynasty")
        {
            dynastical = parseInt(debugVariable);
        }
        if (frontOrBack === 1) {
            if(Help.RandomNumber(1,2) === 1)
            {
                return unionType+government+ifUnion + " of " +nat;
            } else
            {
                return unionType+government+ifUnion + " of the " + nat+Help.RFL(suffixes)+Help.RFL(["s",""]);
            }
        } else {
            return unionType+nat + Help.RFL(suffixes) + " " + government+ifUnion;
        }
    },
    CityType(nat)
    {
        let govBack = ["North", "South", "East", "West", "New","","","","","","","","","","","","","","","","","","","","","","",""];
        return(Help.RFL(govBack)+" "+nat)
    },
    AllianceType(nat,capital)
    {
        const prefixes = ["Union of","Alliance of","Federation of","Confederation of","Pact of","Empire of","Republic of","Council of","Compact of","Treaty of"];
        const suffixes = ["Union","Alliance","Federation","Confederation","Pact","Empire","Republic","Council","Compact","Treaty","Combine"]
        const nameHaps = ["Difficulty","The Mountain","The Wounded","Indication","Trade","Populace","Blood","War","The Double","Bronze","Gold","Guidance","Manufacturing","Platinum","Information","Steel","Failure","Victory","Stone","Empire","Church","Confusion","Management","Freedom","Liberty","Aspects","Economy","Decisions","Opportunity","Introduction","Food","Basics","Reading","Culture","Tradition","Responsibility","Industry","Height","Attention","Preference","Democracy","Obligation","Security","Preparation","Consuls","Power","Education","Non-Aggression","Strangers","War","The Divine","God","The Heavenly"];
        let base = "";
        let hasName = Math.floor(Math.random() * 3);
        let isSuffix = Math.floor(Math.random() * 2);
        if(hasName === 1){
            base = nat;
        } else if(hasName === 2)
        {
            base = capital;
        }
        else{
            base = Help.RFL(nameHaps);
        }

        if(isSuffix === 1)
        {
            return(Help.RFL(prefixes)+" "+base)
        }
        else{
            return(base+" "+Help.RFL(suffixes))
        }
    },
    GetScale(notes,specialName)
    {
        Help.CTL(notes,notes);
        let scalar = [1,1,1,1,1,1,1,1,1,1,1,1];
        let scaleInterval;
        let scaleName;
        for(let i = 0; i < scalar.length-2; i++)
        {
            scaleInterval = Help.RandomNumber(1,10);
            if(scaleInterval < 5)
            {
                scalar[i] = 1;
            } else if(scaleInterval === 5)
            {
                scalar[i] = 3;
                scalar.splice(i+1,1);
                scalar.splice(i+1,1);
            } else
            {
                scalar[i] = 2
                scalar.splice(i+1,1);
            }
        }
        const commonScalesNames = ["Lydian","Ionian","Mixolydian","Dorian","Aeolian","Phrygian","Locrian"];
        const commonScalesCodes = ["2221221","2212221","2212212","2122212","2122122","1222122","1221222"];
        let intervals;
        let scale = [];
        let noteNumber = 0;
        let bassline = [];
        intervals = [0,2,4,6];


        for (let i = 0; i < scalar.length; i++)
        {
            scale.push(notes[noteNumber]);
            noteNumber += scalar[i];
        }

        if(commonScalesCodes.includes(scalar.join("")))
        {
            scaleName = commonScalesNames[commonScalesCodes.indexOf(scalar.join(""))]+" Scale";
        } else
        {
            scaleName = specialName+" Scale";
        }
        const bassLength = Help.RFL([2,4,8]);

        for (let i = 0; i < bassLength; i++)
        {
            bassline.push(Help.RFL(scale));
        }
        let melody = [];
        let noteLength = 0;
        let thiss = 0;
        for (let i = 1; i <= 8; i+=1)
        {
            noteLength = Help.RFL(["⅛","¼","½","1"]);
            thiss = Help.RandomNumber(1,8)
            if(thiss === 1)
            {
                melody.push(Help.RFL(["0⅛","0¼","0½"]));
            }
            else
            {
                melody.push(Help.RFL(scale)+""+noteLength);
            }

        }
        document.getElementById("scaleAnthem").innerText = scaleName+" "+scale;
        document.getElementById("bassline").innerText = Help.U(0,22)+" Bassline: "+bassline+" "+Help.U(1,22);
        return melody.join(" | ");
    }
};
let prevAlphabet = [];
// The actual program code, contains UI and function calls for basic program usage
function DoIt() {
    numName++;
    // User interface
    // Decides what letters are allowed in the program

    let lemRange = document.getElementById("letterTypes").value;
    let v = ["A", "U","I", "O","E"];
    let c = ["R", "X", "T", "P", "S", "D", "G", "K", "B","Q","W", "Y", "J", "Gh", "Kh", "Z", "V", "Ch", "Th", "F", "H", "L", "Sh", "N", "M", "C",];
    let aV = [];
    let aC = [];
    if(lemRange === "1") {
        aV = [["Ə", "Æ","I","Ø","Œ"],
        ["Á","É","Í","Ó","Ú"],
        ["Ă","Ĕ","Ĭ","Ŏ","Ŭ"],
        ["Ȧ","Ė","İ","Ȯ","U̇"],
        ["Ä","Ë","Ï","Ö","Ü"],
        ["Ả","Ẻ","Ỉ","Ỏ","Ủ"],
        ["À","È","Ì","Ò","Ù"],
        ["Â","Ê","Î","Ô","Û"],
        ["Ã","Ẽ","Ĩ","Õ","Ũ"],
        ["A̅","E̅","I̅","O̅","U̅"],
        ["Ȃ","Ȇ","Ȋ","Ȏ","Ȗ"],
        ["Ő","Ű"],
        ["Ě"],
        ["A̭","Ḙ","I̭","O̭","Ṷ"],
        ["A̰","Ḛ","Ḭ","O̰","Ṵ"],
        ["A̱","E̱","I̱","O̱","U̱"],
        ["A̯","E̯","I̯","O̯","U̯"],
        ["A̮","E̮","I̮","O̮","U̮"],
        ["Ą","Ę","Į","Ǫ","Ų"],
        ["Ḁ","E̥","I̥","O̥","U̥"],
        ["A̬","E̬","I̬","O̬","U̬"],
        ["A̩","E̩","I̩","O̩","U̩"],
        ["A̩","E̩","I̩","O̩","U̩"],
        ["A̧","Ȩ","I̧","O̧","U̧"],
        ["A͡u","E͡a","I͡u","O͡a","U͡o","U͡a","U͡i","I͡a","A͡e","O͡e","A͜u","E͜a","I͜u","O͜a","U͜o","U͜a","U͜i","I͜a","A͜e","O͜e"],
        ["Ā","Ē","Ī","Ō","Ū"],
        ["Å","E̊","I̊","O̊","Ů"],
        ["A̎","E̎","I̎","O̎","U̎"],
        ["Ȁ","Ȅ","Ȉ","Ȍ","Ȕ"],
        ["Â","Ê","Î","Ô","Û"],
        ["Ő","Ű"],
        ["A̗","E̗","I̗","O̗","U̗"],
        ["A̖","E̖","I̖","O̖","U̖"],
        ["Ạ", "Ụ","Ị", "Ọ","Ẹ"],
        ["A̤", "Ṳ","I̤", "O̤","E̤"],
        ["Ɨ", "Ű", "Ɯ", "Ʊ", "Ø", "Ǝ", "Ɵ", "Ɣ", "Ə", "Ɛ", "Œ", "Ƹ", "ɞ", "Ʌ", "Ɔ", "Æ", "Ɐ", "ɶ", "Ɑ", "Ɒ"]].flat();
        aC = [["Ğ", "Ð", "Þ","Β","Ʋ"],
        ["Ś","Ẃ", "Ý", "Ź", "Ĺ", "Ń", "Ć"],
        ["R̉", "T̉", "P̉", "G̉", "K̉", "B̉","Q̉", "J̉", "V̉", "F̉", "H̉", "M̉"],
        ["R̐", "T̐", "P̐", "S̐", "D̐", "G̐", "K̐", "B̐","Q̐","W̐", "Y̐", "J̐", "Z̐", "V̐", "F̐", "H̐", "L̐", "N̐", "M̐", "C̐"],
        ["Ŝ", "Ĝ","Ŵ", "Ŷ", "Ĵ", "Ĥ", "Ĉ"],
        ["Ȓ","T̑","P̑","S̑","D̑","G̑","K̑","B̑","Q̑","W̑","Y̑","J̑","Z̑","V̑","F̑","H̑","L̑","N̑","M̑","C̑"],
        ["R̃","T̃","P̃","S̃","D̃","G̃","K̃","B̃","Q̃","W̃","Ỹ","J̃","Z̃","Ṽ","F̃","H̃","L̃","Ñ","M̃","C̃"],
        ["R̰","T̰","P̰","S̰","D̰","G̰","K̰","B̰","Q̰","W̰","Y̰","J̰","Z̰","V̰","F̰","H̰","L̰","N̰","M̰","C̰"],
        ["Ř","Ť","Š","Ď","Ň","Č"],
        ["R̭","Ṱ","P̭","S̭","Ḓ","G̭","K̭","B̭","Q̭","W̭","Y̭","J̭","Z̭","V̭","F̭","H̭","Ḽ","Ṋ","M̭","C̭"],
        ["Ṟ","Ṯ","P̱","S̱","Ḏ","G̱","Ḵ","Ḇ","Q̱","W̱","Y̱","J̱","Ẕ","V̱","F̱","H̱","Ḻ","Ṉ","M̱","C̱"],
        ["R̯","T̯","P̯","S̯","D̯","G̯","K̯","B̯","Q̯","W̯","Y̯","J̯","Z̯","V̯","F̯","H̯","L̯","N̯","M̯","C̯"],
        ["R̮","T̮","P̮","S̮","D̮","G̮","K̮","B̮","Q̮","W̮","Y̮","J̮","Z̮","V̮","F̮","Ḫ","L̮","N̮","M̮","C̮"],
        ["R̨","T̨","P̨","S̨","D̨","G̨","K̨","B̨","Q̨","W̨","Y̨","J̨","Z̨","V̨","F̨","H̨","L̨","N̨","M̨","C̨",],
        ["R̥","T̥","P̥","S̥","D̥","G̥","K̥","B̥","Q̥","W̥","Y̥","J̥","Z̥","V̥","F̥","H̥","L̥","N̥","M̥","C̥"],
        ["R̬","T̬","P̬","S̬","D̬","G̬","K̬","B̬","Q̬","W̬","Y̬","J̬","Z̬","V̬","F̬","H̬","L̬","N̬","M̬","C̬"],
        ["R̍","T̍","P̍","S̍","D̍","G̍","K̍","B̍","Q̍","W̍","Y̍","J̍","Z̍","V̍","F̍","H̍","L̍","N̍","M̍","C̍"],
        ["Ŗ","Ţ","Ş","Ḑ","Ģ","Ķ","Ḩ","Ļ","Ņ","Ç"],
        ["Ṙ", "Ṫ", "Ṗ", "Ṡ", "Ḋ", "Ġ", "K̇", "Ḃ","Q̇","Ẇ", "Ẏ", "J̇", "Ż", "V̇", "Ḟ", "Ḣ", "L̇", "Ṅ", "Ṁ", "Ċ"],
        ["Ẅ", "Ÿ"],
        ["Ẁ", "Ỳ"],
        ["R̄", "T̄", "P̄", "S̄", "D̄", "Ḡ", "K̄", "B̄","Q̄","W̄", "Ȳ", "J̄", "Z̄", "V̄", "F̄", "H̄", "L̄", "N̄", "M̄", "C̄"],
        ["R̊", "T̊", "P̊", "S̊", "D̊", "G̊", "K̊", "B̊","Q̊","W̊", "Y̊", "J̊", "Z̊", "V̊", "F̊", "H̊", "L̊", "N̊", "M̊", "C̊"],
        ["R̎", "T̎", "P̎", "S̎", "D̎", "G̎", "K̎", "B̎","Q̎","W̎", "Y̎", "J̎", "Z̎", "V̎", "F̎", "H̎", "L̎", "N̎", "M̎", "C̎"],
        ["Ȑ", "T̏", "P̏", "S̏", "D̏", "G̏", "K̏", "B̏","W̏", "Y̏", "J̏", "Z̏", "V̏", "F̏", "H̏", "L̏", "N̏", "M̏", "C̏"],        ["R̗", "T̗", "P̗", "S̗", "D̗", "G̗", "K̗", "B̗","Q̗","W̗", "Y̗", "J̗", "Z̗", "V̗", "F̗", "H̗", "L̗", "N̗", "M̗", "C̗"],
        ["R̖", "T̖", "P̖", "S̖", "D̖", "G̖", "K̖", "B̖","Q̖","W̖", "Y̖", "J̖", "Z̖", "V̖", "F̖", "H̖", "L̖", "N̖", "M̖", "C̖"],
        ["Ṛ", "Ṭ", "P̣", "Ṣ", "Ḍ", "G̣", "Ḳ", "Ḅ","Q̣","Ẉ", "Ỵ", "J̣", "Ẓ", "Ṿ", "F̣", "Ḥ", "Ḷ", "Ṇ", "Ṃ", "C̣"],
        ["R̤", "T̤", "P̤", "S̤", "D̤", "G̤", "K̤", "B̤","Q̤","W̤", "Y̤", "J̤", "Z̤", "V̤", "F̤", "H̤", "L̤", "N̤", "M̤", "C̤"],
        ["Kh","Sh","Dh","Ch","Ph","Ts","Ps"],
        ["K͡h","S͡h","D͡h","C͡h","P͡h","T͡s","P͡s"],
        ["Ʈ", "Ɖ", "Ƒ", "ʔ", "Ɱ", "Ɲ", "Ɲ", "Ŋ", "ʙ", "ʀ", "Ɱ", "ɾ", "Ɽ","Φ", "Β", "Θ", "Ð", "Ʃ", "Ʒ", "Ƨ", "Ƶ", "Ç", "Ƴ", "X", "Ɣ", "Χ","ʁ", "Ħ", "ʕ", "Ȟ", "Ɬ", "Ɬ", "Ʋ", "Ɍ", "Ʀ", "Ⱳ", "L", "Ƚ", "Ƞ","ʟ", "Ɫ", "Ƚ̆", "Ƞ̆"],
        ["ʘ", "ǀ", "ǃ", "ǂ", "ǁ"],
        ["Ɓ", "Ɗ", "Ƒ", "Ɠ", "Ɠ"]].flat();
    }
    else if(lemRange === "2") {
        aV = ["Â","Ê","Î","Ô","Û","Ā","Ē","Ī","Ō","Ū","Ʊ","Ö"];
        aC = ["Č","Ş"];
    } else if(lemRange === "3")
    {
        aV = ["Ė","Ê","Ü","Ë"];
        aC = ["Ḟ"];
        v.splice(v.indexOf('I'),1);
    } else if(lemRange === "4") // Turkish
    {
        aV = ["I", "Ö", "Ü"];
        aC = ["Ç", "Ş", "Ğ"];
        c.splice(c.indexOf('Q'),1);
        c.splice(c.indexOf('W'),1);
        c.splice(c.indexOf('X'),1);

    } else if(lemRange === "5") // Maltese
    {
        aV = ["À", "È", "Ì", "Ò", "Ù"];
        aC = ["Ħ", "Ċ", "Ġ", "Ż"];
        c.splice(c.indexOf('C'),1);
        c.splice(c.indexOf('Y'),1);

    } else if(lemRange === "63") // French
    {
        aV = ["É", "È", "À", "Ù", "Â", "Ê", "Î", "Ô", "Û"];
        aC = ["Ç"];
    } else if(lemRange === "7") // Spanish
    {
        aV = ["Á", "É", "Í", "Ó", "Ú", "Ü"];
        aC = ["Ñ"];
    }   else if(lemRange === "8")
    {
        aC = PhoType(0);
        aV = PhoType(1)
        c = PhoType(2)
        v = PhoType(3)
    }

    // Loop through the lists and remove some letters
    let vAmount = Help.RandomNumber(2,5);
    let cAmount = Help.RandomNumber(Help.RandomNumber(10,16),23);
    let avAmount = Help.RandomNumber(1,Help.RandomNumber(3,7));
    let acAmount = Help.RandomNumber(1,Help.RandomNumber(4,6));

    v = Help.SuperSplice(v,vAmount);
    c = Help.SuperSplice(c,cAmount);

    if(lemRange !== "0") {
        aV = Help.SuperSplice(aV, avAmount);
        aC = Help.SuperSplice(aC, acAmount);
        c = Help.CTL(c, aC);
        v = Help.CTL(v, aV);
    }

    if(locked === true)
    {
        v = prevAlphabet[0];
        c = prevAlphabet[1];
    }

    prevAlphabet = [v,c];

    let uniqueSuffix = (Help.RFL([Help.RFL(v)+Help.RFL(c),Help.RFL(c)+Help.RFL(v),Help.RFL(v)+Help.RFL(c)+Help.RFL(v),Help.RFL(c)+Help.RFL(v)+Help.RFL(c)])).toLowerCase();
    let SUFFIXES = ["an","ian","ite","ic","id","","","","","","","","","","","","","","","","","",uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix];
    // Display symbols to aid in readability and aesthetics


    // Important Program-Wide Variables
    // Notes
    let notes = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];

        // Primaries - Other things are based on these
    // Main Nation Culture Group
    let c_N = [];
    let c_A = [];
    for (let i = 0; i < 4; i++)
    {
        c_N.push(BaseSeq(v,c));
        c_A.push(c_N[i] + Help.RFL(SUFFIXES));
    }

    // Capital
    let capitalCity = generate.CityType(BaseSeq(v,c));
    let adj_City = capitalCity + Help.RFL(SUFFIXES);
        // Secondaries - Other things are based on these, and these are based on the primaries
    // Alliance
    let alliance = generate.AllianceType(c_N[0],capitalCity);
    if(Help.RandomNumber(1,10) === 1){alliance = "None";}
    // Religion
    let reli = Help.RFL([c_N[0],c_N[1],c_N[2],c_N[3],capitalCity,(BaseSeq(v,c)),(BaseSeq(v,c)),(BaseSeq(v,c)),(BaseSeq(v,c))]);

        // Tertiaries - Not the base of anything, one-time use
    // Population Density
    let density = Help.RandomNumber(10,100) / 10;
    // Geographic Size
    let size = Help.RandomNumber(1,400000) * (Help.RandomNumber(800,1200) / 1000);
    //Unrest Metrics
    let corruption = Help.RandomNumber(0,100);
    let crimeRate = Help.RandomNumber(0,100);
    let environment = Help.RandomNumber(0,100);
    //Trade Metrics
    let specName = BaseSeq(v,c);
    let specSuffix = Help.RFL([" Worm"," Spider"," Herd"," Goat"," Sheep","","","","","","","","","",""]);
    let specSuffixAnimal = Help.RFL(["ite","ium","ite","ium","","","","","","","","","","","",""]);
    let specResource = Help.RFL([specName+specSuffix+" Metal",specName+specSuffix+" Mineral",specName+" Wood",specName+specSuffixAnimal+" Milk",specName+specSuffix+" Gems",specName+specSuffix+" Crystals",specName+" Blades",specName+specSuffixAnimal+" Ales",specName+specSuffixAnimal+" Stew",specName+specSuffixAnimal+" Wool",specName+specSuffixAnimal+" Silk",specName+" Textile",specName+specSuffix+" Armor",specName+" Shields",specName+" Pendents",specName]);
    let resources = ["Silica ","Rare Earth Minerals","Diamonds","Gems","Jewelry","Ornate Metalworking","Crops","Vegetables","Fruit","Wools","Textiles","Glass","Iron","Steel","Titanium","Tin","Lead","Copper","Zinc","Aluminum","Wood","Coal","Oil","Spices","Sugar","Tropical Fruits","Limestone","Ores","Metals","Livestock","Meat","Wheat","Rice","Leather","Food","Water","Alcohol","Medicine","Rubber","Radioactive Materials","Plastic","Fabric","People","Slavery","None","N/A","Technology","Entertainment","Art","Talent","Clothing","Religion","Culture"];
    let imported = Help.RFL(resources);
    let exported = Help.RFL(resources);
    //Culture+ Metrics
    let landMarkType = Help.RFL(["Statue","Gate","Wall","House","Capitol","Fountain","Lake","River","Creek","Falls","Waterfall","Bayou","Swamp","Forest","Desert","Road","Monument","Temple"]);
    let landMarkName = Help.RFL([c_N[0],c_N[1],capitalCity,c_N[2],c_N[3],BaseSeq(v,c),BaseSeq(v,c),BaseSeq(v,c),BaseSeq(v,c),BaseSeq(v,c)]);
    let landMark = Help.RFL([landMarkName+" "+landMarkType,landMarkType+" of "+landMarkName]);

    let workType = Help.RFL(["Book","Novel","Epic","Poem","Painting","Statue","Sculpture"]);
    let workName = Help.RFL([c_N[0],c_N[1],capitalCity,c_N[2],c_N[3],BaseSeq(v,c),BaseSeq(v,c),BaseSeq(v,c),BaseSeq(v,c),BaseSeq(v,c)]);
    let workFinal = Help.RFL([workName+" "+workType,workType+" of "+workName,workName+"'s "+workType]);

    let chance = Help.RandomNumber(1,3);
    if(chance === 1)
    {
        reli = Help.RFL(["Reformed","Traditional","Western","Eastern","Northern","Southern","Orthodox","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]) + " " + reli + Help.RFL(["ism","ism","ism","ism","ism","ism","id","ic","ian","an","a"]);
    } else if(chance === 2)
    {
        reli = Help.RFL(["Reformed","Traditional","Western","Eastern","Northern","Southern","Orthodox","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]) + " " + Help.RFL(["Cult of ","Sect of "," Folk of "," Church of "," Temple of ",(BaseSeq(v,c)+"'s ")]) + reli + Help.RFL(["ism","ism","ism","ism","ism","ism","id","ia","a"],v,c);
    } else if(chance === 3)
    {
        reli = Help.RFL(["Reformed","Traditional","Western","Eastern","Northern","Southern","Orthodox","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]) + " " + reli + Help.RFL(["ist","ist","ist","ist","ist","ist","id","ic","ian","an","a"])+" "+Help.RFL(["Cult","Sect","Folk","Church","Temple"]);
    }

    // NATION
    document.getElementById("demo").innerText = generate.NationType(c_N[0],c_N[1],false);
    document.getElementById("city").innerText = "Capital: "+capitalCity;
    document.getElementById("leader").innerText = ": "+BaseSeq(v,c);

    // Diplomacy
    document.getElementById("alliance").innerText = Help.U(0,2)+" "+alliance+" "+Help.U(1,2);
    
    document.getElementById("diplomacy").innerText = Help.U(0,3)+" "+"Diplomacy: "+Help.RFL(["At War","Ostracized","Hated","Isolated","On Bad Terms with Neighbors","Plentiful Border Disputes","Post-war","Neutral","Plays multiple sides","Supplies aide","Unimportant","Important ally","Regional Power","Threatening","Unassuming","Friends with the right people","Friends with the wrong people","Insignificant","Monstrous","Global Hegemon","Hegemon","Very Influential","Strongman","Everyone's Friend"])+" "+Help.U(1,3);

    // Geography
    document.getElementById("geography").innerText = Help.U(0,4)+" "+"Size: "+Math.round(size).toLocaleString()+" "+Help.U(1,4);
    document.getElementById("pop").innerText = Help.U(0,5)+" "+"Population: "+Math.round(size*density).toLocaleString()+" | "+density+" per square mile "+Help.U(1,5);
    document.getElementById("geo").innerText = Help.U(0,6)+" "+Help.RFL(["Mostly","Partially","Entirely"])+Help.RFL([" on an Island"," on a Peninsula"," landlocked"," across a coast"," on a strait"," on several islands"," on the mainland"," on an isthmus"])+" "+Help.U(1,6);
    // Economy +
    document.getElementById("econ").innerText = Help.U(0,7)+" "+"Economy: "+Help.RFL(["Depression","Recession","Fine","Fairly Good","Good","Great","Central Trade Nation","Trade Power"])+" "+Help.U(1,7); // TO DO
    document.getElementById("im").innerText = Help.U(0,8)+" "+"Top Import: "+imported+" "+Help.U(2,resources.indexOf(imported)); // TO DO
    document.getElementById("ex").innerText = Help.U(0,9)+" "+"Top Export: "+exported+" "+Help.U(2,resources.indexOf(exported)); // TO DO
    
    document.getElementById("specres").innerText = Help.U(0,10)+" "+"Special Resource: "+specResource+" "+Help.U(1,10); // TO DO

    //Stability
    document.getElementById("unrest").innerText = Help.U(0,11)+" "+"Unrest: "+Math.round(((corruption+crimeRate+environment)/3))+"%"+" "+Help.U(1,11);
    document.getElementById("corr").innerText = Help.U(0,12)+" "+"Corruption: "+Help.Translate(corruption,["Extremely ","Very ","Very ","Very ","Quite ","","","Somewhat ","Somewhat ","Not "])+"Corrupt"+" "+Help.U(1,12);
    document.getElementById("crime").innerText = Help.U(0,13)+" "+"Crime Rate: "+Help.Translate(crimeRate,["Very High","High","Somewhat High","Average","Average","Average","Somewhat Low","Low","Very Low","Nonexistent"])+" "+Help.U(1,13);
    document.getElementById("enviro").innerText = Help.U(0,14)+" "+"Environment: "+Help.Translate(environment,(["Extremely Polluted","Polluted","Polluted","Slightly Polluted","Normal","Normal","Normal","Clean","Pristine","Pristine"]))+" "+Help.U(1,14);
    //$add Headline

    // Culture +
    document.getElementById("culture").innerText = Help.U(0,16)+" "+"Culture: "+c_A[0]+" "+Help.U(1,16);
    document.getElementById("religion").innerText = Help.U(0,18)+" "+"Religion: "+Help.RFL([reli,"Tribal","Various Folk Religions","Animist","Folk","None","Atheist",reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli])+" "+Help.U(1,18);
    document.getElementById("language").innerText = Help.U(0,17)+" "+"Language: "+Help.RFL(["Old","Middle","New","Standard","Modern","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]) + " " + Help.RFL([c_N[0],c_N[0],capitalCity,c_N[1],c_N[2],c_N[3]])+Help.RFL(["ic","ic","ic","ic","ish","an","in","","","","","","",""])+" "+Help.U(1,17);

    // Culture+
    document.getElementById("landm").innerText = Help.U(0,19)+" "+"Landmark: "+landMark+" "+Help.U(1,19); // TO DO
    document.getElementById("greatwork").innerText = Help.U(0,20)+" "+"Great Work: "+workFinal+" "+Help.U(1,20); // TO DO
    document.getElementById("anthem").innerText = Help.U(0,21)+" "+"Anthem: " + generate.GetScale(notes,BaseSeq(v,c)+Help.RFL(SUFFIXES))+" "+Help.U(1,21);

    // Subdivisions + //$add Type
    let subTypes = ["Provinces","Municipalities","Counties","Regions","States","Oblasts","Territories","Autonomous Republics","Autonomous Territories","Districts"];
    let givenSub = Help.SuperSplice(subTypes,3);
    Help.Dropdown(givenSub.length,givenSub,"Sub")

    let otherNationMain = BaseSeq(v,c);
    let otherNationAdj = otherNationMain + Help.RFL(SUFFIXES);
    let civilMains = [otherNationMain,c_N[1],c_N[2],c_N[3],c_N[0],c_N[0],c_N[0],c_N[0],c_N[0],c_N[0],c_N[0]];
    let civilAdjs = [otherNationAdj,c_A[1],c_A[2],c_A[3],c_A[0],c_A[0],c_A[0],c_A[0],c_A[0],c_A[0],c_A[0]];

    let civilNationMain = Help.RFL(civilMains);
    let civilNationAdj = Help.Find(civilAdjs,civilMains,civilNationMain);
    let rebellion = Help.RFL([BaseSeq(v,c)+Help.RFL(SUFFIXES),c_A[1],c_A[2],c_A[3]]);

    let civilNation = generate.NationType(civilNationMain,civilNationAdj,true);
    let otherNation = generate.NationType(otherNationMain,otherNationAdj,true);
    let otherAlliance = generate.AllianceType(BaseSeq(v,c),BaseSeq(v,c));

    document.getElementById("politic").innerText = Help.U(0,26)+"Situation: "+Help.RFL([
        "At war with the "+otherNation, // One
        "At peace ",
        "At war with the " + otherAlliance, // Alliance
        "In a civil war with the " + civilNation, // One
        "Dealing with the " + rebellion + " rebellion", // Nation
    ])+" "+Help.U(1,26);

    //Demographics
    let demographics = [c_A[0],c_A[2],c_A[3],adj_City];
    Help.Breakdown(demographics,4,"demo","Other Peoples");

    /// --- EXTRAS
    if(dynastical === 0)
    {
        document.getElementById("last").innerText = BaseSeq(v,c);
    }
    else
    {
        document.getElementById("last").innerText = c_N[0];
    }
    document.getElementById("alphabeta").innerText = Help.CTL(c,v);
    document.getElementById("lettercount").innerText = " "+String(Help.CTL(c,v).length)+" letters";
    document.getElementById("suffix").innerHTML = Help.RFL(["","","","","","","","","","","","","","","","","","","","","","","","","","","Jr.","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII"])+Help.U(0,0);

    /// --- EXTRAS
    document.getElementById("numName").innerText = String(numName);
}


// Phoneme Classes are groups of phonemes that more commonly go together
// Phoneme Clusters are groups of similar phonemes
// Phoneme Type determines what kind of groupings can occur


function PhoType(i)
{
    let BASIC_VOWELS = ["A", "U","I", "O","E"];
    let BASIC_CONSONANTS = ["R", "X", "T", "P", "S", "D", "G", "K", "B","Q","W", "Y", "J", "Z", "V", "F", "H", "L", "N", "M", "C"];
    let AV = [["Ə", "Æ","I","Ø","Œ"],
        ["Á","É","Í","Ó","Ú"],
        ["Ă","Ĕ","Ĭ","Ŏ","Ŭ"],
        ["Ȧ","Ė","İ","Ȯ","U̇"],
        ["Ä","Ë","Ï","Ö","Ü"],
        ["Ả","Ẻ","Ỉ","Ỏ","Ủ"],
        ["À","È","Ì","Ò","Ù"],
        ["Â","Ê","Î","Ô","Û"],
        ["Ã","Ẽ","Ĩ","Õ","Ũ"],
        ["A̅","E̅","I̅","O̅","U̅"],
        ["Ȃ","Ȇ","Ȋ","Ȏ","Ȗ"],
        ["Ő","Ű"],
        ["Ě"],
        ["A̭","Ḙ","I̭","O̭","Ṷ"],
        ["A̰","Ḛ","Ḭ","O̰","Ṵ"],
        ["A̱","E̱","I̱","O̱","U̱"],
        ["A̯","E̯","I̯","O̯","U̯"],
        ["A̮","E̮","I̮","O̮","U̮"],
        ["Ą","Ę","Į","Ǫ","Ų"],
        ["Ḁ","E̥","I̥","O̥","U̥"],
        ["A̬","E̬","I̬","O̬","U̬"],
        ["A̩","E̩","I̩","O̩","U̩"],
        ["A̩","E̩","I̩","O̩","U̩"],
        ["A̧","Ȩ","I̧","O̧","U̧"],
        ["A͡u","E͡a","I͡u","O͡a","U͡o","U͡a","U͡i","I͡a","A͡e","O͡e","A͜u","E͜a","I͜u","O͜a","U͜o","U͜a","U͜i","I͜a","A͜e","O͜e"],
        ["Ā","Ē","Ī","Ō","Ū"],
        ["Å","E̊","I̊","O̊","Ů"],
        ["A̎","E̎","I̎","O̎","U̎"],
        ["Ȁ","Ȅ","Ȉ","Ȍ","Ȕ"],
        ["Â","Ê","Î","Ô","Û"],
        ["Ő","Ű"],
        ["A̗","E̗","I̗","O̗","U̗"],
        ["A̖","E̖","I̖","O̖","U̖"],
        ["Ạ", "Ụ","Ị", "Ọ","Ẹ"],
        ["A̤", "Ṳ","I̤", "O̤","E̤"],
        ["Ɨ", "Ű", "Ɯ", "Ʊ", "Ø", "Ǝ", "Ɵ", "Ɣ", "Ə", "Ɛ", "Œ", "Ƹ", "ɞ", "Ʌ", "Ɔ", "Æ", "Ɐ", "ɶ", "Ɑ", "Ɒ"]];
    let AC = [["Ğ", "Ð", "Þ","Β","Ʋ"],
        ["Ś","Ẃ", "Ý", "Ź", "Ĺ", "Ń", "Ć"],
        ["R̉", "T̉", "P̉", "G̉", "K̉", "B̉","Q̉", "J̉", "V̉", "F̉", "H̉", "M̉"],
        ["R̐", "T̐", "P̐", "S̐", "D̐", "G̐", "K̐", "B̐","Q̐","W̐", "Y̐", "J̐", "Z̐", "V̐", "F̐", "H̐", "L̐", "N̐", "M̐", "C̐"],
        ["Ŝ", "Ĝ","Ŵ", "Ŷ", "Ĵ", "Ĥ", "Ĉ"],
        ["Ȓ","T̑","P̑","S̑","D̑","G̑","K̑","B̑","Q̑","W̑","Y̑","J̑","Z̑","V̑","F̑","H̑","L̑","N̑","M̑","C̑"],
        ["R̃","T̃","P̃","S̃","D̃","G̃","K̃","B̃","Q̃","W̃","Ỹ","J̃","Z̃","Ṽ","F̃","H̃","L̃","Ñ","M̃","C̃"],
        ["R̰","T̰","P̰","S̰","D̰","G̰","K̰","B̰","Q̰","W̰","Y̰","J̰","Z̰","V̰","F̰","H̰","L̰","N̰","M̰","C̰"],
        ["Ř","Ť","Š","Ď","Ň","Č"],
        ["R̭","Ṱ","P̭","S̭","Ḓ","G̭","K̭","B̭","Q̭","W̭","Y̭","J̭","Z̭","V̭","F̭","H̭","Ḽ","Ṋ","M̭","C̭"],
        ["Ṟ","Ṯ","P̱","S̱","Ḏ","G̱","Ḵ","Ḇ","Q̱","W̱","Y̱","J̱","Ẕ","V̱","F̱","H̱","Ḻ","Ṉ","M̱","C̱"],
        ["R̯","T̯","P̯","S̯","D̯","G̯","K̯","B̯","Q̯","W̯","Y̯","J̯","Z̯","V̯","F̯","H̯","L̯","N̯","M̯","C̯"],
        ["R̮","T̮","P̮","S̮","D̮","G̮","K̮","B̮","Q̮","W̮","Y̮","J̮","Z̮","V̮","F̮","Ḫ","L̮","N̮","M̮","C̮"],
        ["R̨","T̨","P̨","S̨","D̨","G̨","K̨","B̨","Q̨","W̨","Y̨","J̨","Z̨","V̨","F̨","H̨","L̨","N̨","M̨","C̨",],
        ["R̥","T̥","P̥","S̥","D̥","G̥","K̥","B̥","Q̥","W̥","Y̥","J̥","Z̥","V̥","F̥","H̥","L̥","N̥","M̥","C̥"],
        ["R̬","T̬","P̬","S̬","D̬","G̬","K̬","B̬","Q̬","W̬","Y̬","J̬","Z̬","V̬","F̬","H̬","L̬","N̬","M̬","C̬"],
        ["R̍","T̍","P̍","S̍","D̍","G̍","K̍","B̍","Q̍","W̍","Y̍","J̍","Z̍","V̍","F̍","H̍","L̍","N̍","M̍","C̍"],
        ["Ŗ","Ţ","Ş","Ḑ","Ģ","Ķ","Ḩ","Ļ","Ņ","Ç"],
        ["Ṙ", "Ṫ", "Ṗ", "Ṡ", "Ḋ", "Ġ", "K̇", "Ḃ","Q̇","Ẇ", "Ẏ", "J̇", "Ż", "V̇", "Ḟ", "Ḣ", "L̇", "Ṅ", "Ṁ", "Ċ"],
        ["Ẅ", "Ÿ"],
        ["Ẁ", "Ỳ"],
        ["R̄", "T̄", "P̄", "S̄", "D̄", "Ḡ", "K̄", "B̄","Q̄","W̄", "Ȳ", "J̄", "Z̄", "V̄", "F̄", "H̄", "L̄", "N̄", "M̄", "C̄"],
        ["R̊", "T̊", "P̊", "S̊", "D̊", "G̊", "K̊", "B̊","Q̊","W̊", "Y̊", "J̊", "Z̊", "V̊", "F̊", "H̊", "L̊", "N̊", "M̊", "C̊"],
        ["R̎", "T̎", "P̎", "S̎", "D̎", "G̎", "K̎", "B̎","Q̎","W̎", "Y̎", "J̎", "Z̎", "V̎", "F̎", "H̎", "L̎", "N̎", "M̎", "C̎"],
        ["Ȑ", "T̏", "P̏", "S̏", "D̏", "G̏", "K̏", "B̏","W̏", "Y̏", "J̏", "Z̏", "V̏", "F̏", "H̏", "L̏", "N̏", "M̏", "C̏"],        ["R̗", "T̗", "P̗", "S̗", "D̗", "G̗", "K̗", "B̗","Q̗","W̗", "Y̗", "J̗", "Z̗", "V̗", "F̗", "H̗", "L̗", "N̗", "M̗", "C̗"],
        ["R̖", "T̖", "P̖", "S̖", "D̖", "G̖", "K̖", "B̖","Q̖","W̖", "Y̖", "J̖", "Z̖", "V̖", "F̖", "H̖", "L̖", "N̖", "M̖", "C̖"],
        ["Ṛ", "Ṭ", "P̣", "Ṣ", "Ḍ", "G̣", "Ḳ", "Ḅ","Q̣","Ẉ", "Ỵ", "J̣", "Ẓ", "Ṿ", "F̣", "Ḥ", "Ḷ", "Ṇ", "Ṃ", "C̣"],
        ["R̤", "T̤", "P̤", "S̤", "D̤", "G̤", "K̤", "B̤","Q̤","W̤", "Y̤", "J̤", "Z̤", "V̤", "F̤", "H̤", "L̤", "N̤", "M̤", "C̤"],
        ["Kh","Sh","Dh","Ch","Ph","Ts","Ps"],
        ["K͡h","S͡h","D͡h","C͡h","P͡h","T͡s","P͡s"],
        ["ʈ", "ɖ", "ɟ","ʔ","ɱ", "ɳ", "ɲ", "ŋ","ʙ", "ʀ","ⱱ", "ɾ", "ɽ","ɸ", "β", "θ", "ð", "ʃ", "ʒ","ʂ", "ʐ", "ç", "ʝ", "x", "ɣ", "χ", "ʁ", "ħ", "ʕ", "ɦ","ɬ", "ɮ", "ʋ", "ɹ", "ɻ", "ɰ","l", "ɭ", "ʎ", "ʟ","ɺ", "ɭ̆", "ʎ̆"],
        ["ʘ", "ǀ", "ǃ", "ǂ", "ǁ"],["ɓ", "ɗ", "ʄ", "ɠ", "ʛ"]];
    let phoType = Help.RandomNumber(1,7);
    let aCC = [];
    let aVV = [];
    let bCC = [];
    let bVV = [];
    
    switch (phoType)
    {
        case 1: // basic
            aCC = [...new Set([Help.RFL(AC),Help.RFL(AC),Help.RFL(AC)].flat())];
            aVV = [...new Set([Help.RFL(AV),Help.RFL(AV),Help.RFL(AV)].flat())];
            bCC = BASIC_CONSONANTS;
            bVV = BASIC_VOWELS;
            break;
        case 2: // chaotic
            aCC = AC.flat();
            aVV = AV.flat();
            bCC = BASIC_CONSONANTS;
            bVV = BASIC_VOWELS;
            break;
        case 3: // Barely Vowels
            aCC = AC.flat();
            bCC = BASIC_CONSONANTS;
            bVV = [...new Set([Help.RFL(BASIC_VOWELS)].flat())];
            aVV = [...new Set([Help.RFL(Help.RFL(AV))].flat())];
            break;
        case 4: // Barely Consonants
            bVV = BASIC_VOWELS;
            aVV = AV.flat();
            aCC = [...new Set([Help.RFL(Help.RFL(AC)),Help.RFL(Help.RFL(AC))].flat())];
            bCC = [...new Set([Help.RFL(BASIC_CONSONANTS),Help.RFL(BASIC_CONSONANTS)].flat())];
            break;
        case 5: // Barely Anything
            aCC = [...new Set(Help.CTL(Help.RFL(AV),Help.RFL(AV)))];
            bVV = [...new Set([Help.RFL(BASIC_VOWELS)].flat())];
            aVV = [...new Set([Help.RFL(Help.RFL(AV))].flat())];
            aCC = [...new Set([Help.RFL(Help.RFL(AC)),Help.RFL(Help.RFL(AC))].flat())];
            bCC = [...new Set([Help.RFL(BASIC_CONSONANTS),Help.RFL(BASIC_CONSONANTS)].flat())];
            break;
        case 6: // One accent
            if(Help.RandomNumber(1,2) === 1)
            {
                aCC = [Help.RFL(Help.RFL(AC))];
            } else
            {
                aVV = [Help.RFL(Help.RFL(AV))];
            }
            bCC = BASIC_CONSONANTS;
            bVV = BASIC_VOWELS;
            break;
        case 7: // Entirely Accents
            bCC = AC.flat();
            bVV = AV.flat();
            break;
        default:
    }
    return ([aCC,aVV,bCC,bVV][i]);
}

const ids = ["Diplomacy","Culture","CulturePlus","Geography","Economy","Unrest","Government","Demographic","Check"];
for(let i = 0; i < ids.length; i++)
{
    document.getElementById(ids[i] + "Box").addEventListener("change", function ()
    {
        document.getElementById(ids[i] + "Section").style.display = this.checked ? "block" : "none";
    });
}
let locked = false;
document.getElementById("LockBox").addEventListener("change", function()
{
    locked = !!this.checked;
});
document.getElementById("modeTypes").addEventListener("change", function()
{
    document.getElementById("stylesheet").href = "styles/"+this.value+".css";
});
document.getElementById("fontTypes").addEventListener("change", function()
{
    document.documentElement.style.fontFamily = this.value;
});
let numName = 0; // Simple variable to display the number of names the user has generated in a session
let dynastical = 0;

// (Debug Key | Example Variable) : Description
    // (debug/dynasty | 1) : Leader's last name will always match the nation
    // (debug/government | "Republic") : Government name will always be "Republic"
    // (debug/name | "Germany") : Nation name will always be "Germany"
    // (debug/union | 1) : Nation will have a basic union
    // (debug/union | 4) : Nation will have a complex union
    // (debug/front | 0) : Nation name will be in front of government name