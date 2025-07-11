export default function historyRedirect(path: string): undefined {
  window.history.replaceState(
    null,
    '',
    `${process.env.NEXT_PUBLIC_FRONTEND_URI + path}`
  );
  window.history.go();
}
