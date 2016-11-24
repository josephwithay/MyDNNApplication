$('.CreateUser').on('click', function () {

    var url = 'Users/Create';
    $("#CreateUserForm").dialog({
        autoOpen: true,
        position: { my: "center", at: "top+350", of: window },
        width: 500,
        resizable: false,
        title: 'Create New User',
        modal: true,
        open: function () {
            $(this).load(url);
        },
    });
    return false;
});
