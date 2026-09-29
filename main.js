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
    {
        return Help.RFL(listList[fromList.indexOf(whatInList)]);
    },
    RandomNumber(min,max) // Returns a random number in-between two values
    {
        max++;
        return Math.floor(Math.random() * (max - min) + min);
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
    NationType(nat,union,coder)
    {
        dynastical = 0;
        let governmentTypes = Help.RandomNumber(0,10);
        let frontOrBack = Help.RandomNumber(1,2);
        let basicLeaders = ["King","President","Chancellor","Leader","Emperor","Minister","Governor"];
        let government;
        let suffixes = ["an", "ian", "ite", "id","id","", "", ""];
        let leaderType;
        let leaderTypes;
        let unionType = "";
        let ifUnion = "";
        let specials = Help.RandomNumber(1,20);
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
        if(governmentTypes === 0) // Democracy
        {
            govBack = ["Republic","Democracy","Senate","Consulship","Autonomy","Sovereignt"];
            leaderTypes = [["President","Prime Minister","Chancellor"],["President","Prime Minister","Chancellor"],["Senator","Lead Senator","Speaker"],["Consul","Pro-Consul"],basicLeaders,basicLeaders];
            government = Help.RFL(govBack);
            leaderType = Help.Find(leaderTypes,govBack,government);
        }
        else if(governmentTypes === 1) // Monarchy
        {

            govBack = ["Count","Baron","Kingdom","Empire","Duch","Archduch"];
            leaderTypes = [["Count","Governor"],["Baron","Governor"],["King","Emperor","Archduke"],["Emperor","High King"],["Duke"],["Duke","High Duke","Archduke"]];
            government = Help.RFL(govBack);
            leaderType = Help.Find(leaderTypes,govBack,government);
            dynastical = Help.RandomNumber(0,3);
        }
        else if(governmentTypes === 2) // Tyranny
        {
            govBack = ["Dictatorship","Regime","Fascism","Autocrac","Despotism"];
            leaderTypes = [["Dictator","Supreme Leader","Leader"],basicLeaders,["Dictator","Leader"],["Dictator","Leader"],["Despot","Minister","Dictator","General","Commander"]];
            government = Help.RFL(govBack);
            leaderType = Help.Find(leaderTypes,govBack,government);

            dynastical = Help.RandomNumber(0,1);
        }
        else if(governmentTypes === 3) // Tribal
        {
            govBack = ["Reserve","Tribe","Folk","Chiefdom","Clan","House","Kinfolk","Clique"];
            leaderTypes = [["Chief","King","Governor","Leader"],["Chief","King"],["Chief","Leader","Emperor"],["Chief"],["Chief","King","Emperor"],["Chief","Head","Emperor"],["Chief","Head","Emperor"],["Warlord","Leader","General","Commander","King","Dictator"]];
            government = Help.RFL(govBack);
            leaderType = Help.Find(leaderTypes,govBack,government);

            dynastical = Help.RandomNumber(0,1);
        }
        else if(governmentTypes === 4) // Religious
        {
            govBack = ["Theocracy","Priestdom","Cult"];
            leaderTypes = ["Theocrat","Priest","Pope","Caliph","Imam","Bishop","Cardinal","Oracle","Elder","Father"];
            government = Help.RFL(govBack);
            leaderType = Help.RFL(leaderTypes);
        }
        else if(governmentTypes === 5) // Socialist
        {
            govBack = ["Soviet Republic","Syndicate","Socialist Republic","Social Democrac","People's Republic"];
            leaderTypes = ["Minister","Prime Minister","Chancellor","Secretary","General Secretary","President","Chairman","Officer","Supreme Leader"];
            government = Help.RFL(govBack);
            leaderType = Help.RFL(leaderTypes);
        } else if(governmentTypes === 6) // Dynastic
        {
            govBack = ["Dynast","Empire","Kingdom","Clan"];
            leaderTypes = [["Emperor","Head"],["Emperor"],["King"],["King","Leader","Head"]];
            government = Help.RFL(govBack);
            leaderType = Help.Find(leaderTypes,govBack,government);

            dynastical = 0;
        } else if(governmentTypes === 7) // Union
        {
            govBack = ["Union","Federation","Confederation","State"];
            government = Help.RFL(govBack);
            leaderType = Help.RFL(basicLeaders);
        } else if(governmentTypes === 8) // Muslim / Persian / Arabic
        {
            govBack = ["Sultanate","Caliphate","Imamate","Emirate","Shahdom","Sheikhdom","Empire"];
            leaderTypes = [["Sultan","Caliph"],["Caliph","Sultan"],["Imam"],["Shah"],["Sheikh"],["Sultan","Caliph","Imam","Shah","Sheikh"]]
            government = Help.RFL(govBack);
            leaderType = Help.Find(leaderTypes,govBack,government);

            dynastical = Help.RandomNumber(0,9);
            suffixes = ["id","id","id","id","id","id","an","","",""];
        } else if(governmentTypes === 9) // Exotic
        {
            govBack = ["Tsardom","Empire","Compan"];
            leaderTypes = [["Tsar"],["Tsar","Caesar","Kaiser","Imperator"],basicLeaders,["CEO","Executive","Governor","Supervisor"]];
            government = Help.RFL(govBack);
            leaderType = Help.Find(leaderTypes,govBack,government);
        } else if(governmentTypes === 10) // Nomadic
        {
            govBack = ["Khanate", "Khaganate", "Confederation","Clique"];
            leaderTypes = ["Khan","Khagan","Emperor","King","Warlord"];
            government = Help.RFL(govBack);
            leaderType = Help.RFL(leaderTypes);
        }
        let acies = ["Democrac","Autonom","Sovereignt","Autocrac","Count","Baron","Duch","Archduch","Compan","Social Democrac","Theocrac","Dynast"];
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
        document.getElementById("leadership").innerText = coder+" "+leaderType;
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
    PoliticalType(nat)
    {
        let frontOrBack = Math.floor(Math.random() * 2);
        let government = Help.RFL(["Republic","Democracy","Senate","Consulship","Autonomy","Sovereignty","Dynasty","County","Barony","Kingdom","Empire","Duchy","Archduchy","Sultanate",
            "Dictatorship","Regime","Fascism","Autocracy","Despotism","Reserve","Tribe","Folk","Chiefdom","Clan","House","Kinfolk","Clique","Confederation","Federation","Theocracy","Priestdom","Cult","State","Union","Khanate","Khaganate",
            "Soviet Republic","Syndicate","Socialist Republic","Social Democracy","People's Republic"]);
        let suffixes = ["an", "ian", "ite", "id","id","", "", ""];

        if (frontOrBack === 1) {
            return government + " of" + Help.RFL([" ", " the "]) + nat;
        } else {
            return nat + Help.RFL(suffixes) + " " + government;
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
        let scaleName;
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
    GetScale(notes,coder,coder2,specialName)
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
        document.getElementById("bassline").innerText = coder+" Bassline: "+bassline+" "+coder2;
        return melody.join(" | ");
    }
};
let prevAlphabet = [];
// The actual program code, contains UI and function calls for basic program usage
function DoIt() {
    numName++
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
    // Generate List of Available Letters
    let endItV = Help.RandomNumber(3,5); // How many basic Vowels are allowed to be removed
    let endItC = Help.RandomNumber(Help.RandomNumber(10,16),23); // How many basic consonants are allowed to be removed
    let endItAV = Help.RandomNumber(1,Help.RandomNumber(3,7)); // How many Accented Vowels are allowed to be left in a script
    let endItAC = Help.RandomNumber(1,Help.RandomNumber(4,6)); // How many Accented Consonants are allowed to be left

    // Loop through the lists and remove some letters
    
    while (v.length > endItV) {
        v.splice(Help.RandomNumber(0,v.length),1);
    }
    while (c.length > endItC) {
        c.splice(Help.RandomNumber(0,c.length),1);
    }
    // Applying custom values
    if (lemRange !== "0") {
        while (aV.length > endItAV) {
            aV.splice(Help.RandomNumber(0,aV.length),1);
        }
        while (aC.length > endItAC) {   
            aC.splice(Help.RandomNumber(0,aC.length),1);
        }
        
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
    let omRange = document.getElementById("omMount").value;
    let codeType = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
    let codeType2 = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
    let codeType3 = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
    if(omRange === "0") // Displays corresponding Unicode symbols
    {
        codeType = ["♔","#","♡","𓐍","∡","🏙","🗺","﹩","→","←","❖","☠","!","⛑","🛢","🗞","⛿","𐰅","♱","🏛","🕮","𝄞","𝄢","🏝","⌂","𐦆","⇝"];
        codeType2 = ["♚","#","♡","𓐍","≞","🏙","🗺","₼","←","→","❖","☠","❣","⛑","🛢","🗞","⛿","ت","☪","🏛","🕮","𝄇","𝄇","🏝","🏘","𐦂","⇜"];
        codeType3 = ["◈ ","◈","◈","◈","◈","◈","⍩","⍩","⍩","Δ","Δ","⧖","🛠","🛠","🛠","🛠","🛠","🛠","🛠","🛠","🏝","🛢","🛢","⧗","⍩","⍩","🛠","🛠","🛠","𓃖","⍩","⍩","⍩","Δ","⍩","⧗","⧗","☤","🛢","☢","🛢","Δ","⚒","⚒","⤬","⤬","⚒","🖌","🖌","⚒","🖌","✝","🖌"];
    } else if(omRange === "1") // Displays corresponding Emojis
    {
        codeType = ["👑","🔢","🤝","🌐","📏","🏙️","🗺️","💰","➡️","⬅️","💎","😀","😈","🚔","🪾","📰","🏴","🔤","⛪","🗼","📚","🎶","🎵","🏞️","🏡","🏛️","💥"];
        codeType2 = ["✊","🔡","🤝","🌐","📐","🌆","🗺️","🪙","⬅️","➡️","🪵","😡","🫰","🚔","🌳","🗞️","🏳️","🔤","🕌","🗿","🖼️","🎶","🎵","🌅","🛖","🏛️","🕊️"];
        codeType3 = ["⌛️","💎","💎","💎","💎","⛏","🌽","🥦","🍐","🐏","🧶","🪟","⛏","⛏","⛏","⛏","⛏","⛏","⛏","⛏","🪓","🏭","🛢","🧂","🍰","🥭","🪨","⛏","⛏","🐄","🥩","🍞","🍚","🐄","🍝","💧","🍺","💊","🏭","☢️","🏭","🧶","⛓","⛓","❌","❌","🖥","✒️","🖼","🎻","🏭","☯️","🎭"];
    }

    // Important Program-Wide Variables
    // Notes
    let notes = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];

    let unit = "Mile";

        // Primaries - Other things are based on these
    // Main Nation Culture Group
    let c_Main = BaseSeq(v,c);
    let adj_Main = c_Main + Help.RFL(SUFFIXES);
    // First Culture
    let c_One = BaseSeq(v,c);
    let adj_One = c_One + Help.RFL(SUFFIXES);
    // Second Culture
    let c_Two = BaseSeq(v,c);
    let adj_Two = c_Two + Help.RFL(SUFFIXES);
    // Third Culture
    let c_Three = BaseSeq(v,c);
    let adj_Three = c_Three + Help.RFL(SUFFIXES);
    // Capital
    let capitalCity = generate.CityType(BaseSeq(v,c));
    let adj_City = capitalCity + Help.RFL(SUFFIXES);
        // Secondaries - Other things are based on these, and these are based on the primaries
    // Alliance
    let alliance = generate.AllianceType(c_Main,capitalCity);
    if(Help.RandomNumber(1,10) === 1){alliance = "None";}
    // Religion
    let reli = Help.RFL([c_Main,c_One,c_Two,c_Three,capitalCity,(BaseSeq(v,c)),(BaseSeq(v,c)),(BaseSeq(v,c)),(BaseSeq(v,c))]);

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
    let landMarkName = Help.RFL([c_Main,c_One,capitalCity,c_Two,c_Three,BaseSeq(v,c),BaseSeq(v,c),BaseSeq(v,c),BaseSeq(v,c),BaseSeq(v,c)]);
    let landMark = Help.RFL([landMarkName+" "+landMarkType,landMarkType+" of "+landMarkName]);

    let workType = Help.RFL(["Book","Novel","Epic","Poem","Painting","Statue","Sculpture"]);
    let workName = Help.RFL([c_Main,c_One,capitalCity,c_Two,c_Three,BaseSeq(v,c),BaseSeq(v,c),BaseSeq(v,c),BaseSeq(v,c),BaseSeq(v,c)]);
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
    document.getElementById("demo").innerText = generate.NationType(c_Main,c_One,codeType[0]);
    document.getElementById("city").innerText = "Capital: "+capitalCity;
    document.getElementById("leader").innerText = ": "+BaseSeq(v,c);
    document.getElementById("admin").innerHTML = codeType[1]+" "+`${Help.RFL(["A","C","U","F","S"])}${Help.RFL(["Tr","Cl","Th","Ty","Ol","Re","De","Dy","Ci","Ec","Te","An"])}:${Help.RFL(["0","1","2","3","4"])}`+" "+codeType2[1];

    // Diplomacy
    document.getElementById("alliance").innerText = codeType[2]+" "+alliance+" "+codeType2[2];
    
    document.getElementById("diplomacy").innerText = codeType[3]+" "+"Diplomacy: "+Help.RFL(["At War","Ostracized","Hated","Isolated","On Bad Terms with Neighbors","Plentiful Border Disputes","Post-war","Neutral","Plays multiple sides","Supplies aide","Unimportant","Important ally","Regional Power","Threatening","Unassuming","Friends with the right people","Friends with the wrong people","Insignificant","Monstrous","Global Hegemon","Hegemon","Very Influential","Strongman","Everyone's Friend"])+" "+codeType2[3];

    // Geography
    document.getElementById("geography").innerText = codeType[4]+" "+"Size: "+Math.round(size).toLocaleString()+" "+codeType2[4];
    document.getElementById("pop").innerText = codeType[5]+" "+"Population: "+Math.round(size*density).toLocaleString()+" | "+density+" per square "+unit+" "+codeType2[5];
    document.getElementById("geo").innerText = codeType[6]+" "+Help.RFL(["Mostly","Partially","Entirely"])+Help.RFL([" on an Island"," on a Peninsula"," landlocked"," across a coast"," on a strait"," on several islands"," on the mainland"," on an isthmus"])+" "+codeType2[6];
    // Economy +
    document.getElementById("econ").innerText = codeType[7]+" "+"Economy: "+Help.RFL(["Depression","Recession","Fine","Fairly Good","Good","Great","Central Trade Nation","Trade Power"])+" "+codeType2[7]; // TO DO
    document.getElementById("im").innerText = codeType[8]+" "+"Top Import: "+imported+" "+codeType3[resources.indexOf(imported)]; // TO DO
    document.getElementById("ex").innerText = codeType[9]+" "+"Top Export: "+exported+" "+codeType3[resources.indexOf(exported)]; // TO DO
    
    document.getElementById("specres").innerText = codeType[10]+" "+"Special Resource: "+specResource+" "+codeType2[10]; // TO DO

    //Stability
    document.getElementById("unrest").innerText = codeType[11]+" "+"Unrest: "+Math.round(((corruption+crimeRate+environment)/3))+"%"+" "+codeType2[11];
    document.getElementById("corr").innerText = codeType[12]+" "+"Corruption: "+Help.Translate(corruption,["Extremely ","Very ","Very ","Very ","Quite ","","","Somewhat ","Somewhat ","Not "])+"Corrupt"+" "+codeType2[12];
    document.getElementById("crime").innerText = codeType[13]+" "+"Crime Rate: "+Help.Translate(crimeRate,["Very High","High","Somewhat High","Average","Average","Average","Somewhat Low","Low","Very Low","Nonexistent"])+" "+codeType2[13];
    document.getElementById("enviro").innerText = codeType[14]+" "+"Environment: "+Help.Translate(environment,(["Extremely Polluted","Polluted","Polluted","Slightly Polluted","Normal","Normal","Normal","Clean","Pristine","Pristine"]))+" "+codeType2[14];
    //$add Headline

    // Culture +
    document.getElementById("culture").innerText = codeType[16]+" "+"Culture: "+adj_Main+" "+codeType2[16];
    document.getElementById("religion").innerText = codeType[18]+" "+"Religion: "+Help.RFL([reli,"Tribal","Various Folk Religions","Animist","Folk","None","Atheist",reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli])+" "+codeType2[18];
    document.getElementById("language").innerText = codeType[17]+" "+"Language: "+Help.RFL(["Old","Middle","New","Standard","Modern","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]) + " " + Help.RFL([c_Main,c_Main,capitalCity,c_One,c_Two,c_Three])+Help.RFL(["ic","ic","ic","ic","ish","an","in","","","","","","",""])+" "+codeType2[17];

    // Culture+
    document.getElementById("landm").innerText = codeType[19]+" "+"Landmark: "+landMark+" "+codeType2[19]; // TO DO
    document.getElementById("greatwork").innerText = codeType[20]+" "+"Great Work: "+workFinal+" "+codeType2[20]; // TO DO
    document.getElementById("anthem").innerText = codeType[21]+" "+"Anthem: " + generate.GetScale(notes,codeType[22],codeType2[22],BaseSeq(v,c)+Help.RFL(SUFFIXES))+" "+codeType2[21];

    // Subdivisions + //$add Type
    let subTypes = ["Provinces","Municipalities","Counties","Regions","States","Oblasts","Territories","Autonomous Republics","Autonomous Territories","Districts"];
    let subType = Help.RFL(subTypes);
    subTypes.splice(subTypes.indexOf(subType),1);
    let subType2 = Help.RFL(subTypes);
    subTypes.splice(subTypes.indexOf(subType2),1);
    let subType3 = Help.RFL(subTypes);
    subTypes.splice(subTypes.indexOf(subType3),1);
    let subType4 = Help.RFL(subTypes);
    document.getElementById("subdiv").innerText = codeType[23]+" "+"Subdivisions: "+Help.RFL(["None",
        Help.RandomNumber(3,100)+" "+subType,
        Help.RandomNumber(3,80)+" "+subType+" and "+Help.RandomNumber(3,20)+" "+subType2,
        Help.RandomNumber(3,60)+" "+subType+", "+Help.RandomNumber(3,30)+" "+subType2+", and "+Help.RandomNumber(3,10)+" "+subType3,
        Help.RandomNumber(3,50)+" "+subType+", "+Help.RandomNumber(3,30)+" "+subType2+", "+Help.RandomNumber(3,20)+" "+subType3+", and "+Help.RandomNumber(3,10)+" "+subType4])+" "+codeType[23];

    // Added after 3.0
    // 9/22/2026
    let otherNation = generate.PoliticalType(BaseSeq(v,c));
    let otherAlliance = generate.AllianceType(BaseSeq(v,c),BaseSeq(v,c));
    let civilNation = generate.PoliticalType(Help.RFL([BaseSeq(v,c)+Help.RFL(SUFFIXES),adj_One,adj_Two,adj_Three,adj_Main,adj_Main,adj_Main,adj_Main,adj_Main,adj_Main,adj_Main]));
    let rebellion = Help.RFL([BaseSeq(v,c)+Help.RFL(SUFFIXES),adj_One,adj_Two,adj_Three]);
    document.getElementById("politic").innerText = codeType[26]+"Situation: "+Help.RFL([
        "At war with the "+otherNation, // One
        "At peace ",
        "At war with the "+otherAlliance, // Alliance
        "In a civil war with the "+civilNation, // One
        "Dealing with the "+rebellion+" rebellion", // Nation
    ])+" "+codeType2[26];

    //Demographics
    let demographics = [adj_Main,adj_One,adj_Two,adj_Three,adj_City];
    
    let percentOf = 10000;
    let takeAway;

    let currentDemo;
    let demoList = [];

    for(let i = 0; i < 4; i++) {
        takeAway = Help.RandomNumber(percentOf/100,percentOf);
        percentOf -= takeAway;
        if(i === 0)
        {
            currentDemo = adj_Main;
        }
        else
        {
            currentDemo = Help.RFL(demographics);
        }

        demoList.push((currentDemo) + ": " + takeAway / 100 + "% ");
        demographics.splice(demographics.indexOf(currentDemo), 1);
    }
    document.getElementById("demo0").innerText = demoList[0];
    document.getElementById("demo1").innerText = demoList[1];
    document.getElementById("demo2").innerText = demoList[2];
    document.getElementById("demo3").innerText = demoList[3];
    document.getElementById("demoLeft").innerText = "Other: "+percentOf/100+"%";
    /// --- EXTRAS
    if(dynastical === 0)
    {
        document.getElementById("last").innerText = BaseSeq(v,c);
    }
    else
    {
        document.getElementById("last").innerText = c_Main;
    }
    document.getElementById("alphabeta").innerText = Help.CTL(c,v);
    document.getElementById("lettercount").innerText = " "+String(Help.CTL(c,v).length)+" letters";
    document.getElementById("suffix").innerHTML = Help.RFL(["","","","","","","","","","","","","","","","","","","","","","","","","","","Jr.","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII"])+codeType[0];

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

const ids = ["Diplomacy","Culture","CulturePlus","Geography","Economy","Unrest","Subdivision","Demographic","Check"];
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
let numName = 0; // Simple variable to display the number of names the user has generated in a session
let dynastical = 0;
