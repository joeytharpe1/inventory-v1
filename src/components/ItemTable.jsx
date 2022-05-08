import React, { useState, useEffect } from "react";
import Update from "./Update";
import { baseUrl } from "../api/ItemData";
import { styled } from "@mui/material/styles";
import axios from "axios";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import "../Table.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#dddddd",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ItemTable = ({ items, deleteTableRows, updateTable }) => {
  return (
    <>
      <TableContainer component={Paper} elevation={15}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">Product Name</StyledTableCell>
              <StyledTableCell align="right">Product Price</StyledTableCell>
              <StyledTableCell align="right">Product Quantity</StyledTableCell>
              <StyledTableCell align="right">Edit Product</StyledTableCell>
              <StyledTableCell align="right">Delete Product</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell
                  className="table-cell"
                  component="th"
                  scope="row"
                >
                  {item.id}
                </StyledTableCell>
                <StyledTableCell className="table-cell" align="right">
                  {item.itemName}
                </StyledTableCell>
                <StyledTableCell className="table-cell" align="right">
                  ${item.itemPrice}
                </StyledTableCell>
                <StyledTableCell className="table-cell" align="right">
                  {item.itemQuantity}
                </StyledTableCell>
                <StyledTableCell className="table-cell" align="right">
                  <Button
                    type="submit"
                    variant="none"
                    endIcon={<EditIcon color="secondary" />}
                    onClick={() => updateTable(index)}
                  >
                    Edit
                  </Button>
                </StyledTableCell>
                <StyledTableCell className="table-cell" align="right">
                  <Button
                    id="delete"
                    type="submit"
                    variant="none"
                    endIcon={<DeleteIcon color="error" />}
                    onClick={() => deleteTableRows(index)}
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Container
      fluid="true"
        className="form-container2"
        maxWidth="md"
        justifycontent="right"
        align="center"
      >
        <Grid container maxWidth="lg" className="form-container3">
          <Grid item xs={6} md={12}> */}
            <Update />
          {/* </Grid>
        </Grid>
      </Container> */}
    </>
  );
};

export default ItemTable;
