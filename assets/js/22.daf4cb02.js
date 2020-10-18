(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{376:function(e,n,a){"use strict";a.r(n);var t=a(42),o=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"stappenplan-downloaden-en-opzetten-van-google-assistant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stappenplan-downloaden-en-opzetten-van-google-assistant"}},[e._v("#")]),e._v(" Stappenplan downloaden en opzetten van Google Assistant")]),e._v(" "),a("h2",{attrs:{id:"stap-1-updaten-van-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stap-1-updaten-van-packages"}},[e._v("#")]),e._v(" Stap 1: Updaten van packages")]),e._v(" "),a("p",[e._v("Na het configureren van de Google Assistant API, zijn er nog enkele zaken die in orde moeten gebracht worden.")]),e._v(" "),a("p",[e._v("We beginnen met het updaten van de Raspberry PI packages: "),a("code",[e._v("sudo apt update")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"stap-2-opzetten-van-google-assistant-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stap-2-opzetten-van-google-assistant-api"}},[e._v("#")]),e._v(" Stap 2: opzetten van Google Assistant API")]),e._v(" "),a("p",[e._v("Wanneer de updates klaar zijn kunnen we over naar de volgende stap.")]),e._v(" "),a("p",[e._v("We maken een nieuw bestand aan op de Raspberry PI waar we de credentials gaan opslaan die we eerder aanmaakten.\nOm dit te doen voeren we volgende twee commando's uit:\n1."),a("code",[e._v("mkdir ~/googleassistant")]),e._v(".\n2."),a("code",[e._v("nano ~/googleassistant/credentials.json")]),e._v(".")]),e._v(" "),a("p",[e._v("In deze file plak je de credentials uit het json bestand die je downloade in de device registratie.")]),e._v(" "),a("p",[e._v("Daarna dien je volgende toetscombinaties uit te voeren:")]),e._v(" "),a("ul",[a("li",[e._v("Ctrl+X")]),e._v(" "),a("li",[e._v("Y")]),e._v(" "),a("li",[e._v("Enter om op te slaan")])]),e._v(" "),a("p",[e._v("Nu gaan we dependencies installeren die we nodig hebben.\nAls eerste installeren we de Python 3 en Python 3 Virtual Environment via volgend commando:\n"),a("code",[e._v("sudo apt install python3-dev python3-venv python3-pip libssl-dev libffi-dev libportaudio2")]),e._v(".")]),e._v(" "),a("p",[e._v("Eens deze installatie gedaan is, schakelen we python 3 in als Virtual Environment: "),a("code",[e._v("python3 -m venv env")]),e._v(".")]),e._v(" "),a("p",[e._v("Nu updaten we de versies van "),a("strong",[e._v("pip")]),e._v(" en de "),a("strong",[e._v("setuptools")]),e._v(": "),a("code",[e._v("env/bin/python3 -m pip install --upgrade pip setuptools --upgrade")]),e._v(".")]),e._v(" "),a("p",[e._v("Om in de python omgeving te geraken runnen we het command "),a("code",[e._v("source env/bin/activate")]),e._v(" in de terminal, daarna dienen we enkel nog de Google Assistant Library te installeren.\nDit kan met volgende commands:\n"),a("code",[e._v("python3 -m pip install --upgrade google-assistant-library")]),e._v(" "),a("code",[e._v("python3 -m pip install --upgrade google-assistant-sdk[samples]")]),e._v(".")]),e._v(" "),a("p",[e._v("Nu zijn alle voorbereidingen getroffen om de Google Assistant software te runnen op de Raspberry PI.")]),e._v(" "),a("h2",{attrs:{id:"stap-3-authoriseren-van-de-raspberry-voor-de-google-assistant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stap-3-authoriseren-van-de-raspberry-voor-de-google-assistant"}},[e._v("#")]),e._v(" Stap 3: Authoriseren van de Raspberry voor de Google Assistant.")]),e._v(" "),a("p",[e._v("In deze stap authoriseren we de Raspberry om zo via ons eigen account de rechten te krijgen om Google Assistant queries uit te voeren.")]),e._v(" "),a("p",[e._v("Eerst installeren we de Python authorisatie tool met command: "),a("code",[e._v("python3 -m pip install --upgrade google-auth-oauthlib[tool]")]),e._v(".")]),e._v(" "),a("p",[e._v("Daarna dienen we de Google Authentication library te runnen. Hierdoor zal je een URL terugkrijgen die je moet plakken in je browser.\n"),a("code",[e._v("google-oauthlib-tool --client-secrets ~/googleassistant/credentials.json \\")]),e._v(" "),a("code",[e._v("--scope https://www.googleapis.com/auth/assistant-sdk-prototype \\")]),e._v(" "),a("code",[e._v("--scope https://www.googleapis.com/auth/gcm \\")]),e._v(" "),a("code",[e._v("--save --headless")]),e._v(".")]),e._v(" "),a("p",[e._v("Eens in de browser, log in op je google account waarmee je de API key aanmaakte. Daar sta je alle zaken toe die nodig zijn voor de installatie.")]),e._v(" "),a("p",[e._v("Daarna moet je een scherm met volgende tekst terugkrijgen: "),a("em",[e._v("Kopieer deze code, schakel over naar je app en plak de code daar:...")]),e._v(". Met daarna een lange authenticatie code.\nKopieer de code en plak het in de terminal op je Raspberry.\nWanneer alles goed verlopen is moet je dit "),a("em",[e._v("Credentials saved: /home/pi/.config/google-oauthlib-tool/credentials.json")]),e._v(" terugkrijgen in de terminal.")]),e._v(" "),a("p",[e._v("Voor de volgende stap heb je alvast je "),a("strong",[e._v("projectid")]),e._v(" (op google actions te vinden) en "),a("strong",[e._v("deviceid")]),e._v(" (te vinden bij device registration) nodig.")]),e._v(" "),a("p",[e._v("Als alles werkt zoals het hoort, hoort u een mondelinge reactie van de assistent bij het ingeven van volgend commando.\n"),a("code",[e._v("googlesamples-assistant-pushtotalk --project-id <projectid> --device-model-id <deviceid>")]),e._v(".")]),e._v(" "),a("p",[e._v("Zo niet, controleer je best de geluidsinstellingen!")]),e._v(" "),a("p",[e._v("ZIEZO, we hebben een werkende spraakassistent!\nIn de volgende stappen configureren we nog enkele zaken verder zodat we niet telkens op enter hoeven te drukken.")])])}),[],!1,null,null,null);n.default=o.exports}}]);