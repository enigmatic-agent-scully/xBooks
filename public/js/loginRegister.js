var modal = $('#loginModal');

$().ready(() => {
  modal.modal(toggle);

  $('#loginLink').on('click', () => {
    modal.modal('show');
  });
});
