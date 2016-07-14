Polymer({
  is: 'todo-list',

  listeners: {
    'todoDone': 'removeTodo'
  },

  ready: function () {
    this.todos = [
      {heading: 'Otsikko', content: 'Some content...'},
      {heading: 'Otsikko', content: 'Some coasdntent...'}
    ];
  },

  removeTodo: function (e) {
    var todoClone = this.todos.slice(0);
    todoClone.splice(e.detail, 1);
    this.todos = todoClone;
  }
})
