let party = {
  members: function (r) {
    this.members = r;
  },
  sendInvite: function () {
    this.sendInvite = this.members;
    this.sendInvite.forEach((eachInvite) => {
      console.log(`Invite sent to ${eachInvite}`);
    });
  },

  recievedResponse: function (responses) {
    for (let i = 0; i < responses.length; i++) {
      if (!responses[i] && responses[i] != 0) {
        responses[i] = undefined;
      }
    }
    this.recievedResponse = responses;

    console.log(this.members);
    console.log(this.sendInvite);
    console.log(this.recievedResponse);

    this.sendInvite.forEach((person, index) => {
      this.sendInvite[index] = new Promise((response, ignored) => {
        if (!responses[index] && responses[index] != 0)
          return ignored(`${person} ignored`);
        else return response(`${person}`);
      });
    });
    console.log(this.members);
  },

  analyseResponse: function () {
    console.log(this.members);
    console.log(this.sendInvite);

    this.members.forEach((member, index) => {
      member.then((res) => {
        console.log(res);
        this.members[index] = res;
      });
    });
    console.log(this.members);

    this.sendInvite.forEach((person, index) => {
      person
        .then(() => {
          if (this.recievedResponse[index]) {
            return console.log(`${this.members[index]} accepted`);
          } else {
            return console.log(`${this.members[index]} rejected`);
          }
        })
        .catch((mess) => {
          console.log(mess);
        });
    });
  },
};

party.members(["Ross", `Rachel`, `Monica`, `Chandler`, `Joey`, `Phoebe`]);
console.log(party.members);
party.sendInvite();
console.log(party.members);

party.recievedResponse([1, 1, 0]);

console.log(party.recievedResponse);
console.log(party.sendInvite);

party.analyseResponse();
