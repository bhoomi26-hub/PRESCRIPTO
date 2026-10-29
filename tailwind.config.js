

// /** @type {import('tailwindcss').Config} */
// export default {
//   theme: {
//     extend: {
//       colors: {
       
//         'primary': "#5f6fff", 
//         },
//         gridTemplateColumns:{
//           'auto':'repeat(auto-fill , minmax(200px, 1fr))'
//         }
//     },
//   },
// };
// /** @type {import('tailwindcss').Config} */
// export default {
//   theme: {
//     extend: {
//       colors: {
//         primary: "#5f6fff",
//       },
//       gridTemplateColumns: {
//         auto: "repeat(auto-fill, minmax(200px, 1fr))",
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 ensures Tailwind scans all your files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5f6fff",
      },
      gridTemplateColumns: {
        'auto': "repeat(auto-fill, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
};
