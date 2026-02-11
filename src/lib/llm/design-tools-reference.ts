// DesignTools HTML Structure Reference
// This file contains templates and mappings for generating Canvas content
// with DesignTools (DesignPlus) formatting

export interface ThemeConfig {
  wrapperClass: string;
  headerClass: string;
}

export const themeConfigs: Record<string, ThemeConfig> = {
  "dp-flat-sections-2": {
    wrapperClass: "dp-wrapper dp-flat-sections variation-2",
    headerClass: "dp-header dp-flat-sections variation-2",
  },
  "dp-rounded-headings": {
    wrapperClass: "dp-wrapper dp-rounded-headings",
    headerClass: "dp-header dp-rounded-headings",
  },
  "dp-circle-left": {
    wrapperClass: "dp-wrapper dp-circle-left",
    headerClass: "dp-header dp-circle-left",
  },
};

// Icon mappings for common content sections
export const sectionIcons: Record<string, string> = {
  objectives: "fa-bullseye",
  "learning-objectives": "fa-bullseye",
  readings: "fa-book",
  reading: "fa-book",
  resources: "fa-paperclip",
  lectures: "fa-chalkboard-teacher",
  lecture: "fa-chalkboard-teacher",
  presentations: "fa-chalkboard-teacher",
  videos: "fa-photo-video",
  video: "fa-photo-video",
  assignments: "fa-edit",
  assignment: "fa-edit",
  activities: "fa-tasks",
  discussions: "fa-comments",
  discussion: "fa-comments",
  overview: "fa-align-justify",
  introduction: "fa-align-justify",
  help: "fa-question-circle",
  support: "fa-question-circle",
  important: "fa-info-circle",
  tips: "fa-lightbulb",
  warning: "fa-exclamation-triangle",
  checklist: "fa-check",
  quiz: "fa-question",
  exam: "fa-clipboard-list",
};

// Generate the DesignTools formatting guide for LLM prompts
export function getDesignToolsFormattingGuide(theme: string = "dp-flat-sections-2"): string {
  const config = themeConfigs[theme] || themeConfigs["dp-flat-sections-2"];

  return `
## HTML Formatting Requirements (DesignTools)

All page content MUST use DesignTools HTML structure for proper styling in Canvas.

### Page Wrapper Structure
Wrap ALL page content in this structure:

<div id="dp-wrapper" class="${config.wrapperClass}">
    <header class="${config.headerClass}">
        <h2 class="dp-heading">
            <span class="dp-header-pre">
                <span class="dp-header-pre-1">Module</span>
                <span class="dp-header-pre-2">{MODULE_NUMBER}</span>
            </span>
            <span class="dp-header-title">{PAGE_TITLE}</span>
        </h2>
    </header>
    <div class="dp-content-block">
        {CONTENT_HERE}
    </div>
</div>

### Content Blocks
Group related content in dp-content-block divs:
<div class="dp-content-block">
    <h3 class="dp-has-icon"><i class="dp-icon fas fa-bullseye" aria-hidden="true"><span class="dp-icon-content" style="display: none;">&nbsp;</span></i>Section Title</h3>
    <p>Content paragraph...</p>
</div>

### Section Heading Icons
Use these icons for section headings (wrap in <h3 class="dp-has-icon">):
- Objectives/Goals: <i class="dp-icon fas fa-bullseye" aria-hidden="true"><span class="dp-icon-content" style="display: none;">&nbsp;</span></i>
- Readings: <i class="dp-icon fas fa-book" aria-hidden="true"><span class="dp-icon-content" style="display: none;">&nbsp;</span></i>
- Lectures/Presentations: <i class="dp-icon fas fa-chalkboard-teacher" aria-hidden="true"><span class="dp-icon-content" style="display: none;">&nbsp;</span></i>
- Videos: <i class="dp-icon fas fa-photo-video" aria-hidden="true"><span class="dp-icon-content" style="display: none;">&nbsp;</span></i>
- Assignments/Activities: <i class="dp-icon fas fa-edit" aria-hidden="true"><span class="dp-icon-content" style="display: none;">&nbsp;</span></i>
- Resources: <i class="dp-icon fas fa-paperclip" aria-hidden="true"><span class="dp-icon-content" style="display: none;">&nbsp;</span></i>
- Help/Support: <i class="dp-icon fas fa-question-circle" aria-hidden="true"><span class="dp-icon-content" style="display: none;">&nbsp;</span></i>

### Callout Boxes
Use for important notes, tips, or warnings:

<div class="dp-callout dp-callout-placeholder card dp-callout-position-default dp-callout-type-info dp-callout-color-dp-primary">
    <div class="dp-callout-side-emphasis"><i class="dp-icon fas fa-info-circle dp-default-icon"><span class="dp-icon-content" style="display: none;">&nbsp;</span></i></div>
    <div class="card-body">
        <h3 class="card-title">{CALLOUT_TITLE}</h3>
        <p class="card-text">{CALLOUT_CONTENT}</p>
    </div>
</div>

Callout types: dp-callout-type-info, dp-callout-type-tip, dp-callout-type-warning
Callout colors: dp-callout-color-dp-primary, dp-callout-color-dp-secondary, dp-callout-color-dp-accent

### Accordions/Collapsible Sections
Use for expandable content like FAQs or detailed instructions:

<div class="dp-panels-wrapper dp-accordion-default">
    <div class="dp-panel-group">
        <h4 class="dp-panel-heading">{SECTION_TITLE}</h4>
        <div class="dp-panel-content">
            {COLLAPSED_CONTENT}
        </div>
    </div>
</div>

### Discussion Content Format
For discussion items, put DesignTools HTML in the "content" field. Do NOT use dp-wrapper or dp-header (Canvas shows the title separately). Use dp-content-block sections and callouts:

<div class="dp-content-block">
    <h3 class="dp-has-icon"><i class="dp-icon fas fa-comments" aria-hidden="true"><span class="dp-icon-content" style="display: none;">&nbsp;</span></i>Discussion Overview</h3>
    <p>{Context paragraph introducing the discussion topic}</p>
</div>
<div class="dp-content-block">
    <h3 class="dp-has-icon"><i class="dp-icon fas fa-edit" aria-hidden="true"><span class="dp-icon-content" style="display: none;">&nbsp;</span></i>Guiding Questions</h3>
    <ol>
        <li>{Question 1}</li>
        <li>{Question 2}</li>
        <li>{Question 3}</li>
    </ol>
</div>
<div class="dp-callout dp-callout-placeholder card dp-callout-position-default dp-callout-type-info dp-callout-color-dp-primary">
    <div class="dp-callout-side-emphasis"><i class="dp-icon fas fa-info-circle dp-default-icon"><span class="dp-icon-content" style="display: none;">&nbsp;</span></i></div>
    <div class="card-body">
        <h3 class="card-title">Participation Requirements</h3>
        <p class="card-text">{Requirements like reply count, word count, etc.}</p>
    </div>
</div>

### Important Rules
1. ALWAYS include the dp-icon-content span inside icons: <span class="dp-icon-content" style="display: none;">&nbsp;</span>
2. ALWAYS include aria-hidden="true" on icon elements
3. Use dp-content-block to separate major sections
4. Keep the header structure exactly as shown (dp-header-pre-1, dp-header-pre-2, dp-header-title)
5. Replace {MODULE_NUMBER}, {PAGE_TITLE}, etc. with actual values
6. For discussions: put DesignTools HTML in "content" field, plain text summary in "prompt" field
`;
}

