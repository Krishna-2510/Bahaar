import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const configureStore = () => {
  const store = createStore(rootReducer);
  console.log("Store = ", store)
  return store;
};

const store = configureStore();

export default store;