import {
  MutableRefObject,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useRef,
} from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }: { children: ReactElement }) => {
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    if (!modalRoot || !elRef.current) return;

    modalRoot.appendChild(elRef.current);

    // Return a cleanup function
    return () => {
      if (elRef.current && modalRoot.contains(elRef.current)) {
        modalRoot.removeChild(elRef.current);
      }
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};
export default Modal;
