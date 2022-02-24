$(document).on("turbolinks:load", function () {

  var allTasks = function () {
    if ($('.static_pages.index').length > 0) {
      indexTasks(function (response) {
        var htmlString = response.tasks.map(function(task) {
          return (
            '<div class="col-12 d-flex flex-row border rounded">' +
            '<input class="check-box" type="checkbox" data-id="' + task.id + '"' + (task.completed ? 'checked' : '') + '/>' +
            '<p class="col-10 my-2 mx-2">' + task.content + '</p>' +
            '<button class="btn delete-btn" data-id="' + task.id + '">X</button>'
          );
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
    completeTask(id);
  });

  allTasks();

});

