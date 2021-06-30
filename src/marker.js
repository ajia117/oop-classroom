class Marker {
  constructor(size, color, remainingInk) {
    this.size = size;
    this.color = color;
    this.remainingInk = remainingInk;
  }

  write(string) {
    if(string === "") {
      return "";
    }
    let firstChar = string.charAt(0);
    if(firstChar === " ") { // space; write without using ink
      return firstChar + this.write(string.slice(1));
    }
    if(this.remainingInk > 0) { // check if ink
      this.remainingInk--;
      return firstChar + this.write(string.slice(1));
    } else { // out of ink at a character; terminate early
      return ""
    }
  }
}

module.exports = Marker
