function Card(number, name, surname, code, account, bank) {
  this.number = number;
  this.name = name;
  this.surname = surname;
  this.code = code;
  this.account = account;
  this.bank = bank;
}

function Atm(cards) {
  this.cards = cards;
  this.showAccount = function (card) {
    if (this.compare(card)) alert(card.account);
    else alert("Error");
  };
  this.getMoney = function (card, sum) {
    if (isNaN(sum)) alert("It's not a number");
    else if (this.compare(card)) {
      if (sum > card.account) alert("You have less money!");
      else card.account -= sum;
    } else alert("Wrong card");
  };
  this.compare = function (card) {
    for (let i = 0; i < this.cards.length; i++) {
      if (
        this.cards[i].code == card.code &&
        this.cards[i].number == card.number
      )
        return true;
    }
    return false;
  };
}

let card1 = new Card(123456, "Maruna", "Ivanova", 6785, 1000, "Monobank");
let card2 = new Card(246837, "Nikolai", "Lantsov", 1213, 357010, "Monobank");
let card3 = new Card(246837, "Vasiliy", "Lantsov", 1214, 357010, "Monobank");

let atm1 = new Atm([card1, card2]);

alert(atm1.compare(card1));
atm1.showAccount(card1);
atm1.getMoney(card1, 30);
atm1.showAccount(card1);
alert(atm1.compare(card2));
atm1.showAccount(card2);
atm1.getMoney(card2, 300);
atm1.showAccount(card2);
alert(atm1.compare(card3));
atm1.showAccount(card3);
atm1.getMoney(card3, 400);
atm1.showAccount(card3);
