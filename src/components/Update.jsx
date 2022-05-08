import React, { useState, useEffect } from "react";
import axios from "axios";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import "../Table.css";

const Update = ({ items, updateTable }, ind) => {
  return (
    <div className="container-fluid">
      <Paper className="form-inline">
        <label className="m-2">Product Name</label>
        <input type="text" className="form-control m-2" />
        <label className="m-2">Product Price</label>
        <input type="text" className="form-control m-2" />
        <label className="m-2">Product Quantity</label>
        <input type="text" className="form-control m-2" />
        <div className="post-button">
          <Button
            type="submit"
            variant="contained"
            // fullWidth
            endIcon={<SendIcon color="secondary" />}
            onClick={() => updateTable(ind)}
          >
            send
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default Update;

/*

<div class="container-fluid">
  <form class="form-inline">
    <label for="inlineFormEmail" class="m-2">Email</label>
    <input type="email" class="form-control m-2" id="inlineFormEmail">
    <label for="inlineFormPassword" class="m-2">Password</label>
    <input type="password" class="form-control m-2" id="inlineFormPassword">
    <div class="form-check m-2">
      <input class="form-check-input" type="checkbox" id="inlineFormCheck">
      <label class="form-check-label" for="inlineFormCheck">Remember me</label>
    </div>
    <button type="submit" class="btn btn-primary m-2">Submit</button>
  </form>
</div> 

*/

/*
 <Paper component="form" className="form-inline form-paper" elevation={10}>
            <div className="form-group">
              <label className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                required
                // onChange={(e) => setItemName(e.target.value)}
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
                // onChange={(e) => setItemPrice(e.target.value)}
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
                // onChange={(e) => setItemQuantity(e.target.value)}
              />
            </div>
            <div className="post-button">
              <Button
                type="submit"
                variant="contained"
                // fullWidth
                endIcon={<SendIcon color="secondary" />}
                onClick={()=> (updateTable(ind))}
              >
                send
              </Button>
            </div>
          </Paper>

*/
