export default async function ({ $auth, redirect, store }) {
  let user = $auth.user;
  if (user) {
    store.dispatch('snackbar/create', { color: 'error', text: "You are already logged in" });
    redirect('/');
  } else {

  }
}
