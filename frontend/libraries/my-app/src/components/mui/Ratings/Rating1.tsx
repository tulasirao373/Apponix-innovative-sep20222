import { Rating, Typography } from "@mui/material";
import { useState } from "react"

interface IRating { }
export const Rating1: React.FC<IRating> = (props) => {
    var [value, setvalue] = useState()
    return <>
        <Typography component="legend">Controlled</Typography>
        <Rating
            name="simple-controlled"
            value={value}
            onChange={(event: any, newValue: any) => {
                setvalue(newValue);
            }}
        />
    </>
}
