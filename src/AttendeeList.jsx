import { Component } from "react";

const initialFormData = { firstName: "", lastName: "", email: "", age: "" };
;

class AttendeeList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          attendee: [],
          formState: initialFormData,
        };
        this.deleteAttendee = this.deleteAttendee.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };
    deleteAttendee = (attendeeId) => {
        const filteredAttendees = this.state.attendee.filter(
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
          id: String(this.state.Math.floor(Math.random() * 1000)),
        };
    
        this.setState({
          ...this.state,
          attendees: [...this.state.attendees, newAttendee],
          formState: initialFormData,
        });
      };
}
export default AttendeeList; 