"use client"

import { useState } from "react"

export function AnalyticsHeatmap() {
  const [isLoading] = useState(false)

  return (
    <div className="relative h-full w-full">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      ) : (
        <div className="h-full w-full bg-muted/20 rounded-md flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground">World map heatmap visualization</p>
            <p className="text-xs text-muted-foreground mt-2">
              (This would be an interactive world map showing response density)
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
