// ---- | Helper Functions | ---- //
const HLPR =
{
    RFL(givenList)
    { // Returns a random value from a list
        return givenList[Math.floor(Math.random() * givenList.length)];
    },
    Commize(number)// This Helper Function will show return a number with traditional comma format for readability
    {
        return number.toLocaleString();
    },
    CTL(firstList, secondList)
    { // Combines two given lists
        return firstList.concat(secondList);
    },
    Variance() // Adds a small amount of random variance when multiplied by a number
    {
        return Math.floor(Math.random() * (1200 - 800) + 800) / 1000;
    },
    RandomNumber(min,max) // Returns a random number in-between two values
    {
        return Math.floor(Math.random() * (max - min) + min);
    },
    Translate(number,terms) // Takes a pre-generated number and applies it to a translative list
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
    let results = []; // Will contain our final generated name
    let rName = ""; // Will be the basic generated string of characters applied to all complex names
    let lengthOf = Math.floor(Math.random() * (7 - 4 + 1)) + 4; // Picks a random length for the name
    let flipBetween = Math.floor(Math.random() * 5); // Picks whether the letter is a consonant or vowel
    let start = 0;
    let iteration = [0, 2, 4, 6, 8, 10, 12, 14, 16]; // Makes it so every other letter should be different type

    // Generates a random string of letters with some structure
    for (let i = 0; i < lengthOf; i++) {
        if (iteration.includes(flipBetween)) {
            rName += (start === 0) ? HLPR.RFL(v) : HLPR.RFL(v).toLowerCase();
        } else {
            rName += (start === 0) ? HLPR.RFL(c) : HLPR.RFL(c).toLowerCase();
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
        let governmentTypes = Math.floor(Math.random() * 6);
        let frontOrBack = Math.floor(Math.random() * 2);
        let basicLeaders = ["King","President","Chancellor","Leader","Emperor","Minister","Governor"];
        let government;
        if(HLPR.RandomNumber(1,9) === 1)
        {
            nat = nat+"-"+union;
        }
        let govBack;
        if(governmentTypes === 0) //
        {
            govBack = ["Republic","Democracy","Senate","Consulship","Autonomy","Sovereignty"];
            government = HLPR.RFL(govBack);
            document.getElementById("leadership").innerHTML = coder+" "+[HLPR.RFL(["President","Prime Minister","Chancellor"]),HLPR.RFL(["President","Prime Minister","Chancellor"]),HLPR.RFL(["Senator","Lead Senator","Speaker"]),HLPR.RFL(["Consul","Pro-Consul"]),HLPR.RFL(basicLeaders),HLPR.RFL(basicLeaders)][govBack.indexOf(government)];
        }
        else if(governmentTypes === 1) //
        {
            dynastical = Math.floor(Math.random() * 5);
            govBack = ["Dynasty","County","Barony","Kingdom","Empire","Duchy","Archduchy","Sultanate"];
            government = HLPR.RFL(govBack);
            document.getElementById("leadership").innerHTML = coder+" "+[HLPR.RFL(["King","Emperor"]),HLPR.RFL(["Count","Governor"]),HLPR.RFL(["Baron","Governor"]),HLPR.RFL(["King","Emperor","Archduke"]),HLPR.RFL(["Emperor","High King"]),HLPR.RFL(["Duke"]),HLPR.RFL(["Duke","High Duke","Archduke"]),HLPR.RFL(["Sultan","Emperor","King","Caliph"])][govBack.indexOf(government)];
        }
        else if(governmentTypes === 2) //
        {
            govBack = ["Dictatorship","Regime","Fascism","Autocracy","Despotism"];
            government = HLPR.RFL(govBack);
            dynastical = Math.floor(Math.random() * 2);
            document.getElementById("leadership").innerHTML = coder+" "+[HLPR.RFL(["Dictator","Supreme Leader","Leader"]),HLPR.RFL(basicLeaders),HLPR.RFL(["Dictator","Leader"]),HLPR.RFL(["Dictator","Leader"]),HLPR.RFL(["Despot","Minister","Dictator","General","Commander"])][govBack.indexOf(government)];
        }
        else if(governmentTypes === 3) //
        {
            govBack = ["Reserve","Tribe","Folk","Chiefdom","Clan","House","Kinfolk","Clique"];
            dynastical = Math.floor(Math.random() * 3);
            government = HLPR.RFL(govBack);
            document.getElementById("leadership").innerHTML = coder+" "+[
                HLPR.RFL(["Chief","King","Governor","Leader"]),HLPR.RFL(["Chief","King"]),HLPR.RFL(["Chief","Leader","Emperor"]),"Chief",HLPR.RFL(["Chief","King","Emperor"]),HLPR.RFL(["Chief","Head","Emperor"]),HLPR.RFL(["Chief","Head","Emperor"]),HLPR.RFL(["Warlord","Leader","General","Commander","King","Dictator"])][govBack.indexOf(government)];
        }
        else if(governmentTypes === 4)
        {
            govBack = ["Confederation","Federation","Theocracy","Priestdom","Cult","State","Union","Khanate","Khaganate"];
            government = HLPR.RFL(govBack);
            document.getElementById("leadership").innerHTML = coder+" "+[HLPR.RFL(basicLeaders),HLPR.RFL(basicLeaders),HLPR.RFL(["Theocrat","Priest","Pope","Caliph","Imam","Bishop","Cardinal","Oracle","Elder","Father"]),HLPR.RFL(["Theocrat","Priest","Pope","Caliph","Imam","Bishop","Cardinal","Oracle","Elder","Father"]),HLPR.RFL(["Theocrat","Priest","Pope","Caliph","Imam","Bishop","Cardinal","Oracle","Elder","Father"]),HLPR.RFL(basicLeaders),HLPR.RFL(basicLeaders),HLPR.RFL(["Khan","Khagan","Emperor","King","Warlord"]),HLPR.RFL(["Khan","Khagan","Emperor","King","Warlord"])][govBack.indexOf(government)];
        }
        else
        {
            govBack = ["Soviet Republic","Syndicate","Socialist Republic","Social Democracy","People's Republic"];
            government = HLPR.RFL(govBack);
            document.getElementById("leadership").innerHTML = coder+" "+HLPR.RFL(["Minister","Prime Minister","Chancellor","Secretary","General Secretary","President","Chairman","Officer","Supreme Leader"]);
        }


        let suffixes = ["an", "ian", "ite", "id","id","", "", ""];

        if (frontOrBack === 1) {
            return government + " of" + HLPR.RFL([" ", " the "]) + nat;
        } else {
            return nat + HLPR.RFL(suffixes) + " " + government;
        }
    },
    PoliticalType(nat)
    {
        let frontOrBack = Math.floor(Math.random() * 2);
        let government = HLPR.RFL(["Republic","Democracy","Senate","Consulship","Autonomy","Sovereignty","Dynasty","County","Barony","Kingdom","Empire","Duchy","Archduchy","Sultanate",
            "Dictatorship","Regime","Fascism","Autocracy","Despotism","Reserve","Tribe","Folk","Chiefdom","Clan","House","Kinfolk","Clique","Confederation","Federation","Theocracy","Priestdom","Cult","State","Union","Khanate","Khaganate",
            "Soviet Republic","Syndicate","Socialist Republic","Social Democracy","People's Republic"]);
        let suffixes = ["an", "ian", "ite", "id","id","", "", ""];

        if (frontOrBack === 1) {
            return government + " of" + HLPR.RFL([" ", " the "]) + nat;
        } else {
            return nat + HLPR.RFL(suffixes) + " " + government;
        }
    },
    CityType(nat)
    {
        let govBack = ["North", "South", "East", "West", "New","","","","","","","","","","","","","","","","","","","","","","",""];
        return(HLPR.RFL(govBack)+" "+nat)
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
            base = HLPR.RFL(nameHaps);
        }

        if(isSuffix === 1)
        {
            return(HLPR.RFL(prefixes)+" "+base)
        }
        else{
            return(base+" "+HLPR.RFL(suffixes))
        }
    },
    GetScale(notes,coder,coder2)
    {
        HLPR.CTL(notes,notes);
        const major = [2,2,1,2,2,2,1];
        const minor = [2,1,2,2,1,2,2];
        const scaleType = HLPR.RFL([major,minor]);
        if(scaleType === major)
        {
            intervals = [0,2,4,6];
        }
        else if(scaleType === minor)
        {
            intervals = [0];
        }
        let scale = [];
        let noteNumber = 0;
        for (let i = 0; i < scaleType.length - 1; i++)
        {
            scale.push(notes[noteNumber]);
            noteNumber += scaleType[i];
        }
        let bassline = [];
        const bassLength = HLPR.RFL([2,4,8]);

        for (let i = 0; i < bassLength; i++)
        {
            bassline.push(HLPR.RFL(scale));
        }
        let melody = [];
        let noteLength = 0;
        let thiss = 0;
        for (let i = 1; i < 5; i+=noteLength)
        {
            noteLength = HLPR.RandomNumber(1,4)/4;
            thiss = HLPR.RandomNumber(1,5)
            if(thiss === 2)
            {
                melody.push(scale[bassline.indexOf(i) + HLPR.RFL([0,2,4,6])]);
            } else if(thiss === 1)
            {
                melody.push(HLPR.RFL(["𝄾","𝄽","𝄼"]));
            }
            else
            {
                melody.push(HLPR.RFL(scale)+""+noteLength);
            }

        }
        document.getElementById("bassline").innerText = coder+" Bassline: "+bassline+" "+coder2;
        return melody;
    }
};

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
    if(lemRange == 1) {
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
    } else if(lemRange == 2) {
        aV = ["Â","Ê","Î","Ô","Û","Ā","Ē","Ī","Ō","Ū","Ʊ","Ö"];
        aC = ["Č","Ş"];
    } else if(lemRange == 3)
    {
        aV = ["Ė","Ê","Ü","Ë"];
        aC = ["Ḟ"];
        v.splice(v.indexOf('I'),1);
    } else if(lemRange == 4) // Turkish
    {
        aV = ["I", "Ö", "Ü"];
        aC = ["Ç", "Ş", "Ğ"];
        c.splice(c.indexOf('Q'),1);
        c.splice(c.indexOf('W'),1);
        c.splice(c.indexOf('X'),1);

    } else if(lemRange == 5) // Maltese
    {
        aV = ["À", "È", "Ì", "Ò", "Ù"];
        aC = ["Ħ", "Ċ", "Ġ", "Ż"];
        c.splice(c.indexOf('C'),1);
        c.splice(c.indexOf('Y'),1);

    } else if(lemRange == 6) // French
    {
        aV = ["É", "È", "À", "Ù", "Â", "Ê", "Î", "Ô", "Û"];
        aC = ["Ç"];
    } else if(lemRange == 7) // Spanish
    {
        aV = ["Á", "É", "Í", "Ó", "Ú", "Ü"];
        aC = ["Ñ"];
    }   else if(lemRange == 8)
    {
        aC = PhoType(0);
        aV = PhoType(1)
        c = PhoType(2)
        v = PhoType(3)
    }
    // Generate List of Available Letters
    let endItV = HLPR.RandomNumber(3,5); // How many basic Vowels are allowed to be removed
    let endItC = HLPR.RandomNumber(HLPR.RandomNumber(10,16),23); // How many basic consonants are allowed to be removed
    let endItAV = HLPR.RandomNumber(1,HLPR.RandomNumber(3,7)); // How many Accented Vowels are allowed to be left in a script
    let endItAC = HLPR.RandomNumber(1,HLPR.RandomNumber(4,6)); // How many Accented Consonants are allowed to be left

    // Loop through the lists and remove some letters
    
    while (v.length > endItV) {
        v.splice(HLPR.RandomNumber(0,v.length),1);
    }
    while (c.length > endItC) {
        c.splice(HLPR.RandomNumber(0,c.length),1);
    }
    // Applying custom values
    if (lemRange != 0) {
        while (aV.length > endItAV) {
            aV.splice(HLPR.RandomNumber(0,aV.length),1);
        }
        while (aC.length > endItAC) {   
            aC.splice(HLPR.RandomNumber(0,aC.length),1);
        }
        
        c = HLPR.CTL(c, aC);
        v = HLPR.CTL(v, aV);
    }

    uniqueSuffix = (HLPR.RFL([HLPR.RFL(v)+HLPR.RFL(c),HLPR.RFL(c)+HLPR.RFL(v),HLPR.RFL(v)+HLPR.RFL(c)+HLPR.RFL(v),HLPR.RFL(c)+HLPR.RFL(v)+HLPR.RFL(c)])).toLowerCase();
    let SUFFIXES = ["an","ian","ite","ic","id","","","","","","","","","","","","","","","","","",uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix,uniqueSuffix];
    // Display symbols to aid in readability and aesthetics
    let omRange = document.getElementById("omMount").value;
    let codeType = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
    let codeType2 = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
    let codeType3 = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
    if(omRange == 0) // Displays corresponding Unicode symbols
    {
        codeType = ["♔","#","♡","𓐍","∡","🏙","🗺","﹩","→","←","❖","☠","!","⛑","🛢","🗞","⛿","𐰅","♱","🏛","🕮","𝄞","𝄢","🏝","⌂","𐦆","⇝"];
        codeType2 = ["♚","#","♡","𓐍","≞","🏙","🗺","₼","←","→","❖","☠","❣","⛑","🛢","🗞","⛿","ت","☪","🏛","🕮","𝄇","𝄇","🏝","🏘","𐦂","⇜"];
        codeType3 = ["◈ ","◈","◈","◈","◈","◈","⍩","⍩","⍩","Δ","Δ","⧖","🛠","🛠","🛠","🛠","🛠","🛠","🛠","🛠","🏝","🛢","🛢","⧗","⍩","⍩","🛠","🛠","🛠","𓃖","⍩","⍩","⍩","Δ","⍩","⧗","⧗","☤","🛢","☢","🛢","Δ","⚒","⚒","⤬","⤬","⚒","🖌","🖌","⚒","🖌","✝","🖌"];
    } else if(omRange == 1) // Displays corresponding Emojis
    {
        codeType = ["👑","🔢","🤝","🌐","📏","🏙️","🗺️","💰","➡️","⬅️","💎","😀","😈","🚔","🪾","📰","🏴","🔤","⛪","🗼","📚","🎶","🎵","🏞️","🏡","🏛️","💥"];
        codeType2 = ["✊","🔡","🤝","🌐","📐","🌆","🗺️","🪙","⬅️","➡️","🪵","😡","🫰","🚔","🌳","🗞️","🏳️","🔤","🕌","🗿","🖼️","🎶","🎵","🌅","🛖","🏛️","🕊️"];
        codeType3 = ["⌛️","💎","💎","💎","💎","⛏","🌽","🥦","🍐","🐏","🧶","🪟","⛏","⛏","⛏","⛏","⛏","⛏","⛏","⛏","🪓","🏭","🛢","🧂","🍰","🥭","🪨","⛏","⛏","🐄","🥩","🍞","🍚","🐄","🍝","💧","🍺","💊","🏭","☢️","🏭","🧶","⛓","⛓","❌","❌","🖥","✒️","🖼","🎻","🏭","☯️","🎭"];
    }

    // Important Program-Wide Variables
    // Notes
    let notes = ['C','D♭','D','E♭','E','F','G♭','G','A♭','A','B♭','B'];

    let unit = "Mile";

        // Primaries - Other things are based on these
    // Main Nation Culture Group
    let c_Main = BaseSeq(v,c);
    let adj_Main = c_Main + HLPR.RFL(SUFFIXES);
    // First Culture
    let c_One = BaseSeq(v,c);
    let adj_One = c_One + HLPR.RFL(SUFFIXES);
    // Second Culture
    let c_Two = BaseSeq(v,c);
    let adj_Two = c_Two + HLPR.RFL(SUFFIXES);
    // Third Culture
    let c_Three = BaseSeq(v,c);
    let adj_Three = c_Three + HLPR.RFL(SUFFIXES);
    // Capital
    let capitalCity = generate.CityType(BaseSeq(v,c));
    let adj_City = capitalCity + HLPR.RFL(SUFFIXES);
        // Secondaries - Other things are based on these, and these are based on the primaries
    // Alliance
    let alliance = generate.AllianceType(c_Main,capitalCity);
    if(HLPR.RandomNumber(1,10) === 1){alliance = "None";}
    // Religion
    let reli = HLPR.RFL([c_Main,c_One,c_Two,c_Three,capitalCity,(BaseSeq(v,c)),(BaseSeq(v,c)),(BaseSeq(v,c)),(BaseSeq(v,c))]);

        // Tertiaries - Not the base of anything, one-time use
    // Population Density
    let density = HLPR.RandomNumber(10,100) / 10;
    // Geographic Size
    let size = HLPR.RandomNumber(1,400000)*HLPR.Variance();
    //Unrest Metrics
    let corruption = HLPR.RandomNumber(0,100);
    let crimeRate = HLPR.RandomNumber(0,100);
    let environment = HLPR.RandomNumber(0,100);
    //Trade Metrics
    let specName = BaseSeq(v,c);
    let specSuffix = HLPR.RFL([" Worm"," Spider"," Herd"," Goat"," Sheep","","","","","","","","","",""]);
    let specSuffixAnimal = HLPR.RFL(["ite","ium","ite","ium","","","","","","","","","","","",""]);
    let specResource = HLPR.RFL([specName+specSuffix+" Metal",specName+specSuffix+" Mineral",specName+" Wood",specName+specSuffixAnimal+" Milk",specName+specSuffix+" Gems",specName+specSuffix+" Crystals",specName+" Blades",specName+specSuffixAnimal+" Ales",specName+specSuffixAnimal+" Stew",specName+specSuffixAnimal+" Wool",specName+specSuffixAnimal+" Silk",specName+" Textile",specName+specSuffix+" Armor",specName+" Shields",specName+" Pendents",specName]);
    let resources = ["Silica ","Rare Earth Minerals","Diamonds","Gems","Jewelry","Ornate Metalworkings","Crops","Vegetables","Fruit","Wools","Textiles","Glass","Iron","Steel","Titanium","Tin","Lead","Copper","Zinc","Aluminum","Wood","Coal","Oil","Spices","Sugar","Tropical Fruits","Limestone","Ores","Metals","Livestock","Meat","Wheat","Rice","Leather","Food","Water","Alcohol","Medicine","Rubber","Radioactive Materials","Plastic","Fabric","People","Slavery","None","N/A","Technology","Entertainment","Art","Talent","Clothing","Religion","Culture"];
    let imported = HLPR.RFL(resources);
    let exported = HLPR.RFL(resources);
    //Culture+ Metrics
    let landMarkType = HLPR.RFL(["Statue","Gate","Wall","House","Capitol","Fountain","Lake","River","Creek","Falls","Waterfall","Bayou","Swamp","Forest","Desert","Road","Monument","Temple"]);
    let landMarkName = HLPR.RFL([c_Main,c_One,capitalCity,c_Two,c_Three,BaseSeq(v,c),BaseSeq(v,c),BaseSeq(v,c),BaseSeq(v,c),BaseSeq(v,c)]);
    let landMark = HLPR.RFL([landMarkName+" "+landMarkType,landMarkType+" of "+landMarkName]);

    let workType = HLPR.RFL(["Book","Novel","Epic","Poem","Painting","Statue","Sculpture"]);
    let workName = HLPR.RFL([c_Main,c_One,capitalCity,c_Two,c_Three,BaseSeq(v,c),BaseSeq(v,c),BaseSeq(v,c),BaseSeq(v,c),BaseSeq(v,c)]);
    let workFinal = HLPR.RFL([workName+" "+workType,workType+" of "+workName,workName+"'s "+workType]);

    let chance = HLPR.RandomNumber(1,3);
    if(chance === 1)
    {
        reli = HLPR.RFL(["Reformed","Traditional","Western","Eastern","Northern","Southern","Orthodox","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]) + " " + reli + HLPR.RFL(["ism","ism","ism","ism","ism","ism","id","ic","ian","an","a"]);
    } else if(chance === 2)
    {
        reli = HLPR.RFL(["Reformed","Traditional","Western","Eastern","Northern","Southern","Orthodox","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]) + " " + HLPR.RFL(["Cult of ","Sect of "," Folk of "," Church of "," Temple of ",(BaseSeq(v,c)+"'s ")]) + reli + HLPR.RFL(["ism","ism","ism","ism","ism","ism","id","ia","a"],v,c);
    } else if(chance === 3)
    {
        reli = HLPR.RFL(["Reformed","Traditional","Western","Eastern","Northern","Southern","Orthodox","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]) + " " + reli + HLPR.RFL(["ist","ist","ist","ist","ist","ist","id","ic","ian","an","a"])+" "+HLPR.RFL(["Cult","Sect","Folk","Church","Temple"]);
    }

    // NATION
    document.getElementById("demo").innerText = generate.NationType(c_Main,c_One,codeType[0]);
    document.getElementById("city").innerText = "Capital: "+capitalCity;
    document.getElementById("leader").innerText = ": "+BaseSeq(v,c);;
    document.getElementById("admin").innerHTML = codeType[1]+" "+`${HLPR.RFL(["A","C","U","F","S"])}${HLPR.RFL(["Tr","Cl","Th","Ty","Ol","Re","De","Dy","Ci","Ec","Te","An"])}:${HLPR.RFL(["0","1","2","3","4"])}`+" "+codeType2[1];

    // Diplomacy
    document.getElementById("alliance").innerText = codeType[2]+" "+alliance+" "+codeType2[2];
    
    document.getElementById("diplomacy").innerText = codeType[3]+" "+"Diplomacy: "+HLPR.RFL(["At War","Ostracized","Hated","Isolated","On Bad Terms with Neighbors","Plentiful Border Disputes","Post-war","Neutral","Plays multiple sides","Supplies aide","Unimportant","Important ally","Regional Power","Threatening","Unassuming","Friends with the right people","Friends with the wrong people","Insignificant","Monstrous","Global Hegemon","Hegemon","Very Influencial","Strongman","Everyone's Friend"])+" "+codeType2[3];

    // Geography
    document.getElementById("geography").innerText = codeType[4]+" "+"Size: "+HLPR.Commize((Math.round(size)))+" "+codeType2[4];
    document.getElementById("pop").innerText = codeType[5]+" "+"Population: "+(HLPR.Commize(Math.round(size*density))+" | "+density+" per square "+unit)+" "+codeType2[5];
    document.getElementById("geo").innerText = codeType[6]+" "+HLPR.RFL(["Mostly","Partially","Entirely"])+HLPR.RFL([" on an Island"," on a Peninsula"," landlocked"," across a coast"," on a strait"," on several islands"," on the mainland"," on an isthmus"])+" "+codeType2[6];
    // Economy +
    document.getElementById("econ").innerText = codeType[7]+" "+"Economy: "+HLPR.RFL(["Depression","Recession","Fine","Fairly Good","Good","Great","Central Trade Nation","Trade Power"])+" "+codeType2[7]; // TO DO
    document.getElementById("im").innerText = codeType[8]+" "+"Top Import: "+imported+" "+codeType3[resources.indexOf(imported)]; // TO DO
    document.getElementById("ex").innerText = codeType[9]+" "+"Top Export: "+exported+" "+codeType3[resources.indexOf(exported)]; // TO DO
    
    document.getElementById("specres").innerText = codeType[10]+" "+"Special Resource: "+specResource+" "+codeType2[10]; // TO DO

    //Stability
    document.getElementById("unrest").innerText = codeType[11]+" "+"Unrest: "+Math.round(((corruption+crimeRate+environment)/3))+"%"+" "+codeType2[11];
    document.getElementById("corr").innerText = codeType[12]+" "+"Corruption: "+HLPR.Translate(corruption,["Extremely ","Very ","Very ","Very ","Quite ","","","Somewhat ","Somewhat ","Not "])+"Corrupt"+" "+codeType2[12];
    document.getElementById("crime").innerText = codeType[13]+" "+"Crime Rate: "+HLPR.Translate(crimeRate,["Very High","High","Somewhat High","Average","Average","Average","Somewhat Low","Low","Very Low","Nonexistent"])+" "+codeType2[13];
    document.getElementById("enviro").innerText = codeType[14]+" "+"Environment: "+HLPR.Translate(environment,(["Extremely Polluted","Polluted","Polluted","Slightly Polluted","Normal","Normal","Normal","Clean","Pristine","Pristine"]))+" "+codeType2[14];
    //$add Headline

    // Culture +
    document.getElementById("culture").innerText = codeType[16]+" "+"Culture: "+adj_Main+" "+codeType2[16];
    document.getElementById("religion").innerText = codeType[18]+" "+"Religion: "+HLPR.RFL([reli,"Tribal","Various Folk Religions","Animist","Folk","None","Atheist",reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli])+" "+codeType2[18];
    document.getElementById("language").innerText = codeType[17]+" "+"Language: "+HLPR.RFL(["Old","Middle","New","Standard","Modern","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]) + " " + HLPR.RFL([c_Main,c_Main,capitalCity,c_One,c_Two,c_Three])+HLPR.RFL(["ic","ic","ic","ic","ish","an","in","","","","","","",""])+" "+codeType2[17];

    // Culture+
    document.getElementById("landm").innerText = codeType[19]+" "+"Landmark: "+landMark+" "+codeType2[19]; // TO DO
    document.getElementById("greatwork").innerText = codeType[20]+" "+"Great Work: "+workFinal+" "+codeType2[20]; // TO DO
    document.getElementById("anthem").innerText = codeType[21]+" "+"Anthem: " + generate.GetScale(notes,codeType[22],codeType2[22])+" "+codeType2[21];

    // Subdivisions + //$add Type
    let subTypes = ["Provinces","Municipalities","Counties","Regions","States","Oblasts","Territories","Autonomous Republics","Autonomous Territories","Districts"];
    let subType = HLPR.RFL(subTypes);
    subTypes.splice(subTypes.indexOf(subType),1);
    let subType2 = HLPR.RFL(subTypes);
    subTypes.splice(subTypes.indexOf(subType2),1);
    let subType3 = HLPR.RFL(subTypes);
    subTypes.splice(subTypes.indexOf(subType3),1);
    let subType4 = HLPR.RFL(subTypes);
    document.getElementById("subdiv").innerText = codeType[23]+" "+"Subdivisions: "+HLPR.RFL(["None",
        HLPR.RandomNumber(3,100)+" "+subType,
        HLPR.RandomNumber(3,80)+" "+subType+" and "+HLPR.RandomNumber(3,20)+" "+subType2,
        HLPR.RandomNumber(3,60)+" "+subType+", "+HLPR.RandomNumber(3,30)+" "+subType2+", and "+HLPR.RandomNumber(3,10)+" "+subType3,
        HLPR.RandomNumber(3,50)+" "+subType+", "+HLPR.RandomNumber(3,30)+" "+subType2+", "+HLPR.RandomNumber(3,20)+" "+subType3+", and "+HLPR.RandomNumber(3,10)+" "+subType4])+" "+codeType[23];

    // Added after 3.0
    // 9/22/2026
    let otherNation = generate.PoliticalType(BaseSeq(v,c));
    let otherAlliance = generate.AllianceType(BaseSeq(v,c),BaseSeq(v,c));
    let civilNation = generate.PoliticalType(HLPR.RFL([BaseSeq(v,c)+HLPR.RFL(SUFFIXES),adj_One,adj_Two,adj_Three,adj_Main,adj_Main,adj_Main,adj_Main,adj_Main,adj_Main,adj_Main]));
    let rebellion = HLPR.RFL([BaseSeq(v,c)+HLPR.RFL(SUFFIXES),adj_One,adj_Two,adj_Three]);
    document.getElementById("politic").innerText = codeType[26]+"Situation: "+HLPR.RFL([
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
        takeAway = HLPR.RandomNumber(percentOf/100,percentOf);
        percentOf -= takeAway;
        if(i === 0)
        {
            currentDemo = adj_Main;
        }
        else
        {
            currentDemo = HLPR.RFL(demographics);
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
    document.getElementById("alphabeta").innerText = HLPR.CTL(c,v);
    document.getElementById("lettercount").innerText = " "+HLPR.CTL(c,v).length+" letters";
    document.getElementById("suffix").innerHTML = HLPR.RFL(["","","","","","","","","","","","","","","","","","","","","","","","","","","Jr.","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII"])+codeType[0];

    /// --- EXTRAS
    document.getElementById("numName").innerText = numName;

}

document.getElementById("diploBox").addEventListener("change", function () {
    document.getElementById("diplo").style.display =
        this.checked ? "block" : "none";});
document.getElementById("cultBox").addEventListener("change", function () {
    document.getElementById("cult").style.display =
        this.checked ? "block" : "none";});
document.getElementById("cult2Box").addEventListener("change", function () {
    document.getElementById("cultureplus").style.display =
        this.checked ? "block" : "none";});
document.getElementById("demoBox").addEventListener("change", function () {
    document.getElementById("demoy").style.display =
        this.checked ? "block" : "none";});
document.getElementById("geoBox").addEventListener("change", function () {
    document.getElementById("geot").style.display =
        this.checked ? "block" : "none";});
document.getElementById("ecoBox").addEventListener("change", function () {
    document.getElementById("econy").style.display =
        this.checked ? "block" : "none";});
document.getElementById("sitBox").addEventListener("change", function () {
    document.getElementById("unrst").style.display =
        this.checked ? "block" : "none";});
document.getElementById("subBox").addEventListener("change", function () {
    document.getElementById("subdivy").style.display =
        this.checked ? "block" : "none";});
document.getElementById("checkBox").addEventListener("change", function () {
    document.getElementById("checkboxes").style.display =
        this.checked ? "block" : "none";});

let numName = 0; // Simple variable to display the number of names the user has generated in a session
dynastical = 0;

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
    let phoType = HLPR.RandomNumber(1,7);
    let aCC = [];
    let aVV = [];
    let bCC = [];
    let bVV = [];
    
    switch (phoType)
    {
        case 1: // basic
            aCC = [...new Set((HLPR.RFL(AC),HLPR.RFL(AC),HLPR.RFL(AC)).flat())]
            aVV = [...new Set((HLPR.RFL(AV),HLPR.RFL(AV),HLPR.RFL(AV)).flat())]
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
            bVV = [...new Set([HLPR.RFL(BASIC_VOWELS)].flat())];
            aVV = [...new Set([HLPR.RFL(HLPR.RFL(AV))].flat())];
            break;
        case 4: // Barely Consonants
            bVV = BASIC_VOWELS;
            aVV = AV.flat();
            aCC = [...new Set([HLPR.RFL(HLPR.RFL(AC)),HLPR.RFL(HLPR.RFL(AC))].flat())];
            bCC = [...new Set([HLPR.RFL(BASIC_CONSONANTS),HLPR.RFL(BASIC_CONSONANTS)].flat())];
            break;
        case 5: // Barely Anything
        aCC = [...new Set(HLPR.CTL(HLPR.RFL(AV),HLPR.RFL(AV)))];
            bVV = [...new Set([HLPR.RFL(BASIC_VOWELS)].flat())];
            aVV = [...new Set([HLPR.RFL(HLPR.RFL(AV))].flat())];
            aCC = [...new Set([HLPR.RFL(HLPR.RFL(AC)),HLPR.RFL(HLPR.RFL(AC))].flat())];
            bCC = [...new Set([HLPR.RFL(BASIC_CONSONANTS),HLPR.RFL(BASIC_CONSONANTS)].flat())];
            break;
        case 6: // One accent
            if(HLPR.RandomNumber(1,2) === 1)
            {
                aCC = [HLPR.RFL(HLPR.RFL(AC))];
            } else
            {
                aVV = [HLPR.RFL(HLPR.RFL(AV))];
            }
            bCC = BASIC_CONSONANTS;
            bVV = BASIC_VOWELS;
            break;
        case 7: // Entirely Accents
            bCC = AC.flat();
            bVV = AV.flat();
        default:
    }
    return ([aCC,aVV,bCC,bVV][i]);
}

