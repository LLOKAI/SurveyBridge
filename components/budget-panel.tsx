"use client"

import { useState } from "react"
import { DollarSign, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const regions = [
  { id: 1, name: "North America", countries: ["United States", "Canada", "Mexico"] },
  { id: 2, name: "Europe", countries: ["United Kingdom", "Germany", "France", "Spain", "Italy"] },
  { id: 3, name: "Asia Pacific", countries: ["Japan", "China", "Australia", "India", "Singapore"] },
  { id: 4, name: "Latin America", countries: ["Brazil", "Argentina", "Colombia", "Chile"] },
  { id: 5, name: "Africa", countries: ["South Africa", "Nigeria", "Kenya", "Egypt"] },
]

export function BudgetPanel() {
  const [totalBudget, setTotalBudget] = useState(5000)
  const [budgetPerResponse, setBudgetPerResponse] = useState(5)
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [countryBudgets, setCountryBudgets] = useState<Record<string, number>>({
    "United States": 7,
    Canada: 6,
    Mexico: 4,
    "United Kingdom": 6,
    Germany: 6,
    France: 5,
    Spain: 5,
    Italy: 5,
    Japan: 7,
    China: 4,
    Australia: 6,
    India: 3,
    Singapore: 5,
    Brazil: 4,
    Argentina: 3,
    Colombia: 3,
    Chile: 3,
    "South Africa": 4,
    Nigeria: 3,
    Kenya: 3,
    Egypt: 3,
  })

  const estimatedResponses = Math.floor(totalBudget / budgetPerResponse)

  const updateCountryBudget = (country: string, value: number) => {
    setCountryBudgets({
      ...countryBudgets,
      [country]: value,
    })
  }

  const getCountriesForRegion = () => {
    if (selectedRegion === "all") {
      return regions.flatMap((region) => region.countries)
    }
    const region = regions.find((r) => r.name === selectedRegion)
    return region ? region.countries : []
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Budget Settings</CardTitle>
          <CardDescription>Set your total budget and allocation per response.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="total-budget">Total Budget</Label>
              <div className="flex">
                <div className="flex items-center justify-center rounded-l-md border border-r-0 bg-muted px-3">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </div>
                <Input
                  id="total-budget"
                  type="number"
                  value={totalBudget}
                  onChange={(e) => setTotalBudget(Number(e.target.value))}
                  className="rounded-l-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget-per-response">Budget Per Response</Label>
              <div className="flex">
                <div className="flex items-center justify-center rounded-l-md border border-r-0 bg-muted px-3">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </div>
                <Input
                  id="budget-per-response"
                  type="number"
                  value={budgetPerResponse}
                  onChange={(e) => setBudgetPerResponse(Number(e.target.value))}
                  className="rounded-l-none"
                />
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-muted/50 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Estimated Responses</h4>
                <p className="text-sm text-muted-foreground">Based on your current budget settings</p>
              </div>
              <div className="text-2xl font-bold">{estimatedResponses.toLocaleString()}</div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Regional Budget Allocation</CardTitle>
              <CardDescription>Customize reward amounts by region or country.</CardDescription>
            </div>
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                {regions.map((region) => (
                  <SelectItem key={region.id} value={region.name}>
                    {region.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Country</TableHead>
                <TableHead>Reward Amount ($)</TableHead>
                <TableHead className="w-[100px]">Adjust</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {getCountriesForRegion().map((country) => (
                <TableRow key={country}>
                  <TableCell>{country}</TableCell>
                  <TableCell>${countryBudgets[country]}.00</TableCell>
                  <TableCell>
                    <Slider
                      value={[countryBudgets[country]]}
                      min={1}
                      max={10}
                      step={1}
                      onValueChange={(value) => updateCountryBudget(country, value[0])}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-between">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1">
                  <Info className="h-4 w-4" />
                  <span>Budget Tips</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="w-80">
                <p>
                  Adjust reward amounts based on local purchasing power. Higher rewards typically lead to faster
                  response rates.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Button>Save Budget Settings</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
