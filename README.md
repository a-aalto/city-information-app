# :earth_americas: City Info
## Projekti 3: JS-sovellus ulkoisia kirjastoja käyttäen
jQuery + Axios app. Hyödynnetty RESTful-apeja.<br>
Projekti on toteutettu Laurea-ammattikorkeakoulun kurssilla "Web-sovellusten kehittäminen Javascriptillä"<br>

### Verkkolinkit:
Netlify: https://cityinfo-app.netlify.app<br>
Projektin videoesittely: 

### Työn jakautuminen
Tekijä: Antti Aalto

### Oma arvio työstä ja oman osamisen kehittymisestä
Opin tässä projektissa paljon enemmän virheidenkäsittelyä sekä opin hyödyntämään kirjastoja kuten jQuery sekä Axios. Tässä projektissa myös halusin varmistaa varman keinon pitää API-avaimet poissa frontendistä, joten hyödynsin Netlify Functions:ia. Tämä taas antoi paljon uutta informaatiota esim. Node:sta sekä miten hyödyntää proxy-palvelimia API-kutsuissa.

### Palaute opettajalle kurssista sekä itse opetuksesta tähän saakka
Kurssi toi paljon uutta informaatiota, ja olen oppinut paljon frontend-kehityksestä. Opetus on ollut mallikasta sekä informoivaa.

### Tietoja sovelluksesta
City Info on sovellus, joka hyödyntää REST-apeja datan noutamiseen, sen käsittelyyn ja lopulta sen näyttämiseen itse käyttöliittymässä. Sovelluksessa käyttäjä voi syöttää input-kenttään kaupungin nimen (jopa suomeksi + ei ole case-sensitive). Sovellus lukee formin inputin syötteen ja hakee sillä säätiedot OpenWeatherMap API:sta, maa/valtio-tiedot RESTCountries API:sta ja lopulta näyttää tiedot käyttäjälle käyttöliittymässä. Tarkemmat tiedot löytyvät itse koodista kommentoituna.

### Tunnetut virheet/bugit
Tällä hetkellä ei bugeja.

### Kuvakaappaukset
![Screenshot of the todo app.](https://github.com/a-aalto/city-information-app/blob/main/project-images/city-info-UI.png)
Kuva: City Info UI

### Teknologiat
Projekti on toteutettu HTML:llä, CSS:llä sekä Javascriptillä. Javascriptin kirjastoina on toiminut jQuery sekä Axios. Käytössä on myös Node.js (Node-projektin alustus), joka käytössä Netlify Functionsin osalta.

### Lähteet
Alla olevat lähteet (lähdeluettelo) olivat apuna projektia tehdessä.<br><br>
Hyödynsin ChatGPT:tä tiettyjen asioiden ideoinnissa sekä virheidenhallinnassa. Esitin jatkokysymyksiä aiheisiin joista halusin oppia lisää.<br>
W3Schools:in Javascript-dokumentaatio oli tiettyjen syntaxiin liittyvien asioiden selvittämistä varten, funktioiden selvittämistä varten sekä tiettyjen datatyyppien selvittämistä varten.<br>
Bootstrapin dokumentaatio oli Bootstrapin omien css-luokkien selvittämiseen sekä sovelluksen visuaalisen ilmeen parantamiseen.<br>
OpenWeatherMap:n oma dokumentaatio oli API-kutsujen selvittämistä varten sekä itse API-avaimen saamista varten.<br>
REST Countries:n oma dokumentaatio oli API-kutsujen selvittämistä varten.<br>
Opintojakson kurssimateriaalia hyödynsin Netlify Functions-asiassa.

**Lähdeluettelo:**
- ChatGPT 2025. OpenAI. Viitattu 3.12.2025. https://chatgpt.com
- W3Schools 2025. Javascript-dokumentaatio. Viitattu 3.12.2025. https://www.w3schools.com/js/default.asp
- W3Schools 2025. jQuery-dokumentaatio. Viitattu 3.12.2025. https://www.w3schools.com/jquery/default.asp
- jQuery 2025. jQuery-dokumentaatio. Viitattu 3.12.2025. https://jquery.com
- Axios 2025. Axios-dokumentaatio. Viitattu 3.12.2025. https://axios-http.com
- Bootstrap 5.3 Documentation 2025. Bootstrap. Viitattu 13.12.2025. https://getbootstrap.com/docs/5.3/getting-started/introduction/
- OpenWeatherMap API documentation 2025. OpenWeatherMap. Viitattu 3.12.2025. https://openweathermap.org/current#name
- REST Countries API documentation 2025. REST Countries. Viitattu 3.12.2025. https://restcountries.com

### Lisenssi
[MIT-lisenssi](https://github.com/a-aalto/city-information-app/blob/main/LICENSE) @ a-aalto