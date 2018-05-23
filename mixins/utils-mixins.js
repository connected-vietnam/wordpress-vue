// @flow

import { format } from 'date-fns'
import numeral from 'numeral'
import ellipsize from 'ellipsize'

export const orientationMap = {
  e: 'Đông',
  w: 'Tây',
  s: 'Nam',
  n: 'Bắc',
  es: 'Đông Nam',
  ws: 'Tây Nam',
  en: 'Đông Bắc',
  wn: 'Tây Bắc',
}

export default {
  methods: {
    truncate: (text: string, limit: number) => {
      if (!limit) return text
      return ellipsize(text, limit, { truncate: true })
    },
    formatCurrency({ currency, value }: { currency: string, value: number }) {
      return `${numeral(value)
        .format('(0.0 a)')
        .replace('m', 'tr')
        .replace('k', 'nghìn')
        .replace('b', 'tỷ')}${currency === 'usd' ? ' usd' : ''}`
    },
    formatDate(date: Date) {
      return format(date, 'DD/MM/YYYY')
    },
    getOrientation(item: string) {
      return orientationMap[item]
    },
  },
}
