import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import Todo from './Todo'
import { FormControl, Input, InputLabel } from '@material-ui/core';
import {database} from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
      database.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);
  const addTodo = (Event) => {
    // this will fire off when we click button
    Event.preventDefault();

    database.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput(''); // clear up the input after clicking submit
    
    
  }


  return (
    <div className="App">
      <h1>Hello divo</h1>
      <form>
    <FormControl>
         <InputLabel>write a Todo</InputLabel>
              <Input value= {input} onChange={Event => setInput(Event.target.value)} />
                
              </FormControl>
            <Button disabled={!input} type="submit" onClick={addTodo} color="primary">
        Add Todo
        </Button>
       {/*<button type="submit" onClick={addTodo}>Add Todo</button> */}
      </form>

      <ul>
        {todos.map(todo => (
          <Todo text={todo} />
          //<li>{todo}</li>
          ))}
        
        
      </ul>
    </div>
  );
}

export default App;
