import React, { useState, useEffect } from "react";
import axios from "axios";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import "../Table.css";


const PostForm = () => {
  const [itemName, setItemName] = useState("") 
  const [itemPrice, setItemPrice] = useState(0) 
  const [itemQuantity, setItemQuantity] = useState(0) 

  //post request
  const postData = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/item/add", {
      itemName,
      itemPrice,
      itemQuantity
    }).then(res => console.log('posting data', res))
    window.location.reload(true);
  };

  return (
    <Container className="form-container" maxWidth="md">
      <Grid container maxWidth="md">
        <Grid item xs={12}>
          <Paper className="form-paper" elevation={10} >
            <div className="form-group">
              <label className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                required
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Product Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Price"
                required
                min=".00"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Product Quantity</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Quantity"
                required
                min="0"
                value={itemQuantity}
                onChange={(e) => setItemQuantity(e.target.value)}
              />
            </div>
            <div className="post-button">
              <Button
                type="submit"
                variant="contained"
                fullWidth
                endIcon={<SendIcon color="secondary" />}
                onClick={postData}
              >
                Post
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PostForm;
