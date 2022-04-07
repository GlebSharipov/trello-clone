import { RootState } from "store/store";

export const selectCardById = (cardId: string) => {
  return (state: RootState) =>
    state.CardReducer.find((card) => card.id === cardId);
};
