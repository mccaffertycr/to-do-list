$(document).ready(function() {

    // check for local storage and declare todo var
    if (localStorage['todo']) {
        var todo = JSON.parse(localStorage['todo']);
        todo.forEach(function(ele) {
            addToList(ele);
        });
    } else {
        var todo = [];
    }

    // function that appends a list element for each task
    function addToList(val) {
        // var newBtn = $('<li>' + val + 'input class="item-rmv" ')
        $('#todo').append('<div>' + val + ' <button class="item-rmv" type="button" value="x" id="' + val + '">x</button> </div>');
    }   

var addItem = function() {
    // get value from input
    var val = $('#item').val();
    
    // add the task to the array
    todo.push(val);
    
    // save to local storage
    localStorage["todo"] = JSON.stringify(todo);
    
    // append the item to the list
    addToList(val);
    
    // reset the input field 
    $('#item').val("");
}

    // // print any todos already in local storage
    // for (var i = 0; i < todo.length; i++) {
    //     addItem(todo[i]);
    // }

    // todo.forEach(function(ele) {
    //     addToList(ele);
    // }
    // event listener on button to add a new task to the list
    $('#add').on('click', function(e) {
        e.preventDefault();
        addItem();
    });
    // $('#add').click(addItem)function getData(e) {
    //     e.preventDefault();
    // };


    // event listener for when an item is completed
    // $('.item-done').on( 'click', function() {
    //     $(this).parent('li').addClass('done');
    //   });    
          
    $('.item-rmv').on( 'click', function(e) {
        var todoList = JSON.parse(localStorage['todo']);
        var id = e.currentTarget.id;
        todoList.splice(id, 1);
        var result = todoList;
        // var result = todo.filter(function(value) {
        //     return value !== id;
        // });
        console.log(result)
        localStorage.setItem('todo', JSON.stringify(result));
        $(this).parent('div').fadeOut();
    });    
          
    
});