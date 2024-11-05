import { createSlice,current } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        // mutating the state here
        addItem:(state,action)=>{     // when we create slice(reducers) there are multiple "reducer function "
         
            // Vanilla(older) Redux => DON'T MUTATE STATE(returning was mandatory) react uses Immer to do this ,go read immerjs.github.io
            // const newState=[...state];
            // newState.items.push(action.payload);
            // return newState;

            // immer library finding the differences between original state,mutated state and give you a new state which is immutable state
              // go read redux doccumentation
            // Redux Toolkit
            //We Have to mutate the state
            // redux Toolkit usesimmer behind the seen
            state.items.push(action.payload);    // right now i just directly modifying the state,returning was mandatory
        },
        removeItem:(state)=>{    // addItem:  removeItem: clearCart: are "reducer function" not "reducers"
            state.items.pop();
        },
        clearCart:(state,action)=>{
        //    console.log(state);  // [pizza]
        //    console.log(current(state));
        //    state=[];
        //    console.log(state);    // []
            // state.items.length=0;    //  originalState=[] 
            // RTK- either Mutate the existing state or return a new State

            return {items:[]}  // this new object will be replaced inside originalState=[]
        },
    },
});


export const {addItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;