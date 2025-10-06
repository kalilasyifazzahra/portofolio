// "use client";
// import React from "react";
// import {
//   Navbar,
//   MobileNav,
//   Typography,
//   Button,
//   IconButton,
//   Card,
// } from "@material-tailwind/react";

// export default function StickyNavbar() {
//   const [openNav, setOpenNav] = React.useState(false);

//   React.useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpenNav(false)
//     );
//   }, []);

//   const navList = (
//     <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//       <li>
//         <Typography
//           as="a"
//           href="#"
//           variant="small"
//           color="pink"
//           className="p-1 font-normal flex items-center"
//         >
//           Pages
//         </Typography>
//       </li>
//       <li>
//         <Typography
//           as="a"
//           href="#"
//           variant="small"
//           color="pink"
//           className="p-1 font-normal flex items-center"
//         >
//           Account
//         </Typography>
//       </li>
//       <li>
//         <Typography
//           as="a"
//           href="#"
//           variant="small"
//           color="pink"
//           className="p-1 font-normal flex items-center"
//         >
//           Docs
//         </Typography>
//       </li>
//     </ul>
//   );

//   return (
//     <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
//       <div className="flex items-center justify-between text-blue-gray-900">

//         <Typography
//           as="a"
//           href="#"
//           variant="h6"
//           className="mr-4 cursor-pointer py-1.5"
//         >
//           My Brand
//         </Typography>

//         <div className="hidden lg:block">{navList}</div>

//         <div className="flex items-center gap-x-2">
//           <Button variant="gradient" size="sm" className="hidden lg:inline-block">
//             <span>Sign In</span>
//           </Button>

      
//           <IconButton
//             variant="text"
//             className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//             ripple={false}
//             onClick={() => setOpenNav(!openNav)}
//           >
//             {openNav ? (
//               <span className="text-2xl">✖</span>
//             ) : (
//               <span className="text-2xl">☰</span>
//             )}
//           </IconButton>
//         </div>
//       </div>

      
//       <MobileNav open={openNav}>{navList}</MobileNav>
//     </Navbar>
//   );
// }
