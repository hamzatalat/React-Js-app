import { ADD_FOOTER_P1} from '../actions/actionsTypes'
import { ADD_FOOTER_P2 ,ADD_FOOTER_P3 ,ADD_FOOTER_P0} from '../actions/actionsTypes'

const INITIAL_DATA =  [
     {
         pageone: 'P1',
         pagetwo: 'P2',
         pagethree: 'P3',
         homepage: 'Home',
     }
 ];


const AddFooter = (state=INITIAL_DATA, action) => {
    console.log("this is footer state")
    console.log(state)
    switch (action.type){


        case ADD_FOOTER_P1:

        return[ 
			{
                pageone: action.text,
                pagetwo: state[0].pagetwo,
         		pagethree: state[0].pagethree,
         		homepage: state[0].homepage
            }

            ]

        case ADD_FOOTER_P2:

        return[ 
			{
                
                pagetwo: action.text,
                pageone: state[0].pageone,
        	 	pagethree: state[0].pagethree,
        	 	homepage: state[0].homepage
            }
            ]

            case ADD_FOOTER_P3:

        return[ 
			{
                
                pagethree: action.text,
                pageone: state[0].pageone,
        	 	pagetwo: state[0].pagetwo,
        	 	homepage: state[0].homepage
            }
            ]    

            case ADD_FOOTER_P0:

        return[ 
			{
                pageone: state[0].pageone,
        	 	pagethree: state[0].pagethree,
        	 	pagetwo: state[0].pagetwo,
                homepage: action.text
            }
            ]    


        default:
        return state
    }
}

export default AddFooter

