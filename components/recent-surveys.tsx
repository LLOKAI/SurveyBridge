import { Badge } from "@/components/ui/badge"

const surveys = [
  {
    id: "SUR-001",
    title: "Customer Satisfaction Q1",
    status: "Active",
    responses: 342,
    date: "2 days ago",
  },
  {
    id: "SUR-002",
    title: "Product Feedback",
    status: "Active",
    responses: 156,
    date: "5 days ago",
  },
  {
    id: "SUR-003",
    title: "Website Usability",
    status: "Completed",
    responses: 523,
    date: "1 week ago",
  },
  {
    id: "SUR-004",
    title: "Market Research",
    status: "Draft",
    responses: 0,
    date: "2 weeks ago",
  },
]

export function RecentSurveys() {
  return (
    <div className="space-y-4">
      {surveys.map((survey) => (
        <div key={survey.id} className="flex items-center justify-between space-x-4 rounded-md border p-4">
          <div className="space-y-1">
            <p className="font-medium">{survey.title}</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>{survey.id}</span>
              <span className="mx-2">•</span>
              <span>{survey.responses} responses</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant={survey.status === "Active" ? "default" : survey.status === "Completed" ? "outline" : "secondary"}
            >
              {survey.status}
            </Badge>
            <span className="text-xs text-muted-foreground">{survey.date}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
