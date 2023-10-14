export type StockHeaderTicker =
  | "DJI.INDX"
  | "SPY"
  | "NDX.INDX"
  | "RUT.INDX"
  | "TECDAX.INDX"
  | "GDAXI.INDX"
  | "SDAXI.INDX"
  | "SX5E.INDX"
  | "N225.INDX"
  | "HSI.INDX";

export type Currency = "USD" | "EUR" | "JPY" | "HKD";

export interface StockHeaderAPIResponse {
  data: {
    open: number;
    close: number;
    symbol: StockHeaderTicker;
  }[];
}
