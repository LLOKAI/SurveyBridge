"use client"

import { useState } from "react"
import { Barcode, Check, Coffee, Copy, Gift, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

const rewards = [
  {
    id: 1,
    name: "Starbucks",
    icon: Coffee,
    options: [
      { id: 1, name: "Free Coffee", value: "$5" },
      { id: 2, name: "Breakfast Sandwich", value: "$7" },
      { id: 3, name: "Gift Card", value: "$10" },
    ],
  },
  {
    id: 2,
    name: "Amazon",
    icon: ShoppingBag,
    options: [
      { id: 1, name: "Gift Card", value: "$5" },
      { id: 2, name: "Gift Card", value: "$10" },
    ],
  },
  {
    id: 3,
    name: "Local Cafe",
    icon: Coffee,
    options: [
      { id: 1, name: "Free Coffee", value: "$4" },
      { id: 2, name: "Pastry", value: "$5" },
    ],
  },
]

export function RewardSelector() {
  const [selectedVendor, setSelectedVendor] = useState(rewards[0])
  const [selectedReward, setSelectedReward] = useState(rewards[0].options[0])
  const [rewardClaimed, setRewardClaimed] = useState(false)

  const handleVendorSelect = (vendorId: number) => {
    const vendor = rewards.find((v) => v.id === vendorId)
    if (vendor) {
      setSelectedVendor(vendor)
      setSelectedReward(vendor.options[0])
    }
  }

  const handleRewardSelect = (rewardId: number) => {
    const reward = selectedVendor.options.find((r) => r.id === rewardId)
    if (reward) {
      setSelectedReward(reward)
    }
  }

  const handleClaimReward = () => {
    setRewardClaimed(true)
  }

  return (
    <div className="w-full flex min-h-screen flex-col py-8 px-6 max-w-5xl mx-auto">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Survey Completed!</h1>
        <p className="text-muted-foreground">Thank you for your feedback. Please select your reward below.</p>
      </div>
      {!rewardClaimed ? (
        <Card>
          <CardHeader>
            <CardTitle>Choose Your Reward</CardTitle>
            <CardDescription>Select a vendor and reward option.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="mb-3 text-sm font-medium">Select Vendor</h3>
              <div className="grid grid-cols-3 gap-4">
                {rewards.map((vendor) => (
                  <Card
                    key={vendor.id}
                    className={`cursor-pointer transition-all ${
                      selectedVendor.id === vendor.id ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => handleVendorSelect(vendor.id)}
                  >
                    <CardContent className="flex flex-col items-center justify-center p-4">
                      <vendor.icon className="mb-2 h-8 w-8" />
                      <span className="text-center text-sm font-medium">{vendor.name}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="mb-3 text-sm font-medium">Select Reward Option</h3>
              <RadioGroup
                value={selectedReward.id.toString()}
                onValueChange={(value) => handleRewardSelect(Number.parseInt(value))}
              >
                {selectedVendor.options.map((option) => (
                  <div key={option.id} className="flex items-center justify-between rounded-md border p-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value={option.id.toString()} id={`option-${option.id}`} />
                      <Label htmlFor={`option-${option.id}`} className="cursor-pointer">
                        {option.name}
                      </Label>
                    </div>
                    <span className="font-medium">{option.value}</span>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={handleClaimReward}>
              <Gift className="mr-2 h-4 w-4" />
              Claim Reward
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Gift className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Your Reward is Ready!</CardTitle>
            <CardDescription>Present this code at {selectedVendor.name} to redeem your reward.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-lg border bg-muted/30 p-6 text-center">
              <div className="mb-4 flex items-center justify-center">
                <Barcode className="h-32 w-32" />
              </div>
              <h3 className="text-lg font-bold">{selectedReward.name}</h3>
              <p className="text-sm text-muted-foreground">Value: {selectedReward.value}</p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="text-lg font-mono">SB-12345-ABCDE</span>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-medium">Redemption Instructions</h4>
              <ol className="ml-4 list-decimal space-y-1 text-sm text-muted-foreground">
                <li>Show this code to the cashier at any {selectedVendor.name} location.</li>
                <li>The code is valid for 30 days from today.</li>
                <li>This reward cannot be combined with other offers.</li>
                <li>For assistance, contact support@surveybridge.com</li>
              </ol>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button className="w-full" variant="outline">
              Email My Reward
            </Button>
            <Button className="w-full" variant="secondary">
              Take Another Survey
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
