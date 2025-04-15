"use client"

import { useState } from "react"
import { Barcode, Download, Plus, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { VendorLoginForm } from "@/components/vendor-login-form"
import { VendorRewardForm } from "@/components/vendor-reward-form"

export default function VendorPortalPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return <VendorLoginForm onLogin={handleLogin} />
  }

  return (
    <div className="w-full py-8 px-6">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Vendor Portal</h1>
          <p className="text-muted-foreground">Manage your rewards and track redemptions.</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Data
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add New Reward
          </Button>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total Redemptions</CardTitle>
            <CardDescription>All rewards</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">+8.2% from previous month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Active Campaigns</CardTitle>
            <CardDescription>Surveys using your rewards</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from previous month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Revenue Generated</CardTitle>
            <CardDescription>From reward redemptions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$6,240</div>
            <p className="text-xs text-muted-foreground">+12.5% from previous month</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8">
        <Tabs defaultValue="rewards">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="rewards">Manage Rewards</TabsTrigger>
            <TabsTrigger value="redemptions">Redemption History</TabsTrigger>
            <TabsTrigger value="integration">POS Integration</TabsTrigger>
          </TabsList>
          <TabsContent value="rewards" className="space-y-6 pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Rewards</CardTitle>
                <CardDescription>Create and manage reward offerings for survey participants.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <VendorRewardForm />
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Reward Name</TableHead>
                        <TableHead>Value</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Redemptions</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Free Coffee</TableCell>
                        <TableCell>$5.00</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>342</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Breakfast Sandwich</TableCell>
                        <TableCell>$7.00</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>156</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Gift Card</TableCell>
                        <TableCell>$10.00</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>523</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="redemptions" className="pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Redemption History</CardTitle>
                <CardDescription>Track all reward redemptions across campaigns.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Redemption ID</TableHead>
                      <TableHead>Reward</TableHead>
                      <TableHead>Campaign</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Value</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">RED-1234</TableCell>
                      <TableCell>Free Coffee</TableCell>
                      <TableCell>Customer Satisfaction Q1</TableCell>
                      <TableCell>Apr 12, 2025</TableCell>
                      <TableCell>Redeemed</TableCell>
                      <TableCell className="text-right">$5.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">RED-1235</TableCell>
                      <TableCell>Gift Card</TableCell>
                      <TableCell>Product Feedback</TableCell>
                      <TableCell>Apr 11, 2025</TableCell>
                      <TableCell>Redeemed</TableCell>
                      <TableCell className="text-right">$10.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">RED-1236</TableCell>
                      <TableCell>Breakfast Sandwich</TableCell>
                      <TableCell>Website Usability</TableCell>
                      <TableCell>Apr 10, 2025</TableCell>
                      <TableCell>Pending</TableCell>
                      <TableCell className="text-right">$7.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">RED-1237</TableCell>
                      <TableCell>Free Coffee</TableCell>
                      <TableCell>Market Research</TableCell>
                      <TableCell>Apr 9, 2025</TableCell>
                      <TableCell>Redeemed</TableCell>
                      <TableCell className="text-right">$5.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">RED-1238</TableCell>
                      <TableCell>Gift Card</TableCell>
                      <TableCell>Customer Satisfaction Q1</TableCell>
                      <TableCell>Apr 8, 2025</TableCell>
                      <TableCell>Redeemed</TableCell>
                      <TableCell className="text-right">$10.00</TableCell>
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
          <TabsContent value="integration" className="pt-6">
            <Card>
              <CardHeader>
                <CardTitle>POS Integration</CardTitle>
                <CardDescription>Set up integration with your point-of-sale system.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="api-key">API Key</Label>
                    <div className="flex">
                      <Input
                        id="api-key"
                        type="password"
                        value="sk_live_51NzUBtGj8g6NVUPOaB2rdjhT9PQHBkbZgJnYm"
                        readOnly
                        className="rounded-r-none"
                      />
                      <Button variant="secondary" className="rounded-l-none">
                        Copy
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Use this API key to authenticate your POS system with SurveyBridge.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label>Barcode Scanner</Label>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                        <Barcode className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Scanner Status</p>
                        <p className="text-xs text-muted-foreground">Ready to scan reward barcodes</p>
                      </div>
                      <Button variant="outline" size="sm" className="ml-auto">
                        Test Scanner
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                        <Upload className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Upload Barcode Templates</p>
                        <p className="text-xs text-muted-foreground">
                          Upload your custom barcode templates for rewards
                        </p>
                      </div>
                      <Button size="sm" className="ml-auto">
                        Upload
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 text-sm font-medium">Integration Status</h3>
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                    <p className="text-sm">Connected and working properly</p>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">Last sync: April 14, 2025 at 2:30 PM</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Reset API Key</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
