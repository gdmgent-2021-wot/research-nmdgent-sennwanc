# Stappenplan installeren van het geluid
## Stap 1: Inpluggen van de audio apparaten
Ik gebruik hierbij een usb-microfoon, deze plug ik in in de voorziene poort op de raspberry.
De audio uitvoer zal gaan via de AUX connector op de PI.

## Stap 2: Installeren van de microfoon en audio uitvoer
Wanneer je je op het bureaublad van de raspberry PI (met Raspbian) bevindt, selecteer je rechts bovenaan het geluidsicoontje.
Zet de geluid in- en out-put beiden op het juiste apparaat.

Open nu een terminal en voor het commando `arecord -l` uit.
Schrijf hierbij voor de microfoon zijn device nummer en card nummer op.
Met `aplay -l` zie je meer informatie over de uitvoerapparaten.
Doe dus hiervoor hetzelfde bij de luidspreken.

Het volgende commando dient om een .asoundrc bestand aan te maken.
Voer `sudo nano /home/pi/.asoundrc` uit in de terminal.
Dit bestand helpt om te bepalen welk audio device de audio driver moet gebruiken.

Plaats volgende code in dit bestand en voer de device en card nummers in op de juiste plaats.
`pcm.!default {
  type asym
  capture.pcm "mic"
  playback.pcm "speaker"
}
pcm.mic {
  type plug
  slave {
    pcm "hw:[card number],[device number]"
  }
}
pcm.speaker {
  type plug
  slave {
    pcm "hw:[card number],[device number]"
  }
}
`
Daarna dien je volgende toetscombinaties uit te voeren:
- Ctrl+X
- Y
- Enter om op te slaan

Voer het `alsamixer` commando uit om je volume op 75% te zetten. Wanneer later blijkt dat dit te laag of te hoog is, pas je het naar een ander niveau aan.

Om de speaker te testen voer volgend commando uit `speaker-test -t wav`.

Om de micro te testen neem je eerst 5 seconden op door het volgende commando uit te voeren: `arecord --format=S16_LE --duration=5 --rate=16000 --file-type=raw out.raw`.
Wanneer je geen errors krijgt, is de opname goed gelukt. Dit controleer je door volgend commando: `aplay --format=S16_LE --rate=16000 out.raw`.