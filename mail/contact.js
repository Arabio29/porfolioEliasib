const form = document.getElementById('form');
    const button = document.getElementById('button');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            button.textContent = 'Sending...';
            const serviceID = 'default_service';
            const templateID = 'template_8jhby0g';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    button.textContent = 'Send';
                    alert('Message sent succesfully! :)');
                    form.reset();
                })
                .catch((error) => {
                    button.textContent = 'Send';
                    alert(JSON.stringify(error));
                });
        }
    });

    function validateForm() {
        const name = document.getElementById('from_name').value.trim();
        const email = document.getElementById('email_id').value.trim();
        const subject = document.getElementById('reply_to').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '') {
            alert('Please enter your name.');
            return false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        if (subject === '') {
            alert('Please enter a subject.');
            return false;
        }

        if (message === '') {
            alert('Please enter your message.');
            return false;
        }

        return true;
    }

/*//send mails with emailjs

const btn = document.getElementById('button');
const formulario = document.getElementById('form');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_8jhby0g';

   emailjs.sendForm(serviceID, templateID, this)
   .then(() => {
     btn.value = 'Send Email';
     alert('Sent!');
     formulario.reset();
   }, (err) => {
     btn.value = 'Send Email';
     alert(JSON.stringify(err));
   });
});



//Version antigua del codigo PHP
$(function () {

    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();

            $this = $("#sendMessageButton");
            $this.prop("disabled", true);

            $.ajax({
                url: "contact.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                },
                cache: false,
                success: function () {
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                    $('#success > .alert-success')
                            .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                            .append('</div>');
                    $('#contactForm').trigger("reset");
                },
                error: function () {
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
                    $('#success > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
                },
                complete: function () {
                    setTimeout(function () {
                        $this.prop("disabled", false);
                    }, 1000);
                }
            });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});
*/
