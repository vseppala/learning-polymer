Polymer({
  is: 'todo-card',

  properties: {
    heading: String,
    content: String,
    todoid: Number
  },

  listeners: {
    'tap': 'done'
  },

  done: function (e) {
    this.fire('todoDone', this.todoid);
  }
})
