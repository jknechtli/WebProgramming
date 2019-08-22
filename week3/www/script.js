$(document).ready(() => {
  console.log("page ready")
  $("#loginform").submit(event => {
    event.preventDefault();
    ajaxPost();
  })

  const ajaxPost = () => {
    const formData = {
      email: $("#email").val(),
      upwd: $("#upwd").val()
    }

    $.ajax({ // ajax post
      type: "POST",
      contentType: "application/json",
      url: window.location + "api/login",
      data: JSON.stringify(fromDAta),
      dataType: 'json',
      success: (customer) => {
        if (customer.valid) {
          $('#loginform').addClass("success");
          $('#loginform').removeClass("fail");
        } else {
          $('#loginform').removeClass("success");
          $('#loginform').addClass("fail");
        }
        $('#postResultDiv').html(`<p> Post Successful! </br> Email Address: ${customer.email} </br> Password: ${customer.upwd} </br> Valid USer: ${customer.valid} </p>`);
      },
      error: (e) => {
        alert("Error!");
        console.log('Error: ', e);
      }
    });

    resetData();
  }

  const resetData = () => {
    $("#email").val("");
    $("#upwd").val("");
  }
})