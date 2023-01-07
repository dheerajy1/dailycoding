let replied = [],
  response = 0;

trip = {
  giveInvite: function (persons) {
    persons.forEach((person, index) => {
      replied[index] = person;
      replied[index] = new Promise((accepted, ignored) => {
        if (response) accepted(`${person} accepted`);
        else ignored(`${person} ignored`);
      });
    });
  },

  replied: function () {
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
trip.giveInvite(["Elonmusk", "JefBezos"]);

trip.replied();
