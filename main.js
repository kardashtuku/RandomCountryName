// ---- | Helper Functions | ---- //
function RFL(givenList)
{ // Returns a random value from a list
    return givenList[Math.floor(Math.random() * givenList.length)];
}
function Commize(number)// This Helper Function will show return a number with traditional comma format for readability
{
    // Split the number into a list of characters '1000' = ['1','0','0','0']
    number = number.toString().split("");
    // Create the variable that we will return at the end of the function
    let finalString = "";

    // Reverse the split number list and add a comma every 3 digits
    number.reverse();
    for (let i = 0; i < number.length; i+=1)
    {
        if([2,5,8,11].includes(i) && i !== number.length-1)
        {
            finalString += number[i]+",";
        }
        else
        {
            finalString += number[i];
        }
    }
    // Re-reverse the list to bring it back to its original value and convert it into a string
    finalString = finalString.split("").reverse();
    finalString = finalString.join("");
    return(finalString);
}
function CTL(firstList, secondList)
{ // Combines two given lists
    return firstList.concat(secondList);
}
function Variance() // Adds a small amount of random variance when multiplied by a number
{
    return (Math.floor(Math.random() * 1025) + 975) / 1000;
}
function RandomNumber(min,max) // Returns a random number in-between two values
{
    return Math.floor(Math.random() * max) + min;
}
function TTT(decimal)// Translates decimals to their corresponding musical notation
{
    const decimals = [0.25,0.5,0.75,1];
    const fractions = ["♪","♩","𝅗𝅥","𝅗𝅥.","𝅝"];
    return(fractions[decimals.indexOf(decimal)])
}
function Translate(number,terms) // Takes a pre-generated number and applies it to a translative list
{
    for (let i = 0; i < 10 ; i++)
    {
        if(i*10 <= number && number < (i+1)*10)
        {
            return(terms[i]);
        }
    }
}

