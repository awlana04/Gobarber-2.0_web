export default interface IFormBackendAPI {
  AuthenticateFormBackendApi(
    data: any
  ): Promise<{ server: Response; user: any }>;
}
