import Flex from "./quartz/components/Flex"
import { componentRegistry } from "./quartz/components/registry"
import { QuartzComponentConstructor } from "./quartz/components/types"
import { LanguageSwitch, SiteTitle } from "./quartz/components/SiteLanguage"
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig()
export default config

function toolbarComponent(plugin: string) {
  const registered = componentRegistry.get(plugin)
  if (!registered) throw new Error(`Missing toolbar component: ${plugin}`)
  return componentRegistry.instantiate(registered.component as QuartzComponentConstructor)
}

const sidebar = [
  SiteTitle,
  Flex({
    gap: "0.5rem",
    components: [
      { Component: toolbarComponent("@quartz-community/search") },
      { Component: LanguageSwitch },
      { Component: toolbarComponent("@quartz-community/darkmode") },
    ],
  }),
]

export const layout = await loadQuartzLayout({
  defaults: { left: sidebar },
  byPageType: {
    folder: { left: sidebar },
  },
})
