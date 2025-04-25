import { render } from '@react-email/render';

import TransformMailAdapterModel from '@/adapters/models/transform-mail-adapter-model';

export default class TransformMailAdapter implements TransformMailAdapterModel {
  public async transformMailToHtml(
    component: React.ReactElement
  ): Promise<string> {
    const html = await render(component, { pretty: true });

    return html;
  }

  public async transformMailToText(
    component: React.ReactElement
  ): Promise<string> {
    const html = await render(component, { plainText: true });

    return html;
  }
}
