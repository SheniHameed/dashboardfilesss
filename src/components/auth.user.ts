import axios from "axios";

const API_URL = "http://localhost:3000/users/api";

class AuthUser {
 

  Usermodule(FullName: string,
    UserName:string,
    Email:string, 
    Permission:string,
    MobileNumber:string,
    address: string, 
    CreatedBY:string,
    CompanyID:string,
    Password:string,) {
    return axios
      .post(API_URL + "/usermodule", {
        UserName,
        Email, 
        Permission,
        MobileNumber,
        address, 
        CreatedBY,
        CompanyID,
        Password,
      })
      .then(response => {
        console.log("user added successful")
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }
 
}

export default new AuthUser();