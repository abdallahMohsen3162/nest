export class User {
  id: number;
  name: string;
  email: string;
  bankAccount: {
    BankNumber: string;
    balance: number;
  };
}
