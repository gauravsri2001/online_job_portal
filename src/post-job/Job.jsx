// import { Dialog, DialogContent, DialogTitle, FilledInput, Menu, MenuItem, Select } from "@mui/material";
// import React from "react";
// export default props => {
//     return (
//         <Dialog open = {true} fullWidth>
//              <DialogTitle>Post Job</DialogTitle>
//              <DialogContent>
//                 <Grid container spacing ={2}>
//                     <Grid item xs = {6}>
//                         <FilledInput placeholder="Job title" disableUnderline fullWidth />

//                     </Grid>
//                     <Grid item xs = {6}>
//                      <Select 
//                      fullWidth
//                      disableUnderline
//                      variant="filled"
//                      defaultValue="Full time"
//                      >
//                         <MenuItem value="Full time">Full time</MenuItem>
//                         <MenuItem value="Full time">Full time</MenuItem>
//                         <MenuItem value="Full time">Full time</MenuItem>
//                      </Select>
//                     </Grid>
//                     <Grid item xs = {6}>
//                         <FilledInput placeholder="Job title" disableUnderline fullWidth />

//                     </Grid>
//                 </Grid>
//              </DialogContent>
//         </Dialog>
//     );
// };

import React from "react";

export default props => {
    return (
        <div>
            <h2>Post Job</h2>
            <div>
                <label>Job title:</label>
                <input type="text" placeholder="Job title" />
            </div>
            <div>
                <label>Job type:</label>
                <select>
                    <option value="Full time">Full time</option>
                    <option value="Part time">Part time</option>
                    <option value="Contract">Contract</option>
                </select>
            </div>
            <div>
                <label>Job description:</label>
                <textarea placeholder="Job description"></textarea>
            </div>
        </div>
    );
};
