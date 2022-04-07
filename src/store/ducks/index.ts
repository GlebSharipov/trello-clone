import { selectors as cardSelectors } from "./card";
import { selectors as columnSelectors } from "./column";

export { default as user } from "./user/userSlice";
export { default as card } from "./card/cardSlice";
export { default as column } from "./column/columnSlice";
export { default as comment } from "./comment/commentSlice";

export const selectors = {
  card: cardSelectors,
  column: columnSelectors,
};
