import { CREATE_COURSE } from "../Actions/ActionTypes"

export default function CourseReducer(state = [], action) {
    switch (action.type) {
        case CREATE_COURSE:
            return [...state, { ...action.course }]
        default:
            return state
    }
}