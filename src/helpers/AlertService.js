import Swal from 'sweetalert2'

//Error Card
const Card = Swal.mixin({
    toast: true,
    showCancelButton: true,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (card) => {
        card.addEventListener('mouseenter', Swal.stopTimer)
        card.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

Card.fire({
    icon: 'error',
    //insert response error message
    title: 'An error ocurred',
    text: 'All fields are requiered'
})

//Confirmation Card
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Signed in successfully' //'Successful registration"
  })