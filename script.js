"use strict";

/* 1. složi varijablu tajniBroj i u tu varijablu spremi random broj između 1 i 21.
2. Postavi broj pokušaja kao varijablu score i početne vrijednosti 20 (let score = 20)
3. Postavi varijablu highscore i postavi početnu vrijednost 0 (let highscore = 0)
4. Složi eventListner na input polje i napravi usporedbe sa tajnimBrojem. Ako je input broj veći
od tajnog broja ispiši poruku da broj manji od vašeg, ako je manji onda da je broj veći od vašeg.
Naravno ako se pogodi broj onda ispiši da je broj pogođen. Uzmite u obzir i da treba ispisati poruku
ako broj nije upisan u input polje a pokrenuo se eventListener. Također prilikom svakog promašaja
treba promijeniti i ispis Broja pokušaja (umanjiti za 1). Ako se ispucaju svi pokušaji a nema pogotka
treba ispisati poruku Izgubili ste.
5. Ako ste pogodili broj, treba promijeniti pozadinu u zelenu, umjesto upitnika ispisati tajniBroj i
trenutni broj pokušaja usporediti sa najboljim rezultatom, ako je veći onda ga zapisati umjesto
trenutno postavljenog najboljeg rezultata. (slika je priložena kako bi trebalo izgledati).
6. Pritiskom na gumb ponovo! treba resetirati sve (uključujući novi tajniBroj) osim najboljeg
rezultata. */

let tajniBroj = Math.floor(Math.random() * 20) + 1;
console.log(tajniBroj);

let score = 20; //broj pokušaja
let highscore = 0;
let inputPogodi;
let inputValue;

const submitBtn = document.querySelector(".provjeri");

const broj = document.querySelector(".broj");
const ponovo = document.querySelector(".ponovo");
const poruka = document.querySelector(".poruka");

const usporedba = () => {
  console.log("opalilo je");
  inputPogodi = document.querySelector(".pogodi"); //unesena vrijednost inputom
  inputValue = Number(inputPogodi.value.trim());
  const brojPokusaja = document.querySelector(".score");
  const najboljiRezultat = document.querySelector(".highscore");

  if (
    inputValue !== "" &&
    isNaN(inputValue) === false &&
    inputValue > 0 &&
    inputValue <= 20
  ) {
    if (inputValue > tajniBroj) {
      poruka.textContent = `Broj je manji od vašeg!`;
      score--;
      provjeriScore();
    } else if (inputValue < tajniBroj) {
      poruka.textContent = `Broj je veći od vašeg!`;
      score--;
      provjeriScore();
    } else if (inputValue === tajniBroj) {
      poruka.textContent = `Broj je pogođen!`;
      brojPokusaja.textContent = score;
      broj.textContent = inputValue;
      document.body.style.backgroundColor = "green";
      jeLiHighscore();
      najboljiRezultat.textContent = highscore;
      submitBtn.removeEventListener("click", usporedba);
    }
  } else {
    alert("Niste upisali broj između 1 i 20!");
  }
};

const reset = () => {
  inputPogodi = document.querySelector(".pogodi");
  inputPogodi.value = "";
  tajniBroj = Math.floor(Math.random() * 20) + 1;
  console.log(tajniBroj);
  score = 20;
  const broj = document.querySelector(".broj");
  broj.textContent = "?";
  document.body.style.backgroundColor = "#222";
  const poruka = document.querySelector(".poruka");
  poruka.textContent = `Igra pogađanja`;
  const brojPokusaja = document.querySelector(".score");
  brojPokusaja.textContent = score;
  submitBtn.addEventListener("click", usporedba);
};

const provjeriScore = () => {
  const brojPokusaja = document.querySelector(".score");
  if (score === 0) {
    poruka.textContent = `Izgubili ste!`;
    brojPokusaja.textContent = score;
    submitBtn.removeEventListener("click", usporedba);
  } else {
    brojPokusaja.textContent = score;
  }
};

const jeLiHighscore = () => {
  if (score > highscore) {
    highscore = score;
  }
  const najboljiRezultat = document.querySelector(".highscore");
  najboljiRezultat.textContent = highscore;
};

if (score > 0) {
  submitBtn.addEventListener("click", usporedba);
}

ponovo.addEventListener("click", reset);
