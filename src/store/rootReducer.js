import { combineReducers } from "redux";

import projects from "store/projects/reducer";
import experiences from "store/experiences/reducer";
import instagram from "store/instagram/reducer";

const reducer = combineReducers({
  projects,
  experiences,
  instagram
});

export default reducer;
