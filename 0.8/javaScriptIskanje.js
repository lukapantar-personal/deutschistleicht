var vsiGlagoli =  //vsiGlagoli[navadni ali akkusativ ali dativ][slo prevod ali infiniv ali 3 oseba ali praterium ali perfekt ali slo prevod AK ali nem AK ali slo prevod DAT ali nem DAT][vse oblike glagola][posamezen glagol]
[
[
[["peči (pecivo)", "peči"], ["ukazati"], ["začeti"], ["ugrizniti / grizti", "ugrizniti", "grizti"], ["zaviti / upogniti", "zaviti", "upogniti"], ["nuditi"], ["vezati"], ["prositi"], ["ostati"], ["peči (meso)", "peči"], ["zlomiti"], ["goreti"], ["prinesti"], ["misliti"], ["siliti / prodirati", "siliti", "prodirati"], ["smeti"], ["priporočati"], ["jesti"], ["voziti / peljati se", "peljati se", "peljati se"], ["pasti"], ["loviti / ujeti", "loviti", "ujeti"], ["najti"], ["leteti"], ["bežati"], ["teči (voda)", "teči"], ["žreti"], ["zmrzniti / zebsti", "zmrzniti", "zebsti"], ["roditi"], ["dati"], ["uspevati (rastlina)", "uspevati"], ["iti"], ["uspevati / posrečiti se", "uspevati", "posrečiti se"], ["veljati"], ["uživati (hrana in drugo)", "uživati"], ["zgoditi se"], ["zmagati / dobiti", "zmagati", "dobiti"], ["liti / zalivati", "liti", "zalivati"], ["biti enak / primerjati", "biti enak", "primerjati"], ["drseti /spodrsniti", "drseti", "spodrsniti"], ["kopati"], ["prijeti / zgrabiti", "prijeti", "zgrabiti"], ["imeti"], ["držati / ustaviti", "držati", "ustaviti"], ["viseti"], ["dvigniti"], ["imenovati se"], ["pomagati"], ["poznati"], ["zveneti"], ["priti"], ["moči / znati", "moči", "znati"], ["plaziti se"], ["vabiti / polniti", "vabiti", "polniti"], ["pustiti"], ["teči"], ["trpeti"], ["posoditi"], ["brati"], ["ležati"], ["lagati"], ["izogibati se"], ["marati"], ["morati"], ["vzeti"], ["imenovati"], ["žvižgati"], ["izvirati"], ["svetovati"], ["ribati / drgniti", "ribati", "drgniti"], ["trgati"], ["jezditi / jahati", "jezditi", "jahati"], ["teči / dirjati", "teči", "dirjati"], ["dišati / vohati", "dišati", "vohati"], ["klicati"], ["ustaviti"], ["ločiti"], ["sijati / zdeti se", "sijati", "zdeti se"], ["potiskati / porivati", "potiskati", "porivati"], ["streljati"], ["spati"], ["tepsti / udariti", "tepsti", "udariti"], ["plaziti se"], ["brusiti"], ["zapreti / zakleniti", "zapreti", "zakleniti"], ["rezati"], ["prestrašiti"], ["pisati"], ["kričati"], ["korakati"], ["molčati"], ["plavati"], ["izginiti"], ["priseči"], ["gledati / videti", "gledati", "videti"], ["biti"], ["poslati"], ["peti"], ["potopiti se"], ["sedeti"], ["naj bi"], ["cepiti (drva)", "cepiti"], ["govoriti"], ["skočiti"], ["pičiti / zbosti", "pičiti", "zbosti"], ["stati"], ["krasti"], ["vzpenjati se / naraščati", "vzpenjati se", "naraščati"], ["umreti"], ["smrdeti"], ["suniti / suvati", "suniti", "suvati"], ["prepirati se"], ["nositi"], ["srečati / zadeti", "srečati", "zadeti"], ["poganjati / gnati", "pognati", "gnati"], ["stopiti / brcniti", "stopiti", "brcniti"], ["piti"], ["varati / prevarati", "varati", "prevarati"], ["delati / početi / storiti", "delati", "početi", "storiti"], ["pokvariti"], ["pozabiti"], ["izgubiti"], ["oprostiti"], ["rasti"], ["umivati / prati", "umivati", "prati"], ["kazati"], ["obrniti"], ["snubiti"], ["postati"], ["vreči / metati", "vreči", "metati"], ["tehtati"], ["vedeti"], ["hoteti"], ["vleči / seliti se", "vleči", "seliti se"], ["siliti /prisiliti", "siliti", "prisiliti"]], //array za use slo prevode nem glagolov

[["backen"], ["befehlen"], ["beginnen"], ["beißen"], ["biegen"], ["bieten"], ["binden"], ["bitten"], ["bleiben"], ["braten"], ["brechen"], ["brennen"], ["bringen"], ["denken"], ["dringen"], ["dürfen"], ["empfehlen"], ["essen"], ["fahren"], ["fallen"], ["fangen"], ["finden"], ["fliegen"], ["fliehen"], ["fließen"], ["fressen"], ["frieren"], ["gebären"], ["geben"], ["gedeihen"], ["gehen"], ["gelingen"], ["gelten"], ["genießen"], ["geschehen"], ["gewinnen"], ["gießen"], ["gleichen"], ["gleiten"], ["graben"], ["greifen"], ["haben"], ["halten"], ["hängen"], ["heben"], ["heißen"], ["helfen"], ["kennen"], ["klingen"], ["kommen"], ["können"], ["kriechen"], ["laden"], ["lassen"], ["laufen"], ["leiden"], ["leihen"], ["lesen"], ["liegen"], ["lügen"], ["meiden"], ["mögen"], ["müssen"], ["nehmen"], ["nennen"], ["pfeifen"], ["quellen"], ["raten"], ["reiben"], ["reißen"], ["reiten"], ["rennen"], ["riechen"], ["rufen"], ["schaffen"], ["scheiden"], ["scheinen"], ["schieben"], ["schießen"], ["schlafen"], ["schlagen"], ["schleichen"], ["schleifen"], ["schließen"], ["schneiden"], ["(er)schrecken", "schrecken ","erschrecken"], ["schreiben"], ["schreien"], ["schreiten"], ["schweigen"], ["schwimmen"], ["schwinden"], ["schwören"], ["sehen"], ["sein"], ["senden"], ["singen"], ["sinken"], ["sitzen"], ["sollen"], ["spalten"], ["sprechen"], ["springen"], ["stechen"], ["stehen"], ["stehlen"], ["steigen"], ["sterben"], ["stinken"], ["stoßen"], ["streiten"], ["tragen"], ["treffen"], ["treiben"], ["treten"], ["trinken"], ["trügen"], ["tun"], ["verderben"], ["vergessen"], ["verlieren"], ["verzeihen"], ["wachsen"], ["waschen"], ["weisen"], ["wenden"], ["werben"], ["werden"], ["werfen"], ["wiegen"], ["wissen"], ["wollen"], ["ziehen"], ["zwingen"]], //array za use nem glagole

[["bäckt"], ["befiehlt"], ["beginnt"], ["beißt"], ["biegt"], ["bietet"], ["bindet"], ["bittet"], ["bleibt"], ["brät"], ["bricht"], ["brennt"], ["bringt"], ["denkt"], ["dringt"], ["darf"], ["empfiehlt"], ["isst"], ["fährt"], ["fällt"], ["fängt"], ["findet"], ["fliegt"], ["flieht"], ["fließt"], ["frisst"], ["friert"], ["gebiert"], ["gibt"], ["gedeiht"], ["geht"], ["es gelingt"], ["gilt"], ["genießt"], ["es geschieht"], ["gewinnt"], ["gießt"], ["gleicht"], ["gleitet"], ["gräbt"], ["greift"], ["hat"], ["hält"], ["hängt"], ["hebt"], ["heißt"], ["hilft"], ["kennt"], ["klingt"], ["kommt"], ["kann"], ["kriecht"], ["lädt"], ["lässt"], ["läuft"], ["leidet"], ["leiht"], ["liest"], ["liegt"], ["lügt"], ["meidet"], ["mag"], ["muss"], ["nimmt"], ["nennt"], ["pfeift"], ["quillt"], ["rät"], ["reibt"], ["reißt"], ["reitet"], ["rennt"], ["riecht"], ["ruft"], ["schafft"], ["scheidet"], ["scheint"], ["schiebt"], ["schießt"], ["schläft"], ["schlägt"], ["schleicht"], ["schleift"], ["schließt"], ["schneidet"], ["erschrickt"], ["schreibt"], ["schreit"], ["schreitet"], ["schweigt"], ["schwimmt"], ["schwindet"], ["schwört"], ["sieht"], ["ist"], ["sendet"], ["singt"], ["sinkt"], ["sitzt"], ["soll"], ["spaltet"], ["spricht"], ["springt"], ["sticht"], ["steht"], ["stiehlt"], ["steigt"], ["stirbt"], ["stinkt"], ["stößt"], ["streitet"], ["trägt"], ["trifft"], ["treibt"], ["tritt"], ["trinkt"], ["trügt"], ["tut"], ["verdirbt"], ["vergisst"], ["verliert"], ["verzeiht"], ["wächst"], ["wäscht"], ["weist"], ["wendet"], ["wirbt"], ["wird"], ["wirft"], ["wiegt"], ["weiß"], ["will"], ["zieht"], ["zwingt"]],

[["backte/buk", "buk", "backte"], ["befahl"], ["begann"], ["biss"], ["bog"], ["bot"], ["band"], ["bat"], ["blieb"], ["briet"], ["brach"], ["brannte"], ["brachte"], ["dachte"], ["drang"], ["durfte"], ["empfahl"], ["aß"], ["fuhr"], ["fiel"], ["fing"], ["fand"], ["flog"], ["floh"], ["floss"], ["fraß"], ["fror"], ["gebar"], ["gab"], ["gedieh"], ["ging"], ["es gelang"], ["galt"], ["genoss"], ["geschah"], ["gewann"], ["goss"], ["glich"], ["glitt"], ["grub"], ["griff"], ["hatte"], ["hielt"], ["hing"], ["hob"], ["hieß"], ["half"], ["kannte"], ["klang"], ["kam"], ["konnte"], ["kroch"], ["lud"], ["ließ"], ["lief"], ["litt"], ["lieh"], ["las"], ["lag"], ["log"], ["mied"], ["mochte"], ["musste"], ["nahm"], ["nannte"], ["pfiff"], ["quoll"], ["riet"], ["rieb"], ["riss"], ["ritt"], ["rannte"], ["roch"], ["rief"], ["schuf"], ["schied"], ["schien"], ["schob"], ["schoss"], ["schlief"], ["schlug"], ["schlich"], ["schliff"], ["schloss"], ["schnitt"], ["erschrak"], ["schrieb"], ["schrie"], ["schritt"], ["schwieg"], ["schwamm"], ["schwand"], ["schwor"], ["sah"], ["war"], ["sandte"], ["sang"], ["sank"], ["saß"], ["sollte"], ["spaltete"], ["sprach"], ["sprang"], ["stach"], ["stand"], ["stahl"], ["stieg"], ["starb"], ["stank"], ["stieß"], ["stritt"], ["trug"], ["traf"], ["trieb"], ["trat"], ["trank"], ["trog"], ["tat"], ["verdarb"], ["vergaß"], ["verlor"], ["verzieh"], ["wuchs"], ["wusch"], ["wies"], ["wandte"], ["warb"], ["wurde"], ["warf"], ["wog"], ["wusste"], ["wollte"], ["zog"], ["zwang"]],

[["habe gebacken"], ["habe befohlen"], ["habe begonnen"], ["habe gebissen"], ["habe gebogen"], ["habe geboten"], ["habe gebunden"], ["habe gebeten"], ["bin geblieben"], ["habe gebraten"], ["habe gebrochen"], ["habe gebrannt"], ["habe gebracht"], ["habe gedacht"], ["bin gedrungen"], ["habe gedurft"], ["habe empfohlen"], ["habe gegessen"], ["habe/bin gefahren", "habe gefahren", "bin gefahren"], ["bin gefallen"], ["habe gefangen"], ["habe gefunden"], ["bin geflogen"], ["bin geflohen"], ["ist geflossen"], ["habe gefressen"], ["habe gefroren"], ["habe geboren"], ["habe gegeben"], ["bin gediehen"], ["bin gegangen"], ["es ist gelungen"], ["habe gegolten"], ["habe genossen"], ["es ist geschehen"], ["habe gewonnen"], ["habe gegossen"], ["habe geglichen"], ["bin geglitten"], ["habe gegraben"], ["habe gegriffen"], ["habe gehabt"], ["habe gehalten"], ["habe gehangen"], ["habe gehoben"], ["habe geheißen"], ["habe geholfen"], ["habe gekannt"], ["habe geklungen"], ["bin gekommen"], ["habe gekonnt"], ["bin gekrochen"], ["habe geladen"], ["habe gelassen"], ["bin gelaufen"], ["habe gelitten"], ["habe geliehen"], ["habe gelesen"], ["habe gelegen"], ["habe gelogen"], ["habe gemieden"], ["habe gemocht"], ["habe gemusst"], ["habe genommen"], ["habe genannt"], ["habe gepfiffen"], ["ist gequollen"], ["habe geraten"], ["habe gerieben"], ["habe gerissen"], ["habe/bin geritten", "habe geritten", "bin geritten"], ["bin gerannt"], ["habe gerochen"], ["habe gerufen"], ["habe geschaffen"], ["habe geschieden"], ["habe geschienen"], ["habe geschoben"], ["habe geschossen"], ["habe geschlafen"], ["habe geschlagen"], ["bin geschlichen"], ["habe geschliffen"], ["habe geschlossen"], ["habe geschnitten"], ["bin erschrocken"], ["habe geschrieben"], ["habe geschrien"], ["bin geschritten"], ["habe geschwiegen"], ["bin geschwommen"], ["bin geschwunden"], ["habe geschworen"], ["habe gesehen"], ["bin gewesen"], ["habe gesandt"], ["habe gesungen"], ["bin gesunken"], ["habe gesessen"], ["habe gesollt"], ["habe gespalten"], ["habe gesprochen"], ["bin gesprungen"], ["habe gestochen"], ["habe gestanden"], ["habe gestohlen"], ["bin gestiegen"], ["bin gestorben"], ["habe gestunken"], ["habe gestoßen"], ["habe gestritten"], ["habe getragen"], ["habe getroffen"], ["habe getrieben"], ["habe/bin getreten", "habe getreten", "bin getreten"], ["habe getrunken"], ["habe getrogen"], ["habe getan"], ["habe verdorben"], ["habe vergessen"], ["habe verloren"], ["habe verziehen"], ["bin gewachsen"], ["habe gewaschen"], ["habe gewiesen"], ["habe gewandt"], ["habe geworben"], ["bin geworden"], ["habe geworfen"], ["habe gewogen"], ["habe gewusst"], ["habe gewollt"], ["habe/bin gezogen", "habe gezogen", "bin gezogen"], ["habe gezwungen"]]
],


[
[["umivati se"], ["česati se"], ["obleči se"], ["sleči se"], ["skriti se"], ["srečati se"], ["usesti se"], ["uleči se"], ["odločiti se"], ["obnašati se"], ["pritožiti se"], ["jeziti se"], ["prijaviti se"], ["posloviti se"], ["spomniti se"], ["povečati se"], ["pomanjšati se"], ["potrpeti"], ["motiti se"], ["zabavati se / pogovarjati se", "zabavati se", "pogovarjati se"], ["zabavati se"], ["prestrašiti se / bati se", "prestrašiti se", "bati se"], ["navaditi se"], ["razburjati se"], ["omejiti se"], ["pripeti se / privezati se", "pripeti se", "privezati se"], ["pretepati se"], ["izgubiti se (peš)", "izgubiti se"], ["izgubiti se (v avtu)", "izgubiti se"], ["izgubiti se (v gorah)", "izgubiti se"], ["počutiti se"], ["pripraviti se"], ["čuditi se"], ["podvizati se"], ["zaljubiti se"], ["zaročiti se"], ["pozdraviti se (z nekom)", "pozdraviti se"], ["opravičiti se"], ["srečati se"], ["sramovati se"], ["zanesti se"], ["hrepeneti"], ["zahvaliti se"], ["nahajati se"], ["zediniti se"], ["poškodovati se"], ["okrevati / spočiti se", "okrevati", "spočiti se"]],
    
[["waschen"], ["kämmen"], ["anziehen"], ["ausziehen"], ["verstecken"], ["treffen"], ["setzen"], ["legen"], ["entscheiden / entschließen", " entscheiden", " entschließen"], ["benehmen / verhalten", "benehmen", "verhalten"], ["beklagen"], ["ärgern"], ["bewerben"], ["verabschieden"], ["erinnern"], ["vergrößern"], ["verkleinern"], ["gedulden"], ["irren"], ["unterhalten"], ["amüsieren"], ["fürchten"], ["gewöhnen"], ["aufregen"], ["einschränken"], ["anschnallen"], ["prügeln"], ["verlaufen"], ["verfahren"], ["versteigen"], ["fühlen"], ["vorbereiten"], ["wundern"], ["beeilen"], ["verlieben"], ["verloben"], ["begrüßen"], ["entschuldigen"], ["begegnen"], ["schämen"], ["verlassen"], ["sehnen"], ["bedanken"], ["befinden"], ["einigen"], ["verletzen"], ["erholen"]]
],
    
[
[["želeti si"], ["privoščiti si"], ["zapomniti si"], ["sposoditi si"], ["kupiti si"], ["misliti si"], ["delati si skrbi"], ["dovoliti si"], ["ogledati si"], ["truditi se"]],

[["wünschen"], ["leisten / gönnen", "leisten", "gönnen"], ["merken"], ["leihen"], ["kaufen"], ["denken"], ["Sorgen machen"], ["erlauben"], ["ansehen"], ["Mühe geben"]]
]   
]

