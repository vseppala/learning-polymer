Polymer({
  is: 'add-button',

  listeners: {
    'add-button.tap': 'openDialog',
  },

  openDialog: function (e) {
    this.fire('openAddDialog');
  }

});
