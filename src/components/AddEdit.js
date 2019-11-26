import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showFormView, saveStudent, setFirstName, setRollNum, setSubject } from '../mystore/MyActions';
import { withRouter } from 'react-router-dom';

class AddEdit extends React.Component {

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.saveStudent(this.props);
        this.props.history.push('/');
    }


    onTextInputChange = (event) => {
        switch (event.target.name) {
            case 'firstName':
                this.props.setFirstName(event.target.value);
                break;

            case 'rollNum':
                this.props.setRollNum(event.target.value);
                break;

            case 'subject':
                this.props.setSubject(event.target.value);
                break;

            default:
                break;
        }
    }


    render() {
        return <div className="row">
            <div className="col-md-6 offset-md-3">
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" name="firstName" placeholder="Enter Name"
                            value={this.props.firstName} onChange={this.onTextInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Roll #</label>
                        <input type="text" className="form-control" name="rollNum" placeholder="Enter Roll #" 
                        value={this.props.rollNum} onChange={this.onTextInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Subject</label>
                        <input type="text" className="form-control" name="subject" placeholder="Enter Subject" 
                        value={this.props.subject} onChange={this.onTextInputChange}
                        />
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    }
}

const mapStateToPros = (state) => {
    const { studentObject } = state;
    console.log(studentObject);
    return studentObject;
}

const mapDispathToPros = (dispatch) => {
    return bindActionCreators({ saveStudent, showFormView, setFirstName, setRollNum, setSubject }, dispatch);
}

export default withRouter(connect(mapStateToPros, mapDispathToPros)(AddEdit));