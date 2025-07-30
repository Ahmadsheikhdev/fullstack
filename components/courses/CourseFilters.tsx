"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, X } from "lucide-react";

const categories = ["All", "Frontend", "Backend", "Full-Stack", "Mobile", "Data Science", "DevOps"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];
const priceRanges = ["All", "Free", "Under $50", "$50-$100", "$100+"];

export default function CourseFilters() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedLevel("All");
    setSelectedPrice("All");
  };

  const hasActiveFilters = selectedCategory !== "All" || selectedLevel !== "All" || selectedPrice !== "All";

  return (
    <div className="mb-8">
      {/* Filter Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-muted-foreground" />
          <h2 className="text-xl font-semibold">Filters</h2>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      {/* Filter Sections */}
      <div className="space-y-6">
        {/* Categories */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary/80 transition-colors"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Levels */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Level</h3>
          <div className="flex flex-wrap gap-2">
            {levels.map((level) => (
              <Badge
                key={level}
                variant={selectedLevel === level ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary/80 transition-colors"
                onClick={() => setSelectedLevel(level)}
              >
                {level}
              </Badge>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Price</h3>
          <div className="flex flex-wrap gap-2">
            {priceRanges.map((price) => (
              <Badge
                key={price}
                variant={selectedPrice === price ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary/80 transition-colors"
                onClick={() => setSelectedPrice(price)}
              >
                {price}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 