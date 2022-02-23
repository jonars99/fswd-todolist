$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  }
});

var indexTasks = function () {
  var request = {
    type: 'GET',
    url: 'api/tasks?api_key=1',
    success: function (response) {
      console.log(response);
    },
    error: function (request, err) {
      console.log(request, err);
    }
  }

  $.ajax(request);
};

var postTask = function (content) {
  var request = {
    type: 'POST',
    url: 'api/tasks?api_key=1',
    data: {
      task: {
        content: content
      }
    },
    success: function (response) {
      console.log(response);
    },
    error: function (request, err) {
      console.log(request, err);
    },
  }

  $.ajax(request);
};
