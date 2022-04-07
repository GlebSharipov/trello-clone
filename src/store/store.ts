import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";

import { CardReducer } from "./ducks/card";
import { ColumnReducer } from "./ducks/column";
import { CommentReducer } from "./ducks/comment";
import { UserReducer } from "./ducks/user";

const rootReducer = combineReducers({
  UserReducer,
  CardReducer,
  CommentReducer,
  ColumnReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
