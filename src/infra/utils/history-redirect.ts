export default function historyRedirect(path: string) {
  window.history.pushState(
    null,
    '',
    `${process.env.NEXT_PUBLIC_FRONTEND_URI + path}`
  );
  window.history.go();
}
