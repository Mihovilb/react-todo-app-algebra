import { Component } from "react";
import { Form } from "react-bootstrap";


export default class TodoItem extends Component{
    render(){

        return(
        <div>
            <Form.Check>inline</Form.Check>
            <span>Test</span>
            <span>X</span>
            </div>
            );
    };
}