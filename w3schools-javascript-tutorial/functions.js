function name(params) {
    // code to be executed
}

function myFunk(p1, p2) {
    return p1 + p2;
}

var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };