let replied = [];

party = {
  giveInvite: function (persons) {
    this.giveInvite = persons;
    return this.giveInvite;
  },

  replied: function (persons, response=0) {
    persons.forEach((person, index) => {
      replied[index] = person;
      replied[index] = new Promise((accepted, ignored) => {
        if (response) accepted(`${person} accepted`);
        else ignored(`${person} ignored`);
      });
    });
    replied.forEach((res) => {
      res
        .then((mess) => {
          console.log(mess);
        })
        .catch((mess) => {
          console.log(mess);
        });
    });
  },
};
party.giveInvite(["Elonmusk", "JefBezos"]);

console.log(party.giveInvite);

party.replied(party.giveInvite,1);
