// store.ts
import { createStore, Action } from 'redux';

// Definisikan tipe untuk state
interface State {
  counter: number;
  nilai: number;
}

// Initial state
const initialState: State = {
  counter: 0,
  nilai: 0
};

// Definisikan tipe untuk action dengan action 'INCREMENT'
interface IncrementAction extends Action<'INCREMENT'> {}

// Definisikan tipe untuk action 'INCREMENT_NILAI'
interface IncrementNilaiAction extends Action<'INCREMENT_NILAI'> {}

// Union type untuk semua actions yang mungkin
type AppActions = IncrementAction | IncrementNilaiAction;

const reducer = (state: State = initialState, action: AppActions): State => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'INCREMENT_NILAI':
      return { ...state, nilai: state.nilai + 10 };
    default:
      return state;
  }
};

// Buat store
const store = createStore(reducer);

export default store;

// Ekspor tipe untuk digunakan dengan useSelector dan useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
