/**
 * Converti un nombre en montant USD
 * @param balance Nombre au format 0.0
 * @returns 
 */
export const ConvertNumberToUsd = (balance: number): string => {
  return balance.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
