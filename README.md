# Random Name Picker

An interactive web application for randomly selecting names from a list with engaging animations and visual effects.

## Features

### 1. Name Management
- **Individual Name Entry**: Add names one by one through the input field
- **Bulk Import**: Upload multiple names via CSV file
- **Template Download**: Get a CSV template for bulk name imports
- **Duplicate Prevention**: Automatically prevents duplicate name entries
- **Dynamic Display**: Names are displayed as interactive cards

### 2. Selection Process
- **Interactive Animation**: Names are highlighted sequentially before each elimination
- **Progressive Elimination**: Names are eliminated one by one
- **Visual Feedback**: 
  - Highlighted cards glow with enhanced visibility
  - Eliminated names are removed with smooth animations
  - Winner is highlighted with special effects

### 3. User Interface
- **Responsive Design**: Works seamlessly on all screen sizes
- **Adaptive Layout**: 
  - Compact mode for large lists (>12 names)
  - Standard mode for smaller lists
- **Auto-scrolling**: Automatically follows highlighted names
- **Glass-morphism Design**: Modern, translucent card design
- **Dark Theme**: Eye-friendly dark mode interface

### 4. Visual Effects
- **Smooth Animations**: 
  - Card transitions using Framer Motion
  - Fade in/out effects for name cards
- **Winner Celebration**: Confetti animation for the final winner
- **Glowing Effects**: 
  - Highlighted cards feature a bright glow effect
  - Winner card has a special success color scheme

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies Used

- [Next.js 14](https://nextjs.org/)
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Confetti

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a custom font for better typography.

## Usage

1. **Adding Names**:
   - Type a name and press Enter or click "Add Name"
   - Or click "Upload CSV" to import multiple names
   - Download the template if needed

2. **Starting the Selection**:
   - Click "Pick a Person" when you have at least 2 names
   - Watch as names are highlighted and eliminated
   - The final name will be celebrated as the winner

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
