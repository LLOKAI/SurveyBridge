"use client"

import { useState } from "react"
import { Barcode, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function VendorRewardForm() {
  const [isAdding, setIsAdding] = useState(false)

  if (!isAdding) {
    return (
      <Button variant="outline" className="w-full" onClick={() => setIsAdding(true)}>
        + Add New Reward
      </Button>
    )
  }

  return (
    <div className="space-y-4 rounded-lg border p-4">
      <h3 className="text-lg font-medium">Add New Reward</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="reward-name">Reward Name</Label>
          <Input id="reward-name" placeholder="e.g., Free Coffee" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="reward-value">Value</Label>
          <div className="flex">
            <div className="flex items-center justify-center rounded-l-md border border-r-0 bg-muted px-3">$</div>
            <Input id="reward-value" type="number" placeholder="5.00" className="rounded-l-none" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="reward-type">Reward Type</Label>
          <Select defaultValue="product">
            <SelectTrigger id="reward-type">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="product">Product</SelectItem>
              <SelectItem value="service">Service</SelectItem>
              <SelectItem value="discount">Discount</SelectItem>
              <SelectItem value="gift-card">Gift Card</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="reward-regions">Available Regions</Label>
          <Select defaultValue="global">
            <SelectTrigger id="reward-regions">
              <SelectValue placeholder="Select regions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="global">Global</SelectItem>
              <SelectItem value="north-america">North America</SelectItem>
              <SelectItem value="europe">Europe</SelectItem>
              <SelectItem value="asia">Asia Pacific</SelectItem>
              <SelectItem value="latin-america">Latin America</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label>Barcode or QR Code</Label>
        <div className="flex items-center gap-4 rounded-lg border border-dashed p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
            <Barcode className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Upload Scannable Code</p>
            <p className="text-xs text-muted-foreground">Upload a barcode or QR code for this reward</p>
          </div>
          <Button variant="outline" size="sm" className="gap-1">
            <Upload className="h-4 w-4" />
            Upload
          </Button>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={() => setIsAdding(false)}>
          Cancel
        </Button>
        <Button>Save Reward</Button>
      </div>
    </div>
  )
}
