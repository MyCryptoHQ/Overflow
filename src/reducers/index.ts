interface State {
  addr: string[];
}

const initialState = {
  addr: []
};

export const rootReducer = (state: State = initialState, action: any) => {
  return state;
};
