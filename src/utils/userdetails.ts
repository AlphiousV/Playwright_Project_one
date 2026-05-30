import  NewUser  from "../model/UserModel";

function UserData(): NewUser {

    const user: NewUser = {
        FirstName: 'John',
        LastName: 'Michael',
        DateOfBirth: '28-02-2000',
        Country: 'India',
        PostalCode: '603201',
        HouseNumber: '23',
        Phone: '6426419821',
        Email: 'john@gmail.com',
        Password: 'John@2000',
    };

    return user;
}

export default UserData;