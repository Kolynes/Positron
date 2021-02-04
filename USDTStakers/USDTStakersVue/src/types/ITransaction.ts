interface ITransaction {
    destination: address;
    valueTRX: number;
    valueUSDT: number;
    executed: boolean;
    data: string;
    description: string;
    id: number;
}