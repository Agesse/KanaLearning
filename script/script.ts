namespace Main {

  export class Kana {
    romaji: string;
    hiragana: string;
    katakana: string;
  }

  let kanasToReview: Kana[] = [];
  let currentKanaId: number = null;
  let showingAnswer = false;

  export function init() {
    kanasToReview = JSON.parse(JSON.stringify(kanasList));
    currentKanaId = getRandomInt(kanasToReview.length);
    document.getElementsByClassName("showed-char")[0].innerHTML = kanasToReview[currentKanaId].romaji;
  }

  export function showAnswer() {
    let currentKana = kanasToReview[currentKanaId];
    if (showingAnswer) {
      document.getElementsByClassName("showed-char")[0].innerHTML = currentKana.romaji;
    } else {
      document.getElementsByClassName("showed-char")[0].innerHTML = currentKana.hiragana + " " + currentKana.katakana;
    }
    showingAnswer = !showingAnswer;
  }

  export function nextKana() {
    kanasToReview.splice(currentKanaId, 1);
    if (kanasToReview.length) {
      currentKanaId = getRandomInt(kanasToReview.length);
      document.getElementsByClassName("showed-char")[0].innerHTML = kanasToReview[currentKanaId].romaji;
      showingAnswer = false;
    } else {
      let img = document.createElement("IMG");
      img.setAttribute("src", "./res/end-img.png");
      document.getElementsByClassName("showed-char")[0].innerHTML = "";
      document.getElementsByClassName("showed-char")[0].appendChild(img);
    }
  }

  export function keyboard(event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }

    switch (event.key) {
      case "ArrowRight":
      case "ArrowLeft":
        nextKana();
        event.preventDefault();
        break;
      case "ArrowUp":
      case "ArrowDown":
        showAnswer();
        event.preventDefault();
        break;
      default:
        return;
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