var isMobile = false; //če je telefon
var s = 0; //spremenljivka za switch
var nemCrka = ["ä", "ö", "ü", "ß"]; //array za vse nem črke
var navadneCrke = ["A", "O", "U", "S"];
var celica; //spremenljivka za id določene celice
//var b; //spremenljivka za nem črke
//var c, d; //spremenljivka za nem črke
var zgodovinaIskanja = []; //za zgodovino iskanja
var imenaStolpcev = ["Slovenski prevod", "Infinitiv", "3. Person", "Präteritum", "Perfekt", "Slovenski prevod", "Reflexive Verben, Akkusativ", "Slovenski prevod", "Reflexive Verben, Dativ"];
var p = 1; //spremenljivka za localStorage

function localStoragee()
{
	if (typeof(Storage) !== "undefined") //če lahko brskalnik ima local storage
	{
		if (p) //samo prvič
		{
			p = 0;
		}
		else
		{
		}
	}
}

/*function nemCrke(c, d)
{
	document.getElementById("input" + c).value = document.getElementById("input" + c).value + nemCrka[d]; //dobi kar je že napisano in doda ustrezno črko
	document.getElementById("input" + c).focus(); //fokusira se na vpisno okno
	console.log(c, d);

	for (var o = 0; o <= 4; o++)
	{
		if (fff[o])
		{
			var input = document.getElementById("input" + o).hasFocus;
			if (input)
			{
				document.getElementById("input" + o).value = document.getElementById("input" + o).value + nemCrka[d]; //dobi kar je že napisano in doda ustrezno črko
				document.getElementById("input" + o).focus(); //fokusira se na vpisno okno
			}

		}
	}
}*/

