import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


 function List(props) {
 const classes = useStyles();

 return (
    <div className={classes.root}>
        <ListItem>
          <ListItemIcon>
            <IconButton edge="end" aria-label="delete"> {props.itemData.description} 
              <DeleteIcon  onClick={() => props.deleteList(props.index)}/>
            </IconButton>
    
         </ListItemIcon>
        </ListItem>
    </div>
  );
}

export default List;