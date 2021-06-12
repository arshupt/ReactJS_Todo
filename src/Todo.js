import React from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, Button } from '@material-ui/core'
import './Todo.css'
import db from './firebase'
import DeleteIcon from '@material-ui/icons/Delete';
//import { Button } from '@material-ui/core';

function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem>
            <ListItemAvatar></ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary=""/>
            </ListItem>

            <DeleteIcon onClick={
                event => db.collection('todos').doc(props.todo.id).delete()}/>
        </List>
    )
}

export default Todo
