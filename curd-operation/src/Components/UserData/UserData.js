import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IconButton, TableCell, Tooltip, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

export default function UserData() {
  return (
    <TableContainer sx={{ margin: "10px" }}>
      <Typography sx={{ color: "#34495e" }} variant="h4" align="center">
        User table
      </Typography>
      <Table sx={{ maxWidth: 650, margin: "0 auto" }} aria-label="simple table">
        <TableHead sx={{ background: "#a18cd1" }}>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Profession</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableCell align="center">ABC</TableCell>
          <TableCell align="center">ABC</TableCell>
          <TableCell align="center">ABC</TableCell>
          <TableCell align="center">
            <Tooltip title="Delete">
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Update">
              <IconButton>
                <EditRoundedIcon />
              </IconButton>
            </Tooltip>
          </TableCell>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
