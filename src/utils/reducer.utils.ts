export const createAction = <T>(type, payload) => <T> => ({ type, payload });
