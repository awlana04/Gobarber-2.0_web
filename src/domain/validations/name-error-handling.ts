export default class NameErrorHandling {
  public async exists(name: string) {
    if (!name) {
      return false;
    }

    return true;
  }

  public async length(name: string) {
    if (
      (name.trim().length < 3 && name.length > 0) ||
      name.trim().length > 128
    ) {
      return false;
    }

    return true;
  }
}
