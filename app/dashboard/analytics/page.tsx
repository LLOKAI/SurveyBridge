"use client"

import { useState } from "react"
import { Calendar, Download, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnalyticsHeatmap } from "@/components/analytics-heatmap"
import { AnalyticsCharts } from "@/components/analytics-charts"

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState("30days")
  const [country, setCountry] = useState("all")
  const [campaign, setCampaign] = useState("all")

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">Analyze your survey data and response patterns.</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export Data
        </Button>
      </div>
      <div className="flex flex-col gap-4 md:flex-row w-full">
        <Card className="flex-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total Responses</CardTitle>
            <CardDescription>All surveys</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8,642</div>
            <p className="text-xs text-muted-foreground">+12.3% from previous period</p>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Completion Rate</CardTitle>
            <CardDescription>Survey completions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">78.5%</div>
            <p className="text-xs text-muted-foreground">+2.1% from previous period</p>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Reward Redemption</CardTitle>
            <CardDescription>Claimed rewards</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">62.3%</div>
            <p className="text-xs text-muted-foreground">-1.5% from previous period</p>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Avg. Response Time</CardTitle>
            <CardDescription>Time to complete</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">4:32</div>
            <p className="text-xs text-muted-foreground">-0:18 from previous period</p>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">Last 12 months</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select value={country} onValueChange={setCountry}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Countries</SelectItem>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="de">Germany</SelectItem>
              <SelectItem value="jp">Japan</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Select value={campaign} onValueChange={setCampaign}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select campaign" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Campaigns</SelectItem>
              <SelectItem value="cs-q1">Customer Satisfaction Q1</SelectItem>
              <SelectItem value="product">Product Feedback</SelectItem>
              <SelectItem value="website">Website Usability</SelectItem>
              <SelectItem value="market">Market Research</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="responses">Responses</TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Global Response Distribution</CardTitle>
              <CardDescription>Survey responses by geographic location</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <AnalyticsHeatmap />
            </CardContent>
          </Card>
          <AnalyticsCharts />
        </TabsContent>
        <TabsContent value="responses" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Response Data</CardTitle>
              <CardDescription>Detailed breakdown of survey responses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Response data visualization will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="rewards" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Reward Redemption</CardTitle>
              <CardDescription>Analysis of reward redemption by vendor and region</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Reward redemption data will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="demographics" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Demographic Insights</CardTitle>
              <CardDescription>Respondent demographics and segmentation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Demographic data will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
