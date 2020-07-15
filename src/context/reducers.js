import TYPES from "./types";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case TYPES.ADD_SUPPLIER:
      state.supplierList.unshift({
        ...payload,
        id: Math.random(),
      });
      return;

    case TYPES.FETCH_SUPPLIER_SUCCESS:
      state.supplierList = payload;
      state.status = 1;
      return;

    default:
      return;
  }
};

export default reducer;
