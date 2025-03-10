import Email from '../entities/modules/email';
import Name from '../entities/modules/name';
import Password from '../entities/modules/password';
import Prop from '../entities/modules/prop';

export type UserType<N = string, E = string, P = string, L = string> = {
  name: N;
  email: E;
  password: P;
  location: L;
  avatar?: string;
};
