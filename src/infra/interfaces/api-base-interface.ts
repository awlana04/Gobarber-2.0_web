export default interface APIBaseInterface {
  go(data?: any): Promise<any>;
  fake(data?: any): Promise<any>;
}
