module.exports = class Board {
  values = [];

  get emptyIndex() {
    return this.values.indexOf(0);
  }
};
