import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Table } from "semantic-ui-react";
import { getOneUserById } from "../../store/user-action";

const ProductList = () => {
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const orders = useSelector((state) => state.user.fetchedOrders);

  const fethcuser = () => {
    dispatch(getOneUserById({ id, token }));
  };
  return (
    <div>
      <h1>Orders List</h1>
      <Input
        onChange={(e) => {
          setId(e.target.value);
        }}
        placeholder="Search..."
      />
      <Button onClick={fethcuser}>Fetch User</Button>
      {orders && (
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>product Name</Table.HeaderCell>
              <Table.HeaderCell>quantity</Table.HeaderCell>
              <Table.HeaderCell>price</Table.HeaderCell>
              <Table.HeaderCell>amount</Table.HeaderCell>
              <Table.HeaderCell>description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {orders.products.map((e) => (
            <Table.Body key={e.productName}>
              <Table.Row>
                <Table.Cell>{e.productName} </Table.Cell>
                <Table.Cell>{e.quantity} </Table.Cell>
                <Table.Cell>{e.price} </Table.Cell>
                <Table.Cell>{e.amount} </Table.Cell>
                <Table.Cell>{e.description} </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      )}
    </div>
  );
};

export default ProductList;
