# Procesverslag

Markdown is een simpele manier om HTML te schrijven.
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door _open_ toe te voegen aan een _details_ element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.

## Jij

<details>
  <summary>uitwerken voor kick-off werkgroep</summary>

### Auteur:

Stein Bergervoet

#### Je startniveau:

Zwart

#### Je focus:

Responsive

</details>

## Je website

<details>
  <summary>uitwerken voor kick-off werkgroep</summary>

### Je opdracht:

De website van het [Spoorwegmuseum](https://www.spoorwegmuseum.nl/)

#### Screenshot(s) van de eerste pagina (small screen):

De [homepagina](https://www.spoorwegmuseum.nl/)

  <img src="readme-img/Homepagina.png" width="375px" alt="omschrijving van de pagina">

#### Screenshot(s) van de tweede pagina (small screen):

De [bezoekersinformatie](https://www.spoorwegmuseum.nl/bezoek/bezoekersinformatie/) pagina

  <img src="readme-img/Bezoekersinformatie.png" width="375px" alt="omschrijving van de pagina">
</details>

## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 1e werkgroep</summary>

#### Screenreader

De website van het Spoorwegmuseum was niet heel toegankelijk voor screenreaders.

Bevindingen:

- Soms werden er voor de header gebruik gemaakt van divs in plaats van heading tags.
- De taal van de screenreader wordt gebaseerd op lang prop op html tag. Deze moet dus altijd goed staan.
- Het was niet mogelijk om de volledige slider te bekijken met een screenreader.

#### Muis en Toetsenbord

##### Toetsenbord

Mijn website is wel bruikbaar met een toetsenbord, maar heeft hier geen verbeteringen voor gemaakt. Denk hierbij aan bijvoorbeeld onzichtbare knoppen die gebruikt kunnen worden om delen van de content over te slaan.

Bevindingen:

- Moderne websites moeten hidden knoppen bevatten waarmee meerdere delen van de content overgeslagen kunnen worden.
- Alle knoppen moeten focus states hebben.
- Verborgen knoppen mogen niet berijkbaar kunnen zijn met het toetsenbord.

#### Motoriek (shocks, elastiekjes)

##### Shocks

Het gebruik van de muis werd met deze beperking direct een stuk lastiger. Ik moest meer druk uitoefenen op de muis om hem nog normaal te kunnen bedienen. Hierdoor raakte mijn arm eerder vermoeid. Ook klikte ik af en toe per ongeluk op de muis. Om de trackpad te gebruiken moest ik mijn hand klemmen met de tafel. Dit was ook erg onpraktisch.

Bevindingen:

- Knoppen moeten niet te klein gemaakt worden zodat ze goed klikbaar blijven.

#### Visueel (brillen, contrast, kleurenblind, dark/light).

##### 1 missend oog

Bij het ontbreken van het zicht in één oog viel mij direct op dat ik onbewust mijn laptop verder naar links naast me had neergezet. Dit om een makkelijkere hoek te creëren om naar het scherm te kijken. Ondanks dit merkte ik na enige tijd een lichte irritatie in mijn nek, omdat ik hem gebogen hield om beter naar het scherm te kunnen kijken.

##### Melanoom met staar

Met deze visuele beperking moest de webpagina ingezoomd worden om bruikbaar te blijven. Het viel me direct op dat de header dan sticky bleek en een groot deel van de website bedekte, waardoor hij minder bruikbaar was. Ook maakt mijn website veel gebruik van parallax scrolling. Hierdoor werd sommige content niet zichtbaar zodra er werd ingezoomd op de pagina. Zo werkte de slider bijvoorbeeld ook niet meer zodra er werd in ingezoomd.

Bevindingen:

- Een website moet ook op een ingezoomd formaat getest worden voordat hij opgeleverd kan worden.
- Te veel parallax scrolling gaat niet ten goede van de accessibility van een website.

##### Kleurenblind

Wanneer iemand last heeft van kleurenblindheid is het lastig om kleurverschillen te herkennen. Dit is vooral onhandig bij hover states.

Bevindingen:

- Hover effecten met kleur op een witte achtergrond werken wel goed.
- Inline links moeten een underline hebben om goed zichtbaar te zijn.

</details>

## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1e voortgang</summary>

### Agenda voor meeting

| Stein                                                | Mauro | Kenneth | Chelsey |
| ---------------------------------------------------- | ----- | ------- | ------- |
| Welke tag moet je gebruiken voor decoratieve images? | ?     | ?       | ?       |
| Welke tag moet je gebruiken voor icons?              |       |         |         |

### Verslag van meeting

Voorafgaand aan deze meeting had ik niet veel aan mijn website gewerkt, vandaar dat er ook niet zo veel was om op terug te blikken.

Bevindingen:

- Gebruik een lang attribute in engelse onderdelen in een Nederlandse site.
- Gebruik hiervoor een span om engelse stukken tekst binnen een paragraaf.
- Je moet de alt tag leeglagen voor decoratieve plaatjes.
- Of een before of after gebruiken.
- Article tag is er voor content die ook losstaand moet kunnen zijn.
- Heb gebruik van een div mag, maar alleen voor styling.

</details>

## Voortgang 2 (week 3)

<details open>
  <summary>uitwerken voor 2e voortgang</summary>

### Agenda voor meeting

| Stein                                  | Mauro                           | Kenneth                           | Chelsey                                   |
| -------------------------------------- | ------------------------------- | --------------------------------- | ----------------------------------------- |
| Mag je classes voor een column layout? | Klopt mijn semantiek?           | Hoe pas ik flexbox toe?           | Mag je ul of ol tags in li tags plaatsen? |
| Hoe pas je een parallax scroll toe?    | Hoe gebruik je een :after?      | Staan mijn footer en header goed? |                                           |
|                                        | Hoe kan ik deze animatie maken? | nog een punt                      |                                           |

### Verslag van meeting

Wederom had ik niet veel aan mijn site gewerkt waardoor er niet veel is om op terug te blikken.

Bevindingen:

- Je mag classes toepassen, maar zorg er voor dat je het niet te veel doet.
- Een parallax scroll vereist een JavaScript implantatie.

</details>

## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 8e werkgroep</summary>

### Bevindingen

#### Screenreader

Bevindingen:

- Al de links op mijn pagina hebben een duidelijke beschrijving waardoor ze goed door een screenreader gebruikt kunnen worden.
- Alle headings op mijn pagina maken gebruik van de reguliere heading tags, waardoor ze te navigeren zijn met een screenreader. Dit is verbeterd ten opzichte van de werkelijke versie van de website van het spoorwegmuseum aangezien hier vaak divs gebruikt werden voor de headings.

#### Muis en Toetsenbord

Bevindingen:

- Alle knoppen op beide van mijn pagina’s krijgen een outline zodra ze de focus hebben.
- Er zijn geen onzichtbare knoppen aanwezig op beide pagina’s waardoor de gebruiker niet kwijtraakt waar hun cursor zich momenteel bevindt.

</details>

## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3e voortgang</summary>

### Agenda voor meeting

| Stein                                  | Mauro                             | Kenneth | Chelsey |
| -------------------------------------- | --------------------------------- | ------- | ------- |
| Wat is het verschil tussen var en let? | Hoe moet ik de helften uitlijnen? | ?       | ?       |
|                                        | Responsive tekst in header        |         |         |
|                                        | Semantiek                         |         |         |

### Verslag van meeting

Wederom had ik voorgaand aan het gesprek niet aan mijn site gewerkt, waardoor er niet veel was om op terug te blikken.

Bevindingen:

- Het verschil tussen var en let heeft te maken met scoping van variabelen.

</details>

## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

### Je uitkomst - karakteristiek screenshots:

#### Homepagina

<img src="./readme-img/Homepagina-eindresultaat.png" width="375px" alt="uitomst opdracht 1">

#### Bezoekersinformatie

<img src="./readme-img/Bezoekersinformatie-eindresultaat.png" width="375px" alt="uitomst opdracht 1">

### Dit ging goed/Heb ik geleerd:

Ik vind dat mijn uitwerking van de website erg dicht bij de werkelijke site komt en daar ben ik best trots op. Het gene wat ik voornamelijk opnieuw heb geleerd is het schrijven van normale Css. Door mijn ervaring als professionele web developer heb ik de afgelopen tijd alleen gebruikt gemaakt van Sass. Ik vond het dus erg leuk en leerzaam om weer een keer gebruik te maken van normale Css. Het niet gebruiken van classes voor styling was ook een flinke uitdaging.

### Dit was lastig/Is niet gelukt:

Ik had graag meer tijd willen inversteren in de “flashy” onderdelen van de website. Denk hierbij aan bijvoorbeeld aan de parallax scroll effecten en de bewegende logo’s. Hier heb ik door tijdsdruk hier geen tijd aan kunnen besteden. Verder vond ik, zoals ik net al noemde, het lastig om weer normale Css te schrijven. Zo was ik vergeten hoe de syntax voor het aanspreken van elementen werkte en wist ik niet meer hoe ik normale media queries moest gebruiken. Verder vond ik het maken van de site niet al te lastig.

</details>

## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

1. [Stackoverflow post over media queries](https://stackoverflow.com/questions/13550541/media-min-width-max-width)
2. [W3schools over media queries](https://www.w3schools.com/cssref/css3_pr_mediaquery.php)
3. [W3schools over de :nth-child() selector](https://www.w3schools.com/cssref/sel_nth-child.php)
4. [W3schools over de address tag](https://www.w3schools.com/tags/tag_address.asp)

</details>
