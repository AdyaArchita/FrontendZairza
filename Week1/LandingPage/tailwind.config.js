module.exports= {
   content: ["./landing.html", "./script.js"], 
   safelist:['animate-pop'],
   darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        pop: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        pop: 'pop 0.3s ease-in-out',
      },
    },
  }, 
  plugins: []
};


