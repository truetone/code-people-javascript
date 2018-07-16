const $ = require("jquery");

class NewChangeRequestSubmitButton {
  constructor(button = $("#new_change_request input[name=commit]"), element_to_monitor = $('#change_request_change_request_reason')) {
    this.button = button;
    this.element_to_monitor = element_to_monitor;
    this.element_to_monitor.on('change keyup', () => { this.set_state() });
  }

  set_state() {
    this.button.prop('disabled', this.state());
  }

  state() {
    return this.element_to_monitor.val().length == 0;
  }
}

module.exports = NewChangeRequestSubmitButton;
