  var Currency = {
      rates: {
          "USD": 1.0,
          "EUR": 1.12054,
          "GBP": 1.21671,
          "CAD": 0.752795,
          "ARS": 0.0220897,
          "AUD": 0.676097,
          "BRL": 0.252515,
          "CLP": 0.001399,
          "CNY": 0.142115,
          "CYP": 0.397899,
          "CZK": 0.0435284,
          "DKK": 0.150115,
          "EEK": 0.0706676,
          "HKD": 0.127585,
          "HUF": 0.00344956,
          "ISK": 0.00820829,
          "INR": 0.01409,
          "JMD": 0.00742223,
          "JPY": 0.00940675,
          "LVL": 1.57329,
          "LTL": 0.320236,
          "MTL": 0.293496,
          "MXN": 0.0509995,
          "NZD": 0.653055,
          "NOK": 0.112337,
          "PLN": 0.259535,
          "SGD": 0.724081,
          "SKK": 21.5517,
          "SIT": 175.439,
          "ZAR": 0.0669515,
          "KRW": 0.00082462,
          "SEK": 0.104445,
          "CHF": 1.02476,
          "TWD": 0.0318147,
          "UYU": 0.0287607,
          "MYR": 0.238572,
          "BSD": 1.0,
          "CRC": 0.0017509,
          "RON": 0.236937,
          "PHP": 0.0192035,
          "AED": 0.272294,
          "VEB": 0.000100125,
          "IDR": 7.01008e-05,
          "TRY": 0.18084,
          "THB": 0.0325377,
          "TTD": 0.148071,
          "ILS": 0.286895,
          "SYP": 0.00194175,
          "XCD": 0.370018,
          "COP": 0.000291696,
          "RUB": 0.015317,
          "HRK": 0.151731,
          "KZT": 0.00258127,
          "TZS": 0.000434788,
          "XPT": 847.79,
          "SAR": 0.266667,
          "NIO": 0.03,
          "LAK": 0.000115142,
          "OMR": 2.60078,
          "AMD": 0.00209992,
          "CDF": 0.000604789,
          "KPW": 0.00111102,
          "SPL": 6.0,
          "KES": 0.00967686,
          "ZWD": 0.00276319,
          "KHR": 0.000245828,
          "MVR": 0.0649601,
          "GTQ": 0.13032,
          "BZD": 0.496662,
          "BYR": 4.87188e-05,
          "LYD": 0.712048,
          "DZD": 0.00837062,
          "BIF": 0.000542996,
          "GIP": 1.21671,
          "BOB": 0.144977,
          "XOF": 0.00170826,
          "STD": 4.54997e-05,
          "NGN": 0.00275786,
          "PGK": 0.2945,
          "ERN": 0.0666667,
          "MWK": 0.00137034,
          "CUP": 0.0377358,
          "GMD": 0.0199912,
          "CVE": 0.0101618,
          "BTN": 0.01409,
          "XAF": 0.00170826,
          "UGX": 0.000270877,
          "MAD": 0.104575,
          "MNT": 0.00037508,
          "LSL": 0.0669515,
          "XAG": 16.4799,
          "TOP": 0.436111,
          "SHP": 1.21671,
          "RSD": 0.00952671,
          "HTG": 0.0105728,
          "MGA": 0.000273288,
          "MZN": 0.016323,
          "FKP": 1.21671,
          "BWP": 0.0917008,
          "HNL": 0.0408887,
          "PYG": 0.000166275,
          "JEP": 1.21671,
          "EGP": 0.0604076,
          "LBP": 0.00066335,
          "ANG": 0.558669,
          "WST": 0.377402,
          "TVD": 0.676097,
          "GYD": 0.00478267,
          "GGP": 1.21671,
          "NPR": 0.00876517,
          "KMF": 0.00227768,
          "IRR": 2.37172e-05,
          "XPD": 1436.93,
          "SRD": 0.134095,
          "TMM": 5.69801e-05,
          "SZL": 0.0669515,
          "MOP": 0.123869,
          "BMD": 1.0,
          "XPF": 0.00939015,
          "ETB": 0.0345913,
          "JOD": 1.41044,
          "MDL": 0.0561392,
          "MRO": 0.00271758,
          "YER": 0.0039953,
          "BAM": 0.572925,
          "AWG": 0.558659,
          "PEN": 0.296252,
          "VEF": 0.100125,
          "SLL": 0.000108121,
          "KYD": 1.21951,
          "AOA": 0.00282038,
          "TND": 0.348664,
          "TJS": 0.105936,
          "SCR": 0.0732748,
          "LKR": 0.00563287,
          "DJF": 0.00562529,
          "GNF": 0.000108904,
          "VUV": 0.00851767,
          "SDG": 0.0221696,
          "IMP": 1.21671,
          "GEL": 0.341917,
          "FJD": 0.4604,
          "DOP": 0.0195828,
          "XDR": 1.37637,
          "MUR": 0.0275782,
          "MMK": 0.000662877,
          "LRD": 0.00492252,
          "BBD": 0.5,
          "ZMK": 7.75074e-05,
          "XAU": 1476.93,
          "VND": 4.29566e-05,
          "UAH": 0.0391121,
          "TMT": 0.2849,
          "IQD": 0.000843273,
          "BGN": 0.572925,
          "KGS": 0.0143219,
          "RWF": 0.00109378,
          "BHD": 2.65957,
          "UZS": 0.000114875,
          "PKR": 0.00634322,
          "MKD": 0.0181433,
          "AFN": 0.012851,
          "NAD": 0.0669515,
          "BDT": 0.0118408,
          "AZN": 0.589446,
          "SOS": 0.00173553,
          "QAR": 0.274725,
          "PAB": 1.0,
          "CUC": 1.0,
          "SVC": 0.114286,
          "SBD": 0.123242,
          "ALL": 0.00928089,
          "BND": 0.724081,
          "KWD": 3.28804,
          "GHS": 0.185229,
          "ZMW": 0.0775074,
          "XBT": 11624.1,
          "NTD": 0.0337206,
          "BYN": 0.487188,
          "CNH": 0.141772,
          "MRU": 0.0271758,
          "STN": 0.0454997,
          "VES": 8.31299e-05,
          "MXV": 0.322529
      },
      convert: function (amount, from, to) {
          return (amount * this.rates[from]) / this.rates[to];
      }
  };