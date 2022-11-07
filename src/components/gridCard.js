import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function GridCard(props) {
    return (
        <div className="gridcard-body">
             <Card>
                <CardContent sx={{ minWidth: 275,maxWidth: 300,minHeight: 100,maxHeight: 300 }}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.title}
                    </Typography>
                    <Typography variant="h7" component="div">
                        {props.desc}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default GridCard;