const addUserForm = document.getElementById('addUserForm')
const emailAddress = document.getElementById('email')
const password = document.getElementById('password')
class AddUser {
    constructor(){
        this.addUser()
    }
    addUser(){
        addUserForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newUser = {
                email: emailAddress.value,
                newPassword: password.value
            }
        })
    }
}
export default AddUser