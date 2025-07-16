// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

function rem2px(input, fontSize = 16) {
    if (input == null) {
        return input
    }
    switch (typeof input) {
        case 'object':
            if (Array.isArray(input)) {
                return input.map((val) => rem2px(val, fontSize))
            }
            // eslint-disable-next-line no-case-declarations
            const ret = {}
            for (const key in input) {
                ret[key] = rem2px(input[key], fontSize)
            }
            return ret
        case 'string':
            return input.replace(/(\d*\.?\d+)rem$/, (_, val) => `${parseFloat(val) * fontSize}px`)
        case 'function':
            return eval(input.toString().replace(/(\d*\.?\d+)rem/g, (_, val) => `${parseFloat(val) * fontSize}px`))
        default:
            return input
    }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        ...rem2px(defaultTheme),
        extend: {
            colors: {
                brand: {
                    dark: '#18443C',
                    light: '#F5F9F8',
                    accent: '#8BFF00',
                    'accent-dark': '#6BCC00',
                    'dark-hover': '#0F2F28',
                    'light-text': '#18443C',
                    'dark-text': '#FFFFFF'
                }
            },
            keyframes: {
                'fade-in': {
                    '0%': {
                        opacity: '0'
                    },
                    '100%': {
                        opacity: '1'
                    }
                }
            },
            animation: {
                'fade-in': 'fade-in 0.3s ease-out'
            },
            backgroundColor: {
                'brand-dark': '#18443C',
                'brand-light': '#F5F9F8',
                'brand-accent': '#8BFF00'
            },
            textColor: {
                'brand-dark': '#18443C',
                'brand-light': '#FFFFFF',
                'brand-accent': '#8BFF00'
            }
        }
    },
    plugins: [
      require('@tailwindcss/typography')
    ]
}
