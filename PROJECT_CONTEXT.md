**Project Context: Raffle Web App**

**Objective:**
Develop a web application that allows users to enter multiple unique names, list them, and conduct a raffle where names are displayed as individual cards. The raffle should highlight names one by one in a loop until it stops at a random name, eliminating it from the draw. The process repeats until the last remaining name, which is displayed as the winner with a confetti animation.

**Key Features:**
1. **Name Entry & Validation:**
   - Users can enter multiple names.
   - Duplicate names should be restricted.
   - Display an updated list of entered names.

2. **Raffle Mechanism:**
   - Names should be displayed as individual cards on the screen.
   - When the raffle starts, names should be highlighted sequentially in a loop.
   - A random name should be selected and removed from the pool.
   - The process repeats until the last name remains.

3. **Winner Announcement:**
   - The final name should be displayed as the winner.
   - Confetti animation should play when the winner is revealed.

**Technical Considerations:**
- Frontend: React Next.js (for interactive UI and state management)
- Styling: TailwindCSS for UI design
- Animation: Framer Motion for smooth transitions

**User Flow:**
1. User enters names in a text field and adds them to the list.
2. The names are displayed as cards on the screen.
3. User clicks 'Start Raffle'.
4. Cards are highlighted sequentially in a loop.
5. After a random duration, one card is removed.
6. The process continues until one name remains.
7. The last remaining name is declared as the winner with confetti animation.

This web app will be engaging for events, giveaways, and fun team activities.

