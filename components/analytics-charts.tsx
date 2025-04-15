"use client"

import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const responseData = [
  { date: "Jan", responses: 420, completions: 380 },
  { date: "Feb", responses: 380, completions: 320 },
  { date: "Mar", responses: 510, completions: 480 },
  { date: "Apr", responses: 580, completions: 520 },
  { date: "May", responses: 620, completions: 540 },
  { date: "Jun", responses: 750, completions: 650 },
]

const rewardData = [
  { vendor: "Starbucks", redemptions: 320 },
  { vendor: "Amazon", redemptions: 480 },
  { vendor: "Local Cafe", redemptions: 240 },
  { vendor: "Regional Market", redemptions: 380 },
]

export function AnalyticsCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Response Trends</CardTitle>
          <CardDescription>Survey responses and completions over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              responses: {
                label: "Responses",
                color: "hsl(var(--chart-1))",
              },
              completions: {
                label: "Completions",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={responseData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                <XAxis
                  dataKey="date"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
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
                <Line
                  type="monotone"
                  dataKey="completions"
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                  stroke="var(--color-completions)"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Reward Redemptions</CardTitle>
          <CardDescription>Redemptions by vendor</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              redemptions: {
                label: "Redemptions",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={rewardData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                <XAxis
                  dataKey="vendor"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="redemptions" fill="var(--color-redemptions)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
