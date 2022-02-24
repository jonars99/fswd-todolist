$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  }
});

var indexTasks = function (successCB) {
  var request = {
    type: 'GET',
    url: 'api/tasks?api_key=1',
    success: successCB,
    error: function (request, errorMessage) {
      console.log(errorMessage);
    }
  };

  $.ajax(request);
};

var postTask = function (content, successCB) {
  var request = {
    type: 'POST',
    url: 'api/tasks?api_key=1',
    data: {
      task: {
        content: content
      }
    },
    success: successCB,
    error: function (request, errorMessage) {
      console.log(errorMessage);
    }
  };

  $.ajax(request);
};

var deleteTask = function (id, successCB) {
  var request = {
    type: 'DELETE',
    url: 'api/tasks/' + id + '?api_key=1',
    success: successCB,
    error: function (request, errorMessage) {
      console.log(errorMessage);
    }
  };

  $.ajax(request);
};
