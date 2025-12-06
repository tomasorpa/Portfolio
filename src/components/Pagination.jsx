import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { filteredProjectItems } from "../data";

const Button = ({
  children,
  variant,
  size,
  disabled,
  className,
  onClick,
  ...props
}) => {
  let baseClasses =
    "font-medium rounded-lg transition-colors duration-200 flex items-center justify-center";

  if (size === "sm") {
    baseClasses += " px-3 py-1.5 text-sm";
  } else {
    baseClasses += " px-4 py-2 text-base";
  }

  if (variant === "default") {
    baseClasses += " bg-zinc-800 hover:bg-zinc-700/80  active:bg-white/60 ";
  } else if (variant === "outline") {
    baseClasses += " bg-zinc-700 active:bg-zinc-700/60 ";
  }

  if (disabled) {
    baseClasses += " opacity-50 cursor hover:d";
  }

  return (
    <button
      className={`${baseClasses} ${className}`}
      disabled={disabled}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const Pagination = ({ totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  let page = Number(searchParams.get("page"));
  console.log(page);
  if (page == 0) {
    page = 1;
  }
    const handleOnClick = (page) => {
      console.log(page)
    setSearchParams((prev) => {
      prev.set("page", page);
      return prev;
    });
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      {/* Botón Anterior */}
      <Button
        onClick={() => handleOnClick(page - 1)}
        variant="default"
        size="sm"
        disabled={page == 1}
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Previous
      </Button>

      {/* Números de página (Estructura de mapeo simple) */}
      {Array.from({ length: totalPages }).map((_, index) => (
        <Button
          onClick={() => handleOnClick(index + 1)}
              key={index}
              variant={(page == index + 1)?"outline":"default"}
        
        >
          {index + 1}
        </Button>
      ))}

      {/* Botón Siguiente */}
      <Button
        disabled={page === totalPages}
        variant="default"
        size="sm"
        onClick={() => handleOnClick(page + 1)}
      >
        Next
        <ChevronRight className="h-4 w-4 ml-1" />
      </Button>
    </div>
  );
};
