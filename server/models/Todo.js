var keystone = require('keystone');
var Types = keystone.Field.Types;

var Todo = new keystone.List('Todo', {
  path: 'todo',
  singlar: 'todo',
  plural: 'todos',
  track: true
});

Todo.add({
  name: {
    type: Types.Text,
    required: true,
    initial: true
  },
  items: {
    type: Types.Relationship,
    ref: 'ListItem',
    many: true
  }
});

Todo.register();
