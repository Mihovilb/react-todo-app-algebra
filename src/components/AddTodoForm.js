import React, { Component } from "react"
import { Button, Form, FormControl, InputGroup } from "react-bootstrap"

import PropTypes from "prop-types";

export default class AddTodoForm extends Component{

    state = {
        newItem: "",
    };

    ref = React.createRef();

    handleChange = evt => {
        const newItem = evt.target.value;
        console.log("setState -> " + newItem);
        this.setState({newItem});
    };

    handleAddTodoClick = (event) => {
        event.preventDefault();


        const {newItem} = this.state;
        const {addTodo} = this.props;
//ako je prazno polje, ne radi ništa
if (!newItem || !newItem.trim()) {
    return;
  }

        addTodo(newItem);

        this.setState({newItem: "" });
        
        this.ref.current.focus();
    };

    render(){
        const {newItem} = this.state;
    return (<Form>
                <InputGroup>
                <FormControl onChange={this.handleChange} value={newItem} placeholder="Dodaj zadatak" autoFocus ref={this.ref}/>
                    <Button type="submit" onClick={this.handleAddTodoClick}>Dodaj</Button>
                </InputGroup>
            </Form>)
    }
}
//addTodo

AddTodoForm.propTypes = {
    addTodo: PropTypes.func,
};