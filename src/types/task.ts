export interface Task {
  id: number;
  contractNumber: string;
  name: string;
  status: 'new' | 'done' | 'escalated';
  birthdate: string;
  sex: string;
  address: string;
}
