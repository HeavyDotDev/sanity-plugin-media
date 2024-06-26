import {ImageIcon} from '@sanity/icons'
import type {AssetSource} from 'sanity'
import {definePlugin, Tool as SanityTool} from 'sanity'
import FormBuilderTool from './components/FormBuilderTool'
import Tool from './components/Tool'
import projectTag from './schemas/project'
import mediaTag from './schemas/tag'

const plugin = {
  icon: ImageIcon,
  name: 'media',
  title: 'Media'
}

export const mediaAssetSource: AssetSource = {
  ...plugin,
  component: FormBuilderTool
}

const tool = {
  ...plugin,
  component: Tool
} as SanityTool

export const media = definePlugin({
  name: 'media',
  form: {
    file: {
      assetSources: prev => {
        return [...prev, mediaAssetSource]
      }
    },
    image: {
      assetSources: prev => {
        return [...prev, mediaAssetSource]
      }
    }
  },
  schema: {
    types: [mediaTag, projectTag]
  },
  tools: prev => {
    return [...prev, tool]
  }
})
