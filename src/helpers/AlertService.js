import Swal from "sweetalert2";

function error(msg) {
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
  });
}

function confirmation() {
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
  })
}


function information(){
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
  })
}

export { error, confirmation, information}