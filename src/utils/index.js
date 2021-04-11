export const formatPrice = (value) => {
  return new Intl.NumberFormat('en-gb', { style: 'currency', currency: 'GBP' }).format(value)
}