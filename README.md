
# OT155-JS-client
## ONG-JS

### OT155-28

### Slider component with a carousel with images and text from a response in json format using the tailwind elements library.

##### Example images

![slider1](https://user-images.githubusercontent.com/86262814/159746292-0cae5e84-a308-42c8-be7e-6d16d14c254c.png)
![slider2](https://user-images.githubusercontent.com/86262814/159746313-2f461a30-e291-42c0-bde1-becbefc9bd33.png)
![slider3](https://user-images.githubusercontent.com/86262814/159746323-6fcb58bc-55f9-4130-92fa-062d12ad1a31.png)


### OT155-31
### Usage examples:

```
const queryAPI = async () => {
         try {
           const response = await apiConnectionWithoutToken('/users')
           console.log(response);
         } catch (error) {
           console.log(error)
         }
       }

const queryAPI = async () => {
        try {
          const response = await apiConnectionWithToken('/users', {
            name: "José Hernandez",
            email: "jose@gmail.com",
            password: "jose123456!"
          }, 'POST')
         console.log(response);
        } catch (error) {
          console.log(error)
        }
      }
```
