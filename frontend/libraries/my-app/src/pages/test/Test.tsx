import { Grid } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import { Speeddial } from "../../components/speeddial/MySpeeddial";

interface ITest{}
export const Test:React.FC<ITest>=()=>{
    return<>
    <Container>
        <Grid>
            <Speeddial/>
        </Grid>
    </Container>
    </>
}