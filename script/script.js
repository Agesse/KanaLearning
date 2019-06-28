var Main;
(function (Main) {
    var Kana = /** @class */ (function () {
        function Kana() {
        }
        return Kana;
    }());
    Main.Kana = Kana;
    var kanasToReview = [];
    var currentKanaId = null;
    var showingAnswer = false;
    function init() {
        kanasToReview = JSON.parse(JSON.stringify(Main.kanasList));
        currentKanaId = getRandomInt(kanasToReview.length);
        document.getElementsByClassName("showed-char")[0].innerHTML = kanasToReview[currentKanaId].romaji;
    }
    Main.init = init;
    function showAnswer() {
        var currentKana = kanasToReview[currentKanaId];
        if (showingAnswer) {
            document.getElementsByClassName("showed-char")[0].innerHTML = currentKana.romaji;
        }
        else {
            document.getElementsByClassName("showed-char")[0].innerHTML = currentKana.hiragana + " " + currentKana.katakana;
        }
        showingAnswer = !showingAnswer;
    }
    Main.showAnswer = showAnswer;
    function nextKana() {
        kanasToReview.splice(currentKanaId, 1);
        if (kanasToReview.length) {
            currentKanaId = getRandomInt(kanasToReview.length);
            document.getElementsByClassName("showed-char")[0].innerHTML = kanasToReview[currentKanaId].romaji;
            showingAnswer = false;
        }
        else {
            var img = document.createElement("IMG");
            img.setAttribute("src", "./res/end-img.png");
            document.getElementsByClassName("showed-char")[0].innerHTML = "";
            document.getElementsByClassName("showed-char")[0].appendChild(img);
        }
    }
    Main.nextKana = nextKana;
    function keyboard(event) {
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
    Main.keyboard = keyboard;
})(Main || (Main = {}));
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var Main;
(function (Main) {
    Main.kanasList = [
        {
            romaji: "A",
            hiragana: "あ",
            katakana: "ア"
        },
        {
            romaji: "I",
            hiragana: "い",
            katakana: "イ"
        },
        {
            romaji: "U",
            hiragana: "う",
            katakana: "ウ"
        },
        {
            romaji: "E",
            hiragana: "え",
            katakana: "エ"
        },
        {
            romaji: "O",
            hiragana: "お",
            katakana: "オ"
        },
        {
            romaji: "KA",
            hiragana: "か",
            katakana: "カ"
        },
        {
            romaji: "KI",
            hiragana: "き",
            katakana: "キ"
        },
        {
            romaji: "KU",
            hiragana: "く",
            katakana: "ク"
        },
        {
            romaji: "KE",
            hiragana: "け",
            katakana: "ケ"
        },
        {
            romaji: "KO",
            hiragana: "こ",
            katakana: "コ"
        },
        {
            romaji: "SA",
            hiragana: "さ",
            katakana: "サ"
        },
        {
            romaji: "SHI",
            hiragana: "し",
            katakana: "シ"
        },
        {
            romaji: "SU",
            hiragana: "す",
            katakana: "ス"
        },
        {
            romaji: "SE",
            hiragana: "せ",
            katakana: "セ"
        },
        {
            romaji: "SO",
            hiragana: "そ",
            katakana: "ソ"
        },
        {
            romaji: "TA",
            hiragana: "た",
            katakana: "タ"
        },
        {
            romaji: "CHI",
            hiragana: "ち",
            katakana: "チ"
        },
        {
            romaji: "TSU",
            hiragana: "つ",
            katakana: "ツ"
        },
        {
            romaji: "TE",
            hiragana: "て",
            katakana: "テ"
        },
        {
            romaji: "TO",
            hiragana: "と",
            katakana: "ト"
        },
        {
            romaji: "NA",
            hiragana: "な",
            katakana: "ナ"
        },
        {
            romaji: "NI",
            hiragana: "に",
            katakana: "ニ"
        },
        {
            romaji: "NU",
            hiragana: "ぬ",
            katakana: "ヌ"
        },
        {
            romaji: "NE",
            hiragana: "ね",
            katakana: "ネ"
        },
        {
            romaji: "NO",
            hiragana: "の",
            katakana: "ノ"
        },
        {
            romaji: "HA",
            hiragana: "は",
            katakana: "ハ"
        },
        {
            romaji: "HI",
            hiragana: "ひ",
            katakana: "ヒ"
        },
        {
            romaji: "FU",
            hiragana: "ふ",
            katakana: "フ"
        },
        {
            romaji: "HE",
            hiragana: "へ",
            katakana: "ヘ"
        },
        {
            romaji: "HO",
            hiragana: "ほ",
            katakana: "ホ"
        },
        {
            romaji: "MA",
            hiragana: "ま",
            katakana: "マ"
        },
        {
            romaji: "MI",
            hiragana: "み",
            katakana: "ミ"
        },
        {
            romaji: "MU",
            hiragana: "む",
            katakana: "ム"
        },
        {
            romaji: "ME",
            hiragana: "め",
            katakana: "メ"
        },
        {
            romaji: "MO",
            hiragana: "も",
            katakana: "モ"
        },
        {
            romaji: "YA",
            hiragana: "や",
            katakana: "ヤ"
        },
        {
            romaji: "YU",
            hiragana: "ゆ",
            katakana: "ユ"
        },
        {
            romaji: "YO",
            hiragana: "よ",
            katakana: "ヨ"
        },
        {
            romaji: "RA",
            hiragana: "ら",
            katakana: "ラ"
        },
        {
            romaji: "RI",
            hiragana: "り",
            katakana: "リ"
        },
        {
            romaji: "RU",
            hiragana: "る",
            katakana: "ル"
        },
        {
            romaji: "RE",
            hiragana: "れ",
            katakana: "レ"
        },
        {
            romaji: "RO",
            hiragana: "ろ",
            katakana: "ロ"
        },
        {
            romaji: "WA",
            hiragana: "わ",
            katakana: "ワ"
        },
        {
            romaji: "WO",
            hiragana: "を",
            katakana: "ヲ"
        },
        {
            romaji: "N",
            hiragana: "ん",
            katakana: "ン"
        },
    ];
})(Main || (Main = {}));
