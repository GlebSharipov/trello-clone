import { RootState } from "store/store";

export const selectCardById = (cardId: string) => {
  return (state: RootState) => state.cards.find((card) => card.id === cardId);
};
