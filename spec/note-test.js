(function(exports) {
  function testTextOnCreation() {
    var note = new Note("hello, world!");

    assert.isTrue(note.get() === "hello, world!");
  }

  testTextOnCreation();
})(this)
