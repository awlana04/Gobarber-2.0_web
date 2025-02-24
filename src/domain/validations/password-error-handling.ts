export default class PasswordErrorHandling {
  public async length(password: string) {
    if (
      (password.trim().length < 8 && password.length > 0) ||
      password.trim().length > 128
    ) {
      return false;
    }

    return true;
  }

  public async exists(password: string) {
    if (!password) {
      return false;
    }

    return true;
  }
}
