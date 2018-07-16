const $ = require("jquery");
const NewChangeRequestSubmitButton = require ("../src/new_change_request_submit_button");

describe("NewChangeRequestSubmitButton", () => {
  it("should toggle disable based on whether the reason field is empty", () => {
    // Set up the expected elements in the DOM
    document.body.innerHTML =
    '<div id="new_change_request">' +
      '<input id="change_request_change_request_reason"></input>' +
      '<input id="button" name="commit"></input>' +
    '</div>';

    const submit_button = $("#new_change_request input[name=commit]");

    // Set up the element we want to monitor for disabling the submit button
    const element_to_monitor = $('#change_request_change_request_reason');

    // Instantiate our class and inject our JQuery objects
    const button = new NewChangeRequestSubmitButton(submit_button, element_to_monitor);

    element_to_monitor.trigger("change");

    // Set up our test expectation
    expect(submit_button.prop("disabled")).toEqual(true);

    element_to_monitor.val("1");
    element_to_monitor.trigger("change");
    expect(submit_button.prop("disabled")).toEqual(false);
  });
});

describe("NewChangeRequestSubmitButton using default arguments", () => {
  it("should toggle disable based on whether the reason field is empty", () => {
    document.body.innerHTML =
    '<div id="new_change_request">' +
      '<input id="change_request_change_request_reason"></input>' +
      '<input id="button" name="commit"></input>' +
    '</div>';

    const submit_button = $("#new_change_request input[name=commit]");
    const element_to_monitor = $('#change_request_change_request_reason');

    // Instantiate our class with no arguments
    const button = new NewChangeRequestSubmitButton();

    element_to_monitor.trigger("change");

    expect(submit_button.prop("disabled")).toEqual(true);

    element_to_monitor.val("1");
    element_to_monitor.trigger("change");
    expect(submit_button.prop("disabled")).toEqual(false);
  });
});
