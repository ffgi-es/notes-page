
(function(exports) {

  function testUpdateList() {
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);
    var element = {innerHTML: "Not changed"}
    noteController.updateList(element);
    
    assert.isTrue(element.innerHTML === "<ul><li>Favourite drink: Seltzer</li></ul>");
  }

  testUpdateList();

})(this);
