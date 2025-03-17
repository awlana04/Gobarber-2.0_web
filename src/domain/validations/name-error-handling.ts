export default class NameErrorHandling {
  public exists(name: string): boolean {
    if (!name) {
      return false;
    }

    return true;
  }

  public length(name: string): boolean {
    if (
      (name.trim().length < 3 && name.length > 0) ||
      name.trim().length > 128
    ) {
      return false;
    }

    return true;
  }
}
