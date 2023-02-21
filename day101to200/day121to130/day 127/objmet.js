var hero = {
  _name: "John Doe",
  getSecretIdentity: function () {
    return this._name;
  },
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

const stoleSecretIdentity2 = hero.getSecretIdentity.bind(hero);
console.log(stoleSecretIdentity2());

var stoleSecretIdentity3 = hero.getSecretIdentity();
console.log(stoleSecretIdentity3);


