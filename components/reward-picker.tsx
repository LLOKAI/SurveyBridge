"use client"

import { useState } from "react"
import { Check, Coffee, Gift, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const vendors = [
  {
    id: 1,
    name: "Starbucks",
    icon: Coffee,
    regions: ["North America", "Europe", "Asia Pacific"],
    rewards: [
      { id: 1, name: "Free Coffee", value: "$5" },
      { id: 2, name: "Breakfast Sandwich", value: "$7" },
      { id: 3, name: "Gift Card", value: "$10" },
    ],
  },
  {
    id: 2,
    name: "Amazon",
    icon: ShoppingBag,
    regions: ["Global"],
    rewards: [
      { id: 1, name: "Gift Card", value: "$5" },
      { id: 2, name: "Gift Card", value: "$10" },
      { id: 3, name: "Gift Card", value: "$15" },
    ],
  },
  {
    id: 3,
    name: "Local Cafe",
    icon: Coffee,
    regions: ["North America", "Europe"],
    rewards: [
      { id: 1, name: "Free Coffee", value: "$4" },
      { id: 2, name: "Pastry", value: "$5" },
      { id: 3, name: "Lunch Special", value: "$10" },
    ],
  },
  {
    id: 4,
    name: "Regional Market",
    icon: ShoppingBag,
    regions: ["Asia Pacific", "Latin America", "Africa"],
    rewards: [
      { id: 1, name: "Grocery Voucher", value: "$5" },
      { id: 2, name: "Grocery Voucher", value: "$10" },
      { id: 3, name: "Grocery Voucher", value: "$15" },
    ],
  },
]

export function RewardPicker() {
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [selectedVendors, setSelectedVendors] = useState<number[]>([1, 2])
  const [selectedRewards, setSelectedRewards] = useState<Record<number, number>>({
    1: 2,
    2: 1,
  })

  const toggleVendor = (vendorId: number) => {
    if (selectedVendors.includes(vendorId)) {
      setSelectedVendors(selectedVendors.filter((id) => id !== vendorId))
      const newSelectedRewards = { ...selectedRewards }
      delete newSelectedRewards[vendorId]
      setSelectedRewards(newSelectedRewards)
    } else {
      setSelectedVendors([...selectedVendors, vendorId])
      setSelectedRewards({
        ...selectedRewards,
        [vendorId]: vendors.find((v) => v.id === vendorId)?.rewards[0].id || 1,
      })
    }
  }

  const selectReward = (vendorId: number, rewardId: number) => {
    setSelectedRewards({
      ...selectedRewards,
      [vendorId]: rewardId,
    })
  }

  const filteredVendors =
    selectedRegion === "all"
      ? vendors
      : vendors.filter((vendor) => vendor.regions.includes(selectedRegion) || vendor.regions.includes("Global"))

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Reward Options</CardTitle>
              <CardDescription>Select vendors and rewards for your survey participants.</CardDescription>
            </div>
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="North America">North America</SelectItem>
                <SelectItem value="Europe">Europe</SelectItem>
                <SelectItem value="Asia Pacific">Asia Pacific</SelectItem>
                <SelectItem value="Latin America">Latin America</SelectItem>
                <SelectItem value="Africa">Africa</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="vendors">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="vendors">Select Vendors</TabsTrigger>
              <TabsTrigger value="rewards">Configure Rewards</TabsTrigger>
            </TabsList>
            <TabsContent value="vendors" className="pt-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {filteredVendors.map((vendor) => {
                  const isSelected = selectedVendors.includes(vendor.id)
                  return (
                    <Card
                      key={vendor.id}
                      className={`cursor-pointer transition-all ${isSelected ? "ring-2 ring-primary" : ""}`}
                      onClick={() => toggleVendor(vendor.id)}
                    >
                      <CardHeader className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <vendor.icon className="h-5 w-5" />
                            <CardTitle className="text-base">{vendor.name}</CardTitle>
                          </div>
                          {isSelected && (
                            <div className="rounded-full bg-primary p-1 text-primary-foreground">
                              <Check className="h-3 w-3" />
                            </div>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <div className="flex flex-wrap gap-1">
                          {vendor.regions.map((region) => (
                            <Badge key={region} variant="outline" className="text-xs">
                              {region}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>
            <TabsContent value="rewards" className="space-y-6 pt-6">
              {selectedVendors.length === 0 ? (
                <div className="rounded-lg border border-dashed p-6 text-center">
                  <Gift className="mx-auto h-8 w-8 text-muted-foreground" />
                  <h3 className="mt-2 text-lg font-medium">No Vendors Selected</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Please select vendors first to configure rewards.
                  </p>
                </div>
              ) : (
                selectedVendors.map((vendorId) => {
                  const vendor = vendors.find((v) => v.id === vendorId)
                  if (!vendor) return null

                  return (
                    <Card key={vendor.id}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <vendor.icon className="h-5 w-5" />
                          <CardTitle className="text-base">{vendor.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <Label>Select Reward Option</Label>
                            <RadioGroup
                              value={selectedRewards[vendor.id]?.toString()}
                              onValueChange={(value) => selectReward(vendor.id, Number.parseInt(value))}
                              className="mt-2 space-y-2"
                            >
                              {vendor.rewards.map((reward) => (
                                <div
                                  key={reward.id}
                                  className="flex items-center justify-between rounded-md border p-3"
                                >
                                  <div className="flex items-center gap-2">
                                    <RadioGroupItem
                                      value={reward.id.toString()}
                                      id={`reward-${vendor.id}-${reward.id}`}
                                    />
                                    <Label htmlFor={`reward-${vendor.id}-${reward.id}`} className="cursor-pointer">
                                      {reward.name}
                                    </Label>
                                  </div>
                                  <Badge variant="outline">{reward.value}</Badge>
                                </div>
                              ))}
                            </RadioGroup>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Reset Selections</Button>
          <Button>Save Reward Options</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
