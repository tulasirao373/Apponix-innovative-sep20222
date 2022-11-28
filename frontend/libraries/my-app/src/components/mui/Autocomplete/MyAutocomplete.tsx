import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";

interface IMyAutocomplete { }
export const MyAutocomplete: React.FC<IMyAutocomplete> = (props) => {
    var [movies, setMovies] = useState()
    var handOnchange = (e: any, val: any) => {
        console.log(val)
        setMovies(val.label)
    }

    return <>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={mydata}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
        />
        {movies}
    </>
}
var mydata = [
    { label: 'kantara', value: '1' },
    { label: 'fast and furiopus', value: '2' },
    { label: 'kgf', value: '3' },
    { label: 'twilight saga', value: '4' }
]