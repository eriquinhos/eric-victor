import type {
  ExperienceId,
  Locale,
  ProjectId,
  SkillGroupId,
  WorkProjectId,
} from './portfolio'

type ProjectCopy = {
  category: string
  summary: string
  problem: string
  architecture: string
  outcome: string
}

type WorkProjectCopy = {
  title: string
  summary: string
}

type ExperienceCopy = {
  role: string
  period: string
  details: string[]
}

export type Translation = {
  htmlLang: string
  metadata: {
    title: string
    description: string
  }
  skipLink: string
  languageLabel: string
  navigationLabel: string
  nav: {
    about: string
    projects: string
    experience: string
    skills: string
    contact: string
  }
  hero: {
    subtitle: string
    summary: string
    profileAlt: string
    projectsCta: string
    cvCta: string
    cvLanguage: string
    github: string
    linkedin: string
  }
  about: {
    title: string
    paragraphs: string[]
    education: string
    degree: string
    degreeStatus: string
    academicBase: string
    academicBaseDegree: string
    academicBaseStatus: string
  }
  projectSection: {
    workTitle: string
    workDescription: string
    personalTitle: string
    personalDescription: string
    problem: string
    implementation: string
    outcome: string
    repository: string
    allRepositories: string
  }
  workProjects: Record<WorkProjectId, WorkProjectCopy>
  projects: Record<ProjectId, ProjectCopy>
  experience: {
    title: string
    description: string
    entries: Record<ExperienceId, ExperienceCopy>
  }
  skills: {
    title: string
    description: string
    groups: Record<SkillGroupId, string>
  }
  opportunities: {
    title: string
    description: string
    items: string[]
  }
  contact: {
    title: string
    description: string
    cvCta: string
  }
  footer: string
}

export const languageOptions: { locale: Locale; label: string }[] = [
  { locale: 'pt-BR', label: 'Português' },
  { locale: 'en', label: 'English' },
  { locale: 'es', label: 'Español' },
  { locale: 'fr', label: 'Français' },
]

