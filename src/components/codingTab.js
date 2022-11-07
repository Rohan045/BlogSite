import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import GridCard from './gridCard';

function CodingTab() {
    return(
        <div className="coding-body">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <GridCard title = "Dynamic Programming" desc="Those who doesnt learn from past mistakes are condemn to repeat it"/>
                    </Grid>
                    <Grid item xs={3}>
                        <GridCard title = "Graphs" desc="Learn about different traversal techniques like BFS DFS"/>
                    </Grid>
                    <Grid item xs={3}>
                        <GridCard title = "Time Complexity" desc="One of the most important topis in terms of product based interviews"/>
                    </Grid>
                    <Grid item xs={3}>
                        <GridCard title = "Linked List" desc="Learn about the linked list and it uses"/>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default CodingTab;
