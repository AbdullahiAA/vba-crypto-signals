export interface ISignalGroup {
  name: string;
  avatar: string;
  groupType: string;
  minAllocation: number;
  maxAllocation: number;
  subscriptionType: string;
  revenue: {
    month: number;
  };
  totalMembers: number;
  connectionRequest: number;
  activeEmails: string[];
}
