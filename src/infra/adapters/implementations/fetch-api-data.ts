import FetchAPIDataModel from '@/adapters/models/fetch-api-data-model';

export default class FetchAPIData implements FetchAPIDataModel {
  public async fetch(
    path: string,
    fetchOptions?: {
      method: string;
      headers: any;
      data: any;
    }
  ): Promise<Response> {
    return await fetch(
      `${
        process.env.NEXT_PUBLIC_ENV === 'test'
          ? process.env.NEXT_PUBLIC_FRONTEND_URI
          : process.env.NEXT_PUBLIC_BACKEND_URI
      }${path}`,
      {
        method: fetchOptions?.method,
        headers: fetchOptions?.headers,
        body: JSON.stringify(fetchOptions?.data),
      }
    );
  }
}
