import colors from 'tailwindcss/colors.js'

module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'primary': colors.green,
                'secondary': {
                100: '#E2E2D5',
                200: '#888883',
                }
            },
            fontFamily: {
                'body': ['Nunito']
            }
        }
    }
}