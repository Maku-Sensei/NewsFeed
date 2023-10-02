import { setPage } from "../Slice/pageSlice";

export const changePage = (toRight, dispatch, page) => {
  if (toRight && page <= 100) {
    dispatch(setPage(page + 1));
  }
  if (!toRight && page > 1) {
    dispatch(setPage(page - 1));
  }
};
