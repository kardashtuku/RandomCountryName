//Helper Functions
function RFL(givenList) { // Returns a random value from a list
    return givenList[Math.floor(Math.random() * givenList.length)];
}

function CTL(firstList, secondList) { // Combines two given lists
    return firstList.concat(secondList);
}
function Variance()
{
    return (Math.floor(Math.random() * 1200) + 800) / 1000;
}
function RandomNumber(min,max)
{
    return Math.floor(Math.random() * max) + min;
}

function GenerateRandomName(type,vowelAlph,consAlph) {

    let c=consAlph;
    let v=vowelAlph;
    // --- Letters and Letter Frequency <
    // Getting custom values based on User Input
    //let settingBox1 = document.getElementById("complexV").checked; // Whether the final product will include complex vowels
    //let settingBox2 = document.getElementById("complexC").checked; // Whether the final product will include complex consonants
    //let settingRange = document.getElementById("amount").value; // The amount that accented characters are distilled by normal characters



    // Store results so we can return them
    let results = [];

    let rName = "";
    let lengthOf = Math.floor(Math.random() * (7 - 4 + 1)) + 4;
    let flipBetween = Math.floor(Math.random() * 5);
    let start = 0;
    let iteration = [0, 2, 4, 6, 8, 10, 12, 14, 16];
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
    else if(type === "general")
    {
        results.push(GeneralType(rName));
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
            dynastical = Math.floor(Math.random() * 5);
            govBack = ["Dynasty","County","Barony","Kingdom","Empire","Duchy","Archduchy"];
        }   
        else if(governmentTypes === 2) //
        {
            govBack = ["Dictatorship","Regime","Fascism","Autocracy","Despotism"];
            dynastical = Math.floor(Math.random() * 1);
        }
        else if(governmentTypes === 3) //
        {
            govBack = ["Reserve","Tribe","Folk","Chiefdom","Clan","House","Kinfolk","Clique"];
            dynastical = Math.floor(Math.random() * 3);
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

        return(RFL(govBack)+" "+nat)
    }
    function AllianceType(nat) {
        const prefixes = ["Union of","Alliance of","Federation of","Confederation of","Pact of","Empire of","Republic of","Council of","Compact of","Treaty of"];
        const suffixes = ["Union","Alliance","Federation","Confederation","Pact","Empire","Republic","Council","Compact","Treaty","Combine"]
        const nameHaps = ["Difficulty","The Mountain","The Wounded","Indication","Media","Mutuality","Trade","Populace","Blood","War","The Double","Bronze","Gold","Guidance","Manufacturing","Platinum","Information","Steel","Failure","Victory","Stone","Empire","Church","Confusion","Management","Freedom","Liberty","Aspects","Economy","Decisions","Opportunity","Introduction","Food","Basics","Reading","Culture","Tradition","Responsibility","Industry","Height","Attention","Preference","Democracy","Obligation","Security","Preparation","Consuls","Power","Education","Non-Aggression","Strangers","War","The Divine","God","The Heavenly"];
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
    function GeneralType(nat) {
        return(nat)
    }
}
let numName = 0;
function DoIt() {
    numName++;

    let settingBox3 = document.getElementById("accentedBox").checked; // Whether the final product will include accents
    // Letters
    let v = ["A", "U","I", "O","E"];
    let c = ["R", "T", "P", "S", "D", "G", "K", "B","Q","W", "Y", "J", "Gh", "Kh", "Z", "V", "Ch", "Th", "F", "H", "L", "Sh", "N", "M", "C",];
    let aV = ["Ə", "Æ","I","Ø","Œ",
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
    let aC = ["Ğ", "Ð", "Þ","Β","Ʋ","𐌢",
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
    
    let enditAV = RandomNumber(0,5); 
    let enditAC = RandomNumber(0,3); 
    let enditV = RandomNumber(0,4); 
    let enditC = RandomNumber(0,20); 
    while (aV.length > enditAV)
    {
        aV.splice(RandomNumber(0,aV.length),1);
    }
    while (aC.length > enditAC)
    {
        aC.splice(RandomNumber(0,aC.length-1),1);
    }
    for (let i = 0; i < enditV; i++)
    {
        v.splice(RandomNumber(0,v.length-1),1);
    }
    for (let i = 0; i < enditC; i++)
    {
        c.splice(RandomNumber(0,c.length-1),1);
    }
    // Applying custom values
    if (settingBox3 === true) {
        c = CTL(c, aC);
        v = CTL(v, aV);
        }
    let unit = "Mile";

    /// --- CREATE PRIMARIES
    // NATION
    let p_Nation = GenerateRandomName("nation",v,c).join("\n"); // Nation name
    let p_City = GenerateRandomName("city",v,c).join("\n"); // Capital City
    let p_Demo1 = GenerateRandomName("general",v,c).join("\n"); // Second Demographic
    let p_Demo2 = GenerateRandomName("general",v,c).join("\n"); // Third Demographic
    let density = RandomNumber(1,100)
    let size = RandomNumber(1,1000000)*Variance();
    let culturePick = RFL([finale,finale,finale,p_Demo1,p_Demo2,p_City]);
    let reli = RFL([finale,p_Demo1,p_Demo2,p_City,(GenerateRandomName("general",v,c))]);
    let chance = RandomNumber(1,3);
    if(chance == 1)
    {
        reli = reli + RFL(["ism","ism","ism","ism","ism","ism","id","ic","ian","an","a"]);
    } else if(chance == 2)
    {
        reli = RFL(["Cult of ","Sect of "," Folk of "," Church of "," Temple of ",(GenerateRandomName("general",v,c)+"'s ")]) + reli + RFL(["ism","ism","ism","ism","ism","ism","id","ia","a"],v,c);
    } else if(chance == 3)
    {
        reli = reli + RFL(["ist","ist","ist","ist","ist","ist","id","ic","ian","an","a"])+" "+RFL(["Cult","Sect","Folk","Church","Temple"]);
    }
    /// --- CREATE PRIMARIES

    /// --- ADD NAMES
        // NATION
    document.getElementById("demo").innerText = p_Nation;
    document.getElementById("city").innerText = "Capital: "+p_City;
    document.getElementById("leader").innerText = "Leader: "+GenerateRandomName("general",v,c).join("\n");
    document.getElementById("admin").innerHTML = `${RFL(["A","C","U","F","S"])}${RFL(["Tr","Cl","Th","Ty","Ol","Re","De","Dy","Ci","Ec","Te","An"])}:${RFL(["0","1","2","3","4"])}`;
    
        // Diplomacy
    document.getElementById("alliance").innerText = "Alliance: "+GenerateRandomName("alliance",v,c).join("\n");
    document.getElementById("diplomacy").innerText = "Diplomacy: "+RFL(["At War","Ostracized","Hated","Isolated","On Bad Terms with Neighbors","Plentiful Border Disputes","Post-war","Neutral","Plays multiple sides","Supplies aide","Unimportant","Important ally","Regional Power","Threatening","Unassuming","Friends with the right people","Friends with the wrong people","Insignificant","Monstrous","Global Hegemon","Hegemon","Very Influencial","Strongman","Everyone's Friend"]);

        // Geography
    document.getElementById("geography").innerText = "Size: "+(Math.round(size));
    document.getElementById("pop").innerText = "Population: "+(Math.round(size*density)+" | "+Math.round(density)+" per square "+unit);
    document.getElementById("geo").innerText = RFL(["Mostly","Partially","Entirely"])+RFL([" on an Island"," on a Peninsula"," landlocked"," across a coast"," on a strait"," on several islands"," on the mainland"," on an isthmus"]);
    //$add Biomes

        // Economy + //$add Status
    //$add Exports
    //$add Imports
    //$add Domestic Resources

        //Stability + //$add Unrest
    //$add Corruption
    //$add Crime
    //$add Environment
    //$add Headline

        // Culture + 
    document.getElementById("culture").innerText = "Culture: "+culturePick+RFL(["an","ian","ite","ic","id","","","","",""]);
    document.getElementById("religion").innerText = "Religion: "+reli;
    document.getElementById("language").innerText = "Language: "+RFL([finale,finale,finale,finale,p_City,p_Demo1,p_Demo2])+RFL(["ic","ic","ic","ic","ish","an","in","","","","","","",""]);
    //$add Landmarks
    //$add Great Works
    //$add Anthem

        // Subdivisions + //$add Type
    //$add Names
    //$add Count
    
        //History
    
    /// --- ADD NAMES

    /// --- EXTRAS
    if(dynastical === 0)
    {
    document.getElementById("last").innerText = GenerateRandomName("general",v,c).join("\n");;
    }
    else
    {
        document.getElementById("last").innerText = finale;
    }
    document.getElementById("alphabeta").innerText = CTL(c,v) + " " + CTL(c,v).length+" letters";
    document.getElementById("suffix").innerHTML = RFL(["","","","","","","","","","","","","","","","","","","","","","","","","","","Jr.","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII"]);
    /// --- EXTRAS
    document.getElementById("numName").innerText = numName;
}
