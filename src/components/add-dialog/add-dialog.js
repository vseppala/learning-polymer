Polymer({
  is: 'add-dialog',

  listeners: {
    'confirmAdd.tap': '_addTodo'
  },

  _addTodo: function (e) {
    this.fire('todoAdd', {
      heading: this.$.headingField.value,
      content: this.$.todoField.value
    });
  },

  openDialog: function () {
    this.$.addDialog.toggle();
  }

});
