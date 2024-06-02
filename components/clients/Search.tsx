import React from "react";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";

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
      <Input
        type="search"
        placeholder="Search..."
        className="pl-10 pr-4 py-2 rounded-md focus:ring-1 focus:ring-secondary"
      />
    </div>
  );
}

export default Search;
