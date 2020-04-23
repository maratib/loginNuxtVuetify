export const SUCESS = 1;
export const DANGER = 2;

export const vAlert = function (msg, store, type = SUCESS) {
  let message = { text: msg };
  if (type === 2) {
    message.color = 'red';
  }

  store.dispatch("snackbar/create", message);
};
