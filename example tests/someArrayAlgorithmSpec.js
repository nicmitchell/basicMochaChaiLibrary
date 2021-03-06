describe("sumArray", function() {

  it("should do a thing", function(){
    var solution = sumArray([1, 2, 3]);
    expect(solution).to.equal(6);
  });

  it("should do another thing", function(){
    var solution = sumArray([1, 2, 3, -4]);
    expect(solution).to.equal(6);
  });

  it("and another", function(){
    var solution = sumArray([1, 2, 3, -4, 5]);
    expect(solution).to.equal(7);
  });

  it("and another", function(){
    var solution = sumArray([4, -1, 5]);
    expect(solution).to.equal(8);
  });

  it("and another", function(){
    var solution = sumArray([10, -11, 11]);
    expect(solution).to.equal(11);
  });

  it("and another", function(){
    var solution = sumArray([-7,-6,-9]);
    expect(solution).to.equal(-6);
  });

  it("and another", function(){
    //debugger;
    var solution = sumArray([-5,-5,-5,2,3]);
    expect(solution).to.equal(5);

  });

  it("last one", function(){
    var solution = sumArray([1, 2, 3, -4, 5, -10, 8]);
    expect(solution).to.equal(8);
  });


});
