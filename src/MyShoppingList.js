import React, {useState} from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import List from './List';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function MyShoppingList() {
  const classes = useStyles();

  const [addItem, updateItem] = useState("")
  const [shoppingList, updateShoppingList] = useState([]);
  
 
  const addNote = () => {
    shoppingList.push({description: addItem})
    updateShoppingList(shoppingList)
    updateItem("")
  }

  
  const deleteList = (index) => {
    const newList=shoppingList.filter((item, i) => i!==index);
    updateShoppingList(newList)
  }

  return (
    <div className="app-background">
      <Container maxWidth="sm">
        <p className="heading-text">My Shopping List</p>
      </Container>
    <div>
      <Container className="list-container" maxWidth="sm">
       <form className={classes.root} noValidate autoComplete="off">
        <Input inputProps={{ 'aria-label': 'description' }} value={addItem}
      onChange={(event)=>updateItem(event.target.value)}/>
          <Button className="button-add" variant="contained" onClick={addNote}>Add</Button>
      {shoppingList?.length ? shoppingList.map((shoppingList, index)=><List index={index} 
      itemData={shoppingList} deleteList={deleteList}/>):
        <p className="no-item-text"><i>Enter an Item</i></p>
          }
      </form>
      </Container>
      </div>
    </div>
  );
}

export default MyShoppingList;


