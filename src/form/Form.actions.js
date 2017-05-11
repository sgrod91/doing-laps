export function changeState(value, propName) {
  return {type: 'change-state', current: value, thing: propName};
}
