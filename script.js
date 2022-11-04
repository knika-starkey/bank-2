let card1 = {
  number: 123456,
  name: "Maruna",
  surname: "Ivanova",
  code: 6785,
  account: 1000,
  bank: "Monobank",
};
let card2 = {
  number: 246837,
  name: "Nikolai",
  surname: "Lantsov",
  code: 1213,
  account: 357010,
  bank: "Monobank",
};
let card3 = {
  number: 246837,
  name: "Nicolai",
  surname: "Lantsov",
  code: 1214,
  account: 357010,
  bank: "Monobank",
};

let atm1 = {
  cards: [card1, card2],
  showAccount: function (card) {
    if (this.compare(card)) alert(card.account);
    else alert("Error");
  },
  getMoney: function (card, sum) {
    if (isNaN(sum)) alert("It's not a number");
    else if (this.compare(card)) {
      if (sum > card.account) alert("You have less money!");
      else card.account -= sum;
    } else alert("Wrong card");
  },
  compare: function (card) {
    for (let i = 0; i < this.cards.length; i++) {
      if (
        this.cards[i].code == card.code &&
        this.cards[i].number == card.number
      )
        return true;
    }
    return false;
  },
};
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
