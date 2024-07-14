import React from 'react';
import './App.css';
import TodoList from './component/TodoList';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src="ECPI-Seal.png" className="App-logo" alt="logo" />
      </header>
      <div>
        <h2>Todo list </h2>
		<TodoList />
      </div>
      <footer className="App-footer">
        <div className="Copyright">
          <h3>&copy; Paul Carter 2024</h3>
        </div>
      </footer>
    </div>
  );
};

export default App;
