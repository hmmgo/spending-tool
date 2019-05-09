import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import data from './Stores'
import useLocalStorage from 'react-use-localstorage';
import Slider from '@material-ui/lab/Slider';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';

const styles = {
    card: {
        minWidth: 375,
        maxWidth: 600
    },
    header: {
        background: '#1b4461',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        color: 'white',
        textAlign: 'center'
    },
    pos: {
        marginBottom: 12,
    },
    textField: {
        marginLeft: 10,
        marginRight: 10,
        width: 150,
    },
    dense: {
        marginTop: 19,
    },
    slider: {
        padding: '22px 0px',
    },
    root: {
        flexGrow: 1,
    },
    show: {
        display: 'block',
        cursor: 'pointer',
        padding: 10
    },
    hide: {
        display: 'none',
    },
    button: {
        color: '#19cf63',
        textDecoration: 'none'
    }
};


function Tool(props) {

    const {classes} = props;
    const [salary, setSalary] = useLocalStorage('salary', data.incomes[0].amount);
    const [mortgage, setMortgage] = useLocalStorage('mortgage', data.expenditures[0].amount);
    const [bill, setBill] = useLocalStorage('bill', data.expenditures[1].amount);
    const [spending, setSpending] = useLocalStorage('spending', data.expenditures[2].amount);
    const [fromAgeSalary, setFromAgeSalary] = useLocalStorage('fromAgeSalary', data.incomes[0].from_age);
    const [toAgeSalary, setToAgeSalary] = useLocalStorage('toAgeSalary', data.incomes[0].to_age);
    const [fromAgeMortgage, setFromAgeMortgage] = useLocalStorage('fromAgeMortgage', data.expenditures[0].from_age);
    const [fromAgeBill, setFromAgeBill] = useLocalStorage('fromAgeBill', data.expenditures[1].from_age);
    const [fromAgeSpending, setFromAgeSpending] = useLocalStorage('fromAgeSpending', data.expenditures[2].from_age);
    const [toAgeBill, setToAgeBill] = useLocalStorage('toAgeMortgage', data.expenditures[1].to_age);
    const [toAgeSpending, setToAgeSpending] = useLocalStorage('toAgeSpending', data.expenditures[2].to_age);
    const [toAgeMortgage, setToAgeMortgage] = useLocalStorage('toAgeMortgage', data.expenditures[2].to_age);
    const [show, setShow] = useState(1);
    const saving = salary - (parseInt(mortgage) + parseInt(bill) + parseInt(spending))

    return (
        <Grid container className={classes.root} spacing={16}>
            <Grid item xs={6}>
                <Grid container className={classes.demo} justify="flex-end" spacing={16}>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardHeader
                                className={classes.header}
                                classes={{title: classes.title}}
                                title="YOUR INCOME AND SPEND"
                            />
                            <CardContent>
                                <form className={classes.container} noValidate autoComplete="off">
                                    <Typography color="textSecondary" gutterBottom>
                                        Annual Income
                                    </Typography>
                                    <TextField
                                        label="Annual Salary"
                                        className={classes.textField}
                                        value={salary}
                                        onChange={e => setSalary(e.target.value)}
                                        margin="normal"
                                        variant="outlined"
                                        type={'number'}
                                    />
                                    <TextField
                                        label="From Age"
                                        className={classes.textField}
                                        value={fromAgeSalary}
                                        onChange={e => setFromAgeSalary(e.target.value)}
                                        margin="normal"
                                        variant="outlined"
                                        type={'number'}
                                    />
                                    <TextField
                                        label="To Age"
                                        className={classes.textField}
                                        value={toAgeSalary}
                                        onChange={e => setToAgeSalary(e.target.value)}
                                        margin="normal"
                                        variant="outlined"
                                        type={'number'}
                                    />
                                    <Typography color="textSecondary" gutterBottom>
                                        Monthly Income
                                    </Typography>
                                    <TextField
                                        label={data.expenditures[0].name}
                                        className={classes.textField}
                                        value={mortgage}
                                        onChange={e => setMortgage(e.target.value)}
                                        margin="normal"
                                        variant="outlined"
                                        type={'number'}
                                    />
                                    <TextField
                                        label="From Age"
                                        className={classes.textField}
                                        value={fromAgeMortgage}
                                        onChange={e => setFromAgeMortgage(e.target.value)}
                                        margin="normal"
                                        variant="outlined"
                                        type={'number'}
                                    />
                                    <TextField
                                        label="To Age"
                                        className={classes.textField}
                                        value={toAgeMortgage}
                                        onChange={e => setToAgeMortgage(e.target.value)}
                                        margin="normal"
                                        variant="outlined"
                                        type={'number'}
                                    />
                                    <TextField
                                        label={data.expenditures[1].name}
                                        className={classes.textField}
                                        value={bill}
                                        onChange={e => setBill(e.target.value)}
                                        margin="normal"
                                        variant="outlined"
                                        type={'number'}
                                    />
                                    <TextField
                                        label="From Age"
                                        className={classes.textField}
                                        value={fromAgeBill}
                                        onChange={e => setFromAgeBill(e.target.value)}
                                        margin="normal"
                                        variant="outlined"
                                        type={'number'}
                                    />
                                    <TextField
                                        label="To Age"
                                        className={classes.textField}
                                        value={toAgeBill}
                                        onChange={e => setToAgeBill(e.target.value)}
                                        margin="normal"
                                        variant="outlined"
                                        type={'number'}
                                    />
                                    <TextField
                                        label={data.expenditures[2].name}
                                        className={classes.textField}
                                        value={spending}
                                        onChange={e => setSpending(e.target.value)}
                                        margin="normal"
                                        variant="outlined"
                                        type={'number'}
                                    />
                                    <TextField
                                        label="From Age"
                                        className={classes.textField}
                                        value={fromAgeSpending}
                                        onChange={e => setFromAgeSpending(e.target.value)}
                                        margin="normal"
                                        variant="outlined"
                                        type={'number'}
                                    />
                                    <TextField
                                        label="To Age"
                                        className={classes.textField}
                                        value={toAgeSpending}
                                        onChange={e => setToAgeSpending(e.target.value)}
                                        margin="normal"
                                        variant="outlined"
                                        type={'number'}
                                    />
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container className={classes.demo} justify="flex-start" spacing={16}>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardHeader
                                className={classes.header}
                                classes={{title: classes.title}}
                                title="SPEND LESS"
                            />
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Try reducing your monthly spending to see how your forecast could improve!
                                </Typography>
                                <div className={classes.root}>
                                    <Typography>Mortgage</Typography>
                                    <Slider
                                        classes={{container: classes.slider}}
                                        value={parseInt(mortgage)}
                                        aria-labelledby="label"
                                        step={50}
                                        min={100}
                                        max={10000}
                                        onChange={(e, v) => setMortgage(v)}
                                    />
                                </div>
                                <div className={classes.root}>
                                    <Typography>Bills</Typography>
                                    <Slider
                                        classes={{container: classes.slider}}
                                        value={parseInt(bill)}
                                        aria-labelledby="label"
                                        step={50}
                                        min={100}
                                        max={10000}
                                        onChange={(e, v) => setBill(v)}
                                    />
                                </div>
                                <div className={classes.root}>
                                    <Typography>Spending</Typography>
                                    <Slider
                                        classes={{container: classes.slider}}
                                        value={parseInt(spending)}
                                        aria-labelledby="label"
                                        step={50}
                                        min={100}
                                        max={10000}
                                        onChange={(e, v) => setSpending(v)}
                                    />
                                </div>
                                <Typography>This means you're saving
                                    <span style={{fontWeight: 'bold', color: '#19cf63'}}> £ {saving}</span> per month
                                </Typography>
                            </CardContent>
                            <Grid container className={classes.root} justify="center">
                                <Button variant="outlined" className={classes.button}>
                                    <a className={classes.button} href={'/'}>Find ways to save</a>
                                </Button>
                            </Grid>
                            <Grid container className={classes.root} justify="flex-end">
                                <Typography
                                    className={show ? classes.show : classes.hide}
                                    onClick={() => setShow(0)}
                                >
                                    Was this helpful? <ThumbUp/> <ThumbDown/></Typography>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

Tool.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tool);
