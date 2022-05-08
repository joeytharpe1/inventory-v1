import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { getItems, baseUrl } from "../api/ItemData";
import axios from "axios";
import ItemTable from "./ItemTable";
import Update from "./Update";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


import "../Table.css";

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(0);

  useEffect(() => {
    (async () => {
      const data = await getItems();
      setItems(data);
    })();
  }, [getItems]);

  //put request
//   const updateTableRow = (index) => {
//     const rows = [...items];
//     axios
//       .put(`http://localhost:8080/item/update/${items[index].id}`)
//       .then(() => {
//         alert(`Item with id: ${items[index].id} updated successfully`);
//         setItems(rows);
//       });
//     window.location.reload(true);
//   };

  //delete request
  const deleteTableRows = (index) => {
    const rows = [...items];
    axios
      .delete(`http://localhost:8080/item/delete/${items[index].id}`)
      .then(() => {
        //   window.location.reload(true);
        console.log(items[index].id)
        alert(`Item with id: ${items[index].id} deleted successfully`);
        setItems(rows);
      });
  };

  const updateTable = (ind) => {
      const updatedRow = [...items];
      axios.put(`http://localhost:8080/item/update/${items[ind].id}`, {
          itemName,
          itemPrice,
          itemQuantity
      }).then(() => {
          console.log("data: " + items[ind].id);
          setItems(updatedRow);
      });
  }
  

  return (
    <Container
      className="table-container"
      justifycontent="center"
      align="center"
      maxWidth="lg"
    >
      <Grid container justifyContent="center" align="center">
        <Grid item >
          <ItemTable items={items} deleteTableRows={deleteTableRows} updateTable={updateTable}/>
        </Grid>
      </Grid>
    </Container>
  );
};



export default Inventory;
