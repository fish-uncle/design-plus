export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "pageClass": "home-page"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "About Me",
      "slug": "about-me",
      "children": []
    },
    {
      "level": 2,
      "title": "News",
      "slug": "news",
      "children": []
    },
    {
      "level": 2,
      "title": "Education & Experiences",
      "slug": "education-experiences",
      "children": []
    },
    {
      "level": 2,
      "title": "Projects",
      "slug": "projects",
      "children": []
    },
    {
      "level": 2,
      "title": "Awards & Honors",
      "slug": "awards-honors",
      "children": [
        {
          "level": 3,
          "title": "Contests",
          "slug": "contests",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "README.md",
  "git": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
