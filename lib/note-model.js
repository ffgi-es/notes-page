(function(exports) {
  function Note(text) {
    this.text = text;
  }

  Note.prototype.get = function() {
    return this.text;
  };

  exports.Note = Note;
})(this)
