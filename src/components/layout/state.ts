import { useReducer } from 'react';

export type ViewState = {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
};

type ViewAction = 'SET_LOADING' | 'SET_ERROR' | 'SET_SUCCESS';

export const initialState: ViewState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export function viewReducer(state: ViewState, action: { type: ViewAction }): ViewState {
  switch (action.type) {
    case 'SET_SUCCESS': {
      return { ...initialState, isSuccess: true };
    }

    case 'SET_ERROR': {
      return { ...initialState, isError: true };
    }

    case 'SET_LOADING': {
      return { ...initialState, isLoading: true };
    }

    default:
      return state;
  }
}

export const useViewsState = () => {
  const [viewsState, setViewsState] = useReducer(viewReducer, initialState);
  return { viewsState, setViewsState };
};
