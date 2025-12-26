import { useEffect, useState, useRef } from "react"
import { cn } from "../lib/utils"
import { Menu, X } from "lucide-react";
const navItems =[
    {name:"Home", href:"#hero" },
    {name:"About", href:"#about" },
    {name:"Education", href:"#education" },
    {name:"Skills", href:"#skills" },
    {name:"Project", href:"#projects" },
    {name:"Contact", href:"#contact" },
]


export const NavBar=()=>{
    const[isScrolled, setIsScrolled] =useState(false);
    const[isMenuOpen, setIsMenuOpen] =useState(false);
    const menuRef = useRef(null);

    useEffect(()=>{
      const handleScroll=()=>{
        setIsScrolled(window.scrollY > 10)
      };
      
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && 
            !event.target.closest('button[aria-label*="Menu"]')) {
          setIsMenuOpen(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      document.addEventListener('mousedown', handleClickOutside);
      
      // Prevent body scroll when mobile menu is open
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }

      return () => {
        window.removeEventListener("scroll", handleScroll);
        document.removeEventListener('mousedown', handleClickOutside);
        document.body.style.overflow = 'auto';
      };
    },[isMenuOpen]);
    return (
       <nav className={cn("fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 md:py-5 bg-background/80 backdrop-blur-md shadow-sm" : "py-2 md:py-3"
        )} ref={menuRef}>
          <div className="container flex items-center justify-between">
            <a href="#hero" className="text-xl font-bold text-primary flex items-center">
                <span className="relative z-10">
                    <span className="text-glow text-foreground">Darshan G R </span>
                    portfolio
                </span>
            </a>
            {/* desktop nav */}
            <div className="hidden md:flex space-x-8">
                {navItems.map((item, key)=>(
                 <a key={key} href={item.href} 
                 className="text-foreground/80 hover:text-primary transition-colors duration-300">
                    {item.name}</a>
                ))}
            </div>
            {/* mobile nav */}
            <button onClick={()=> setIsMenuOpen((prev)=>!prev)}
                className="md:hidden p-2 text-foreground z-50"
                aria-label={isMenuOpen? "Close Menu" :"Open Menu"}>
                {isMenuOpen? <X size={24}/>:<Menu size={24}/>}</button>
               
            <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40",
                 "flex flex-col items-center justify-center transition-all duration-300 ease-in-out transform md:hidden", 
                 "pt-20 pb-10 px-4 overflow-y-auto",
              isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
            )}>
             <div className="flex flex-col items-center space-y-6 w-full max-w-md">
                {navItems.map((item, key)=>( 
                 <a 
                    key={key} 
                    href={item.href} 
                    className="w-full py-3 px-6 text-center text-foreground/90 hover:text-primary transition-colors duration-300 text-lg font-medium"
                    onClick={()=>setIsMenuOpen(false)}
                 >
                    {item.name}
                 </a>
                ))}
            </div>
            </div>
          </div>  
         </nav >
   );
};