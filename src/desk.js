class Desk {
  constructor(length, width, height, isWhiteboard) {
    this.length = length;
    this.width = width;
    this.height = height;
    this.isWhiteboard = isWhiteboard;
    this.content = "";
  }

  write(newContent) {
    this.content += newContent;
  }
  wipe() {
    if(this.isWhiteboard) {
      this.content = "";
    }
  }
}

module.exports = Desk
