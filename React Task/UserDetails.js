import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #008000",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),

    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.grey,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  //  // hide last border
  //  '&:last-child td, &:last-child th': {
  //    border: 0,
  //   },
}));

const URL = "https://gorest.co.in/public/v1/users";
const App = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios.get(URL).then((response) => {
      console.log(JSON.stringify(response.data.data));
      setUser(response.data.data);
    });
  }, []);

  const handleDeleteClick = (i) => {
    const newUser = [...user];
    const index = user.findIndex((row) => row.id == i);
    newUser.splice(index, 1);
    setUser(newUser);
  };

  return (
    <>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="full-width-text-field">Type Here</InputLabel>
        <BootstrapInput
          id="full-width-text-field"
          className="SearchField"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </FormControl>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 500 }}
          aria-label="customized table"
          className="myTable"
        >
          <TableHead>
            <TableRow className="myRow">
              <StyledTableCell align="Center">S.NO</StyledTableCell>
              <StyledTableCell align="Center">UserID</StyledTableCell>
              <StyledTableCell align="Center">Name</StyledTableCell>
              <StyledTableCell align="Center">Gender</StyledTableCell>
              <StyledTableCell align="Center">EmailID</StyledTableCell>
              <StyledTableCell align="Center">Status</StyledTableCell>
              <StyledTableCell align="Center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user
              .filter((row) => {
                if (search == "") {
                  return row;
                } else if (
                  row.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return row;
                }
              })
              .map((row) => {
                if (row)
                  return (
                    <StyledTableRow>
                      <StyledTableCell align="Center"></StyledTableCell>

                      <StyledTableCell align="Center">{row.id}</StyledTableCell>
                      <StyledTableCell align="Center">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="Center">
                        {row.gender}
                      </StyledTableCell>
                      <StyledTableCell align="Center">
                        {row.email}
                      </StyledTableCell>
                      <StyledTableCell align="Center">
                        {row.status}
                      </StyledTableCell>
                      <StyledTableCell align="Center">
                        <Link to={`/ViewUser/${row.id}`}> VIEW </Link> /{" "}
                        <a href="#" onClick={() => handleDeleteClick(row.id)}>
                          DELETE
                        </a>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default App;



