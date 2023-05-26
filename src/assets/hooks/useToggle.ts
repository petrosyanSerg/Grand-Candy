import { useState } from "react";

export default function useToggle() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return { handleClose, handleOpen, setIsOpen, isOpen };
}
