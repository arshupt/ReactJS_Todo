import React from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, Button, useTheme, useMediaQuery } from '@material-ui/core'
import './Todo.css'
import db from './firebase'
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { createMuiTheme } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root: {
      minWidth: 275,
      height: 80,
      width:200,
      backgroundColor: '#01579b',
      [theme.breakpoints.up('sm')]: {
        width: 600,
      },
    },
  }));



function Todo(props) {
    const classes = useStyles();
    const mystyle = {
        color: "white",
        };
    return (
            <List className="todo__list">
                <Card className={classes.root}>
                    <CardContent>
                        <ListItem>
                            <ListItemAvatar></ListItemAvatar>
                            
                            <ListItemText className="itemtext" primary={props.todo.todo} secondary=""/>
                            
                        <DeleteIcon style={{color:"black"}} onClick={
                            event => db.collection('todos').doc(props.todo.id).delete()}/>
                        </ListItem>
                    </CardContent>
                </Card>
            </List>
             
    )
}

export default Todo
