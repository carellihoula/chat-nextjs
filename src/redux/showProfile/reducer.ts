import { SHOW_PROFILE } from "./action";

// Définir l'Interface pour l'État
interface SHOWPROFILE {
  showProfile: boolean;
}

// Définir l'Interface pour l'Action
interface Action {
  type: string;
  payload: boolean;
}

// Initial State
const initialState: SHOWPROFILE = {
  showProfile: false,
};

// Créer le Reducer
const reducerShowProfile = (
  state = initialState,
  action: Action
): SHOWPROFILE => {
  switch (action.type) {
    case SHOW_PROFILE:
      return {
        ...state,
        showProfile: action.payload,
      };
    default:
      return state;
  }
};

export default reducerShowProfile;
