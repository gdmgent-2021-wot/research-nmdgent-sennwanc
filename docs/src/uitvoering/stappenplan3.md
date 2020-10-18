# Stappenplan downloaden en opzetten van Google Assistant
## Stap 1: Updaten van packages
Na het configureren van de Google Assistant API, zijn er nog enkele zaken die in orde moeten gebracht worden.

We beginnen met het updaten van de Raspberry PI packages: `sudo apt update`.

## Stap 2: opzetten van Google Assistant API
Wanneer de updates klaar zijn kunnen we over naar de volgende stap. 

We maken een nieuw bestand aan op de Raspberry PI waar we de credentials gaan opslaan die we eerder aanmaakten.
Om dit te doen voeren we volgende twee commando's uit: 
1.`mkdir ~/googleassistant`.
2.`nano ~/googleassistant/credentials.json`.

In deze file plak je de credentials uit het json bestand die je downloade in de device registratie.

Daarna dien je volgende toetscombinaties uit te voeren:
- Ctrl+X
- Y
- Enter om op te slaan

Nu gaan we dependencies installeren die we nodig hebben.
Als eerste installeren we de Python 3 en Python 3 Virtual Environment via volgend commando:
`sudo apt install python3-dev python3-venv python3-pip libssl-dev libffi-dev libportaudio2`.

Eens deze installatie gedaan is, schakelen we python 3 in als Virtual Environment: `python3 -m venv env`.

Nu updaten we de versies van **pip** en de **setuptools**: `env/bin/python3 -m pip install --upgrade pip setuptools --upgrade`.

Om in de python omgeving te geraken runnen we het command `source env/bin/activate` in de terminal, daarna dienen we enkel nog de Google Assistant Library te installeren.
Dit kan met volgende commands: 
`python3 -m pip install --upgrade google-assistant-library`
`python3 -m pip install --upgrade google-assistant-sdk[samples]`.

Nu zijn alle voorbereidingen getroffen om de Google Assistant software te runnen op de Raspberry PI.

## Stap 3: Authoriseren van de Raspberry voor de Google Assistant.
In deze stap authoriseren we de Raspberry om zo via ons eigen account de rechten te krijgen om Google Assistant queries uit te voeren.

Eerst installeren we de Python authorisatie tool met command: `python3 -m pip install --upgrade google-auth-oauthlib[tool]`.

Daarna dienen we de Google Authentication library te runnen. Hierdoor zal je een URL terugkrijgen die je moet plakken in je browser.
`google-oauthlib-tool --client-secrets ~/googleassistant/credentials.json \`
`--scope https://www.googleapis.com/auth/assistant-sdk-prototype \`
`--scope https://www.googleapis.com/auth/gcm \`
`--save --headless`.

Eens in de browser, log in op je google account waarmee je de API key aanmaakte. Daar sta je alle zaken toe die nodig zijn voor de installatie.

Daarna moet je een scherm met volgende tekst terugkrijgen: _Kopieer deze code, schakel over naar je app en plak de code daar:..._. Met daarna een lange authenticatie code.
Kopieer de code en plak het in de terminal op je Raspberry.
Wanneer alles goed verlopen is moet je dit _Credentials saved: /home/pi/.config/google-oauthlib-tool/credentials.json_ terugkrijgen in de terminal.

Voor de volgende stap heb je alvast je **projectid** (op google actions te vinden) en **deviceid** (te vinden bij device registration) nodig.

Als alles werkt zoals het hoort, hoort u een mondelinge reactie van de assistent bij het ingeven van volgend commando.
`googlesamples-assistant-pushtotalk --project-id <projectid> --device-model-id <deviceid>`.

Zo niet, controleer je best de geluidsinstellingen!

ZIEZO, we hebben een werkende spraakassistent!
In de volgende stappen configureren we nog enkele zaken verder zodat we niet telkens op enter hoeven te drukken.

<!-- ## Stap 4: Google Assistant met hotword
In deze stap gaan we de Google Assistant niet meer activeren via de ENTER toets maar laten we hem reageren op een hotword.
We gaan vanaf nu ook niet de volledige tutorial moeten doorlopen voor de assitent werkende te krijgen.

Begin met de terminal te openen en volgend commando in te geven: `source env/bin/activate`.
In deze modus kunnen we terug gaan communiceren met de Google Assistant.

Als we toch de push to talk wijze willen gebruiken hoeven we deze keer geen projectid en deviceid in te voeren. Dit heeft het systeem namelijk onthouden in de cache bij het eerste gebruik. `googlesamples-assistant-pushtotalk` volstaat!

Wanneer we gebruik willen maken van het hotword _(bij default: 'Ok Google')_ voeren we volgend commando uit: `googlesamples-assistant-hotword --device-model-id <deviceid>`. -->