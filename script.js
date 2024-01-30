// Fungsi untuk memilih kartu
function pickCard(card) {
  // Mendapatkan elemen-elemen yang dibutuhkan
  var cards = document.getElementsByClassName("card");
  var result = document.getElementById("result");
  var message = document.getElementById("message");
  var number = document.getElementById("number");

  // Mengubah tampilan kartu yang dipilih
  var selectedCard = document.getElementById("card" + card);
  selectedCard.style.backgroundColor = "#333";
  selectedCard.style.border = "5px solid white";

  // Menampilkan hasil
  result.style.display = "block";



// Menghasilkan angka acak dari 0 sampai 100
var randomNumber = Math.floor(Math.random() * 101);

// Menampilkan pesan dan angka sesuai dengan peluang
if (randomNumber == 0) {
// 10% peluang untuk mendapatkan 0
message.innerHTML = "Selamat, Anda kurang beruntung. Awokawakwoakw!";
number.innerHTML = randomNumber;
} else if (randomNumber >= 10 && randomNumber < 30) {
// 20% peluang untuk mendapatkan angka 50-99
message.innerHTML = "Bagus! kayaknya??";
number.innerHTML = randomNumber;
} else if (randomNumber >= 30 && randomNumber < 70) {
// 40% peluang untuk mendapatkan angka 10-49
message.innerHTML = "Lumayan untuk jajan bobba..";
number.innerHTML = randomNumber;
} else if (randomNumber >= 70 && randomNumber <= 100) {
// 30% peluang untuk mendapatkan angka 1-9
message.innerHTML = "Wadduhh.";
number.innerHTML = randomNumber;
} else if (randomNumber == 100){ // Mengganti else dengan else if
message.innerHTML = "Bjirrr, jackpot!!";
number.innerHTML = randomNumber;
}

for (var i = 0; i < cards.length; i++) {
if (i !== card - 1) {
  cards[i].classList.add("disabled");
}
  }
}