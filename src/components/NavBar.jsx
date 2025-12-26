import { useEffect, useState, useRef } from "react"
import { cn } from "../lib/utils"
import { Menu, X, Home, User, GraduationCap, Code, FolderKanban, Mail } from "lucide-react";

const navItems =[
    {name:"Home", href:"#hero", icon: Home },
    {name:"About", href:"#about", icon: User },
    {name:"Education", href:"#education", icon: GraduationCap },
    {name:"Skills", href:"#skills", icon: Code },
    {name:"Project", href:"#projects", icon: FolderKanban },
    {name:"Contact", href:"#contact", icon: Mail },
]


export const NavBar=()=>{
    const[isScrolled, setIsScrolled] =useState(false);
    const[isMenuOpen, setIsMenuOpen] =useState(false);
    const[activeSection, setActiveSection] =useState("hero");
    const menuRef = useRef(null);
    const savedScrollY = useRef(0);
    const isNavigating = useRef(false);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
      if (isMenuOpen) {
        // Save current scroll position
        savedScrollY.current = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${savedScrollY.current}px`;
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
      } else {
        // Only restore scroll if we're not navigating to a section
        if (!isNavigating.current) {
          // Restore scroll position
          document.body.style.position = '';
          document.body.style.top = '';
          document.body.style.width = '';
          document.body.style.overflow = '';
          window.scrollTo(0, savedScrollY.current);
        } else {
          // Clear the fixed positioning and let the browser handle scroll
          document.body.style.position = '';
          document.body.style.top = '';
          document.body.style.width = '';
          document.body.style.overflow = '';
          isNavigating.current = false;
        }
      }

      return () => {
        if (!isMenuOpen) {
          document.body.style.position = '';
          document.body.style.top = '';
          document.body.style.width = '';
          document.body.style.overflow = '';
        }
      };
    }, [isMenuOpen]);

    useEffect(()=>{
      const handleScroll=()=>{
        if (isMenuOpen) return; // Don't update scroll state when menu is open
        
        setIsScrolled(window.scrollY > 10);
        
        // Determine active section based on scroll position
        const sections = navItems.map(item => item.href.substring(1));
        const scrollPosition = window.scrollY + 200;
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      };
      
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && 
            !event.target.closest('button[aria-label*="Menu"]') &&
            !event.target.closest('button[aria-label*="Close"]')) {
          setIsMenuOpen(false);
        }
      };

      if (!isMenuOpen) {
        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();
      }
      
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('touchstart', handleClickOutside);
      };
    },[isMenuOpen]);
    return (
       <nav className={cn("fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        isScrolled ? "py-3 md:py-5 bg-background/80 backdrop-blur-md shadow-sm" : "py-2 md:py-3"
        )} ref={menuRef}>
          <div className="container flex items-center justify-between relative">
            <a href="#hero" className="text-xl font-bold text-primary flex items-center relative">
                <span className="relative">
                    <span className="text-glow text-foreground">Darshan G R </span>
                </span>
            </a>
            {/* desktop nav */}
            <div className="hidden md:flex space-x-3 lg:space-x-6 relative">
                {navItems.map((item, key)=>{
                    const isActive = activeSection === item.href.substring(1);
                    const Icon = item.icon;
                    return (
                        <a 
                            key={key} 
                            href={item.href} 
                            className={cn(
                                "flex items-center gap-1.5 lg:gap-2 px-2 lg:px-3 py-1.5 lg:py-2 rounded-lg transition-all duration-300 text-sm lg:text-base",
                                isActive 
                                    ? "text-primary bg-primary/10 font-semibold" 
                                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                            )}
                        >
                            <Icon size={16} className="lg:w-[18px] lg:h-[18px]" />
                            <span className="hidden lg:inline">{item.name}</span>
                        </a>
                    );
                })}
            </div>
            {/* mobile nav */}
            <button onClick={()=> setIsMenuOpen((prev)=>!prev)}
                className="md:hidden p-2 text-foreground relative z-[60]"
                aria-label={isMenuOpen? "Close Menu" :"Open Menu"}>
                {isMenuOpen? <X size={24}/>:<Menu size={24}/>}</button>
               
            <div className={cn("fixed top-0 left-0 right-0 bottom-0 w-full h-screen min-h-screen bg-background/95 backdrop-blur-md z-[55]",
                 "flex flex-col items-center justify-center transition-all duration-300 ease-in-out transform md:hidden", 
                 "pt-20 pb-10 px-4 overflow-y-auto",
              isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
            )}>
             <div className="flex flex-col items-center space-y-4 w-full max-w-md relative z-[56]">
                {navItems.map((item, key)=>{
                    const isActive = activeSection === item.href.substring(1);
                    const Icon = item.icon;
                    return (
                        <a 
                            key={key} 
                            href={item.href} 
                            className={cn(
                                "w-full py-3 px-6 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 text-lg font-medium",
                                isActive 
                                    ? "text-primary bg-primary/10 font-semibold" 
                                    : "text-foreground/90 hover:text-primary hover:bg-primary/5"
                            )}
                            onClick={(e) => {
                                isNavigating.current = true;
                                setIsMenuOpen(false);
                                // Let the browser handle the smooth scroll
                                setTimeout(() => {
                                    const targetId = item.href.substring(1);
                                    const targetElement = document.getElementById(targetId);
                                    if (targetElement) {
                                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }, 100);
                            }}
                        >
                            <Icon size={20} />
                            <span>{item.name}</span>
                        </a>
                    );
                })}
            </div>
            </div>
          </div>  
         </nav >
   );
};