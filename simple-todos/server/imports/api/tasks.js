import { Meteor } from 'meteor/meteor';

import { Tasks } from './../../../imports/api/tasks.js';

Meteor.publish('tasks', function tasksPublication() {
     return Tasks.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    });
  });
