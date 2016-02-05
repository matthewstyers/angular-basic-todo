var keystone = require('keystone');
var Types = keystone.Field.Types;

var ListItem = new keystone.List('ListItem', {
  path: 'list-item',
  singlar: 'list item',
  plural: 'list items',
  track: true
});

ListItem.add({
  name: {
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
  },
  isDone: {
    type: Types.Boolean,
    default: false
  },
  todo: {
    type: Types.Relationship,
    ref: 'Todo'
  }
});

ListItem.schema.pre('save', function(done) {
  this.wasNew = this.isNew;
    done();
});
//when a new item is created, add it to the associated list's 'items' field.
ListItem.schema.post('save', function(done) {
  if (this.wasNew) {
    var self = this;
    // find the model
    keystone.list('Todo')
      .model.findById(self.todo)
      .exec(function(err, result) {
        if (err) console.log(err);
        result.items.push(self._id);
        // getting close to callback hell. should really be a promise chain or
        // async waterfall.
        result.save(done);
      });
  }
});
ListItem.register();
