## Usage examples:

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