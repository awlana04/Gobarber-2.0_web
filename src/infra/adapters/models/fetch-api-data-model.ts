export default interface FetchAPIDataModel {
  fetch(
    path: string,
    fetchOptions?: {
      method: string;
      headers: any;
      data: any;
    }
  ): Promise<Response>;
}
