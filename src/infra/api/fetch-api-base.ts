import IFetchAPIData from '@/infra/interfaces/i-form-backend-api';

export default class FetchAPIBase implements IFetchAPIData {
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
