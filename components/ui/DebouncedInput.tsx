// ui/DebouncedInput.js
// Writer: Khairi SLAMA
"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "./input";

interface DebouncedInputProps {
  className?: string;
  placeholder?: string;
  delay?: number;
  queryParam: string;
}

const DebouncedInput: React.FC<DebouncedInputProps> = ({
  className = "",
  placeholder = "",
  delay = 300,
  queryParam,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultSearchQuery = searchParams.get(queryParam) ?? "";
  const [value, setValue] = useState(defaultSearchQuery);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    const value = event.target.value;
    setValue(value);

    // Clear the previous timer
    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(() => {
      value !== "" ? params.set(queryParam, value) : params.delete(queryParam);
      router.replace(`?${params.toString()}`, { scroll: false });
    }, delay);

    setTimer(newTimer);
  };

  return (
    <Input
      type="search"
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default DebouncedInput;
