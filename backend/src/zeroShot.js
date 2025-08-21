export function buildZeroShotPrompt(paperText) {
    return `
  You are an academic research assistant.
  
  Task (Zero-Shot): Without any examples, process the following research paper text and return output in valid JSON format with these exact keys:
  - "abstract": concise abstract (<=150 words, neutral, precise)
  - "keyInsights": 3 bullet points, each <=25 words
  - "citationAPA": one APA-style citation (infer if missing; mark unknown as "[Unknown]")
  
  Rules:
  - Output must be JSON only (no markdown, no commentary).
  - Ensure correctness of sections.
  - Be efficient: avoid unnecessary verbosity.
  - Be scalable: handle long paper texts consistently.
  
  Paper Content:
  ${paperText}
  `;
  }
  