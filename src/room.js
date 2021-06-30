class Room {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.contents = [];
  }

  add(value) {
    this.contents.push(value);
    return this;
  }
  has(value) {
    return this.contents.includes(value);
  }
}

module.exports = Room
