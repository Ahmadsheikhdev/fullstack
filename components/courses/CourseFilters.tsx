"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, X, Sparkles } from "lucide-react";

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
    <div className="mb-12 bg-gradient-to-r from-muted/30 via-background to-muted/30 rounded-2xl p-8 border border-border/50 shadow-lg">
      {/* Enhanced Filter Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Filter className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Refine Your Search</h2>
            <p className="text-sm text-muted-foreground">Find the perfect course for your learning journey</p>
          </div>
        </div>
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground border-dashed hover:border-solid transition-all duration-300"
          >
            <X className="w-4 h-4 mr-2" />
            Clear All Filters
          </Button>
        )}
      </div>

      {/* Enhanced Filter Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Categories */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-foreground">Category</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary/80 transition-all duration-300 hover:scale-105 px-3 py-1"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Levels */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-foreground">Experience Level</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {levels.map((level) => (
              <Badge
                key={level}
                variant={selectedLevel === level ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary/80 transition-all duration-300 hover:scale-105 px-3 py-1"
                onClick={() => setSelectedLevel(level)}
              >
                {level}
              </Badge>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-foreground">Price Range</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {priceRanges.map((price) => (
              <Badge
                key={price}
                variant={selectedPrice === price ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary/80 transition-all duration-300 hover:scale-105 px-3 py-1"
                onClick={() => setSelectedPrice(price)}
              >
                {price}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-6 pt-6 border-t border-border/50">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {selectedCategory !== "All" && (
              <Badge variant="outline" className="text-xs">
                {selectedCategory}
                <X className="w-3 h-3 ml-1 cursor-pointer" onClick={() => setSelectedCategory("All")} />
              </Badge>
            )}
            {selectedLevel !== "All" && (
              <Badge variant="outline" className="text-xs">
                {selectedLevel}
                <X className="w-3 h-3 ml-1 cursor-pointer" onClick={() => setSelectedLevel("All")} />
              </Badge>
            )}
            {selectedPrice !== "All" && (
              <Badge variant="outline" className="text-xs">
                {selectedPrice}
                <X className="w-3 h-3 ml-1 cursor-pointer" onClick={() => setSelectedPrice("All")} />
              </Badge>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 