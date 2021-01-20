window.onload = function() {
  (function(){
    emailjs.init("user_VtPgqee8uGX3GvUg4hZYV");
  })();

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // generate a five digit number for the contact_number variable
    this.contact_number.value = Math.random() * 100000 | 0;

    emailjs.sendForm('service_kx5gu27', 'template_9w73q28', this).then(function() {
        $('#email-success').toast('show');
        
      }, function(error) {
        $('#email-fail').toast('show');
      });
  });
}