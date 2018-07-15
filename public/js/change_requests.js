$(function() {
  $('#modalWindow').on('shown.bs.modal', function() {
    function set_change_request_button_state() {
      var submit_button = $('form#new_change_request input[name=commit]');

      if ($('#change_request_change_request_reason').val().length == 0) {
        submit_button.prop('disabled', true);
      } else {
        submit_button.prop('disabled', false);
      }
    }

    $('#change_request_change_request_reason').on('change keyup',
      function(e) { set_change_request_button_state() } );

  });
});

