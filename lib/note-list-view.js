(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.show = function() {
    var list = this.noteList.all().reduce((res, x) => { return res + "<li>" + x.get() + "</li>"; }, "");
    return "<ul>" + list + "</ul>";
  };

  exports.NoteListView = NoteListView;
})(this)
