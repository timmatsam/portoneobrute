import {
  type IconType,
  SiAstro,
  SiBootstrap,
  SiCss3,
  SiCypress,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiRadixui,
  SiReact,
  SiRedis,
  SiRedux,
  SiRubyonrails,
  SiSass,
  SiShadcnui,
  SiStorybook,
  SiStripe,
  SiTailwindcss,
  SiTestinglibrary,
  SiTrpc,
  SiTypescript,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Frontend',
      skills: [
        { skill: 'typescript', icon: SiTypescript },
        { skill: 'react', icon: SiReact },
        { skill: 'nextjs', icon: SiNextdotjs },
        { skill: 'html', icon: SiHtml5 },
        { skill: 'css', icon: SiCss3 },
        { skill: 'tailwind', icon: SiTailwindcss },
        { skill: 'graphql', icon: SiGraphql },
        { skill: 'stripe', icon: SiStripe },
      ],
    },
    {
      field: 'Design Systems',
      skills: [
        { skill: 'shadcn', icon: SiShadcnui },
        { skill: 'bootstrap', icon: SiBootstrap },
        { skill: 'radix', icon: SiRadixui },
      ],
    },
    {
      field: 'Testing',
      skills: [
        { skill: 'storybook', icon: SiStorybook },
        { skill: 'cypress', icon: SiCypress },
        { skill: 'jest', icon: SiJest },
        { skill: 'react-testing-library', icon: SiTestinglibrary },
      ],
    },
    {
      field: 'Backend',
      skills: [
        {
          skill: 'nodejs',
          icon: SiNodedotjs,
        },
        {
          skill: 'postgresql',
          icon: SiPostgresql,
        },
        {
          skill: 'firebase',
          icon: SiFirebase,
        },
        {
          skill: 'mysql',
          icon: SiMysql,
        },
        { skill: 'trpc', icon: SiTrpc },
        { skill: 'express', icon: SiExpress },
      ],
    },
  ]

export default SKILLS