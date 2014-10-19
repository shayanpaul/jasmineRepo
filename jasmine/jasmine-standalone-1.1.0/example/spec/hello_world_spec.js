describe("hello world", function() {
  it("should return hello world", function() {
    expect(helloWorld()).toEqual("hello world");
  });
});

describe("testing with jquery jasmine", function() {
  var htmlString;
  beforeEach(function() {
     htmlString = $('<div id="container">hello World</div>');
  });
  it("allow us to search with css selector", function() {
    expect(htmlString).toBe('#container');
  });
});

describe("test fixtures", function() {
   beforeEach(function() {
    jasmine.getFixtures().containerId = 'my-new-id';
  })

  it("offers three crucial function", function() {
    expect(readFixtures).toBeDefined();
    expect(loadFixtures).toBeDefined();
    expect(setFixtures).toBeDefined();
  });
  it("can load fixture from file", function() {
    loadFixtures('fragment.html');
    expect($('.fragment')).toExist();
  });
  it("offers a sandbox function for convenience", function() {
    expect(sandbox).toBeDefined();
    //setFixtures(sandbox());
    var sb = sandbox().append('<div class="container1" id="container1">hello1 World1</div>');
    expect($('#container1',$(sb))).toHaveClass('container1');
    //expect( $('.some-class')).toExist();
    //expect( $('#sandbox') ).toHaveClass('some-class');
  });

  it("checking event trigger", function() {
    //clickTrigger();
    loadFixtures('fragment.html');
    var spyEvent = spyOnEvent('.fragment', 'click');
	//$(".fragment").trigger("click");
	clickTrigger();
	//expect('click').toHaveBeenTriggeredOn('.fragment');
	expect(spyEvent).toHaveBeenTriggered();
  });

it("testing of spies", function() {
  expect(myObj.someFunction).toBeDefined();
  spyOn(myObj, "someFunction").andCallFake(function(){
    return 'hello world'
  });
  expect(myObj.someFunction()).toBe('hello world');
});

it("work with ajax call", function() {
  spyOn($,'ajax');
  expect(sandbox).toBeDefined();
  setFixtures(sandbox());
  expect($('#sandbox')).toExist();
  $('#sandbox').testPlugin();
  //console.log($('#sandbox').find('li').length);
  console.log($.ajax.mostRecentCall.args[0].success);
  $.ajax.mostRecentCall.args[0].success('<li>one</li><li>two</li>')
  expect($('#sandbox').find('li').length).toBe(2);
});

});