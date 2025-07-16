// FetchAPIData's implementation adapter is used in the API Infra Layer to communicate with the backend
// it isn't used within the API Infra Layer in suppose to flexible the maintainability of our code in case we need to switch the technology
// methods and headers are important to ensure the response back to the user, returning even the errors properly explained
// it does the API's backend and fake database switch by the checking of the URI environment variable

import FetchAPIDataModel from '@/adapters/models/fetch-api-data-model';

import HTTPResponse from '@/infra/types/http-response';

export default class FetchAPIData implements FetchAPIDataModel {
  public async fetch(
    path: string,
    fetchOptions?: {
      jsonContent?: boolean;
      method?: string | undefined;
      headers?: any;
      data?: any;
    }
  ): Promise<HTTPResponse> {
    return await fetch(
      `${process.env.NEXT_PUBLIC_ENV === 'dev' ? process.env.NEXT_PUBLIC_BACKEND_URI : process.env.NEXT_PUBLIC_FAKE_BACKEND_URI + path}`,
      {
        method: fetchOptions?.method,
        headers: fetchOptions?.jsonContent
          ? { 'Content-Type': 'application/json', ...fetchOptions?.headers }
          : fetchOptions?.headers,
        body: fetchOptions?.jsonContent
          ? JSON.stringify(fetchOptions?.data)
          : fetchOptions?.data,
      }
    );
  }
}
