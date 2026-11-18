import { Boxes, BrainCircuit, Database, Network, Plug, ShieldCheck } from 'lucide-react';
import {
  SiAmazonwebservices,
  SiApachekafka,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithubactions,
  SiGraphql,
  SiJest,
  SiJsonwebtokens,
  SiKubernetes,
  SiLangchain,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNginx,
  SiNodedotjs,
  SiNvidia,
  SiOpenai,
  SiPm2,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiRedux,
  SiSocketdotio,
  SiTypescript,
} from 'react-icons/si';
import { SiGooglegemini } from 'react-icons/si';

// Brand icon + brand color per skill name, shared by the Skills grid and the hero marquee.
// Entries are [Icon, brandColor, darkModeColor?]; the third value replaces brand colors
// too dark to see on the navy background.
export const skillIcons = {
  LLMs: [BrainCircuit, '#059669'],
  RAG: [Database, '#059669'],
  LangGraph: [SiLangchain, '#1C3C3C', '#7FC8C1'],
  MCP: [Network, '#059669'],
  vLLM: [SiNvidia, '#76B900'],
  OpenAI: [SiOpenai, '#10A37F'],
  Gemini: [SiGooglegemini, '#8E75B2'],
  'REST APIs': [Plug, '#059669'],
  GraphQL: [SiGraphql, '#E10098'],
  NestJS: [SiNestjs, '#E0234E'],
  'Redux Toolkit': [SiRedux, '#764ABC'],
  'Socket.io': [SiSocketdotio, '#94a3b8'],
  MongoDB: [SiMongodb, '#47A248'],
  MySQL: [SiMysql, '#4479A1'],
  Qdrant: [Boxes, '#DC244C'],
  Prisma: [SiPrisma, '#5A67D8'],
  Nginx: [SiNginx, '#009639'],
  PM2: [SiPm2, '#2B037A', '#A78BFA'],
  JWT: [SiJsonwebtokens, '#D63AFF'],
  RBAC: [ShieldCheck, '#059669'],
  Jest: [SiJest, '#C21325'],
  Git: [SiGit, '#F05032'],
  Python: [SiPython, '#3776AB'],
  FastAPI: [SiFastapi, '#009688'],
  'Node.js': [SiNodedotjs, '#5FA04E'],
  TypeScript: [SiTypescript, '#3178C6'],
  PostgreSQL: [SiPostgresql, '#4169E1'],
  Redis: [SiRedis, '#DC382D'],
  RabbitMQ: [SiRabbitmq, '#FF6600'],
  Kafka: [SiApachekafka, '#94a3b8'],
  Docker: [SiDocker, '#2496ED'],
  Kubernetes: [SiKubernetes, '#326CE5'],
  AWS: [SiAmazonwebservices, '#FF9900'],
  'CI/CD': [SiGithubactions, '#2088FF'],
  React: [SiReact, '#61DAFB'],
};

export const getSkillIcon = (name) => {
  const [Icon, color, dark] = skillIcons[name] || [Boxes, '#64748b'];
  return [Icon, color, dark || color];
};
