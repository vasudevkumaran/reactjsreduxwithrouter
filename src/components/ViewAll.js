import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { editStudent, deletStudent } from '../mystore/MyActions'
import { withRouter } from 'react-router-dom';


class ViewAll extends React.Component {


    render() {
        return <div className="row">
            <div className="col-md-12">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Roll#</th>
                            <th>Subject</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.students.map((obj, index) => {
                            return <tr key={obj.id}>
                                <td>{index + 1}</td>
                                <td>{obj.firstName}</td>
                                <td>{obj.rollNum}</td>
                                <td>{obj.subject}</td>
                                <td><button className="btn btn-primary" onClick={() => {
                                    this.props.editStudent(obj);
                                    this.props.history.push('/addedit')
                                }}>Edit</button> <button className="btn btn-danger" onClick={() => {
                                    this.props.deletStudent(obj);
                                }}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    const { studentObject } = state;
    return studentObject;
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({editStudent, deletStudent},dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewAll));