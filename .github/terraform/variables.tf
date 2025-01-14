variable "github_owner" {
  type        = string
  description = <<EOT
    Variable for GitHub owner.

    This represents what account or organization the repository will be created under.
  EOT
}

variable "npm_token" {
  type        = string
  description = "NPM token for publishing packages"
  sensitive   = true
}
