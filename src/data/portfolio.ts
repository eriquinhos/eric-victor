export type Locale = 'pt-BR' | 'en' | 'es' | 'fr'

export type ProjectId =
  | 'instock'
  | 'spotify-daily-drive'
  | 'k-means-1d'
  | 'bike-rental'
  | 'mips32'

export type WorkProjectId =
  | 'aircraft-ml-classification'
  | 'aircraft-data-etl'
  | 'manual-classification-tool'
  | 'power-platform-automation'
  | 'sharepoint-intranets'
  | 'power-platform-coe'

export type ExperienceId = 'embraer' | 'kinix' | 'shopping-brasil' | 'cite'

export type SkillGroupId =
  | 'data-ml'
  | 'backend'
  | 'frontend'
  | 'cloud-devops'
  | 'databases'
  | 'low-code'
  | 'hardware'

export type PortfolioProject = {
  id: ProjectId
  name: string
  stack: string[]
  href: string
}

export type WorkProject = {
  id: WorkProjectId
  experienceId: ExperienceId
  stack: string[]
}

export type Experience = {
  company: string
}

export type SkillGroup = {
  id: SkillGroupId
  skills: string[]
}

export const projects: PortfolioProject[] = [
  {
    id: 'instock',
    name: 'InStock',
    stack: ['Python', 'Django', 'MySQL', 'Pytest', 'GitHub Actions'],
    href: 'https://github.com/eriquinhos/in-stock',
  },
  {
    id: 'spotify-daily-drive',
    name: 'Spotify Personalized Daily Drive',
    stack: ['Python', 'Spotify API', 'OAuth2', 'GitHub Actions', 'Pytest'],
    href: 'https://github.com/eriquinhos/spotify-personalized-daily-drive',
  },
  {
    id: 'k-means-1d',
    name: 'K-means 1D',
    stack: ['K-means', 'OpenMP', 'CUDA', 'MPI', 'C/C++'],
    href: 'https://github.com/eriquinhos/k-means-1d',
  },
  {
    id: 'bike-rental',
    name: 'Aluguel de bicicletas',
    stack: ['TypeScript', 'Node.js', 'Prisma', 'Docker'],
    href: 'https://github.com/eriquinhos/university/tree/main/poo-bike-rent',
  },
  {
    id: 'mips32',
    name: 'Processador MIPS32 multiciclo',
    stack: ['MIPS32', 'SystemVerilog'],
    href: 'https://github.com/eriquinhos/mips32',
  },
]

export const workProjects: WorkProject[] = [
  {
    id: 'aircraft-ml-classification',
    experienceId: 'embraer',
    stack: ['Python', 'pandas', 'scikit-learn'],
  },
  {
    id: 'aircraft-data-etl',
    experienceId: 'embraer',
    stack: ['Python', 'ETL', 'XML', 'CSV'],
  },
  {
    id: 'manual-classification-tool',
    experienceId: 'embraer',
    stack: ['AWS', 'FastAPI', 'Next.js'],
  },
  {
    id: 'power-platform-automation',
    experienceId: 'kinix',
    stack: ['Power Apps', 'Power Automate', 'SAP', 'NFC', 'Azure AI', 'AI Builder'],
  },
  {
    id: 'sharepoint-intranets',
    experienceId: 'kinix',
    stack: ['SharePoint Online', 'Azure'],
  },
  {
    id: 'power-platform-coe',
    experienceId: 'kinix',
    stack: ['Power Platform'],
  },
]

export const experience: Record<ExperienceId, Experience> = {
  embraer: { company: 'Embraer S.A.' },
  kinix: { company: 'Kinix Soluções de Tecnologia Ltda.' },
  'shopping-brasil': { company: 'Shopping Brasil Tecnologia da Informação' },
  cite: { company: 'CITE · Prefeitura de São José dos Campos' },
}

export const experienceOrder: ExperienceId[] = ['embraer', 'kinix', 'shopping-brasil', 'cite']

export const skillGroups: SkillGroup[] = [
  {
    id: 'data-ml',
    skills: ['Python', 'pandas', 'scikit-learn', 'ETL', 'XML/CSV', 'NumPy', 'R', 'Power BI'],
  },
  {
    id: 'backend',
    skills: ['FastAPI', 'Django', 'APIs REST', 'Python', 'Prisma', 'Node.js', 'SQLAlchemy'],
  },
  {
    id: 'frontend',
    skills: ['Next.js', 'JavaScript', 'HTML', 'CSS', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'cloud-devops',
    skills: ['AWS', 'Azure', 'Git', 'GitHub Actions', 'CI/CD', 'Docker', 'Linux', 'Bitbucket', 'Jira'],
  },
  {
    id: 'databases',
    skills: ['SQL', 'MySQL', 'PostgreSQL', 'Oracle DB', 'MariaDB'],
  },
  {
    id: 'low-code',
    skills: ['Power Apps', 'Power Automate', 'SharePoint Online', 'Azure AI', 'AI Builder', 'SAP', 'Dataverse', 'Copilot Studio'],
  },
  {
    id: 'hardware',
    skills: ['SystemVerilog', 'FPGA', 'ModelSim', 'Quartus', 'Verilog HDL', 'MIPS Assembly'],
  },
]

export const contact = {
  email: 'ericvictor.contato@gmail.com',
  github: 'https://github.com/eriquinhos',
  linkedin: 'https://www.linkedin.com/in/eric-victor-silva/',
}
