"use client"

import { useState } from "react"
import { Calendar, Download, FileDown, FileSpreadsheet, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ExportPage() {
  const [dateRange, setDateRange] = useState("30days")
  const [fileFormat, setFileFormat] = useState("csv")

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Export Data</h1>
          <p className="text-muted-foreground">Download your survey data in various formats.</p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 w-full">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Available Surveys</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total Responses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,642</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Data Points</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124,836</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Last Export</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Apr 10</div>
            <p className="text-xs text-muted-foreground">4 days ago</p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="export" className="w-full">
        <TabsList>
          <TabsTrigger value="export">Export Options</TabsTrigger>
          <TabsTrigger value="history">Export History</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled Exports</TabsTrigger>
        </TabsList>
        <TabsContent value="export" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Export Survey Data</CardTitle>
              <CardDescription>Configure your export settings and download your data.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Select Surveys</Label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select surveys" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Surveys</SelectItem>
                      <SelectItem value="cs-q1">Customer Satisfaction Q1</SelectItem>
                      <SelectItem value="product">Product Feedback</SelectItem>
                      <SelectItem value="website">Website Usability</SelectItem>
                      <SelectItem value="market">Market Research</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Date Range</Label>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <Select value={dateRange} onValueChange={setDateRange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select date range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7days">Last 7 days</SelectItem>
                        <SelectItem value="30days">Last 30 days</SelectItem>
                        <SelectItem value="90days">Last 90 days</SelectItem>
                        <SelectItem value="year">Last 12 months</SelectItem>
                        <SelectItem value="custom">Custom Range</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>File Format</Label>
                  <Select value={fileFormat} onValueChange={setFileFormat}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select file format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="csv">CSV</SelectItem>
                      <SelectItem value="excel">Excel</SelectItem>
                      <SelectItem value="json">JSON</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Data Filters</Label>
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-muted-foreground" />
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Select filters" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Data</SelectItem>
                        <SelectItem value="complete">Complete Responses Only</SelectItem>
                        <SelectItem value="rewarded">Rewarded Responses Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Include Data</Label>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="responses" defaultChecked />
                    <Label htmlFor="responses">Survey Responses</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="metadata" defaultChecked />
                    <Label htmlFor="metadata">Response Metadata</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="rewards" defaultChecked />
                    <Label htmlFor="rewards">Reward Information</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="demographics" defaultChecked />
                    <Label htmlFor="demographics">Demographics</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="location" defaultChecked />
                    <Label htmlFor="location">Location Data</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="timestamps" defaultChecked />
                    <Label htmlFor="timestamps">Timestamps</Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save Export Settings</Button>
              <Button className="gap-2">
                <FileDown className="h-4 w-4" />
                Export Data
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="history" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Export History</CardTitle>
              <CardDescription>View and download your previous exports.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Survey</TableHead>
                    <TableHead>Format</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Apr 10, 2025</TableCell>
                    <TableCell>All Surveys</TableCell>
                    <TableCell>CSV</TableCell>
                    <TableCell>4.2 MB</TableCell>
                    <TableCell>Completed</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="gap-1">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Apr 1, 2025</TableCell>
                    <TableCell>Customer Satisfaction Q1</TableCell>
                    <TableCell>Excel</TableCell>
                    <TableCell>2.8 MB</TableCell>
                    <TableCell>Completed</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="gap-1">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Mar 15, 2025</TableCell>
                    <TableCell>Product Feedback</TableCell>
                    <TableCell>JSON</TableCell>
                    <TableCell>1.5 MB</TableCell>
                    <TableCell>Completed</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="gap-1">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Mar 1, 2025</TableCell>
                    <TableCell>All Surveys</TableCell>
                    <TableCell>CSV</TableCell>
                    <TableCell>3.7 MB</TableCell>
                    <TableCell>Completed</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="gap-1">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Load More
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="scheduled" className="pt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Scheduled Exports</CardTitle>
                <CardDescription>Set up automatic exports on a schedule.</CardDescription>
              </div>
              <Button className="gap-2">
                <FileSpreadsheet className="h-4 w-4" />
                New Schedule
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Frequency</TableHead>
                    <TableHead>Format</TableHead>
                    <TableHead>Recipients</TableHead>
                    <TableHead>Next Run</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Weekly Summary</TableCell>
                    <TableCell>Weekly (Monday)</TableCell>
                    <TableCell>Excel</TableCell>
                    <TableCell>2 recipients</TableCell>
                    <TableCell>Apr 22, 2025</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Monthly Report</TableCell>
                    <TableCell>Monthly (1st)</TableCell>
                    <TableCell>CSV</TableCell>
                    <TableCell>3 recipients</TableCell>
                    <TableCell>May 1, 2025</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
