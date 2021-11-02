import React from "react";
import './App.css';
import {Layout} from 'antd';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
    return (
        <div className="App">
            <Layout >
                        <h3>Simple TODO App</h3>
                        <TodoForm />
                        <TodoList  />
            </Layout>
        </div>
    );
}



export default App;
