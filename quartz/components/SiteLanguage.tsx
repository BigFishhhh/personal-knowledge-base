import { FullSlug, resolveRelative } from "../util/path"
import { QuartzComponent } from "./types"

export const SiteTitle: QuartzComponent = ({ cfg, fileData }) => {
  const slug = fileData.slug!
  const home = fileData.frontmatter?.lang === "zh-CN" ? "zh/index" : "index"

  return (
    <h2 class="page-title">
      <a href={resolveRelative(slug, home as FullSlug)}>{cfg.pageTitle}</a>
    </h2>
  )
}

export const LanguageSwitch: QuartzComponent = ({ fileData, allFiles }) => {
  const slug = fileData.slug!
  const isChinese = fileData.frontmatter?.lang === "zh-CN"
  const alternateSlug = isChinese ? slug.replace(/^zh\//, "") : `zh/${slug}`
  const alternate = allFiles.find((page) => page.slug === alternateSlug)
  if (!alternate?.slug || alternate === fileData) return null

  const language = isChinese ? "en" : "zh-CN"
  return (
    <a
      class="language-switch"
      href={resolveRelative(slug, alternate.slug)}
      hrefLang={language}
      lang={language}
      aria-label={isChinese ? "Read in English" : "切换到中文"}
    >
      {isChinese ? "EN" : "中文"}
    </a>
  )
}
