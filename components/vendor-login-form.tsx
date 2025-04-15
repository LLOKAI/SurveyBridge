"use client"

import { Coffee } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface VendorLoginFormProps {
  onLogin: () => void
}

export function VendorLoginForm({ onLogin }: VendorLoginFormProps) {
  return (
    <div className="container flex h-screen max-w-screen-xl items-center justify-center">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader className="space-y-2 text-center">
          <div className="flex justify-center">
            <div className="rounded-full bg-primary/10 p-2">
              <Coffee className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl">Vendor Portal</CardTitle>
          <CardDescription>Log in to manage your rewards and track redemptions.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="vendor@example.com" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a href="#" className="text-xs text-muted-foreground underline-offset-4 hover:underline">
                Forgot password?
              </a>
            </div>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={onLogin}>
            Log In
          </Button>
        </CardFooter>
        <div className="px-8 pb-8 text-center">
          <p className="text-xs text-muted-foreground">
            Don't have an account?{" "}
            <a href="#" className="text-primary underline-offset-4 hover:underline">
              Join as a Vendor
            </a>
          </p>
        </div>
      </Card>
    </div>
  )
}
