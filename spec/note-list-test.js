
(function(exports) {
  function testEmptyListByDefault(){
    var noteList = new NoteList();

    assert.isTrue( noteList.all().length === 0 );
  }

  function testAddNote() {
    var noteList = new NoteList();
    
    noteList.add("Hello world");
    var notes = noteList.all();

    assert.isTrue( notes.length === 1 );
    assert.isTrue( notes[0].get() === 'Hello world' );
  }

  function testAddNotesssss() {
    var noteList = new NoteList();
    
    noteList.add("Hello world");
    noteList.add("Byeeee world");
    var notes = noteList.all();

    assert.isTrue( notes.length === 2 );
    assert.isTrue( notes[0].get() === 'Hello world' );
    assert.isTrue( notes[1].get() === 'Byeeee world' );
  }

  testEmptyListByDefault();
  testAddNote();
  testAddNotesssss();
})(this);
