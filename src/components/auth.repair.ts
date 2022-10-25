import axios from "axios";

const API_URL = "http://localhost:3000/users/api";

class Authrepair {
 

    Repairform( CNIC:String,
        CustomerName:String,
        MobileNumber:String,
        Product:String,
        Brand:String,
        Model:String,
        IMEI:String,
        Repaircenter:String,
        Advanceamount:String,) {
        return axios
          .post(API_URL + "/repairForm", {
            CNIC,
            CustomerName,
            MobileNumber,
            Product,
            Brand,
            Model,
            IMEI,
            Repaircenter,
            Advanceamount,
          })
          .then(response => {
            console.log("repairform added successful")
            if (response.data.accessToken) {
              localStorage.setItem("user", JSON.stringify(response.data));
            }
    
            return response.data;
          });
      }
}

export default new Authrepair();