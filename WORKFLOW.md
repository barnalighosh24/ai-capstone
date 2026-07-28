# AI Workflow Comparison

## Round 1 (Vague Prompt)

I asked the AI to build a React settings form using a simple prompt with very little guidance. The AI generated a working interface containing a name field, email field, notification checkbox, language dropdown, theme selection, and save button. The application worked, but it lacked validation, accessibility improvements, and proper user feedback.

## Round 2 (Precise Prompt)

I provided a much more detailed prompt. I specified validation rules, accessibility requirements, responsive layout improvements, disabled submit behavior, inline error messages, and required verification using `npm run build`.

The AI generated a significantly better implementation.

## Comparison

### Correctness

Round 1 created a working UI but accepted invalid input.

Round 2 validates the name and email before allowing submission.

### Accessibility

Round 1 had minimal accessibility support.

Round 2 added proper labels, ARIA attributes, and screen-reader friendly error messages.

### Edge Cases

Round 1 allowed empty names and invalid email addresses.

Round 2 prevents invalid submissions and displays clear error messages.

### Review Effort

Round 1 required manual review to identify missing features.

Round 2 required much less manual correction because the requirements were explicitly stated.

## AI Mistake I Found

The first AI-generated version did not include validation or accessibility improvements. Those had to be explicitly requested in the second prompt.

## Conclusion

Providing a precise prompt produced a higher quality implementation with better correctness, accessibility, and usability while reducing review effort.