// Generate a complete page wrapper
export function generatePageWrapper(
  theme: string,
  moduleNumber: number,
  pageTitle: string,
  content: string
): string {
  const config = themeConfigs[theme] || themeConfigs["dp-flat-sections-2"];

  return `<div id="dp-wrapper" class="${config.wrapperClass}">
    <header class="${config.headerClass}">
        <h2 class="dp-heading">
            <span class="dp-header-pre">
                <span class="dp-header-pre-1">Module</span>
                <span class="dp-header-pre-2">${moduleNumber}</span>
            </span>
            <span class="dp-header-title">${pageTitle}</span>
        </h2>
    </header>
    ${content}
</div>`;
}

// Generate a content block with optional icon
export function generateContentBlock(
  title: string,
  content: string,
  iconType?: string
): string {
  const icon = iconType ? sectionIcons[iconType.toLowerCase()] || "fa-align-justify" : null;

  const headingHtml = icon
    ? `<h3 class="dp-has-icon"><i class="dp-icon fas ${icon}" aria-hidden="true"><span class="dp-icon-content" style="display: none;">&nbsp;</span></i>${title}</h3>`
    : `<h3>${title}</h3>`;

  return `<div class="dp-content-block">
    ${headingHtml}
    ${content}
</div>`;
}

// Generate a callout box
export function generateCallout(
  title: string,
  content: string,
  type: "info" | "tip" | "warning" = "info"
): string {
  const iconMap = {
    info: "fa-info-circle",
    tip: "fa-lightbulb",
    warning: "fa-exclamation-triangle",
  };

  return `<div class="dp-callout dp-callout-placeholder card dp-callout-position-default dp-callout-type-${type} dp-callout-color-dp-primary">
    <div class="dp-callout-side-emphasis"><i class="dp-icon fas ${iconMap[type]} dp-default-icon"><span class="dp-icon-content" style="display: none;">&nbsp;</span></i></div>
    <div class="card-body">
        <h3 class="card-title">${title}</h3>
        <p class="card-text">${content}</p>
    </div>
</div>`;
}