function insertAtCaret(areaId, text) {
	var txtarea = document.getElementById(areaId);
	if (!txtarea) { //če ne obstaja to vpisno okno
	return;
	}

	var scrollPos = txtarea.scrollTop;
	var strPos = 0;
	var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ?
	"ff" : (document.selection ? "ie" : false));
	if (br == "ie") {
	txtarea.focus();
	var range = document.selection.createRange();
	range.moveStart('character', -txtarea.value.length);
	strPos = range.text.length;
	} else if (br == "ff") {
	strPos = txtarea.selectionStart;
	}

	var front = (txtarea.value).substring(0, strPos);
	var back = (txtarea.value).substring(strPos, txtarea.value.length);
	txtarea.value = front + text + back;
	strPos = strPos + text.length;
	if (br == "ie") {
	txtarea.focus();
	var ieRange = document.selection.createRange();
	ieRange.moveStart('character', -txtarea.value.length);
	ieRange.moveStart('character', strPos);
	ieRange.moveEnd('character', 0);
	ieRange.select();
	} else if (br == "ff") {
	txtarea.selectionStart = strPos;
	txtarea.selectionEnd = strPos;
	txtarea.focus();
	}

	txtarea.scrollTop = scrollPos;
}

function onLoad()
{
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
	}
	
	localStoragee(); 

	document.getElementById("iskaniGlagol").focus(); //fokusira se na vpisno okno

	document.addEventListener("keyup", function(event) { //preveri za pritisk tipke
			//event.preventDefault();

			if ((event.keyCode === 13) && (document.activeElement.id != "gumb")) //preveri če je pritisnjena tipka enter in ni ta gumb fokusiran
			{ 
				document.getElementById("gumb").click(); //klikne na gumb preveri
			}

			var crka = navadneCrke.indexOf(String.fromCharCode(event.keyCode)); //katera črka je bila pritisnjena
			if ((crka != -1) && (event.altKey))  //preveri če je pritisnjena tipka a, o, u, s in alt
			{
				
				if (document.getElementById(document.activeElement.id) != null) //če je kako vpisno okno fokusirano
				{
					insertAtCaret(document.activeElement.id, nemCrka[crka]); //doda ustrezno črko
				}
			}
			});
}

