---
title: "Memories"
description: "Shared stories, photos, and videos celebrating Shane."
type: landing

sections:
  - block: markdown
    content:
      text: |
        <div class="not-prose" style="max-width:740px; margin:0 auto; padding:0 0.5rem;">
          <h1 class="text-5xl font-bold text-gray-900 dark:text-white" style="margin-bottom:1.25rem;">
            Memories
          </h1>

          <p class="text-lg text-gray-600 dark:text-gray-400" style="line-height:1.75; margin-bottom:1rem;">
            Welcome to <em>Memories</em> — a collection of stories from friends and family.
          </p>

          <p class="text-lg text-gray-600 dark:text-gray-400" style="line-height:1.75; margin-bottom:0;">
            Submissions may be lightly edited for clarity and formatting before publishing.
          </p>
        </div>

        <style>
          .relative.overflow-hidden.aspect-\[16\/9\] {
            display: none !important;
          }
        </style>

    design:
      spacing:
        padding: ['3rem', '0', '1.5rem', '0']

  - block: collection
    content:
      filters:
        folders:
          - memories
      count: 0
      sort_by: "Date"
      sort_ascending: false

    design:
      view: card
      columns: 1
      show_date: true
      show_read_time: true
      show_read_more: true
      spacing:
        padding: ['1rem', '0', '4rem', '0']
---
