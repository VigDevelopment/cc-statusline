import inquirer from 'inquirer'

export interface StatuslineConfig {
  features: string[]
  runtime: 'bash' | 'python' | 'node'
  colors: boolean
  theme: 'minimal' | 'detailed' | 'compact'
  ccusageIntegration: boolean
  logging: boolean
  customEmojis: boolean
}

export async function collectConfiguration(): Promise<StatuslineConfig> {
  console.log('🚀 Welcome to cc-statusline! Let\'s create your custom Claude Code statusline.\n')

  // Step 1: Core features (most users want these)
  const coreConfig = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'coreFeatures',
      message: '📋 Select core features for your statusline:',
      choices: [
        { name: '📁 Working Directory', value: 'directory', checked: true },
        { name: '🌿 Git Branch', value: 'git', checked: true },
        { name: '🤖 Model Name', value: 'model', checked: true },
        { name: '🧠 Context Window (remaining %)', value: 'context', checked: true }
      ],
      validate: (answer: string[]) => {
        if (answer.length < 1) {
          return 'You must choose at least one core feature.'
        }
        return true
      }
    }
  ])

  // Step 2: Usage tracking
  const usageConfig = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'enableUsage',
      message: '💰 Enable cost and session tracking? (requires ccusage)',
      default: true
    }
  ])

  let usageFeatures: string[] = []
  if (usageConfig.enableUsage) {
    const usageDetails = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'usageFeatures',
        message: '📊 Which usage features would you like?',
        choices: [
          { name: '💵 Cost & Hourly Rate', value: 'usage', checked: true },
          { name: '⌛ Session Time Remaining', value: 'session', checked: true },
          { name: '📊 Token Statistics', value: 'tokens', checked: false },
          { name: '⚡ Burn Rate (tokens/min)', value: 'burnrate', checked: false }
        ]
      }
    ])
    usageFeatures = usageDetails.usageFeatures
  }

  // Step 3: Display options
  const displayConfig = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'colors',
      message: '🎨 Enable colors and emojis?',
      default: true
    },
    {
      type: 'confirm',
      name: 'logging',
      message: '📝 Enable debug logging? (for troubleshooting)',
      default: false
    }
  ])

  // Combine all selected features
  const allFeatures = [...coreConfig.coreFeatures, ...usageFeatures]

  // Set intelligent defaults
  return {
    features: allFeatures,
    runtime: 'bash',
    colors: displayConfig.colors,
    theme: 'detailed',
    ccusageIntegration: usageConfig.enableUsage,
    logging: displayConfig.logging,
    customEmojis: false
  } as StatuslineConfig
}

export function displayConfigSummary(config: StatuslineConfig): void {
  console.log('\n✅ Configuration Summary:')
  console.log(`   Runtime: ${config.runtime}`)
  console.log(`   Theme: ${config.theme}`)
  console.log(`   Colors: ${config.colors ? '✅' : '❌'}`)
  console.log(`   Features: ${config.features.join(', ')}`)
  
  if (config.ccusageIntegration) {
    console.log('   📊 ccusage integration enabled')
  }
  
  if (config.logging) {
    console.log('   📝 Debug logging enabled')
  }
  
  console.log('')
}