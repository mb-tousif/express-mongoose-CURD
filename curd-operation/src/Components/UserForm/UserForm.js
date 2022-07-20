import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React from 'react';

const UserForm = () => {
    return (
        <Stack sx={{maxWidth: '50ch', margin: "0 auto"}}>
            <Typography sx={{ color: "#34495e", marginTop: "10px" }} variant="h4" align="center">Enter User Details</Typography>
            <Box sx={{margin: "5px"}}><TextField fullWidth label="Enter Name" variant="outlined" /></Box>
            <Box sx={{margin: "5px"}}><TextField fullWidth label="Enter Email" variant="outlined" /></Box>
            <Box sx={{margin: "5px"}}><TextField fullWidth label="Profession" variant="outlined" /></Box>  
            <Button fullWidth>Submit</Button>
        </Stack>
    );
};

export default UserForm;