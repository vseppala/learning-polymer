Polymer({
  is: 'my-app',

  listeners: {
    'add-button.tap': 'addNew',
    'todoDone': 'removeTodo'
  },

  ready: function () {
    this.todos = [
      {heading: 'Otsikko', content: 'Some content...'},
      {heading: 'Otsikko', content: 'Some coasdntent...'}
    ];
  },

  addNew: function (e) {
    var todoClone = this.todos.slice(0);

    todoClone.push({
      heading: 'Added new one',
      content: 'Added new todo entry with THE add button...'
    });

    this.todos = todoClone;
  },

  removeTodo: function (e) {
    var todoClone = this.todos.slice(0);
    todoClone.splice(e.detail, 1);
    this.todos = todoClone;
  }

})
