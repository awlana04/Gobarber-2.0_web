export default interface IFetchAPIData {
  fetch(
    path: string,
    fetchOptions?: {
      method: string;
      headers: any;
      data: any;
    }
  ): Promise<Response>;
}
