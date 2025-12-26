import * as Toast from "@radix-ui/react-toast";
import { useState } from "react";

export function Toaster() {
  const [open, setOpen] = useState(false);

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        open={open}
        onOpenChange={setOpen}
        className="bg-black text-white px-4 py-3 rounded-md shadow-lg"
      >
        <Toast.Title>Message sent successfully</Toast.Title>
      </Toast.Root>

      <Toast.Viewport className="fixed bottom-5 right-5 w-80" />
    </Toast.Provider>
  );
}
