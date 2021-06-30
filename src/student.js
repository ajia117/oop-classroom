class Student {
  static skillCap = 100;
  constructor(name, skillLevel) {
    this.name = name;
    this.skillLevel = skillLevel;
    this.assignments = [];
  }

  study() {
    if(this.skillLevel < Student.skillCap) {
      this.skillLevel++;
    }
    return this;
  }
  doHomework(assignment) {
    if(assignment === undefined) {
      // if no assignment, try to finish cached assignments
      for(let i=0; i<this.assignments.length; i++) {
        if(!this.assignments[i].completed){
          if(this.skillLevel > this.assignments[i].skillLevel) {
            this.assignments[i].completed = true;
          }
        }
      }
    } else if (assignment.skillLevel &&      // verify assignment is valid
               assignment.skillLevel >= 1 && // has skillLevel in [1, 100]
               assignment.skillLevel <= 100) {
      if(this.skillLevel > assignment.skillLevel) {
        assignment.completed = true;
      } else {
        assignment.completed = false;
      }
      this.assignments.push(assignment);
    }
  }
}

module.exports = Student
