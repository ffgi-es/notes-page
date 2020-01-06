(function(exports) {
  function testNoHtmlNotes() {
    var noteListView = new NoteListView(new NoteList());

    assert.isTrue( noteListView.show() === "<ul></ul>" );
  }

  function testHasOneHtmlNote() {
    var noteList = new NoteList();
    noteList.add("hello, world");

    var noteListView = new NoteListView(noteList);

    assert.isTrue( noteListView.show() === "<ul><li>hello, world</li></ul>" );
  }

  function testHasTwoHtmlNote() {
    var noteList = new NoteList();
    noteList.add("hello, world");
    noteList.add("piss off, world");

    var noteListView = new NoteListView(noteList);

    assert.isTrue( noteListView.show() === "<ul><li>hello, world</li><li>piss off, world</li></ul>" );
  }

  testNoHtmlNotes();
  testHasOneHtmlNote();
})(this);
