
const findExpectedUser = (users, id) => {

    const expectedUser = users.find(user =>{
        return user.id === id;
         
    })

    if(expectedUser) return expectedUser;

    return "User not found";
    
}


const users = [
    { id: 1, name: 'Kalia', marks: 40},
    {id: 2, name: 'Salia', marks: 70},
    {id: 3, name: 'Alia', marks: 90},
   
] 



console.log(findExpectedUser(users, 99))