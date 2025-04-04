export default class EmailErrorHandling {
  public exists(email: string) {
    if (!email) {
      return false;
    }

    return true;
  }

  public length(email: string) {
    if (email.length > 320) {
      return false;
    }

    return true;
  }

  public isValid(email: string) {
    const emailRegex =
      /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

    if (!emailRegex.test(email)) {
      return false;
    }

    const [local, domain] = email.split('@');

    if (local.length > 64 || local.length === 0) {
      return false;
    }

    if (domain.length > 255 || domain.length === 0) {
      return false;
    }

    const domainParts = domain.split('.');

    if (
      domainParts.some(function (part) {
        return part.length > 63;
      })
    ) {
      return false;
    }

    return true;
  }
}
