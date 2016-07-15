Polymer({
  is: 'my-app',

  listeners: {
    'todoDone': 'removeTodo',
    'todoAdd': 'addNew',
    'openAddDialog': 'openDialog'
  },

  ready: function () {
    this.todos = [
      {heading: 'Otsikko', content: 'Some content...'},
      {heading: 'Otsikko', content: 'Some coasdntent...'}
    ];
  },

  addNew: function (e) {
    var todoClone = this.todos.slice(0);
    todoClone.push(e.detail);
    this.todos = todoClone;
  },

  openDialog: function() {
    this.$.addDialog.openDialog();
  },

  removeTodo: function (e) {
    var todoClone = this.todos.slice(0);
    todoClone.splice(e.detail, 1);
    this.todos = todoClone;
  }

})
