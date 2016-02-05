'use strict';

angular.module('todo', ['angularMoment']);

(function() {
  class TodoController {
    constructor($http, $scope, $log) {
      this.$http = $http;
      this.todos = [];
      this.items = [];
      this.priorityArr = [
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
      ];

      this.getTodos = () => {
        $http.get('/api/v0/todo').then(response => {
          this.todos = response.data.todo;
          $log.info(response.data.todo);
        });
      };
      this.getTodos();

      $http.get('/api/v0/list-item').then(response => {
        this.items = response.data['list-item'];
        // $log.info(response.data['list-item']);
      });

    }
      addTodo() {
        if (this.newTodo) {
          this.$http.post('/api/v0/todo', { name: this.newTodo })
            .success(response => {
              this.getTodos();
            });
          this.newTodo = '';
        }
      }
      addItem() {
        if (this.newItem) {
          this.$http.post('/api/v0/list-item',
            {
              name: this.newItem,
              priority: this.priority,
              todo: this.list

            })
            .success(response => {
              this.getTodos();
            });
          this.newItem = '';
          this.priority = 2;
          this.list = this.list;
        }
      }
      isDone(item) {
        this.$http.patch('/api/v0/list-item/' + item._id,
          {
            isDone: item.isDone
          })
          .success(response => {
            console.log(response);
            this.getTodos();
          });
      }
      deleteTodo(list) {
        this.$http.delete('/api/v0/todo/' + list._id)
          .success(response => {
            this.getTodos();
        });

      }
  }
  angular.module('todo')
    .controller('TodoController', TodoController);
})();
