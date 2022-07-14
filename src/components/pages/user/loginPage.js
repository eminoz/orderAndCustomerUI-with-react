import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, Grid, Segment } from "semantic-ui-react";

const LoginForm = () => {
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form size="large">
          <Segment>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button
              onClick={() => {
                console.log("user loged id");
              }}
              color="teal"
              fluid
              size="large"
            >
              Login
            </Button>
            <Container>
              <Link to={"/signup"}>create new account</Link>
            </Container>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
