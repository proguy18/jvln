module.exports = {
    mode: 'jit',
    purge: [
      './index.html', 
      './src/**/*.{vue,js,ts,jsx,tsx}',
      './components/**/*.vue',
      './layouts/**/*.vue',
      './pages/**/*.vue',
  ],
  
    darkMode: false,
    theme: {
      extend: {
        colors: {
          primary: '#FFFFFF',
          onPrimary: 'rgba(100, 100, 100, 0.5)',
          background: '#0F1322',
          secondary: '#10132A',
          tertiary: '#11142D',
          error: '#FF0000'
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'rounded': ['M PLUS Rounded 1c', 'sans-serif'],
      }
    },
    variants: {},
    plugins: [],
  }
  