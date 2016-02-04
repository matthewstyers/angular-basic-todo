'use strict';

angular.module('todo', []);

(function() {
  class TodoController {
    constructor($http, $scope, $log) {
      this.$http = $http;
      this.todos = [];

      $http.get('/api/v0/todo').then(response => {
        this.todos = response.data.todo;
        $log.info(response.data.todo);
      });
      }

      addTodo() {
        if (this.newTodo) {
          this.$http.post('/api/v0/todo', { name: this.newTodo })
            .success(response => {
              this.todos.push(response.todo);
            });
          this.newTodo = '';
        }
      }

      deleteTodo(todo) {
        this.$http.delete('/api/v0/todo/' + todo._id)
          .success(response => {
            console.log(response);
          });
    }
  }
  angular.module('todo')
    .controller('TodoController', TodoController);
})();
