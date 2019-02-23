import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from "../presentations/Input";

class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id ]: event.target.value })
    }

    render() {
        const { seo_title } = this.state;
        return (
            <form id ="article-form">
                <Input
                    label="seo_title"
                    text="SEO title"
                    id="seo_title"
                    value={seo_title}
                    handleChange={this.handleChange}
                    type="text"
                />
            </form>
        )
    }
}

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer/>, wrapper) : false;

export default FormContainer;