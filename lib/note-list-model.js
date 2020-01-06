
(function(exports){
  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype.all = function() {
    return this.notes;
  }

  NoteList.prototype.add = function(text) {
    this.notes.push(new Note(text));
  }

  exports.NoteList = NoteList; 
})(this);
