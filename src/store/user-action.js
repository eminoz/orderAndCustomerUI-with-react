import axios from "axios";
import { userActions } from "./user-slice";

export const createUser = ({ user }) => {
  return async (dispatch) => {
    const rawResponse = async (user) => {
      const options = {
        url: "http://localhost:8080/insertoneuser",
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
      const newuser = {
        id: responsedata.data.id,
        name: responsedata.data.name,
        surname: responsedata.data.surname,
        email: responsedata.data.email,
      };

      if (responsedata.status === 200) {
        // localStorage.setItem("user", JSON.stringify(newuser));
        // console.log(JSON.parse(localStorage.getItem("user")));
        dispatch(userActions.createdUser({ newuser }));
      }
    } catch (err) {
      console.log(err.response.status);
      if (err.response.status === 409) {
        console.log("already exist");
      }
    }
  };
};
export const loginUser = ({ user }) => {
  return async (dispatch) => {
    const login = async (user) => {
      const options = {
        url: "http://localhost:8080/login",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        mode: "cors",
        data: {
          email: user.mail,
          password: user.password,
        },
      };
      const responsedata = await axios(options);

      return responsedata;
    };
    try {
      const logedUser = await login(user);

      if (logedUser.status === 200) {
        localStorage.setItem(
          "token",
          JSON.stringify(logedUser.data.auth.token)
        );
        // console.log(JSON.parse(localStorage.getItem("token")));
        // console.log(logedUser.data.auth.token)
        dispatch(userActions.login({ token: logedUser.data.auth.token }));
      }
    } catch (err) {
      console.log(err.response.status);
      if (err.response.status === 404) {
        console.log("user not found");
      }
    }
  };
};

export const getOneUserById = ({ id, token }) => {
  return async (dispatch) => {
    const getUser = async (id, token) => {
      const options = {
        url: `http://localhost:8080/getorders/${id}`,
        method: "get",
        headers: {
          Authorization: `${token}`,
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        mode: "cors",
      };

      const responsedata = await axios(options);

      return responsedata;
    };
    try {
      const responsedata = await getUser(id, token);

      const orders = {
        id: responsedata.data.orders.CustomerId,
        amount: responsedata.data.orders.Amount,
        product: responsedata.data.orders.Product,

      };
      if (responsedata.status === 200) {
        dispatch(userActions.fetchedUserFromDB({ orders }));
      }
    } catch (err) {
      console.log(err); 

      if (err.response.status === 404) {
        console.log("user not found");
      }
    }
  };
};
