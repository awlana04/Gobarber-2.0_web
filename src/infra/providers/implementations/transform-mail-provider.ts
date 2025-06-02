import TransformMailProviderModel from '../models/transform-mail-provider-model';

import readFileAsync from '@/infra/utils/read-file-async';

export default class TransformMailProvider
  implements TransformMailProviderModel
{
  public async transformHTMLTemplate(path: string): Promise<string> {
    return await readFileAsync(path, 'utf-8');
  }

  public async transformImageAttachment(
    path: string
  ): Promise<Buffer<ArrayBufferLike>> {
    return await readFileAsync(path);
  }

  public transformMailToText(HTMLTemplate: string): string {
    return HTMLTemplate.replace(/<[^>]*>/g, '');
  }
}
