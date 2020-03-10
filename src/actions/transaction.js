
export const initTransaction = data => ({
  type: INIT_TRANSACTION,
  data
});

export const cancelTransaction = data => ({
  type: CANCEL_TRANSACTION,
  data
});
