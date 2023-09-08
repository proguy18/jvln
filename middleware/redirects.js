// middleware/redirects.js

export default function ({ route, redirect }) {
  if (route.path === '/products/baberoni') {
    return redirect(301, '/products/baberino');
  }
}
