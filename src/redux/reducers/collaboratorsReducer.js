import {ADD_COLLABORATOR} from '../types/collaboratorTypes';

const initialState = [
  {
    id: "1",
    name: "Leanne Graham",
    username: "graham",
    email: "leanne@gmail.com",
    phone: "1-770-736-8031"
  },
  {
    id: "2",
    name: "Ervin Howell",
    username: "ervinh",
    email: "ervin@outlook.com",
    phone: "010-692-6593"
  },
];
const collaboratorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLLABORATOR: {
      return state + action.payload;
    }
    
    default: {
      return state;
    }
  }
}

export default collaboratorsReducer;