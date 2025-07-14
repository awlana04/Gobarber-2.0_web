import HTTPResponse from '@/infra/types/http-response';

export default interface FetchAPIDataModel {
  fetch(
    path: string,
    fetchOptions?: {
      jsonContent?: boolean;
      method?: string;
      headers?: any;
      data?: any;
    }
  ): Promise<HTTPResponse>;
}
