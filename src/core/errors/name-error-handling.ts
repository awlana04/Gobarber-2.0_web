export default function NameErrorHandling(name: string) {
  if (name.length <= 2) {
    return false;
  }

  return true;
}
