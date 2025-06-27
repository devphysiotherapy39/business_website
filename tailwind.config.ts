
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#003366',
					50: '#e6f2ff',
					100: '#cce5ff',
					200: '#99ccff',
					300: '#66b2ff',
					400: '#3399ff',
					500: '#0080ff',
					600: '#003366',
					700: '#002a55',
					800: '#002144',
					900: '#001833',
					foreground: '#ffffff'
				},
				secondary: {
					DEFAULT: '#FDCB58',
					50: '#fffbf2',
					100: '#fff7e6',
					200: '#ffecb3',
					300: '#ffe080',
					400: '#ffd54d',
					500: '#FDCB58',
					600: '#ffb300',
					700: '#e69900',
					800: '#cc8800',
					900: '#b37700',
					foreground: '#003366'
				},
				accent: {
					DEFAULT: '#FF3333',
					50: '#ffebeb',
					100: '#ffd6d6',
					200: '#ffb3b3',
					300: '#ff8080',
					400: '#ff4d4d',
					500: '#FF3333',
					600: '#e60000',
					700: '#cc0000',
					800: '#b30000',
					900: '#990000',
					foreground: '#ffffff'
				},
				muted: {
					DEFAULT: '#f8fafc',
					foreground: '#64748b'
				},
				destructive: {
					DEFAULT: '#ef4444',
					foreground: '#ffffff'
				},
				popover: {
					DEFAULT: '#ffffff',
					foreground: '#0f172a'
				},
				card: {
					DEFAULT: '#ffffff',
					foreground: '#0f172a'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(40px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 5px rgba(0, 51, 102, 0.5)'
					},
					'50%': {
						boxShadow: '0 0 20px rgba(0, 51, 102, 0.8), 0 0 30px rgba(0, 51, 102, 0.6)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'slide-in-right': 'slide-in-right 0.7s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, #003366 0%, #0066cc 100%)',
				'gradient-secondary': 'linear-gradient(135deg, #FDCB58 0%, #ffd700 100%)',
				'gradient-accent': 'linear-gradient(135deg, #FF3333 0%, #ff6666 100%)',
				'medical-pattern': 'linear-gradient(45deg, transparent 48%, rgba(0,51,102,0.05) 49%, rgba(0,51,102,0.05) 51%, transparent 52%)',
			},
			boxShadow: {
				'premium': '0 10px 40px -10px rgba(0, 51, 102, 0.3)',
				'soft': '0 4px 20px -5px rgba(0, 0, 0, 0.1)',
				'glow': '0 0 20px rgba(0, 51, 102, 0.3)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
