import { combineReducers } from 'redux'

const INITIAL_STATE = { showForm: false, id: -1, firstName: '', rollNum: '', subject: '', students: [] };


const myActionReducer = (state = INITIAL_STATE, action) => {
    let firstName;
    let rollNum;
    let subject;
    let id;
    let newStudentsArray = [];
    switch (action.type) {
        case 'SAVE_STUDENT':
            id = state.id;
            firstName = state.firstName;
            rollNum = state.rollNum;
            subject = state.subject;
            if (id === -1) {
                //add
                id = Math.random();
                newStudentsArray = [...state.students, { id: id, firstName: firstName, rollNum: rollNum, subject: subject }];
            } else {
                //edit
                newStudentsArray = [...state.students];
                const index = newStudentsArray.findIndex((obj)=>{
                    return obj.id === id
                });

                newStudentsArray.splice(index,1,{ id: id, firstName: firstName, rollNum: rollNum, subject: subject});
            }

            return { showForm: false, id: -1, firstName: '', rollNum: '', subject: '', students: newStudentsArray };

        case 'SHOW_ADD_FORM':
            newStudentsArray = [...state.students];
            return { showForm: action.payload, id: -1, firstName: '', rollNum: '', subject: '', students: newStudentsArray };

        case 'SHOW_FORM_EDIT':
            id = action.payload.id;
            firstName = action.payload.firstName;
            rollNum = action.payload.rollNum;
            subject = action.payload.subject;
            newStudentsArray = [...state.students];

            return { showForm: true, id: id, firstName: firstName, rollNum: rollNum, subject: subject, students: newStudentsArray };
        case 'HANDLE_DELETE':
            id = action.payload.id;
            newStudentsArray = state.students.filter((obj)=>{
                return obj.id !== id
            });
            return { showForm: false, id: -1, firstName: '', rollNum: '', subject: '', students: newStudentsArray };
        case 'FORM_VIEW':
            console.log(action.payload);
            newStudentsArray = [...state.students];
            return { showForm: action.payload, id: -1, firstName: '', rollNum: '', subject: '', students: newStudentsArray };;
        case 'FIRST_NAME':
            newStudentsArray = [...state.students];
            id = state.id;
            rollNum = state.rollNum;
            subject = state.subject;
            return { showForm: true, id: id, firstName: action.payload, rollNum: rollNum, subject: subject, students: newStudentsArray };

        case 'ROLL_NUM':
            newStudentsArray= [...state.students];
            id = state.id;
            firstName = state.firstName;
            subject = state.subject;
            return { showForm: true, id: id, firstName: firstName, rollNum: action.payload, subject: subject, students: newStudentsArray };

        case 'SUBJECT':
            newStudentsArray = [...state.students];
            id = state.id;
            firstName = state.firstName;
            rollNum = state.rollNum;
            return { showForm: true, id: id, firstName: firstName, rollNum: rollNum, subject: action.payload, students: newStudentsArray };
        default:
            return state;
    }

}

export default combineReducers({
    studentObject: myActionReducer
});