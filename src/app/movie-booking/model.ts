export interface Seat{
    row: string;
    number :number;
    seatNum :string
    type : 'Regular' | 'Premium' | 'VIP';
    price :number;
    booked :boolean;
    selected :boolean;
}