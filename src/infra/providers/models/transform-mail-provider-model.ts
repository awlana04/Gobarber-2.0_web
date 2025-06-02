export default interface TransformMailProviderModel {
  transformMailToText(HTMLTemplate: string): string;
  transformHTMLTemplate(path: string): Promise<string>;
  transformImageAttachment(path: string): Promise<Buffer<ArrayBufferLike>>;
}
