import React from "react";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";
import DebouncedInput from "../ui/DebouncedInput";

function Search() {
  return (
    <div className="relative flex-1 max-w-md mx-4">
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:bg-transparent hover:text-muted"
      >
        <SearchIcon className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>
      <DebouncedInput
        placeholder="Search..."
        className="pl-12 pr-4 py-2 rounded-md focus:ring-1 focus:ring-secondary"
        queryParam="search"
      />
    </div>
  );
}

export default Search;
