"use client"

import { useState } from "react"
import { ArrowRight, Check, Gift } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { RewardSelector } from "@/components/reward-selector"

export default function SurveyCompletionPage() {
  const [step, setStep] = useState(1)
  const [showRewards, setShowRewards] = useState(false)
  const totalSteps = 5

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      setShowRewards(true)
    }
  }

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  if (showRewards) {
    return <RewardSelector />
  }

  return (
    <div className="container mx-auto flex min-h-screen max-w-3xl flex-col py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Customer Satisfaction Survey</h1>
        <p className="text-muted-foreground">Help us improve our products and services with your feedback.</p>
      </div>
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm">
          <span>
            Question {step} of {totalSteps}
          </span>
          <span>{Math.round((step / totalSteps) * 100)}% Complete</span>
        </div>
        <Progress value={(step / totalSteps) * 100} className="mt-2" />
      </div>
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>
            {step === 1 && "How satisfied are you with our product?"}
            {step === 2 && "What features do you use most frequently?"}
            {step === 3 && "How likely are you to recommend our product to others?"}
            {step === 4 && "What improvements would you like to see?"}
            {step === 5 && "Tell us about yourself"}
          </CardTitle>
          <CardDescription>
            {step === 1 && "Please rate your overall satisfaction."}
            {step === 2 && "Select all that apply."}
            {step === 3 && "On a scale from 1 to 10."}
            {step === 4 && "We value your suggestions."}
            {step === 5 && "This helps us understand our customers better."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <RadioGroup defaultValue="satisfied">
              <div className="flex items-center space-x-2 rounded-md border p-3">
                <RadioGroupItem value="very-satisfied" id="very-satisfied" />
                <Label htmlFor="very-satisfied" className="flex-1 cursor-pointer">
                  Very Satisfied
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-md border p-3">
                <RadioGroupItem value="satisfied" id="satisfied" />
                <Label htmlFor="satisfied" className="flex-1 cursor-pointer">
                  Satisfied
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-md border p-3">
                <RadioGroupItem value="neutral" id="neutral" />
                <Label htmlFor="neutral" className="flex-1 cursor-pointer">
                  Neutral
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-md border p-3">
                <RadioGroupItem value="dissatisfied" id="dissatisfied" />
                <Label htmlFor="dissatisfied" className="flex-1 cursor-pointer">
                  Dissatisfied
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-md border p-3">
                <RadioGroupItem value="very-dissatisfied" id="very-dissatisfied" />
                <Label htmlFor="very-dissatisfied" className="flex-1 cursor-pointer">
                  Very Dissatisfied
                </Label>
              </div>
            </RadioGroup>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="feature-1" className="h-4 w-4 rounded border-gray-300" />
                <Label htmlFor="feature-1">Dashboard Analytics</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="feature-2" className="h-4 w-4 rounded border-gray-300" />
                <Label htmlFor="feature-2">Reporting Tools</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="feature-3" className="h-4 w-4 rounded border-gray-300" />
                <Label htmlFor="feature-3">Data Visualization</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="feature-4" className="h-4 w-4 rounded border-gray-300" />
                <Label htmlFor="feature-4">Collaboration Features</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="feature-5" className="h-4 w-4 rounded border-gray-300" />
                <Label htmlFor="feature-5">Mobile App</Label>
              </div>
            </div>
          )}
          {step === 3 && (
            <RadioGroup defaultValue="8">
              <div className="grid grid-cols-5 gap-2 md:grid-cols-10">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <div key={num} className="text-center">
                    <RadioGroupItem value={num.toString()} id={`rating-${num}`} className="sr-only" />
                    <Label
                      htmlFor={`rating-${num}`}
                      className="flex h-12 w-full cursor-pointer items-center justify-center rounded-md border text-sm hover:bg-muted peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 peer-data-[state=checked]:font-medium"
                    >
                      {num}
                    </Label>
                  </div>
                ))}
              </div>
              <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                <span>Not likely at all</span>
                <span>Extremely likely</span>
              </div>
            </RadioGroup>
          )}
          {step === 4 && (
            <div className="space-y-2">
              <Textarea placeholder="Please share your suggestions for improvements..." className="min-h-[150px]" />
              <p className="text-xs text-muted-foreground">Your feedback helps us prioritize future development.</p>
            </div>
          )}
          {step === 5 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="age-group">Age Group</Label>
                <select id="age-group" className="w-full rounded-md border border-input bg-background px-3 py-2">
                  <option value="">Select an option</option>
                  <option value="18-24">18-24</option>
                  <option value="25-34">25-34</option>
                  <option value="35-44">35-44</option>
                  <option value="45-54">45-54</option>
                  <option value="55+">55+</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Input id="industry" placeholder="e.g., Technology, Healthcare, etc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-size">Company Size</Label>
                <select id="company-size" className="w-full rounded-md border border-input bg-background px-3 py-2">
                  <option value="">Select an option</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501+">501+ employees</option>
                </select>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handlePrevious} disabled={step === 1}>
            Previous
          </Button>
          <Button onClick={handleNext}>
            {step < totalSteps ? (
              <>
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                Complete Survey <Check className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
      <div className="mt-4 text-center text-sm text-muted-foreground">
        <p>
          Complete this survey to receive a reward of your choice.
          <span className="ml-1 inline-flex items-center text-primary">
            <Gift className="mr-1 h-3 w-3" /> Rewards available
          </span>
        </p>
      </div>
    </div>
  )
}
