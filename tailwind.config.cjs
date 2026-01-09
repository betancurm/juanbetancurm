module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
				// Nombre de tu color: 'brand' (o 'primary' si prefieres)
				brand: {
					50: '#f4f6fb',
					100: '#e7ebf6',
					200: '#cedaec',
					300: '#a6bce0',
					400: '#7696cd',
					500: '#5276b9', // Azul medio
					600: '#3d5ca0',
					700: '#324a83',
					800: '#2d3f6a',
					900: '#181b32', // <--- TU COLOR EXACTO DE MARCA
					950: '#0e101f', // Un tono aún más oscuro para contrastes
				},
			},
    },
  },
  plugins: [],
}