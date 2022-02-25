$(document).on("turbolinks:load", function () {

  var allTasks = function (filter) {
    if ($('.static_pages.index').length > 0) {
      indexTasks(function (response) {
        var htmlString = response.tasks.map(function(task) {
          var taskblock =
          '<div class="col-12 d-flex flex-row border rounded mb-3">' +
          '<input class="check-box" type="checkbox" data-id="' + task.id + '"' + (task.completed ? 'checked' : '') + '/>' +
          '<p class="col-10 my-2 mx-2">' + task.content + '</p>' +
          '<button class="btn delete-btn fw-light" data-id="' + task.id + '">X</button>';
          if (filter == "active") {
            if (!task.completed) {
              return taskblock;
            }
          }
          else if (filter == "completed") {
            if (task.completed) {
              return taskblock;
            }
          }
          else {
            return taskblock;
          }
        });
        $("#tasks").html(htmlString);
      });
    }
  }
    
  $('#add-task').on('submit', function (event) {
    event.preventDefault();
    var content = $('#new-task').val();
    postTask(content);
    allTasks();

    $('#new-task').val('');
  });

  $(document).on('click', '.delete-btn', function () {
    var id = $(this).data('id');
    deleteTask(id);
    allTasks();
  });

  $(document).on('change', '.check-box', function () {
    var id = $(this).data('id');
    if (this.checked) {
      completeTask(id);
    }
    else 
      activeTask(id);
  });

  $(document).on('change', '#filter-choice', function () {
    var filterValue = $("input[name='filter']:checked").val();
    allTasks(filterValue);
  });

  allTasks();

});

