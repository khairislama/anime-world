import { Suspense } from "react";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";
import DebouncedInput from "../ui/DebouncedInput";
import { Skeleton } from "../ui/skeleton";

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
      <Suspense
        fallback={
          <Skeleton className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background" />
        }
      >
        <DebouncedInput
          placeholder="Search..."
          className="pl-12 pr-4 py-2 rounded-md focus:ring-1 focus:ring-secondary"
          queryParam="search"
        />
      </Suspense>
    </div>
  );
}

export default Search;