// ---- | Name-type Functions | ---- //
function NationType(nat,union,coder)
{
    let governmentTypes = Math.floor(Math.random() * 6);
    let frontOrBack = Math.floor(Math.random() * 2);
    let basicLeaders = ["King","President","Chancellor","Leader","Emperor","Minister","Governor"];
    dynastical = 0;
    if(RandomNumber(1,9) === 1)
    {
        nat = nat+"-"+union;
    }
    let govBack;
    if(governmentTypes === 0) //
    {
        govBack = ["Republic","Democracy","Senate","Consulship","Autonomy","Sovereignty"];
        document.getElementById("leadership").innerHTML = coder+" "+RFL(RFL([["President","Prime Minister","Chancellor"],["President","Prime Minister","Chancellor"],["Senator","Lead Senator","Speaker"],["Consul","Pro-Consul"],basicLeaders,basicLeaders]));
    }
    else if(governmentTypes === 1) //
    {
        dynastical = Math.floor(Math.random() * 5);
        govBack = ["Dynasty","County","Barony","Kingdom","Empire","Duchy","Archduchy","Sultanate"];
        document.getElementById("leadership").innerHTML = coder+" "+RFL(RFL([["King","Emperor"],["Count","Governor"],["Baron","Governor"],["King","Emperor","Archduke"],["Emperor","High King"],["Duke"],["Duke","High Duke","Archduke"],["Sultan","Emperor","King","Caliph"]]));
    }
    else if(governmentTypes === 2) //
    {
        govBack = ["Dictatorship","Regime","Fascism","Autocracy","Despotism"];
        dynastical = Math.floor(Math.random() * 2);
        document.getElementById("leadership").innerHTML = coder+" "+RFL(RFL([["Dictator","Supreme Leader","Leader"],basicLeaders,["Dictator","Leader"],["Dictator","Leader"],["Despot","Minister","Dictator","General","Commander"]]));
    }
    else if(governmentTypes === 3) //
    {
        govBack = ["Reserve","Tribe","Folk","Chiefdom","Clan","House","Kinfolk","Clique"];
        dynastical = Math.floor(Math.random() * 3);
        document.getElementById("leadership").innerHTML = coder+" "+RFL(RFL([
            ["Chief","King","Governor","Leader"],["Chief","King"],["Chief","Leader","Emperor"],["Chief"],["Chief","King","Emperor"],["Chief","Head","Emperor"],["Chief","Head","Emperor"],["Warlord","Leader","General","Commander","King","Dictator"]]));
    }
    else if(governmentTypes === 4)
    {
        govBack = ["Confederation","Federation","Theocracy","Priestdom","Cult","State","Union","Khanate","Khaganate"];
        document.getElementById("leadership").innerHTML = coder+" "+RFL(RFL([basicLeaders,basicLeaders,["Theocrat","Priest","Pope","Caliph","Imam","Bishop","Cardinal","Oracle","Elder","Father"],["Theocrat","Priest","Pope","Caliph","Imam","Bishop","Cardinal","Oracle","Elder","Father"],["Theocrat","Priest","Pope","Caliph","Imam","Bishop","Cardinal","Oracle","Elder","Father"],basicLeaders,basicLeaders,["Khan","Khagan","Emperor","King","Warlord"],["Khan","Khagan","Emperor","King","Warlord"]]));
    }
    else
    {
        govBack = ["Soviet Republic","Syndicate","Socialist Republic","Social Democracy","People's Republic"];
        document.getElementById("leadership").innerHTML = coder+" "+RFL(["Minister","Prime Minister","Chancellor","Secretary","General Secretary","President","Chairman","Officer","Supreme Leader"]);
    }


    let suffixes = ["an", "ian", "ite", "id","ids","", "", ""];

    if (frontOrBack === 1) {
        return RFL(govBack) + " of" + RFL([" ", " the "]) + nat;
    } else {
        return nat + RFL(suffixes) + " " + RFL(govBack);
    }

}
function CityType(nat)
{
    let govBack = ["North", "South", "East", "West", "New","","","","","","","","","","","","","","","","","","","","","","",""];

    return(RFL(govBack)+" "+nat)
}
function AllianceType(nat,capital)
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
function GeneralType(nat)
{
    return(nat)
}
function GetScale(notes,coder,coder2)
{
    CTL(notes,notes);
    const major = [2,2,1,2,2,2,1];
    const minor = [2,1,2,2,1,2,2];
    const scaleType = RFL([major,minor]);
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
    const bassLength = RFL([2,4,8]);

    for (let i = 0; i < bassLength; i++)
    {
        bassline.push(RFL(scale));
    }
    let melody = [];
    let noteLength = 0;
    let thiss = 0;
    for (let i = 1; i < 5; i+=noteLength)
    {
        noteLength = RandomNumber(1,4)/4;
        thiss = RandomNumber(1,5)
        if(thiss === 2)
        {
            melody.push(scale[bassline.indexOf(i) + RFL([0,2,4,6])]);
        } else if(thiss === 1)
        {
            melody.push(RFL(["𝄾","𝄽","𝄼"]));
        }
        else
        {
            melody.push(RFL(scale)+TTT(noteLength));
        }

    }
    document.getElementById("bassline").innerText = coder+" Bassline: "+bassline+" "+coder2;
    return melody;
}

// ---- | Main Program Functions | ---- //
function GenerateRandomName(type,v,c,union,capitala,codera)  // Holds the code required to generate a variety of name types
{
    // Create basic variables
    let results = []; // Will contain our final generated name
    let rName = ""; // Will be the basic generated string of characters applied to all complex names
    let lengthOf = Math.floor(Math.random() * (7 - 4 + 1)) + 4; // Picks a random length for the name
    let flipBetween = Math.floor(Math.random() * 5); // Picks whether the letter is a consonant or vowel
    let start = 0;
    let iteration = [0, 2, 4, 6, 8, 10, 12, 14, 16]; // Makes it so every other letter should be different type
        // *for some reason it sometimes doubles up on a letter type anyway, but it's fine because it adds some variety

    // Generates a random string of letters with some structure
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

        // Figure out what type of name we're generating
    // Results in rName surrounded by national terms like 'Republic of,' 'Kingdom,' etc.
    if(type === "nation") {
        results.push(NationType(rName,union,codera));
        finale = rName;
    }

    // Results in rName surrounded by city terms like 'West,' 'ville,' etc.
    else if(type === "city") {
        results.push(CityType(rName))
    }

    // Results in rName (potentially) surrounded by alliance terms like 'union' 'alliance' etc.
    else if(type === "alliance") {
        results.push(AllianceType(rName,capitala));
    }

    // Results in rName without extra flavor
    else if(type === "general") {
        results.push(GeneralType(rName));
    }

    return results; // return the list of names
}

let numName = 0; // Simple variable to display the number of names the user has generated in a session

