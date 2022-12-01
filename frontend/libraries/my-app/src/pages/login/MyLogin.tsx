import { Container, Grid } from "@mui/material";
import { MyAutocomplete } from "../../components";
import { Myform } from "../../components/form";


export const MyLogin:React.FC<{}>=()=>{
    return<>
    <Container maxWidth="xl">
        <Grid>
            navbar
        </Grid>
        <Grid> autocomplete
            <MyAutocomplete/>
        </Grid>
<br />
        <Grid>
            my form
            <Myform/>
        </Grid>
    </Container>
    </>
}