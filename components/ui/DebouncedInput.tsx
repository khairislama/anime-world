// ui/DebouncedInput.js
// Writer: Khairi SLAMA
"use client";

import { useState, useEffect, useCallback } from "react";
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
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name.toLocaleLowerCase(), value.toLocaleLowerCase());

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  useEffect(() => {
    if (router && debouncedValue !== "" && value === debouncedValue) {
      router.replace(pathname + "?" + createQueryString(queryParam, value), {
        scroll: false,
      });
    }
  }, [debouncedValue, queryParam, router, createQueryString, pathname, value]);

  if (!router) return null;

  return (
    <Input
      type="search"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default DebouncedInput;