// The actual program code, contains UI and function calls for basic program usage
function DoIt() {
    numName++;

        // User interface
    // Decides what letters are allowed in the program
    let lemRange = document.getElementById("letterTypes").value;
    let v = ["A", "U","I", "O","E"];
    let c = ["R", "T", "P", "S", "D", "G", "K", "B","Q","W", "Y", "J", "Gh", "Kh", "Z", "V", "Ch", "Th", "F", "H", "L", "Sh", "N", "M", "C",];
    let aV = [];
    let aC = [];
    if(lemRange == 1) {
        aV = ["Ə", "Æ","I","Ø","Œ",
            "Á","É","Í","Ó","Ú"
            ,"Ă","Ĕ","Ĭ","Ŏ","Ŭ"
            ,"Ȧ","Ė","İ","Ȯ","U̇"
            ,"Ä","Ë","Ï","Ö","Ü"
            ,"Ả","Ẻ","Ỉ","Ỏ","Ủ"
            ,"À","È","Ì","Ò","Ù"
            ,"Ā","Ē","Ī","Ō","Ū"
            ,"Å","E̊","I̊","O̊","Ů"
            ,"A̎","E̎","I̎","O̎","U̎"
            ,"Ȁ","Ȅ","Ȉ","Ȍ","Ȕ"
            ,"Â","Ê","Î","Ô","Û"
            ,"Ő","Ű"
            ,"A̗","E̗","I̗","O̗","U̗"
            ,"A̖","E̖","I̖","O̖","U̖",
            "Ạ", "Ụ","Ị", "Ọ","Ẹ",
            "A̤", "Ṳ","I̤", "O̤","E̤","'"];
        aC = ["Ğ", "Ð", "Þ","Β","Ʋ","𐌢",
            "Ŕ", "T́", "Ṕ", "Ś", "Ǵ", "Ḱ", "B́","Q́","Ẃ", "Ý", "J́", "Ź", "V́", "F́", "H́", "Ĺ", "Ń", "Ḿ", "Ć",
            "R̆", "T̆", "P̆", "S̆", "D̆", "Ğ", "K̆", "B̆","Q̆","W̆", "Y̆", "J̆", "Z̆", "V̆", "F̆", "H̆", "L̆", "N̆", "M̆", "C̆",
            "Ṙ", "Ṫ", "Ṗ", "Ṡ", "Ḋ", "Ġ", "K̇", "Ḃ","Q̇","Ẇ", "Ẏ", "J̇", "Ż", "V̇", "Ḟ", "Ḣ", "L̇", "Ṅ", "Ṁ", "Ċ",
            "R̈", "T̈", "S̈", "D̈", "K̈","Q̈","Ẅ", "Ÿ", "J̈", "Z̈", "V̈", "F̈", "Ḧ", "L̈", "N̈", "M̈", "C̈",
            "R̀", "T̀", "P̀", "S̀", "D̀", "G̀", "K̀", "B̀","Q̀","Ẁ", "Ỳ", "Z̀", "V̀", "H̀", "L̀", "Ǹ", "M̀", "C̀",
            "R̄", "T̄", "P̄", "S̄", "D̄", "Ḡ", "K̄", "B̄","Q̄","W̄", "Ȳ", "J̄", "Z̄", "V̄", "F̄", "H̄", "L̄", "N̄", "M̄", "C̄",
            "R̊", "T̊", "P̊", "S̊", "D̊", "G̊", "K̊", "B̊","Q̊","W̊", "Y̊", "J̊", "Z̊", "V̊", "F̊", "H̊", "L̊", "N̊", "M̊", "C̊",
            "R̎", "T̎", "P̎", "S̎", "D̎", "G̎", "K̎", "B̎","Q̎","W̎", "Y̎", "J̎", "Z̎", "V̎", "F̎", "H̎", "L̎", "N̎", "M̎", "C̎",
            "Ȑ", "T̏", "P̏", "S̏", "D̏", "G̏", "K̏", "B̏","W̏", "Y̏", "J̏", "Z̏", "V̏", "F̏", "H̏", "L̏", "N̏", "M̏", "C̏",
            "R̋", "T̋", "S̋", "D̋", "G̋", "K̋", "B̋","W̋", "Y̋", "J̋", "Z̋", "V̋", "F̋", "H̋", "L̋", "N̋", "M̋", "C̋",
            "R̗", "T̗", "P̗", "S̗", "D̗", "G̗", "K̗", "B̗","Q̗","W̗", "Y̗", "J̗", "Z̗", "V̗", "F̗", "H̗", "L̗", "N̗", "M̗", "C̗",
            "R̖", "T̖", "P̖", "S̖", "D̖", "G̖", "K̖", "B̖","Q̖","W̖", "Y̖", "J̖", "Z̖", "V̖", "F̖", "H̖", "L̖", "N̖", "M̖", "C̖",
            "Ṛ", "Ṭ", "P̣", "Ṣ", "Ḍ", "G̣", "Ḳ", "Ḅ","Q̣","Ẉ", "Ỵ", "J̣", "Ẓ", "Ṿ", "F̣", "Ḥ", "Ḷ", "Ṇ", "Ṃ", "C̣",
            "R̤", "T̤", "P̤", "S̤", "D̤", "G̤", "K̤", "B̤","Q̤","W̤", "Y̤", "J̤", "Z̤", "V̤", "F̤", "H̤", "L̤", "N̤", "M̤", "C̤",
            "̧R", "̧T", "̧P", "̧S", "̧D", "̧G", "̧K", "̧B","̧Q","̧W", "̧Y", "̧J", "̧Z", "̧V", "̧F", "̧H", "̧L", "̧N", "̧M", "̧C"];
    } else if(lemRange == 2) {
        aV = ["Â","Ê","Î","Ô","Û","Ā","Ē","Ī","Ō","Ū","Ʊ","Ö"];
        aC = ["Č","Ş"];
    }else if(lemRange == 3) {
        aV = ["Ė","Ê","Ü","Ë"];
    }
    // Generate List of Available Letters
    let endItAV = RandomNumber(0,5); // How many Accented Vowels are allowed to be left in a script
    let endItAC = RandomNumber(0,3); // How many Accented Consonants are allowed to be left
    let endItV = RandomNumber(0,4); // How many basic Vowels are allowed to be removed
    let endItC = RandomNumber(0,20); // How many basic consonants are allowed to be removed

    // Loop through the lists and remove some letters
    while (aV.length > endItAV) {
        aV.splice(RandomNumber(0,aV.length),1);
    }
    while (aC.length > endItAC) {
        aC.splice(RandomNumber(0,aC.length-1),1);
    }
    for (let i = 0; i < endItV; i++) {
        v.splice(RandomNumber(0,v.length-1),1);
    }
    for (let i = 0; i < endItC; i++) {
        c.splice(RandomNumber(0,c.length-1),1);
    }

    // Applying custom values
    if (lemRange != 0) {
        c = CTL(c, aC);
        v = CTL(v, aV);
    }

    // Display symbols to aid in readability and aesthetics
    let omRange = document.getElementById("omMount").value;
    let codeType = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
    let codeType2 = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];

    if(omRange == 0) // Displays corresponding Unicode symbols
    {
        codeType = ["♔","#","♡","𓐍","∡","🏙","🗺","﹩","→","←","❖","☠","!","⛑","🛢","🗞","⛿","𐰅","♱","🏛","🕮","𝄞","𝄢","🏝","⌂","𐦆"];
        codeType2 = ["♚","#","♡","𓐍","≞","🏙","🗺","₼","←","→","❖","☠","❣","⛑","🛢","🗞","⛿","ت","☪","🏛","🕮","𝄇","𝄇","🏝","🏘","𐦂"];
    } else if(omRange == 1) // Displays corresponding Emojis
    {
        codeType = ["👑","🔢","🤝","🌐","📏","🏙️","🗺️","💰","➡️","⬅️","💎","😀","😈","🚔","🪾","📰","🏴","🔤","⛪","🗼","📚","🎶","🎵","🏞️","🏡","🏛️"];
        codeType2 = ["✊","🔡","🤝","🌐","📐","🌆","🗺️","🪙","⬅️","➡️","🪵","😡","🫰","🚔","🌳","🗞️","🏳️","🔤","🕌","🗿","🖼️","🎶","🎵","🌅","🛖","🏛️"];
    }

        // Important Program-Wide Variables
    // Notes
    let notes = ['C','D♭','D','E♭','E','F','G♭','G','A♭','A','B♭','B'];


    let unit = "Mile";

    /// --- CREATE PRIMARIES
    // NATION
    
    let p_City = GenerateRandomName("city",v,c).join("\n"); // Capital City
    let p_Demo = GenerateRandomName("general",v,c).join("\n"); // Main Demographic
    let p_Demo1 = GenerateRandomName("general",v,c).join("\n"); // Second Demographic
    let p_Demo2 = GenerateRandomName("general",v,c).join("\n"); // Third Demographic
    let p_Nation = GenerateRandomName("nation",v,c,p_Demo,p_City,codeType[0]).join("\n"); // Nation name
    let density = RandomNumber(1,20)
    let size = RandomNumber(1,1000000)*Variance();
    let culturePick = RFL([finale,finale,finale,p_Demo1,p_Demo2,p_City]);
    let reli = RFL([finale,p_Demo1,p_Demo2,p_City,(GenerateRandomName("general",v,c)),(GenerateRandomName("general",v,c)),(GenerateRandomName("general",v,c)),(GenerateRandomName("general",v,c))]);
    let chance = RandomNumber(1,3);

    let corruption = RandomNumber(0,100);
    let crimeRate = RandomNumber(0,100);
    let environment = RandomNumber(0,100);
    
        

    if(chance === 1)
    {
        reli = RFL(["Reformed","Traditional","Western","Eastern","Northern","Southern","Orthodox","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]) + " " + reli + RFL(["ism","ism","ism","ism","ism","ism","id","ic","ian","an","a"]);
    } else if(chance === 2)
    {
        reli = RFL(["Reformed","Traditional","Western","Eastern","Northern","Southern","Orthodox","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]) + " " + RFL(["Cult of ","Sect of "," Folk of "," Church of "," Temple of ",(GenerateRandomName("general",v,c)+"'s ")]) + reli + RFL(["ism","ism","ism","ism","ism","ism","id","ia","a"],v,c);
    } else if(chance === 3)
    {
        reli = RFL(["Reformed","Traditional","Western","Eastern","Northern","Southern","Orthodox","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]) + " " + reli + RFL(["ist","ist","ist","ist","ist","ist","id","ic","ian","an","a"])+" "+RFL(["Cult","Sect","Folk","Church","Temple"]);
    }
    /// --- CREATE PRIMARIES

    /// --- ADD NAMES
        // NATION
    document.getElementById("demo").innerText = p_Nation;
    document.getElementById("city").innerText = "Capital: "+p_City;
    document.getElementById("leader").innerText = ": "+GenerateRandomName("general",v,c,p_Nation,p_City).join("\n");
    document.getElementById("admin").innerHTML = codeType[1]+" "+`${RFL(["A","C","U","F","S"])}${RFL(["Tr","Cl","Th","Ty","Ol","Re","De","Dy","Ci","Ec","Te","An"])}:${RFL(["0","1","2","3","4"])}`+" "+codeType2[1];
    
        // Diplomacy
    document.getElementById("alliance").innerText = codeType[2]+" "+"Alliance: "+RFL([GenerateRandomName("alliance",v,c,p_Nation,p_City).join("\n"),GenerateRandomName("alliance",v,c,p_Nation,p_City).join("\n"),GenerateRandomName("alliance",v,c,p_Nation,p_City).join("\n"),GenerateRandomName("alliance",v,c,p_Nation,p_City).join("\n"),GenerateRandomName("alliance",v,c,p_Nation,p_City).join("\n"),GenerateRandomName("alliance",v,c,p_Nation,p_City).join("\n"),GenerateRandomName("alliance",v,c,p_Nation,p_City).join("\n"),GenerateRandomName("alliance",v,c,p_Nation,p_City).join("\n"),GenerateRandomName("alliance",v,c,p_Nation,p_City).join("\n"),GenerateRandomName("alliance",v,c,p_Nation,p_City).join("\n"),GenerateRandomName("alliance",v,c,p_Nation,p_City).join("\n"),"None"])+" "+codeType2[2];
    document.getElementById("diplomacy").innerText = codeType[3]+" "+"Diplomacy: "+RFL(["At War","Ostracized","Hated","Isolated","On Bad Terms with Neighbors","Plentiful Border Disputes","Post-war","Neutral","Plays multiple sides","Supplies aide","Unimportant","Important ally","Regional Power","Threatening","Unassuming","Friends with the right people","Friends with the wrong people","Insignificant","Monstrous","Global Hegemon","Hegemon","Very Influencial","Strongman","Everyone's Friend"])+" "+codeType2[3];

        // Geography
    document.getElementById("geography").innerText = codeType[4]+" "+"Size: "+Commize((Math.round(size)))+" "+codeType2[4];
    document.getElementById("pop").innerText = codeType[5]+" "+"Population: "+(Commize(Math.round(size*density))+" | "+Math.round(density)+" per square "+unit)+" "+codeType2[5];
    document.getElementById("geo").innerText = codeType[6]+" "+RFL(["Mostly","Partially","Entirely"])+RFL([" on an Island"," on a Peninsula"," landlocked"," across a coast"," on a strait"," on several islands"," on the mainland"," on an isthmus"])+" "+codeType2[6];
        // Economy + 
    document.getElementById("econ").innerText = codeType[7]+" "+"Economy: WIP"+" "+codeType2[7]; // TO DO
    document.getElementById("im").innerText = codeType[8]+" "+"Top Import: WIP"+" "+codeType2[8]; // TO DO
    document.getElementById("ex").innerText = codeType[9]+" "+"Top Export: WIP"+" "+codeType2[9]; // TO DO
    document.getElementById("specres").innerText = codeType[10]+" "+"Resources: WIP"+" "+codeType2[10]; // TO DO

        //Stability
    document.getElementById("unrest").innerText = codeType[11]+" "+"Unrest: "+Math.round(((corruption+crimeRate+environment)/3)*Variance()-20)+"%"+" "+codeType2[11];
    document.getElementById("corr").innerText = codeType[12]+" "+"Corruption: "+Translate(corruption,["Extremely ","Very ","Very ","Very ","Quite ","","","Somewhat ","Somewhat ","Not "])+"Corrupt"+" "+codeType2[12];
    document.getElementById("crime").innerText = codeType[13]+" "+"Crime Rate: "+Translate(crimeRate,["Very High","High","Somewhat High","Average","Average","Average","Somewhat Low","Low","Very Low","Nonexistent"])+" "+codeType2[13];
    document.getElementById("enviro").innerText = codeType[14]+" "+"Environment: "+Translate(environment,(["Extremely Polluted","Polluted","Polluted","Slightly Polluted","Normal","Normal","Normal","Clean","Pristine","Pristine"]))+" "+codeType2[14];
    document.getElementById("head").innerText = codeType[15]+" "+"Headline: WIP"+codeType2[15];
    //$add Headline

        // Culture + 
    document.getElementById("culture").innerText = codeType[16]+" "+"Culture: "+culturePick+RFL(["an","ian","ite","ic","id","","","","",""])+" "+codeType2[16];
    document.getElementById("religion").innerText = codeType[18]+" "+"Religion: "+RFL([reli,"Tribal","Various Folk Religions","Animist","Folk","None","Atheist",reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli,reli])+" "+codeType2[18];
    document.getElementById("language").innerText = codeType[17]+" "+"Language: "+RFL(["Old","Middle","New","Standard","Modern","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]) + " " + RFL([finale,finale,p_City,p_Demo1,p_Demo2])+RFL(["ic","ic","ic","ic","ish","an","in","","","","","","",""])+" "+codeType2[17];
    document.getElementById("landm").innerText = codeType[19]+" "+"Landmark: WIP"+" "+codeType2[19]; // TO DO
    document.getElementById("greatwork").innerText = codeType[20]+" "+"Great Work: WIP"+" "+codeType2[20]; // TO DO
    document.getElementById("anthem").innerText = codeType[21]+" "+"Anthem: "+GetScale(notes,codeType[22],codeType2[22])+" "+codeType2[21];

        // Subdivisions + //$add Type
    document.getElementById("subdiv").innerText = codeType[23]+" "+"Subdivisions: WIP"+" "+codeType2[23]; // TO DO
    
    document.getElementById("hist").innerText = codeType[25]+" "+"History: WIP"+" "+codeType2[25]; // TO DO

    /// --- EXTRAS
    if(dynastical === 0)
    {
    document.getElementById("last").innerText = GenerateRandomName("general",v,c).join("\n");
    }
    else
    {
        document.getElementById("last").innerText = finale;
    }
    document.getElementById("alphabeta").innerText = CTL(c,v) + " " + CTL(c,v).length+" letters";
    document.getElementById("suffix").innerHTML = RFL(["","","","","","","","","","","","","","","","","","","","","","","","","","","Jr.","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII"])+codeType[0];

    /// --- EXTRAS
    document.getElementById("numName").innerText = numName;

}
