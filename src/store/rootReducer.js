import { combineReducers } from "redux";

import projects from "store/projects/reducer";
import faq from "store/faq/reducer";
import instagram from "store/instagram/reducer";

const reducer = combineReducers({
  projects,
  faq,
  instagram
});

export default reducer;
