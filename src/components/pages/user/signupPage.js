import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Grid, Segment } from "semantic-ui-react";
import { createUser } from "../../../store/user-action";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
 
  const creatUser = () => {
    const user = { name, surname, mail, password };
    dispatch(createUser({ user }));

    // setName("");
    // setSurname("");
    // setMail("");
    // setPassword("");
  };
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form size="large">
          <Segment>
            <Form.Input
              value={name}
              icon="user"
              iconPosition="left"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Input
              value={surname}
              iconPosition="left"
              placeholder="Surname"
              onChange={(e) => setSurname(e.target.value)}
            />
            <Form.Input
              value={mail}
              icon="mail"
              iconPosition="left"
              placeholder="email"
              type="email"
              onChange={(e) => setMail(e.target.value)}
            />
            <Form.Input
              value={password}
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button onClick={creatUser} color="teal" fluid size="large">
              Sign up
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default SignupForm;
