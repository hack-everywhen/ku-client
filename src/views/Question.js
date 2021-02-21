import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import {IconButton} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {ShareRounded} from "@material-ui/icons";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
// import Logo from './math.png'
import { fade} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    root: {
        minWidth: "100%",
        // maxWidth: 600,
        margin: '10px 10px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
  }));


export default function Question(props) {
    // const {questions, setQuestion} = useContext(QuestionListContext);
    const {match: {params}} = props;
    const {questionId} = params;
    const [question, setQuestion] = useState();
    const classes = useStyles();
    // const question = undefined;



    useEffect(() => {
        // const apiURL = `https://cors-anywhere.herokuapp.com/localhost:8000/api/question`
        const apiURL = `http://localhost:8000/api/question/${questionId}`
        axios.get(apiURL, {headers: {Accept: "application/json"}})
            .then((res) => {
                setQuestion(res.data);
            }).catch((error) => {
            console.log(error);
        })
    }, []);

    if(!question) {
        return (
            <div>
                Question got lost. Sorry. Go away.
            </div>
        )
    }
    else {
        return (
    <div className={classes.root}>
        <div>
         <Typography variant="h3" gutterBottom style={{margin:"20px", marginLeft:"10rem"}}>
            {question.query}
        </Typography>
        <Typography variant="body1" gutterBottom style={{margin:"20px",marginLeft:"10rem", marginRight:"10rem"}}>
            {question.description}
        </Typography>
        </div>
        <div>
        <Typography variant="h3" gutterBottom style={{marginLeft:"10rem", marginRight:"10rem"}}>
            Comments
         </Typography>
        <Card style={{marginLeft:"10rem", marginRight:"10rem"}}>
          <CardContent>
             <TextField 
                style={{width: "85%"}}
                id="outlined-secondary"
                label="Add a Comment"
                variant="outlined"
                color="secondary"
                multiline
            />
            <Button variant="contained" color="primary" style={{margin:"10px", marginLeft:"5%", marginTop:"10px", padding:"10px"}}>
                ADD
            </Button>
          </CardContent>
        </Card>
        <Card style={{marginLeft:"10rem", marginRight:"10rem",marginTop:"10px"}}>
          <CardContent>
            <div style={{display:"flex"}}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                <Typography variant="body2" style={{ marginLeft:"10px"}} >
                    Ramesh <br/>Shrinivasan
                </Typography>
                <Typography variant="body2" style={{ marginLeft:"80%"}} >
                    5 days ago
                </Typography>
            </div>
            <div>
                <Typography>
                    
                </Typography>
                <Typography variant="body2" gutterBottom style={{marginTop:"10px",marginLeft:"2.5%",marginRight:"2.5%"}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                 </Typography>
            </div>
          </CardContent>
        </Card>
        <Card style={{marginLeft:"10rem", marginRight:"10rem",marginTop:"10px"}}>
          <CardContent>
            <div style={{display:"flex"}}>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Typography variant="body2" style={{ marginLeft:"10px"}} >
                     Travis <br/>Howard
                </Typography>
                <Typography variant="body2" style={{ marginLeft:"80%"}} >
                    5 days ago
                </Typography>
            </div>
            <div>
                <Typography>
                    
                </Typography>
                <Typography variant="body2" gutterBottom style={{marginTop:"10px",marginLeft:"2.5%",marginRight:"2.5%"}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                 </Typography>
            </div>
          </CardContent>
        </Card>
        <Card style={{marginLeft:"10rem", marginRight:"10rem",marginTop:"10px"}}>
          <CardContent>
            <div style={{display:"flex"}}>
             <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Typography variant="body2" style={{ marginLeft:"10px"}} >
                    Cindy <br/>Baker
                </Typography>
                <Typography variant="body2" style={{ marginLeft:"80%"}} >
                    5 days ago
                </Typography>
            </div>
            <div>
                <Typography>
                    
                </Typography>
                <Typography variant="body2" gutterBottom style={{marginTop:"10px",marginLeft:"2.5%",marginRight:"2.5%"}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                 </Typography>
            </div>
          </CardContent>
        </Card>
        </div>
    </div>
        );
    }
}