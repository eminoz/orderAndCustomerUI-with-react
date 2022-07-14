import axios from "axios";
import { userActions } from "./user-slice";

export const createUser = ({ user }) => {
  return async (dispatch) => {
    const rawResponse = async (user) => {
      const options = {
        url: "http://localhost:3030/user/createuser",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        mode: "cors",
        data: {
          name: user.name,
          surname: user.surname,
          email: user.mail,
          password: user.password,
        },
      };
      const responsedata = await axios(options);
      return responsedata;
    };
    try {
      const responsedata = await rawResponse(user);
      console.log(responsedata.data);
      if (responsedata.status === 200) {
        JSON.stringify(
          localStorage.setItem("user", {
            id: responsedata.data.id,
            name: responsedata.data.name,
            surname: responsedata.data.surname,
            email: responsedata.data.email,
          })
        );

        dispatch(
          userActions.createdUser({
            id: responsedata.data.id,
            name: responsedata.data.name,
            surname: responsedata.data.surname,
            email: responsedata.data.email,
          })
        );
      }
    } catch (err) {
      console.log(err.response.status);
      if (err.response.status === 409) {
        console.log("already exist");
      }
    }
  };
};
