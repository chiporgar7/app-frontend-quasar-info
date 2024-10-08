export interface UserInterface {
  login(email: string, password: string): Promise<any>;
  register(name: string, email: string, password: string): Promise<any>;
  logout(): Promise<any>;
  getCurrentUser(): Promise<any>;

}
