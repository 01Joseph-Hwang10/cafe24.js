# ---------------------------
# Github Repository
# ---------------------------
resource "github_repository" "cafe24js" {
  name        = "cafe24.js"
  visibility  = "public"
  description = "Cafe24에서 제공하는 API를 JS/TS 프로젝트에서 type-safe하게 활용할 수 있도록 하기 위해 개발한 라이브러리의 모음입니다."
  topics = [
    "cafe24",
    "javascript",
    "typescript",
    "rest",
    "api",
    "client",
    "type-safe",
  ]
  has_issues      = true
  has_projects    = true
  has_downloads   = true
  has_wiki        = false
  has_discussions = false
}

#---------------------------
# Github Actions
#---------------------------

resource "github_actions_secret" "npm_token" {
  repository      = github_repository.cafe24js.name
  secret_name     = "NPM_TOKEN"
  plaintext_value = var.npm_token
}

resource "github_actions_secret" "gh_pat" {
  repository      = github_repository.cafe24js.name
  secret_name     = "GH_PAT"
  plaintext_value = var.github_pat
}
