"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { date: "Jan 1", responses: 120 },
  { date: "Jan 5", responses: 180 },
  { date: "Jan 10", responses: 150 },
  { date: "Jan 15", responses: 250 },
  { date: "Jan 20", responses: 300 },
  { date: "Jan 25", responses: 280 },
  { date: "Jan 30", responses: 350 },
  { date: "Feb 5", responses: 320 },
  { date: "Feb 10", responses: 390 },
  { date: "Feb 15", responses: 420 },
]

export function DashboardChart() {
  return (
    <ChartContainer
      config={{
        responses: {
          label: "Responses",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
          <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="responses"
            strokeWidth={2}
            activeDot={{ r: 6 }}
            stroke="var(--color-responses)"
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
