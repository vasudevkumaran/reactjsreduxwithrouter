export const saveStudent = (obj) =>{
    return {type:'SAVE_STUDENT',payload:obj};
}

export const addNewStudent = (obj) => {
    return {type:'SHOW_ADD_FORM', payload:obj};
}

export const editStudent = (obj) => {
    return {type:'SHOW_FORM_EDIT', payload:obj};
}

export const deletStudent = (obj) => {
    return {type:'HANDLE_DELETE', payload:obj};
}

export const showFormView = (obj) => {
    return {type:'FORM_VIEW', payload:obj};
}

export const setFirstName = (obj) => {
    return {type:'FIRST_NAME', payload:obj};
}

export const setRollNum = (obj) => {
    return {type:'ROLL_NUM', payload:obj};
}

export const setSubject = (obj) => {
    return {type:'SUBJECT', payload:obj};
}