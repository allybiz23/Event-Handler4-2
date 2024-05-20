$(document).ready(function () {
    $('#btnSubmit').click(function (event) {
        // Prevent default form submission
        event.preventDefault();

        // Call formValidate function (assuming it's defined elsewhere)
        if (formValidate()) {
            // Send form data to server
            $.ajax({
                url: 'server-url',
                method: 'POST',
                data: $('#ticketForm').serialize(),
                success: function (response) {
                    // Handle success
                },
                error: function (xhr, status, error) {
                    // Handle error
                }
            });
        } else {
            // Issue error message and clear form elements
            alert('Form validation failed. Please check your input.');
            $('#ticketForm').trigger('reset');
        }

        // Create timestamp for submission
        var timestamp = new Date().toLocaleString();

        // Dim the element that triggered the event
        $(this).css('opacity', '0.5');
    });

    // Change text color to red and make it bold on hover
    $('#btnSubmit').hover(function () {
        $(this).css({ 'color': 'red', 'font-weight': 'bold' });
    }, function () {
        $(this).css({ 'color': '', 'font-weight': '' });
    });
});

