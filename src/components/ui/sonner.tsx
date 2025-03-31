import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      position="top-right" 
      toastOptions={{
        style: {
          backgroundColor: "var(--toast-bg, #333)", 
          color: "var(--toast-text, white)", 
        },
      }}
      richColors
      {...props}
    />
  );
};

export { Toaster };
