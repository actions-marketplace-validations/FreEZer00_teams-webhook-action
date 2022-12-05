interface AdditionalButton {
  displayName: string
  url: string
}

interface ActionInputs {
  webhookUrl: string
  job?: JobStatus
  needs: NeedsResult[]
  title?: string
  additionalButton?: AdditionalButton
}

interface NeedsResult {
  jobName: string
  result: Status
  success: boolean
  skipped: boolean
  failure: boolean
  cancelled: boolean
}
interface JobStatus {
  status: Status
  success: boolean
  skipped: boolean
  failure: boolean
  cancelled: boolean
}
interface GithubValues {
  workflow: string
  repositoryUrl?: string
}

type Status = 'success' | 'skipped' | 'failure' | 'cancelled'

export {Status, JobStatus, ActionInputs, NeedsResult, GithubValues}
