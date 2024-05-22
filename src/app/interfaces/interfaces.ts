export interface CurrentPrice {
  time: Time;
  disclaimer: string;
  chartName: string;
  bpi: Bpi;
}

interface Bpi {
  USD: CurrencyDetails;
  GBP: CurrencyDetails;
  EUR: CurrencyDetails;
}

interface CurrencyDetails {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}

interface Time {
  updated: string;
  updatedISO: string;
  updateduk: string;
}

export interface NestedDataProps {
  type: string;
  children?: NestedDataProps[];
  [x: string]: string | number | NestedDataProps[] | undefined;
}
