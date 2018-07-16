

class NewChangeRequestSubmitButton {
  constructor(button, element_to_monitor) {
    this.button = button;
    this.element_to_monitor = element_to_monitor;
    this.element_to_monitor.on('change keyup', () => { this.set_state() });
  }

  set_state() {
    if (this.element_to_monitor.val().length == 0) {
      this.button.prop('disabled', true);
    } else {
      this.button.prop('disabled', false);
    }
  }
}

module.exports = NewChangeRequestSubmitButton;
