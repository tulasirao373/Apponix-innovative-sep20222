import { Container, Grid } from "@mui/material";
import React from "react";
import { MyNavbar } from "../../components/navbar/MyNavbar";

interface ILayout{
    children: any;
}
export const Layout:React.FC<ILayout>=(props)=>{
    return<>
    
    <Container>
        <Grid>
            <MyNavbar/>
        </Grid>
    </Container>
    {props.children}

    </>
}