function iskanje()
{
	if (document.getElementById("iskaniGlagol").value == "") //če ni nič vpisano
	{
		return;
	}
	switch(s){
		case 0:
			document.getElementById("gumb").innerHTML = "Ponovno iskanje"; //sprmeni gumb v Nadaljuj
			var iskanje = document.getElementById("iskaniGlagol").value.toLowerCase().replace(/\s\s+/g, " "); //dobi odgovor uporabnika
			document.getElementById("iskaniGlagol").setAttribute("class", "skrito"); //odstrani se input
        
			//z - navadni akksativ dativ, e - stolpec, w - različice glagola, t - posamezen glagol
			var iskaniGlagol = []; //array za vse najdene prave glagole
			var mestoIskanegaGlagola = []; //array za mesta najdenih glagolov
			for (var z = 0; z <= vsiGlagoli.length - 1; z++)
			{
				for (var e = 0; e <= vsiGlagoli[z].length - 1; e++)
				{
					for (var w = 0; w <= vsiGlagoli[z][e].length - 1; w++)
					{
						var nepravilnostCrk = [[], [], [], []];
						var nepravilnostCrkSt = [];
						for (var t = 0; t <= vsiGlagoli[z][e][w].length - 1; t++) //za vsako obliko glagola
						{
							for (var u = 0; u <= iskanje.length - 1; u++) //za vsako črko iskanja
							{
								var nemGlagolCrka = vsiGlagoli[z][e][w][t].charAt(u);
								var iskanjeCrka = iskanje.charAt(u);
								if (nemGlagolCrka !== iskanjeCrka)
								{
									nepravilnostCrk[t].push(u); //če je doočena črka nepravilna se shrani njena pozicja
								}
							}
							nepravilnostCrkSt.push(nepravilnostCrk[t].length);
						}

						var arrayNajblizjeBesede = nepravilnostCrk[nepravilnostCrkSt.indexOf(Math.min.apply(Math, nepravilnostCrkSt))];

						var g = 1; //da se rezultati ne ponavljajo
						for (var t = 0; t <= mestoIskanegaGlagola.length - 1; t++)
						{
							if (mestoIskanegaGlagola[t][0] == z && mestoIskanegaGlagola[t][2] == w)
							{
								g = 0;
							}
						}

						if ((iskaniGlagol[0] == undefined || iskaniGlagol[0].length == arrayNajblizjeBesede.length) && g) //če ima glagol enako nepravilnosti
						{
							iskaniGlagol.push(arrayNajblizjeBesede);
							mestoIskanegaGlagola.push([z, e, w, t]);
						}
						else if (iskaniGlagol[0].length > arrayNajblizjeBesede.length) //če je glagol bolj podoben iskanemu
						{
							iskaniGlagol = [arrayNajblizjeBesede];
							mestoIskanegaGlagola = [[z, e, w, t]];
						}			
					}
				}
			}

			var popravljenoPlac = document.createElement("DIV"); //če iskani glagol narobe napišemo ga popravi
			popravljenoPlac.setAttribute("id", "popravljenoPlac");
			popravljenoPlac.setAttribute("class", "popravljeno vecjiFont");
			document.getElementsByTagName("P")[0].appendChild(popravljenoPlac);
			var poprava = iskanje.split("");
			var popravljeno;

			for (var r = 0; r <= iskaniGlagol[0].length - 1; r++) //za vsako napako v besedi
			{
				poprava[iskaniGlagol[0][r]] = "<span>" + poprava[iskaniGlagol[0][r]] + "</span>";
			}
			popravljeno = poprava.join("");
			document.getElementById("popravljenoPlac").innerHTML = popravljeno;
			
			var v = [1, 1, 1]; //spremenljivke za vsako skupino glagolov
			var ll = [0, 5, 7];
			var kk = [4, 1, 1];
			
			for (var k = 0; k <= iskaniGlagol.length - 1; k++)
			{
				var n = mestoIskanegaGlagola[k][0];

				if (v[n]) //izdelava naslovov
				{
					var tr = document.createElement("TR");
					tr.setAttribute("id", "nasloviStolpcev" + n);
					tr.setAttribute("class", "nasloviStolpcev");
					document.getElementById("tabela" + n).appendChild(tr);
					v[n] = 0;
					for (var l = 0; l <= kk[n]; l++)
					{
						var td = document.createElement("TD");
						document.getElementById("nasloviStolpcev" + n).appendChild(td);
						document.getElementById("nasloviStolpcev" + n).getElementsByTagName("TD")[l].innerHTML = imenaStolpcev[l + ll[n]];
					}
				}
				var tr = document.createElement("TR"); //nova vrstica za vse oblike glagola
				document.getElementById("tabela" + n).appendChild(tr);
				var stVrstic = document.getElementById("tabela" + n).getElementsByTagName("TR").length;
				for (var m = 0; m <= kk[n]; m++)
				{
					var td = document.createElement("TD");
					document.getElementById("tabela" + n).getElementsByTagName("TR")[stVrstic - 1].appendChild(td);
					document.getElementById("tabela" + n).getElementsByTagName("TR")[stVrstic - 1].getElementsByTagName("TD")[m].innerHTML = vsiGlagoli[n][m][mestoIskanegaGlagola[k][2]][0];
				}
			}

			/*zgodovinaIskanja.push(vsiGlagoli[mestoIskanegaGlagola[0][0]][mestoIskanegaGlagola[0][1]][mestoIskanegaGlagola[0][2]][0]);
			document.getElementById("zgodovinaIskanja").innerHTML="Zgodovina iskanja:"; //napise zacetni stavek
			document.getElementById("napacniGlagoli").innerHTML = imenaStolpcev[] + ": " + zgodovinaIskanja[]; //izpis*/

            localStoragee();
			s = 1;
			break;
		
		case 1:
			document.getElementById("gumb").innerHTML = "Išči"; //spremeni gumb v Išči
            document.getElementById("iskaniGlagol").setAttribute("class", "input"); //znova se pojavi input
            document.getElementById("iskaniGlagol").focus() //fokusira se na vpisno okno
			document.getElementById("iskaniGlagol").value = ""; //izbrise kar je bilo prej napisano
			
			if (document.getElementById("popravljenoPlac") != undefined) //odstrani popravljeno, če obstaja
			{
				document.getElementById("popravljenoPlac").remove(); //izbriše popravljeno
			}
			
			document.getElementById("tabela0").innerHTML = ""; //izbrišejo se rezultati iskanja
			document.getElementById("tabela1").innerHTML = "";
			document.getElementById("tabela2").innerHTML = "";

			s = 0;
			break;
	}
}

function reset()
{
	localStorage.clear();
	location.reload();
}