export const translations = {
  'pt-BR': {
    htmlLang: 'pt-BR',
    metadata: {
      title: 'Eric Victor | Dados e desenvolvimento de software',
      description: 'Portfólio de Eric Victor: dados, machine learning, backend Python, desenvolvimento full-stack e automação.',
    },
    skipLink: 'Pular para o conteúdo',
    languageLabel: 'Idioma',
    navigationLabel: 'Navegação principal',
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      experience: 'Experiência',
      skills: 'Skills',
      contact: 'Contato',
    },
    hero: {
      subtitle: 'Desenvolvedor com foco em dados, backend e full-stack',
      summary: 'Trabalho com pipelines de dados, modelos de classificação em Python, APIs e aplicações web.',
      profileAlt: 'Eric Victor diante de um motor aeronáutico',
      projectsCta: 'Ver projetos',
      cvCta: 'Baixar currículo',
      cvLanguage: 'PDF em português',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    about: {
      title: 'Tecnologia aplicada a problemas concretos',
      paragraphs: [
        'Estudo Engenharia da Computação na UNIFESP e trabalho com análise de dados, modelos de classificação e automação de ETL. Na Embraer, desenvolvo soluções para organizar dados aeronáuticos e apoiar fluxos de classificação.',
        'Minha experiência também inclui desenvolvimento backend e aplicações web com FastAPI e Next.js, além de automações corporativas com Power Platform, Azure AI e SharePoint.',
      ],
      education: 'Formação',
      degree: 'Engenharia da Computação',
      degreeStatus: 'UNIFESP · em andamento',
      academicBase: 'Base acadêmica',
      academicBaseDegree: 'Ciência e Tecnologia',
      academicBaseStatus: 'Bacharelado Interdisciplinar · UNIFESP',
    },
    projectSection: {
      workTitle: 'Projetos e entregas profissionais',
      workDescription: 'Soluções desenvolvidas em contexto de trabalho. As descrições se limitam ao escopo que pode ser compartilhado.',
      personalTitle: 'Projetos acadêmicos e pessoais',
      personalDescription: 'Repositórios que mostram aplicações em dados, software, automação e hardware.',
      problem: 'Problema',
      implementation: 'Implementação',
      outcome: 'Entrega',
      repository: 'Ver repositório',
      allRepositories: 'Explorar todos os repositórios no GitHub',
    },
    workProjects: {
      'aircraft-ml-classification': {
        title: 'Classificação de dados aeronáuticos com machine learning',
        summary: 'Modelos para classificar dados de interrupções, logbooks e remoções em aeronaves, usando Python, pandas e scikit-learn.',
      },
      'aircraft-data-etl': {
        title: 'Automação de ETL para dados aeronáuticos',
        summary: 'Scheduler para classificar seções de dados aeronáuticos, com tratamento de arquivos XML e CSV e parsers específicos.',
      },
      'manual-classification-tool': {
        title: 'Ferramenta para classificação manual',
        summary: 'Aplicação para apoiar a classificação manual de seções de dados, com foco em interrupções, usando AWS, FastAPI e Next.js.',
      },
      'power-platform-automation': {
        title: 'Aplicativos e automações corporativas',
        summary: 'Soluções com Power Apps e Power Automate, incluindo integrações com SAP, leitura de NFC e análise de documentos com Azure AI e AI Builder.',
      },
      'sharepoint-intranets': {
        title: 'Intranets no SharePoint Online',
        summary: 'Desenvolvimento de intranets personalizadas no SharePoint Online e administração de recursos no Azure.',
      },
      'power-platform-coe': {
        title: 'Centro de Excelência do Power Platform',
        summary: 'Implantação e gestão do CoE do Power Platform, com documentação técnica para projetos personalizados.',
      },
    },
    projects: {
      instock: {
        category: 'Full-stack · projeto acadêmico',
        summary: 'Aplicação web para organizar inventário, fornecedores e movimentações de estoque.',
        problem: 'Reúne em um só sistema o cadastro de produtos, entradas e saídas e consultas operacionais.',
        architecture: 'Aplicação Django com banco MySQL, autenticação e controle de acesso. O repositório também registra testes e CI com GitHub Actions.',
        outcome: 'Implementa fluxos de gestão para produtos, fornecedores, movimentações e relatórios.',
      },
      'spotify-daily-drive': {
        category: 'Automação · projeto pessoal',
        summary: 'Automação em Python que monta uma playlist diária com podcasts de notícias e músicas favoritas.',
        problem: 'Evita montar manualmente uma sequência recorrente de episódios e faixas personalizadas.',
        architecture: 'Integração com a Spotify API usando OAuth2. O projeto configura execução agendada pelo GitHub Actions e inclui testes automatizados.',
        outcome: 'Atualiza uma playlist com uma estrutura definida de podcasts e músicas, a partir das preferências da conta.',
      },
      'k-means-1d': {
        category: 'Dados · programação paralela',
        summary: 'Implementações de K-means para dados unidimensionais em diferentes modelos de execução.',
        problem: 'Permite estudar como distribuir o cálculo de agrupamento entre execuções seriais e paralelas.',
        architecture: 'O repositório organiza versões serial, OpenMP, CUDA, MPI e abordagens híbridas, além de relatórios e resultados de benchmark.',
        outcome: 'Reúne versões e resultados de benchmark para comparar estratégias de paralelização.',
      },
      'bike-rental': {
        category: 'Backend · projeto acadêmico',
        summary: 'API REST para as operações principais de um sistema de locação de bicicletas.',
        problem: 'Modela operações e relações entre entidades de um serviço de aluguel.',
        architecture: 'API em TypeScript e JavaScript com Prisma para persistência e Docker para preparar serviços locais.',
        outcome: 'Projeto acadêmico de orientação a objetos com endpoints para as operações centrais.',
      },
      mips32: {
        category: 'Hardware · projeto acadêmico',
        summary: 'Processador MIPS32 multiciclo implementado em SystemVerilog.',
        problem: 'Organiza a execução de instruções em múltiplos ciclos controlados.',
        architecture: 'Implementação modular em SystemVerilog, com unidades de processamento, controle, registradores e memória.',
        outcome: 'Projeto acadêmico disponível para consulta no GitHub.',
      },
    },
    experience: {
      title: 'Experiência profissional',
      description: 'Atuação em dados, desenvolvimento de aplicações, automação e educação.',
      entries: {
        embraer: {
          role: 'Estagiário de Data Analytics',
          period: 'Agosto de 2025 até o momento',
          details: [
            'Desenvolvimento de modelos de machine learning para classificar dados de interrupções, logbooks e remoções em aeronaves com Python, pandas e scikit-learn.',
            'Automação de ETL para classificar seções de dados aeronáuticos, com tratamento de arquivos XML e CSV e parsers específicos.',
            'Desenvolvimento de uma ferramenta de classificação manual com AWS, FastAPI e Next.js.',
          ],
        },
        kinix: {
          role: 'Desenvolvedor Power Platform',
          period: 'Outubro de 2024 a agosto de 2025',
          details: [
            'Criação e manutenção de aplicativos e automações com Power Apps e Power Automate, incluindo integrações com SAP, leitura de NFC e análise de documentos com Azure AI e AI Builder.',
            'Desenvolvimento de intranets no SharePoint Online e administração de recursos no Azure.',
            'Implantação e gestão do Centro de Excelência do Power Platform e produção de documentação técnica.',
          ],
        },
        'shopping-brasil': {
          role: 'Estagiário Tester de Dados',
          period: '2022 a 2023',
          details: [
            'Análise dos resultados de sistemas de IA em comparação com métricas esperadas para identificar inconsistências.',
            'Validação de aplicações e criação de tabelas dinâmicas para apoiar processos operacionais.',
          ],
        },
        cite: {
          role: 'Estagiário em Ciência da Computação',
          period: '2021 a 2022',
          details: [
            'Administração de contas educacionais no Google Workspace e suporte a professores.',
            'Elaboração de relatórios, acompanhamento de projetos educacionais e criação de materiais para iniciativas de Educação Integral.',
          ],
        },
      },
    },
    skills: {
      title: 'Competências por área',
      description: 'Tecnologias com as quais tenho experiência prática.',
      groups: {
        'data-ml': 'Dados e machine learning',
        backend: 'Backend',
        frontend: 'Frontend',
        'cloud-devops': 'Cloud e DevOps',
        databases: 'Bancos de dados',
        'low-code': 'Low-code e automação',
        hardware: 'Hardware',
      },
    },
    opportunities: {
      title: 'Próximos desafios',
      description: 'Busco oportunidades em que eu possa contribuir com engenharia de dados, IA aplicada, backend Python, desenvolvimento full-stack ou automação de processos.',
      items: [
        'Engenharia e Analytics de Dados',
        'Engenharia de Dados Júnior',
        'Ciência de Dados e IA aplicada',
        'Backend Python com Django ou FastAPI',
        'Desenvolvimento full-stack',
        'Automação com Power Platform',
      ],
    },
    contact: {
      title: 'Vamos conversar?',
      description: 'Entre em contato por e-mail ou veja meus projetos e experiências profissionais.',
      cvCta: 'Baixar currículo · PDF em português',
    },
    footer: 'Portfólio profissional',
  },
  en: {
    htmlLang: 'en',
    metadata: {
      title: 'Eric Victor | Data and software development',
      description: 'Eric Victor’s portfolio: data analytics, machine learning, Python backend, full-stack development, and automation.',
    },
    skipLink: 'Skip to content',
    languageLabel: 'Language',
    navigationLabel: 'Main navigation',
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      subtitle: 'Developer focused on data, backend, and full-stack applications',
      summary: 'I work with data pipelines, Python classification models, APIs, and web applications.',
      profileAlt: 'Eric Victor standing in front of an aircraft engine',
      projectsCta: 'View projects',
      cvCta: 'Download résumé',
      cvLanguage: 'PDF in Portuguese',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    about: {
      title: 'Technology applied to practical problems',
      paragraphs: [
        'I study Computer Engineering at UNIFESP and work with data analytics, classification models, and ETL automation. At Embraer, I develop solutions to organize aircraft data and support classification workflows.',
        'My experience also includes backend development and web applications with FastAPI and Next.js, along with business automation using Power Platform, Azure AI, and SharePoint.',
      ],
      education: 'Education',
      degree: 'Computer Engineering',
      degreeStatus: 'UNIFESP · in progress',
      academicBase: 'Academic foundation',
      academicBaseDegree: 'Science and Technology',
      academicBaseStatus: 'Interdisciplinary bachelor’s degree · UNIFESP',
    },
    projectSection: {
      workTitle: 'Projects and work deliverables',
      workDescription: 'Solutions developed as part of my jobs. Descriptions stay within the scope that can be shared.',
      personalTitle: 'Academic and personal projects',
      personalDescription: 'Repositories covering data, software, automation, and hardware.',
      problem: 'Problem',
      implementation: 'Implementation',
      outcome: 'Outcome',
      repository: 'View repository',
      allRepositories: 'Explore all repositories on GitHub',
    },
    workProjects: {
      'aircraft-ml-classification': {
        title: 'Machine learning for aircraft data classification',
        summary: 'Models to classify aircraft interruption, logbook, and removal data using Python, pandas, and scikit-learn.',
      },
      'aircraft-data-etl': {
        title: 'ETL automation for aircraft data',
        summary: 'A scheduler for classifying aircraft data sections, with XML and CSV handling and dedicated parsers.',
      },
      'manual-classification-tool': {
        title: 'Manual classification tool',
        summary: 'An application to support manual classification of data sections, focused on interruptions, built with AWS, FastAPI, and Next.js.',
      },
      'power-platform-automation': {
        title: 'Business apps and automation',
        summary: 'Power Apps and Power Automate solutions, including SAP integrations, NFC reading, and document analysis with Azure AI and AI Builder.',
      },
      'sharepoint-intranets': {
        title: 'SharePoint Online intranets',
        summary: 'Development of custom SharePoint Online intranets and administration of Azure resources.',
      },
      'power-platform-coe': {
        title: 'Power Platform Center of Excellence',
        summary: 'Implementation and management of the Power Platform CoE, with technical documentation for custom projects.',
      },
    },
    projects: {
      instock: {
        category: 'Full-stack · academic project',
        summary: 'A web application for managing inventory, suppliers, and stock movements.',
        problem: 'Brings product records, incoming and outgoing stock, and operational queries into one system.',
        architecture: 'A Django application with MySQL, authentication, and access control. The repository also includes tests and GitHub Actions CI.',
        outcome: 'Implements inventory workflows for products, suppliers, stock movements, and reports.',
      },
      'spotify-daily-drive': {
        category: 'Automation · personal project',
        summary: 'A Python automation that builds a daily playlist from news podcasts and favorite songs.',
        problem: 'Removes the need to manually assemble a recurring sequence of episodes and personalized tracks.',
        architecture: 'Integrates with the Spotify API using OAuth2. GitHub Actions schedules the workflow, and the repository includes automated tests.',
        outcome: 'Updates a playlist with a defined mix of podcasts and songs based on account preferences.',
      },
      'k-means-1d': {
        category: 'Data · parallel computing',
        summary: 'K-means implementations for one-dimensional data across different execution models.',
        problem: 'Explores how clustering calculations can be distributed between serial and parallel execution.',
        architecture: 'The repository includes serial, OpenMP, CUDA, MPI, and hybrid versions, along with reports and benchmark results.',
        outcome: 'Provides implementations and benchmark results for comparing parallelization strategies.',
      },
      'bike-rental': {
        category: 'Backend · academic project',
        summary: 'A REST API for the core operations of a bicycle rental system.',
        problem: 'Models the operations and relationships between entities in a rental service.',
        architecture: 'A TypeScript and JavaScript API using Prisma for persistence and Docker to prepare local services.',
        outcome: 'An object-oriented academic project with endpoints for core operations.',
      },
      mips32: {
        category: 'Hardware · academic project',
        summary: 'A multicycle MIPS32 processor implemented in SystemVerilog.',
        problem: 'Organizes instruction execution across multiple controlled cycles.',
        architecture: 'A modular SystemVerilog implementation with processing, control, register, and memory units.',
        outcome: 'An academic project available on GitHub.',
      },
    },
    experience: {
      title: 'Work experience',
      description: 'Work across data, application development, automation, and education.',
      entries: {
        embraer: {
          role: 'Data Analytics Intern',
          period: 'August 2025 to present',
          details: [
            'Developed machine learning models to classify aircraft interruption, logbook, and removal data with Python, pandas, and scikit-learn.',
            'Automated ETL to classify aircraft data sections, handling XML and CSV files with dedicated parsers.',
            'Developed a manual classification tool with AWS, FastAPI, and Next.js.',
          ],
        },
        kinix: {
          role: 'Power Platform Developer',
          period: 'October 2024 to August 2025',
          details: [
            'Built and maintained Power Apps and Power Automate solutions, including SAP integrations, NFC reading, and document analysis with Azure AI and AI Builder.',
            'Developed SharePoint Online intranets and administered Azure resources.',
            'Implemented and managed the Power Platform Center of Excellence and wrote technical documentation.',
          ],
        },
        'shopping-brasil': {
          role: 'Data Tester Intern',
          period: '2022 to 2023',
          details: [
            'Compared AI system results with expected metrics to identify inconsistencies.',
            'Validated applications and created pivot tables to support operational processes.',
          ],
        },
        cite: {
          role: 'Computer Science Intern',
          period: '2021 to 2022',
          details: [
            'Managed educational accounts in Google Workspace and supported teachers.',
            'Prepared reports, followed educational projects, and created materials for full-time education initiatives.',
          ],
        },
      },
    },
    skills: {
      title: 'Skills by area',
      description: 'Technologies I have hands-on experience with.',
      groups: {
        'data-ml': 'Data and machine learning',
        backend: 'Backend',
        frontend: 'Frontend',
        'cloud-devops': 'Cloud and DevOps',
        databases: 'Databases',
        'low-code': 'Low-code and automation',
        hardware: 'Hardware',
      },
    },
    opportunities: {
      title: 'What I’m looking for',
      description: 'I’m looking for opportunities to contribute to data engineering, applied AI, Python backend, full-stack development, or process automation.',
      items: [
        'Data Engineering and Analytics',
        'Junior Data Engineering',
        'Data Science and applied AI',
        'Python backend with Django or FastAPI',
        'Full-stack development',
        'Power Platform automation',
      ],
    },
    contact: {
      title: 'Get in touch',
      description: 'Email me or take a look at my projects and work experience.',
      cvCta: 'Download résumé · Portuguese PDF',
    },
    footer: 'Professional portfolio',
  },
  es: {
    htmlLang: 'es',
    metadata: {
      title: 'Eric Victor | Datos y desarrollo de software',
      description: 'Portafolio de Eric Victor: análisis de datos, machine learning, backend con Python, desarrollo full-stack y automatización.',
    },
    skipLink: 'Saltar al contenido',
    languageLabel: 'Idioma',
    navigationLabel: 'Navegación principal',
    nav: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      experience: 'Experiencia',
      skills: 'Habilidades',
      contact: 'Contacto',
    },
    hero: {
      subtitle: 'Desarrollador enfocado en datos, backend y aplicaciones full-stack',
      summary: 'Trabajo con pipelines de datos, modelos de clasificación en Python, APIs y aplicaciones web.',
      profileAlt: 'Eric Victor delante de un motor aeronáutico',
      projectsCta: 'Ver proyectos',
      cvCta: 'Descargar CV',
      cvLanguage: 'PDF en portugués',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    about: {
      title: 'Tecnología aplicada a problemas concretos',
      paragraphs: [
        'Estudio Ingeniería Informática en la UNIFESP y trabajo con análisis de datos, modelos de clasificación y automatización de ETL. En Embraer, desarrollo soluciones para organizar datos aeronáuticos y apoyar flujos de clasificación.',
        'Mi experiencia también incluye desarrollo backend y aplicaciones web con FastAPI y Next.js, además de automatización empresarial con Power Platform, Azure AI y SharePoint.',
      ],
      education: 'Formación',
      degree: 'Ingeniería Informática',
      degreeStatus: 'UNIFESP · en curso',
      academicBase: 'Formación académica',
      academicBaseDegree: 'Ciencia y Tecnología',
      academicBaseStatus: 'Grado interdisciplinario · UNIFESP',
    },
    projectSection: {
      workTitle: 'Proyectos y entregas profesionales',
      workDescription: 'Soluciones desarrolladas en el trabajo. Las descripciones se limitan a lo que se puede compartir.',
      personalTitle: 'Proyectos académicos y personales',
      personalDescription: 'Repositorios que muestran aplicaciones en datos, software, automatización y hardware.',
      problem: 'Problema',
      implementation: 'Implementación',
      outcome: 'Resultado',
      repository: 'Ver repositorio',
      allRepositories: 'Ver todos los repositorios en GitHub',
    },
    workProjects: {
      'aircraft-ml-classification': {
        title: 'Clasificación de datos aeronáuticos con machine learning',
        summary: 'Modelos para clasificar datos de interrupciones, logbooks y remociones de aeronaves con Python, pandas y scikit-learn.',
      },
      'aircraft-data-etl': {
        title: 'Automatización ETL para datos aeronáuticos',
        summary: 'Scheduler para clasificar secciones de datos aeronáuticos, procesar archivos XML y CSV y utilizar parsers específicos.',
      },
      'manual-classification-tool': {
        title: 'Herramienta de clasificación manual',
        summary: 'Aplicación para apoyar la clasificación manual de secciones de datos, con foco en interrupciones, desarrollada con AWS, FastAPI y Next.js.',
      },
      'power-platform-automation': {
        title: 'Aplicaciones y automatizaciones empresariales',
        summary: 'Soluciones con Power Apps y Power Automate, incluidas integraciones con SAP, lectura NFC y análisis de documentos con Azure AI y AI Builder.',
      },
      'sharepoint-intranets': {
        title: 'Intranets en SharePoint Online',
        summary: 'Desarrollo de intranets personalizadas en SharePoint Online y administración de recursos de Azure.',
      },
      'power-platform-coe': {
        title: 'Centro de Excelencia de Power Platform',
        summary: 'Implementación y gestión del CoE de Power Platform, con documentación técnica para proyectos personalizados.',
      },
    },
    projects: {
      instock: {
        category: 'Full-stack · proyecto académico',
        summary: 'Aplicación web para gestionar inventario, proveedores y movimientos de stock.',
        problem: 'Reúne en un solo sistema el registro de productos, entradas y salidas y consultas operativas.',
        architecture: 'Aplicación Django con MySQL, autenticación y control de acceso. El repositorio también incluye pruebas y CI con GitHub Actions.',
        outcome: 'Implementa flujos de gestión de productos, proveedores, movimientos y reportes.',
      },
      'spotify-daily-drive': {
        category: 'Automatización · proyecto personal',
        summary: 'Automatización en Python que crea una lista diaria con podcasts de noticias y canciones favoritas.',
        problem: 'Evita crear manualmente una secuencia recurrente de episodios y canciones personalizadas.',
        architecture: 'Se integra con Spotify API mediante OAuth2. GitHub Actions programa la ejecución y el repositorio incluye pruebas automatizadas.',
        outcome: 'Actualiza una lista con una estructura definida de podcasts y canciones según las preferencias de la cuenta.',
      },
      'k-means-1d': {
        category: 'Datos · computación paralela',
        summary: 'Implementaciones de K-means para datos unidimensionales con distintos modelos de ejecución.',
        problem: 'Permite estudiar cómo distribuir el cálculo de agrupamiento entre ejecuciones seriales y paralelas.',
        architecture: 'El repositorio reúne versiones seriales, OpenMP, CUDA, MPI e híbridas, además de informes y resultados de benchmark.',
        outcome: 'Incluye implementaciones y resultados para comparar estrategias de paralelización.',
      },
      'bike-rental': {
        category: 'Backend · proyecto académico',
        summary: 'API REST para las operaciones principales de un sistema de alquiler de bicicletas.',
        problem: 'Modela las operaciones y relaciones entre las entidades de un servicio de alquiler.',
        architecture: 'API en TypeScript y JavaScript con Prisma para la persistencia y Docker para preparar servicios locales.',
        outcome: 'Proyecto académico de orientación a objetos con endpoints para las operaciones principales.',
      },
      mips32: {
        category: 'Hardware · proyecto académico',
        summary: 'Procesador MIPS32 multiciclo implementado en SystemVerilog.',
        problem: 'Organiza la ejecución de instrucciones en varios ciclos controlados.',
        architecture: 'Implementación modular en SystemVerilog con unidades de procesamiento, control, registros y memoria.',
        outcome: 'Proyecto académico disponible en GitHub.',
      },
    },
    experience: {
      title: 'Experiencia profesional',
      description: 'Experiencia en datos, desarrollo de aplicaciones, automatización y educación.',
      entries: {
        embraer: {
          role: 'Practicante de Data Analytics',
          period: 'Agosto de 2025 hasta la actualidad',
          details: [
            'Desarrollo de modelos de machine learning para clasificar datos de interrupciones, logbooks y remociones de aeronaves con Python, pandas y scikit-learn.',
            'Automatización de ETL para clasificar secciones de datos aeronáuticos, procesar archivos XML y CSV y usar parsers específicos.',
            'Desarrollo de una herramienta de clasificación manual con AWS, FastAPI y Next.js.',
          ],
        },
        kinix: {
          role: 'Desarrollador de Power Platform',
          period: 'Octubre de 2024 a agosto de 2025',
          details: [
            'Creación y mantenimiento de aplicaciones y automatizaciones con Power Apps y Power Automate, incluidas integraciones con SAP, lectura NFC y análisis de documentos con Azure AI y AI Builder.',
            'Desarrollo de intranets en SharePoint Online y administración de recursos de Azure.',
            'Implementación y gestión del Centro de Excelencia de Power Platform y elaboración de documentación técnica.',
          ],
        },
        'shopping-brasil': {
          role: 'Practicante de pruebas de datos',
          period: '2022 a 2023',
          details: [
            'Análisis de resultados de sistemas de IA frente a métricas esperadas para identificar inconsistencias.',
            'Validación de aplicaciones y creación de tablas dinámicas para apoyar procesos operativos.',
          ],
        },
        cite: {
          role: 'Practicante de Ciencias de la Computación',
          period: '2021 a 2022',
          details: [
            'Administración de cuentas educativas en Google Workspace y apoyo a docentes.',
            'Elaboración de informes, seguimiento de proyectos educativos y creación de materiales para iniciativas de educación integral.',
          ],
        },
      },
    },
    skills: {
      title: 'Habilidades por área',
      description: 'Tecnologías con las que tengo experiencia práctica.',
      groups: {
        'data-ml': 'Datos y machine learning',
        backend: 'Backend',
        frontend: 'Frontend',
        'cloud-devops': 'Cloud y DevOps',
        databases: 'Bases de datos',
        'low-code': 'Low-code y automatización',
        hardware: 'Hardware',
      },
    },
    opportunities: {
      title: 'Próximos desafíos',
      description: 'Busco oportunidades para contribuir en ingeniería de datos, IA aplicada, backend con Python, desarrollo full-stack o automatización de procesos.',
      items: [
        'Ingeniería y analítica de datos',
        'Ingeniería de datos júnior',
        'Ciencia de datos e IA aplicada',
        'Backend con Python, Django o FastAPI',
        'Desarrollo full-stack',
        'Automatización con Power Platform',
      ],
    },
    contact: {
      title: 'Hablemos',
      description: 'Escríbeme por correo o consulta mis proyectos y experiencia profesional.',
      cvCta: 'Descargar CV · PDF en portugués',
    },
    footer: 'Portafolio profesional',
  },
  fr: {
    htmlLang: 'fr',
    metadata: {
      title: 'Eric Victor | Données et développement logiciel',
      description: 'Portfolio d’Eric Victor : analyse de données, machine learning, backend Python, développement full-stack et automatisation.',
    },
    skipLink: 'Aller au contenu',
    languageLabel: 'Langue',
    navigationLabel: 'Navigation principale',
    nav: {
      about: 'À propos',
      projects: 'Projets',
      experience: 'Expérience',
      skills: 'Compétences',
      contact: 'Contact',
    },
    hero: {
      subtitle: 'Développeur orienté données, backend et applications full-stack',
      summary: 'Je travaille sur des pipelines de données, des modèles de classification en Python, des API et des applications web.',
      profileAlt: 'Eric Victor devant un moteur d’avion',
      projectsCta: 'Voir les projets',
      cvCta: 'Télécharger le CV',
      cvLanguage: 'PDF en portugais',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    about: {
      title: 'La technologie appliquée à des problèmes concrets',
      paragraphs: [
        'J’étudie le génie informatique à l’UNIFESP et travaille sur l’analyse de données, les modèles de classification et l’automatisation ETL. Chez Embraer, je développe des solutions pour organiser des données aéronautiques et soutenir les processus de classification.',
        'Mon expérience comprend aussi le développement backend et des applications web avec FastAPI et Next.js, ainsi que l’automatisation d’entreprise avec Power Platform, Azure AI et SharePoint.',
      ],
      education: 'Formation',
      degree: 'Génie informatique',
      degreeStatus: 'UNIFESP · en cours',
      academicBase: 'Formation académique',
      academicBaseDegree: 'Sciences et technologie',
      academicBaseStatus: 'Licence interdisciplinaire · UNIFESP',
    },
    projectSection: {
      workTitle: 'Projets et réalisations en entreprise',
      workDescription: 'Solutions développées dans le cadre de mes emplois. Les descriptions restent dans le périmètre qui peut être partagé.',
      personalTitle: 'Projets universitaires et personnels',
      personalDescription: 'Des dépôts qui présentent des travaux en données, logiciel, automatisation et matériel.',
      problem: 'Problème',
      implementation: 'Mise en œuvre',
      outcome: 'Résultat',
      repository: 'Voir le dépôt',
      allRepositories: 'Voir tous les dépôts sur GitHub',
    },
    workProjects: {
      'aircraft-ml-classification': {
        title: 'Classification de données aéronautiques par machine learning',
        summary: 'Modèles pour classer des données d’interruptions, de logbooks et de retraits d’aéronefs avec Python, pandas et scikit-learn.',
      },
      'aircraft-data-etl': {
        title: 'Automatisation ETL de données aéronautiques',
        summary: 'Un scheduler pour classer des sections de données aéronautiques, traiter des fichiers XML et CSV et utiliser des parsers dédiés.',
      },
      'manual-classification-tool': {
        title: 'Outil de classification manuelle',
        summary: 'Une application pour faciliter la classification manuelle de sections de données, axée sur les interruptions, avec AWS, FastAPI et Next.js.',
      },
      'power-platform-automation': {
        title: 'Applications et automatisations d’entreprise',
        summary: 'Solutions Power Apps et Power Automate, avec des intégrations SAP, la lecture NFC et l’analyse de documents par Azure AI et AI Builder.',
      },
      'sharepoint-intranets': {
        title: 'Intranets SharePoint Online',
        summary: 'Développement d’intranets personnalisés dans SharePoint Online et administration de ressources Azure.',
      },
      'power-platform-coe': {
        title: 'Centre d’excellence Power Platform',
        summary: 'Mise en place et gestion du CoE Power Platform, avec de la documentation technique pour des projets personnalisés.',
      },
    },
    projects: {
      instock: {
        category: 'Full-stack · projet universitaire',
        summary: 'Une application web pour gérer les stocks, les fournisseurs et les mouvements d’inventaire.',
        problem: 'Réunit dans un système les fiches produits, les entrées et sorties de stock et les recherches opérationnelles.',
        architecture: 'Application Django avec MySQL, authentification et contrôle d’accès. Le dépôt comprend aussi des tests et une CI avec GitHub Actions.',
        outcome: 'Met en œuvre des flux de gestion des produits, des fournisseurs, des mouvements et des rapports.',
      },
      'spotify-daily-drive': {
        category: 'Automatisation · projet personnel',
        summary: 'Une automatisation Python qui crée une playlist quotidienne de podcasts d’actualité et de morceaux favoris.',
        problem: 'Évite de composer manuellement une séquence récurrente d’épisodes et de morceaux personnalisés.',
        architecture: 'Intégration à l’API Spotify avec OAuth2. GitHub Actions planifie l’exécution et le dépôt comprend des tests automatisés.',
        outcome: 'Met à jour une playlist selon une structure définie de podcasts et de morceaux, à partir des préférences du compte.',
      },
      'k-means-1d': {
        category: 'Données · calcul parallèle',
        summary: 'Implémentations de K-means pour des données unidimensionnelles selon plusieurs modèles d’exécution.',
        problem: 'Permet d’étudier la répartition des calculs de clustering entre exécutions séquentielles et parallèles.',
        architecture: 'Le dépôt regroupe des versions séquentielles, OpenMP, CUDA, MPI et hybrides, ainsi que des rapports et des résultats de benchmark.',
        outcome: 'Présente des implémentations et des résultats de benchmark pour comparer des stratégies de parallélisation.',
      },
      'bike-rental': {
        category: 'Backend · projet universitaire',
        summary: 'Une API REST pour les principales opérations d’un service de location de vélos.',
        problem: 'Modélise les opérations et les relations entre les entités d’un service de location.',
        architecture: 'API en TypeScript et JavaScript avec Prisma pour la persistance et Docker pour préparer les services locaux.',
        outcome: 'Projet universitaire orienté objet avec des endpoints pour les opérations principales.',
      },
      mips32: {
        category: 'Matériel · projet universitaire',
        summary: 'Un processeur MIPS32 multicycle implémenté en SystemVerilog.',
        problem: 'Organise l’exécution des instructions sur plusieurs cycles contrôlés.',
        architecture: 'Implémentation modulaire en SystemVerilog avec unités de traitement, de contrôle, registres et mémoire.',
        outcome: 'Projet universitaire disponible sur GitHub.',
      },
    },
    experience: {
      title: 'Expérience professionnelle',
      description: 'Expérience en données, développement d’applications, automatisation et éducation.',
      entries: {
        embraer: {
          role: 'Stagiaire en Data Analytics',
          period: 'Août 2025 à aujourd’hui',
          details: [
            'Développement de modèles de machine learning pour classer des données d’interruptions, de logbooks et de retraits d’aéronefs avec Python, pandas et scikit-learn.',
            'Automatisation ETL pour classer des sections de données aéronautiques, traiter des fichiers XML et CSV et utiliser des parsers dédiés.',
            'Développement d’un outil de classification manuelle avec AWS, FastAPI et Next.js.',
          ],
        },
        kinix: {
          role: 'Développeur Power Platform',
          period: 'Octobre 2024 à août 2025',
          details: [
            'Création et maintenance d’applications et d’automatisations avec Power Apps et Power Automate, y compris des intégrations SAP, la lecture NFC et l’analyse de documents avec Azure AI et AI Builder.',
            'Développement d’intranets SharePoint Online et administration de ressources Azure.',
            'Mise en place et gestion du Centre d’excellence Power Platform et rédaction de documentation technique.',
          ],
        },
        'shopping-brasil': {
          role: 'Stagiaire en tests de données',
          period: '2022 à 2023',
          details: [
            'Analyse des résultats de systèmes d’IA par rapport aux métriques attendues afin de repérer des incohérences.',
            'Validation d’applications et création de tableaux croisés dynamiques pour soutenir les processus opérationnels.',
          ],
        },
        cite: {
          role: 'Stagiaire en informatique',
          period: '2021 à 2022',
          details: [
            'Gestion de comptes éducatifs Google Workspace et accompagnement des enseignants.',
            'Rédaction de rapports, suivi de projets éducatifs et création de supports pour des initiatives d’éducation intégrale.',
          ],
        },
      },
    },
    skills: {
      title: 'Compétences par domaine',
      description: 'Technologies avec lesquelles j’ai une expérience pratique.',
      groups: {
        'data-ml': 'Données et machine learning',
        backend: 'Backend',
        frontend: 'Frontend',
        'cloud-devops': 'Cloud et DevOps',
        databases: 'Bases de données',
        'low-code': 'Low-code et automatisation',
        hardware: 'Matériel',
      },
    },
    opportunities: {
      title: 'Prochaines opportunités',
      description: 'Je recherche des opportunités en ingénierie des données, IA appliquée, backend Python, développement full-stack ou automatisation de processus.',
      items: [
        'Ingénierie et analytics des données',
        'Ingénierie des données junior',
        'Science des données et IA appliquée',
        'Backend Python avec Django ou FastAPI',
        'Développement full-stack',
        'Automatisation avec Power Platform',
      ],
    },
    contact: {
      title: 'Me contacter',
      description: 'Écrivez-moi par e-mail ou consultez mes projets et mon expérience professionnelle.',
      cvCta: 'Télécharger le CV · PDF en portugais',
    },
    footer: 'Portfolio professionnel',
  },
} satisfies Record<Locale, Translation>
