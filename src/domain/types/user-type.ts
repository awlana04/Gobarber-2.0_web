export type UserType<N = string, E = string, P = string, L = string> = {
  name: N;
  email: E;
  password: P;
  location: L;
  avatar?: string;
};
