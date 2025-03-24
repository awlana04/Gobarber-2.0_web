export default interface TransformMailAdapterModel {
  transformMailToHtml(component: React.ReactElement): Promise<string>;
  transformMailToText(component: React.ReactElement): Promise<string>;
}
