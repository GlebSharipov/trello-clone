import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";

import { CardReducer } from "./ducks/cards";
import { ColumnReducer } from "./ducks/columns";
import { CommentReducer } from "./ducks/comments";
import { UserReducer } from "./ducks/user";

const rootReducer = combineReducers({
  user: UserReducer,
  cards: CardReducer,
  comments: CommentReducer,
  columns: ColumnReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
