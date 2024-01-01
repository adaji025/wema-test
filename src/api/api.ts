const api: string = import.meta.env.VITE_APP_API!;

export const APIS = {
  USER: {
    LOGIN: `${api}/user/login`,
    REGISTER: `${api}/user`,
    },
    VERIFIERS: {
        GET: `${api}/Verifiers`
    }
};
