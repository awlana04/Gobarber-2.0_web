export default class DescriptionErrorHandling {
  public async exists(description: string): Promise<boolean> {
    if (!description) {
      return false;
    }

    return true;
  }

  public async length(description: string): Promise<boolean> {
    if (
      (description.length < 32 && description.length > 0) ||
      description.length > 512
    ) {
      return false;
    }

    return true;
  }
}
