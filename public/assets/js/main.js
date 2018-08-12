$(document).on('click', '.new-todo', function(e) {
    e.preventDefault();
    var todo_desc = $('#todo-desc').val();
    $.ajax({
        url: '/',
        method: 'post',
        data: { todo_desc: todo_desc, completed: 0 },
        success: function(res) {
            $('.todo').append(
                `<li class="todo${res[1]} list-group-item" data-id=${res[1]}>${res[0].todo_desc}
                    <button class="btn done btn-success" data-id=${res[1]}>✓</button>
                </li>`
            );
        }
    });
    $('#todo-desc').val('');
});

$(document).on('click', '.done', function(e) {
    var id = $(this).data('id');
    $.ajax({
        url: '/update/' + id,
        method: 'put',
        data: { id: id, completed: 1 },
        success: function(res) {
            var completed = $(`.todo${id}`);
            completed.remove();
            completed.children().remove();
            completed.append(
                `<button class="btn btn-danger delete" data-id=${this.id}>x</button>`
            )
            $('.completed').append(completed);                
        }
    });
});

$(document).on('click', '.delete', function(e) {
    var id = $(this).data('id');
    $.ajax({
        url: '/delete/' + id,
        method: 'delete',
        data: { id: id },
        success: function(res) {
            $(`.todo${id}`).remove();
        }
    });
});
