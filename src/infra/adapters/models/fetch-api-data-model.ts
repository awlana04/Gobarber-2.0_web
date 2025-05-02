import HTTPResponse from '@/infra/types/http-response';

export default interface FetchAPIDataModel {
  fetch(
    path: string,
    fetchOptions?: {
      method?: 'POST' | 'GET' | 'DELETE' | 'UPDATE' | 'PATCH';
      headers?: any;
      data: any;
    }
  ): Promise<HTTPResponse>;
}
