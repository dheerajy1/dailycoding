let month = {
  day: function (r) {
    this.day = r;
    return this.day;
  },
  day2() {
    return this.day;
  },
};

month.day([0, 1, 2, 4]);

console.log(month.day);

console.log(month.day2());
