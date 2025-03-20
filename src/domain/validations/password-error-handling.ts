export default class PasswordErrorHandling {
  public length(password: string) {
    if (
      (password.trim().length < 8 && password.trim().length > 0) ||
      password.trim().length > 128
    ) {
      return false;
    }

    return true;
  }

  public exists(password: string) {
    if (!password) {
      return false;
    }

    return true;
  }
}
