
(function(exports) {

  function NoteController(noteList) {
    this.noteListView = new NoteListView(noteList)
    noteList.add("Favourite drink: Seltzer")
  };

  NoteController.prototype.updateList = function(element = document.getElementById('app')){
    element.innerHTML = this.noteListView.show();
  };

  exports.NoteController = NoteController;
})(this);

