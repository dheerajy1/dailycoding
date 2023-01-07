let replied = [],
  trip = {
    giveInvite: function (persons) {
      persons.forEach((person, index) => {
        replied[index] = person;
        replied[index] = new Promise((accepted, ignored) => {
          return accepted(), ignored();
        });
      });
    },
    response: function (boolean) {
      replied.forEach((person, index) => {
        replied[index] = person;
        replied[index]
          .then((person) => {
            if (boolean) accepted(`${person} accepted`);
            else ignored(`${person} ignored`);
          })
          .catch((mess) => {
            console.log(mess);
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

trip.response(1);

trip.replied();
