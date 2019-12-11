import { ADD_FOOTER_P1} from './actionsTypes'
import { ADD_FOOTER_P2,ADD_FOOTER_P3,ADD_FOOTER_P0} from './actionsTypes'

export const addFooter = text => ({
    type: ADD_FOOTER_P1,
    text
})
export const addFooter2 = text => ({
    type: ADD_FOOTER_P2,
    text
})


export const addFooter3 = text => ({
    type: ADD_FOOTER_P3,
    text
})


export const addFooter0 = text => ({
    type: ADD_FOOTER_P0,
    text
})