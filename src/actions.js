export function setUser({uid, email}) {
  return { type: 'SET_USER', {uid, email} };
}
