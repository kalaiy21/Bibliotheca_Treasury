module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'smphone':{'min':'300px','max':'500px'},
      'phone':{'min':'500px','max':'640px'},
      'tablet': {'min': '640px', 'max': '814px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'minilap': {'min': '815px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'laptop': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'desktop': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      'standard': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      'Inconsolata': ['Inconsolata', 'monospace'],
      'EB_Garamond': ['"EB Garamond"', 'serif']
    }
  },
  plugins: [],
}



  
  
  
