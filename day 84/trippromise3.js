let trip = {
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
    this.recievedResponse = this.sendInvite
    this.members.forEach((member, index) => {
      this.recievedResponse[index] = new Promise((accepted, rejected) => {
        if (responses[index]) return accepted(`${member} accepted`);
        else return rejected(`${member} rejected`);
      });
    });
  },
  analyseResponse: function () {
    this.recievedResponse.forEach((element) => {
      element
        .then((response) => {
          console.log(response);
        })
        .catch((mess) => {
          console.log(mess);
        });
    });
  },
};

trip.members(["Ross", `Rachel`]);
console.log(trip.members);
trip.sendInvite();

trip.recievedResponse([0, 1]);
console.log(trip.recievedResponse);



trip.analyseResponse();
