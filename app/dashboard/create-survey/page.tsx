"use client"

import { useState } from "react"
import { ChevronDown, Globe, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { BudgetPanel } from "@/components/budget-panel"
import { RewardPicker } from "@/components/reward-picker"

export default function CreateSurveyPage() {
  const [questions, setQuestions] = useState([{ id: 1, type: "multiple-choice", text: "", options: ["", ""] }])

  const addQuestion = () => {
    const newId = questions.length ? Math.max(...questions.map((q) => q.id)) + 1 : 1
    setQuestions([...questions, { id: newId, type: "multiple-choice", text: "", options: ["", ""] }])
  }

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id))
  }

  const addOption = (questionId: number) => {
    setQuestions(questions.map((q) => (q.id === questionId ? { ...q, options: [...q.options, ""] } : q)))
  }

  const removeOption = (questionId: number, optionIndex: number) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId ? { ...q, options: q.options.filter((_, i) => i !== optionIndex) } : q,
      ),
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create Survey</h1>
        <p className="text-muted-foreground">Design your survey, set your budget, and choose rewards.</p>
      </div>
      <Tabs defaultValue="survey" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="survey">Survey Details</TabsTrigger>
          <TabsTrigger value="budget">Budget Settings</TabsTrigger>
          <TabsTrigger value="rewards">Reward Options</TabsTrigger>
        </TabsList>
        <TabsContent value="survey" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Survey Information</CardTitle>
              <CardDescription>Enter the basic details for your survey.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Survey Title</Label>
                <Input id="title" placeholder="Enter survey title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Enter a description of your survey" rows={3} />
              </div>
              <div className="space-y-2">
                <Label>Target Regions</Label>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Globe className="h-4 w-4" />
                    <span>Global</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    North America
                  </Button>
                  <Button variant="outline" size="sm">
                    Europe
                  </Button>
                  <Button variant="outline" size="sm">
                    Asia
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Plus className="h-3 w-3" />
                    <span>Add Region</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Survey Questions</CardTitle>
                <CardDescription>Create the questions for your survey.</CardDescription>
              </div>
              <Button onClick={addQuestion}>
                <Plus className="mr-2 h-4 w-4" />
                Add Question
              </Button>
            </CardHeader>
            <CardContent>
              <Accordion type="multiple" className="w-full">
                {questions.map((question, index) => (
                  <AccordionItem key={question.id} value={`question-${question.id}`}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-2 text-left">
                        <span className="font-medium">Question {index + 1}</span>
                        <span className="text-sm text-muted-foreground">{question.text || "Untitled Question"}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1 space-y-2">
                          <Label htmlFor={`question-${question.id}`}>Question Text</Label>
                          <Input
                            id={`question-${question.id}`}
                            placeholder="Enter your question"
                            value={question.text}
                            onChange={(e) => {
                              setQuestions(
                                questions.map((q) => (q.id === question.id ? { ...q, text: e.target.value } : q)),
                              )
                            }}
                          />
                        </div>
                        <div className="w-[180px] space-y-2">
                          <Label htmlFor={`question-type-${question.id}`}>Question Type</Label>
                          <Select
                            value={question.type}
                            onValueChange={(value) => {
                              setQuestions(questions.map((q) => (q.id === question.id ? { ...q, type: value } : q)))
                            }}
                          >
                            <SelectTrigger id={`question-type-${question.id}`}>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                              <SelectItem value="checkbox">Checkbox</SelectItem>
                              <SelectItem value="text">Text Input</SelectItem>
                              <SelectItem value="rating">Rating</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-9 w-9"
                          onClick={() => removeQuestion(question.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove question</span>
                        </Button>
                      </div>

                      {(question.type === "multiple-choice" || question.type === "checkbox") && (
                        <div className="space-y-2">
                          <Label>Options</Label>
                          <div className="space-y-2">
                            {question.options.map((option, optionIndex) => (
                              <div key={optionIndex} className="flex items-center gap-2">
                                {question.type === "multiple-choice" ? (
                                  <RadioGroup>
                                    <RadioGroupItem value={`option-${optionIndex}`} />
                                  </RadioGroup>
                                ) : (
                                  <Checkbox id={`option-${question.id}-${optionIndex}`} />
                                )}
                                <Input
                                  placeholder={`Option ${optionIndex + 1}`}
                                  value={option}
                                  onChange={(e) => {
                                    const newOptions = [...question.options]
                                    newOptions[optionIndex] = e.target.value
                                    setQuestions(
                                      questions.map((q) => (q.id === question.id ? { ...q, options: newOptions } : q)),
                                    )
                                  }}
                                  className="flex-1"
                                />
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => removeOption(question.id, optionIndex)}
                                  disabled={question.options.length <= 2}
                                >
                                  <Trash2 className="h-4 w-4" />
                                  <span className="sr-only">Remove option</span>
                                </Button>
                              </div>
                            ))}
                            <Button variant="outline" size="sm" className="mt-2" onClick={() => addOption(question.id)}>
                              <Plus className="mr-2 h-3 w-3" />
                              Add Option
                            </Button>
                          </div>
                        </div>
                      )}

                      {question.type === "text" && (
                        <div className="space-y-2">
                          <Label>Text Input Preview</Label>
                          <Textarea placeholder="Respondent will type their answer here" disabled />
                        </div>
                      )}

                      {question.type === "rating" && (
                        <div className="space-y-2">
                          <Label>Rating Scale</Label>
                          <div className="py-4">
                            <Slider defaultValue={[5]} max={10} step={1} />
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                            <span>6</span>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                            <span>10</span>
                          </div>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Preview Survey</Button>
              <Button>Save Questions</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="budget" className="pt-6">
          <BudgetPanel />
        </TabsContent>
        <TabsContent value="rewards" className="pt-6">
          <RewardPicker />
        </TabsContent>
      </Tabs>
      <div className="flex justify-end gap-4">
        <Button variant="outline">Save as Draft</Button>
        <Button>Publish Survey</Button>
      </div>
    </div>
  )
}
