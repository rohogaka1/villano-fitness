# Victoria Villano Fitness

A modern fitness website built with Next.js, featuring private session booking, Zumba classes, and premium content access through Patreon integration.

## Features

- 🏋️‍♀️ Private Training Session Booking
- 💃 Zumba Class Schedule and Registration
- 🔒 Members-only Content (Patreon Integration)
- 📱 Responsive Design
- 🎨 Modern UI with Tailwind CSS

## Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd vv-fitness
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add the following environment variables:
```env
# Patreon API credentials (required for members area)
PATREON_CLIENT_ID=your_client_id
PATREON_CLIENT_SECRET=your_client_secret

# Email service credentials (required for booking notifications)
EMAIL_SERVER=your_smtp_server
EMAIL_FROM=your_email_address
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   ├── (main)/            # Main pages
│   ├── book/              # Booking page
│   ├── members/           # Members area
│   ├── zumba/            # Zumba page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── common/           # Shared components
│   ├── layout/           # Layout components
│   └── sections/         # Page sections
└── lib/                  # Utility functions and API
```

## Deployment

The website can be deployed to any platform that supports Next.js applications, such as Vercel or Netlify.

1. Create an account on your preferred hosting platform
2. Connect your repository
3. Configure environment variables
4. Deploy!

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Victoria Villano - [Contact Page](https://victoriavillano.com/contact)

Project Link: [https://github.com/yourusername/vv-fitness](https://github.com/yourusername/vv-fitness)
# villano-fitness
