# 🎯 Frontend Take-Home Test — Session Finder + Schedule

Made by Lara Berenguer

## 🚀 How to Run the Project

1. **Clone the repository**
   ```bash
   git clone https://github.com/LaraBerenguer/junior-frontend-technical-test.git
   cd junior-frontend-technical-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Run tests**
   ```bash
   npm run test
   ```

The application will be available at `http://localhost:5173`.

## 📸 Screenshots

### Search Page
![Search Page](public/img/search-page.jpg)

### My Schedule
![My Schedule](public/img/myshedule-page.jpg)

### Registration Form
![Registration Form](public/img/register-page.jpg)

### Searchbar
![Searchbar](public/img/searchbar.jpg)

## 🎨 Features Implemented

- ✅ **Search Sessions**: Filter by title, track, or speaker with real-time search.
- ✅ **Schedule Management**: Add/remove sessions with duplicate prevention.
- ✅ **Registration Form**: Complete validation and API integration.
- ✅ **Shared State**: Schedule persists across pages.
- ✅ **Loading States**: Feedback during API calls.

## ⏰ Time management

### What I’d improve with more time

- I would have liked to explore deeper how to make the context work for Search + My Schedule and also for the navbar (for the counter). In the end, I decided to wrap App with SheduleContext for ease and time, as it is a small project.
- I used a dynamic button, but I would have liked to make it a reusable component.
- Testing with React Testing Library and DOM, since I used vitest for testing only the logic.
- Sorting, I didn't have time.
- Mobile design, it is responsive, but I would have loved to make a mobile navbar and mobile.
- Accesibility! I love accesible code, but I didn't have time.

### The 3-Hour Mark (Last 4 commits)
This are the feats I added after the 3h time limit:
1. **Registration Form**: Fully implemented form validation and logic.
2. **Testing Implementation aka my personal touch**: Added unit test for `RegistrationForm` component.
3. **UI Polish**: Enhanced styling, responsiveness, and user experience details.


## 📚 Libraries Used

- **React Router DOM** (`^7.9.6`): For client-side routing between pages - essential for multi-page SPA navigation.
- **Tailwind CSS** (`^4.1.13`): For styling - chose for its utility-first approach and rapid development capabilities.
- **Vitest** (`^4.0.14`): For testing - integrates seamlessly with Vite build tool and provides fast test execution.