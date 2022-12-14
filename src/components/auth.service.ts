import axios from "axios";

const API_URL = "http://localhost:3000/users/api";

class AuthService {
  login(username: string, Password: string) {
    return axios
      .post(API_URL + "/login", {
        username,
        Password
      })
      .then(response => {
        console.log("User Login is successful")
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  
  logout() {
    localStorage.removeItem("user");
  }

  
}

export default new AuthService();