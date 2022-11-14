import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import GridCard from './gridCard';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';

function CodingTab() {
    return(
        <div className="coding-body" style={{border: '0.5rem solid #908be9'}}>
            <Container disableGutters maxWidth="xl" sx={{minHeight:"50px",backgroundColor:"#c3c1f9",color:"white"}}>
                <Box>
                    <h2>Related Blogs:-</h2>
                </Box>
            </Container>
            <Card sx={{minHeight:"250px",backgroundColor:"#c3c1f9",paddingLeft:"5px",paddingRight:"5px",borderRadius:"0"}}>
                <Grid container spacing={2} sx={{paddingTop:"25px",paddingBottom:"25px"}}>
                    <Grid item xs={3}>
                        <GridCard title = "Recursion Approach" desc="For learning DP from start, start with Recursion and master it."/>
                    </Grid>
                    <Grid item xs={3}>
                        <GridCard title = "Memoization Approach" desc="When you learn recursion you will come across starges where you will find it repetitive, where you just need to store it."/>
                    </Grid>
                    <Grid item xs={3}>
                        <GridCard title = "Tabulation Approach" desc="Here you can make the recursion more optimized by using memory spaces and tables and forming relation between indexes."/>
                    </Grid> 
                    <Grid item xs={3}>
                        <GridCard title = "Optimized Memory Approach" desc="Using the tabulation approach with more optimized space."/>
                    </Grid>
                    <Grid item xs={3}>
                        <GridCard title = "Optimized Memory Approach" desc="Using the tabulation approach with more optimized space."/>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
}

export default CodingTab;
