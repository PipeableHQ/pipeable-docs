export const sampleCode = `try? await page.goto("https://news.ycombinator.com", waitUntil: .networkidle)

let searchForm = try await page.waitForXPath(
    "//form[contains(@action, 'hn.algolia.com')]", visible: true
)

let textAreaEl = try await searchForm?.querySelector("input[type='text']")

try await textAreaEl!.type("web automation", delay: 50)

try await page.submitActiveForm()

try await page.waitForURL { url in url.contains("hn.algolia") }

try await page.waitForSelector(".Story_title", visible: true)

let stories = try await page.querySelectorAll(".Story_title a > span")

var storyTitles: [String] = []
for story in stories {
    if let title = try await story.textContent() {
        storyTitles.append(title)
    }
}
print(storyTitles)
`;