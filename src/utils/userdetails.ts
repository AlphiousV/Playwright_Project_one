import  NewUser  from "../model/UserModel";

function UserData(): NewUser {

    const user: NewUser = {
        FirstName: 'John',
        LastName: 'Michael',
        DateOfBirth: '2000-02-20',
        Country: 'India',
        PostalCode: '603201',
        HouseNumber: '23',
        Phone: '6426419821',
        Email: 'Ken007@gmail.com',
        Password: 'JohnM@2000',
    };

    return user;
}

export default UserData;