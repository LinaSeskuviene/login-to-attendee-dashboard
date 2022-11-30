import { Component } from "react";
import './css/attendeeList.css'

const initialFormData = { firstName: "", lastName: "", email: "", age: "" };

class AttendeeList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          attendees: [],
          formState: initialFormData,
        };
        this.deleteAttendee = this.deleteAttendee.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };
    deleteAttendee = (attendeeId) => {
        const filteredAttendees = this.state.attendees.filter(
          (attendee) => attendee.id !== attendeeId
        );
        this.setState({ ...this.state, attendees: filteredAttendees });
      }; 
      onChange = (event) => {
        const fieldId = event.target.id;
        const fieldValue = event.target.value;
    
        this.setState({
          ...this.state,
          formState: { ...this.state.formState, [fieldId]: fieldValue },
        });
      };
      onSubmit = (event) => {
        event.preventDefault();
        const { firstName, lastName, email, age } = this.state.formState;
    
        const newAttendee = {
          firstName,
          lastName,
          email,
          age,
          id: String(this.state.attendees.length),
        };
    console.log(newAttendee.id)
        this.setState({
          ...this.state,
          attendees: [...this.state.attendees, newAttendee],
          formState: initialFormData,
        });
      };
      render() {
        return (
          <div className="App">
            <h1 className="boardTitle">Managemant dashboard</h1>
    
            <form onSubmit={this.onSubmit} className="formContainer">
              <input
                type="text" placeholder="Name" id="firstName" 
                value={this.state.formState.firstName} onChange={this.onChange}/>
              <input
                type="text" placeholder="Last Name" id="lastName"
                onChange={this.onChange} value={this.state.formState.lastName}/>
              <input
                type="text" placeholder="Email" id="email"
                onChange={this.onChange} value={this.state.formState.email}/>
              <input
                type="number" placeholder="Age" id="age"
                onChange={this.onChange} value={this.state.formState.age} />
              <button type="submit" className="addButton">Add</button>
            </form>
            {this.state.attendees.length ? (
              <ul className="listContainer">
                {this.state.attendees.map((attendee) => (
                  <li key={attendee.id}><a href="#" className="listItem">
                    {`${attendee.firstName} ${attendee.lastName} is ${attendee.age} years old and ${attendee.firstName}'s email is ${attendee.email}`}
                    <button onClick={() => this.deleteAttendee(attendee.id)} className="deleteButton">
                      Delete
                    </button>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <h3 className="noAttendee">
                There is no attendee in the list
              </h3>
            )}
          </div>
        );
      }
}
export default AttendeeList; 