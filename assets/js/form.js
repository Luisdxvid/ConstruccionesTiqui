document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const toastEl = document.getElementById("successToast");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            form.reset();
  
            // Show toast
            const toast = new bootstrap.Toast(toastEl);
            toast.show();
          } else {
            alert("Ocurrió un error. Intenta nuevamente.");
          }
        })
        .catch(() => {
          alert("Ocurrió un error al enviar el mensaje.");
        });
    });
  });
  