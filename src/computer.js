class Computer {
  constructor(name, opSys, proc, mem, graph) {
    this.name = name;
    this.operatingSystem = opSys;
    this.processor = proc;
    this.memory = mem;
    this.graphics = graph;
    this.on = false;
  }

  power() {
    this.on = !this.on;
  }
}

module.exports = Computer
