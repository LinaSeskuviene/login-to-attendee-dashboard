import React from "react";
import { Component } from "react";

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '', 
            lastName: '',
            email: '',
            age: '',
        }
    }
componentReceiveProps(newProps) {
    this.setState({
        firstName: newProps.firstName,
        lastName: newProps.lastName,
        email: newProps.email,
        age: newProps.age,
        });
        this.props.saveModalData = this.props.saveModalData.bind(this);
    }
    firstNameHandler = (e) =>{
        this.setState({ firstName: e.target.value})
    }
    lastNameHandler = (e) =>{
        this.setState({ lastName: e.target.value})
    }
    emailHandler= (e) =>{
        this.setState({ email: e.target.value})
    }
    ageHandler = (e) =>{
        this.setState({ age: e.target.value})
    }
    saveHandler = () => {
        return(this.setState())
    }
  
    render() {
        return (
            <div className="modal" id="editModal" role="dialog" aria-hidden= 'true' aria-labelledby="label">
                <div className="modalDialog" role="document">
                    <div className="modalHeader">
                        <p className="modalTitle">Edit</p>
                        <button className="closeModalButton" data-dismiss="modal" aria-label="close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modalBody">
                        <p><span className="modalItem">First Name:</span>
                        <input value={this.props.firstName} onChange={(e) => this.firstNameHandler(e)}/> 
                        </p>
                        <p><span className="modalItem">Last Name:</span>
                        <input value={this.props.lastName} onChange={(e) => this.lastNameHandler(e)}/> 
                        </p>
                        <p><span className="modalItem">Email:</span>
                        <input value={this.props.email} onChange={(e) => this.emailHandler(e)}/> 
                        </p>
                        <p><span className="modalItem">Age:</span>
                        <input value={this.props.age} onChange={(e) => this.ageHandler(e)}/> 
                        </p>
                    </div>
                    <div className="modalFooter">
                        <button type="button" className="closeButton" data-dismiss="modal">Close</button>
                        <button type="button" className="saveChangesButton" data-dismiss="modal" 
                        onClick={() => { this.saveHandler() }}>Save</button>
                    </div>
                </div>
            </div>
        );
    };
};
export default Modal;