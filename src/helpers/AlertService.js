import Swal from "sweetalert2/dist/sweetalert2.all.js";

function errorAlert(title,description) {
  const errorCard = Swal.mixin({
    toast: true,
    showCancelButton: true,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (card) => {
      card.addEventListener("mouseenter", Swal.stopTimer);
      card.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  errorCard.fire({
    icon: "error",
    title: `${title}`,
    text: `${description}`
  });
}

function confirmationAlert(title,description) {
  const signedInCardAlert = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  signedInCardAlert.fire({
    icon: 'success',
    title: `${title}`,
    text: `${description}`
  })
}


function informationAlert(title,description){
  const registerCard = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  })

  registerCard.fire({
    icon: 'info',
    title: `${title}`,
    text: `${description}`
  })
}

export { errorAlert, confirmationAlert, informationAlert}