var keystone = require('keystone');
var Types = keystone.Field.Types;

var ListItem = new keystone.List('ListItem', {
  path: 'list-item',
  singlar: 'list item',
  plural: 'list items',
  track: true
});

ListItem.add({
  description: {
    type: Types.Text,
    required: true,
    initial: true
  },
  priority: {
    type: Types.Select,
    options: [
      {
      value: 0,
      label: 'Not Gonna Happen'
      },
      {
        value: 1,
        label: 'Should Probably Do'
      },
      {
        value: 2,
        label: 'Super Important'
      },
      {
        value: 3,
        label: 'LIFE OR DEATH'
      }
    ]
  }
});

ListItem.register();
