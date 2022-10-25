import axios from "axios";

const API_URL = "http://localhost:3000/users/api";

class AuthCompany {
 

  Companymodule(CompanyName: string, address: string, NTNNumber:string) {
    return axios
      .post(API_URL + "/CompanyModlue", {
        CompanyName,
        address,
        NTNNumber,
      })
      .then(response => {
        console.log("client added successful")
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }
 
}

export default new AuthCompany();