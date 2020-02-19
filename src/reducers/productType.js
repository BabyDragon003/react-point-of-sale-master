import update from "immutability-helper";
import { LOAD_PRODUCT_TYPE } from "../types";

export default function productType(state = {}, action = {}) {
  switch (action.type) {
          $set: action.data.paginationInfo
        },
        meta: {
          $set: { isFiltered: action.data.isFiltered }
        }
      });
    default:
      return state;
  }
}
