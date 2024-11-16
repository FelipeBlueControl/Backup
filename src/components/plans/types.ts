export interface Plan {
  id: string;
  name: string;
  price: number;
  benefits: string[];
  breakeven: number;
  monthlySavings: number;
  isPopular?: boolean;
}