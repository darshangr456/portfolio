export const Footer=()=>{
return(
    <footer className="py-6 px-4 bg-gray-50 border-t border-border/50 mt-12">
        <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center">
                <p className="text-sm text-muted-foreground text-center">&copy; {new Date().getFullYear()} Darshan G R. All rights reserved.</p>
            </div>
        </div>
    </footer>
)
}