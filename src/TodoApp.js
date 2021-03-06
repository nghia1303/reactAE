import React from "react";
import Header from "./components/Header";
import Todos from "./Todos";
class TodoApp extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: false
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false
            }
        ]
    };
    handleCheckboxChange = id =>{
        console.log("clicked on checkbox with id = " + id);
    };
    render() {
        return (
            <div className="container">
                <Header />
                <Todos todos={this.state.todos} handleChange={this.handleCheckboxChange}/>
            </div>
        );
    }
}
export default TodoApp;