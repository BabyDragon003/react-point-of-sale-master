import update from "immutability-helper";
import { LOAD_PRODUCT_TYPE } from "../types";

export default function productType(state = {}, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCT_TYPE:
      return update(state, {
        list: {
          $set: action.data.list
        },
