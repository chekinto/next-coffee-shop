export const formatPrice = (value: number) => {
  return new Intl.NumberFormat('en-gb', { style: 'currency', currency: 'GBP' }).format(value)
}