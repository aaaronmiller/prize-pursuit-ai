export interface Challenge {
  id: string;
  title: string;
  organizer: string;
  vertical: "robotics" | "agents" | "social-impact";
  prizePool: number;
  currency: string;
  startDate: string;
  endDate: string;
  registrationDeadline: string;
  participants: number;
  submissions: number;
  description: string;
  infoUrl: string;
  joinUrl: string;
  tags: string[];
  status: "upcoming" | "active" | "ending-soon";
}

export const challenges: Challenge[] = [
  {
    id: "sim2real-manipulation",
    title: "Sim-to-Real Robotic Manipulation Grand Challenge",
    organizer: "Open Robotics Foundation",
    vertical: "robotics",
    prizePool: 120000,
    currency: "USD",
    startDate: "2026-02-03",
    endDate: "2026-04-15",
    registrationDeadline: "2026-01-31",
    participants: 342,
    submissions: 89,
    description: "Transfer learning from simulation to physical robot manipulation tasks. Build policies in Isaac Sim and deploy on real UR5e arms.",
    infoUrl: "https://example.com/sim2real",
    joinUrl: "https://example.com/sim2real/register",
    tags: ["Isaac Sim", "UR5e", "Reinforcement Learning", "PyTorch"],
    status: "upcoming",
  },
  {
    id: "autonomous-fleet",
    title: "Autonomous Agent Fleet Coordination Challenge",
    organizer: "DeepMind x Anthropic",
    vertical: "agents",
    prizePool: 200000,
    currency: "USD",
    startDate: "2026-01-10",
    endDate: "2026-03-28",
    registrationDeadline: "2026-01-08",
    participants: 1247,
    submissions: 456,
    description: "Orchestrate fleets of LLM-powered agents to solve complex multi-step enterprise workflows with minimal human oversight.",
    infoUrl: "https://example.com/fleet",
    joinUrl: "https://example.com/fleet/register",
    tags: ["LLM Agents", "Multi-Agent", "Tool Use", "Orchestration"],
    status: "active",
  },
  {
    id: "climate-modeling",
    title: "AI for Climate Resilience Prediction",
    organizer: "UN AI for Good",
    vertical: "social-impact",
    prizePool: 75000,
    currency: "USD",
    startDate: "2026-01-15",
    endDate: "2026-03-01",
    registrationDeadline: "2026-01-12",
    participants: 589,
    submissions: 201,
    description: "Develop ML models to predict climate-related displacement patterns and optimize resource allocation for vulnerable communities.",
    infoUrl: "https://example.com/climate",
    joinUrl: "https://example.com/climate/register",
    tags: ["Climate ML", "GeoSpatial", "Transformers", "Social Good"],
    status: "active",
  },
  {
    id: "quadruped-nav",
    title: "Quadruped Navigation in Unstructured Terrain",
    organizer: "Boston Dynamics AI Lab",
    vertical: "robotics",
    prizePool: 60000,
    currency: "USD",
    startDate: "2026-02-10",
    endDate: "2026-05-01",
    registrationDeadline: "2026-02-08",
    participants: 178,
    submissions: 0,
    description: "Train quadruped robots to navigate complex outdoor environments using sim-to-real transfer. Top 5 teams get access to Spot hardware.",
    infoUrl: "https://example.com/quadruped",
    joinUrl: "https://example.com/quadruped/register",
    tags: ["Legged Robots", "SLAM", "Sim2Real", "ROS2"],
    status: "upcoming",
  },
  {
    id: "code-agent-bench",
    title: "CodeAgent Benchmark: Autonomous Software Engineering",
    organizer: "MLCommons",
    vertical: "agents",
    prizePool: 150000,
    currency: "USD",
    startDate: "2026-01-20",
    endDate: "2026-04-10",
    registrationDeadline: "2026-01-18",
    participants: 2103,
    submissions: 734,
    description: "Build AI agents that autonomously resolve real GitHub issues across 500+ open source repos. Evaluated on SWE-bench Ultra.",
    infoUrl: "https://example.com/codeagent",
    joinUrl: "https://example.com/codeagent/register",
    tags: ["SWE-bench", "Code Generation", "Agentic AI", "GitHub"],
    status: "active",
  },
  {
    id: "health-equity",
    title: "AI Health Equity Challenge",
    organizer: "Gates Foundation x WHO",
    vertical: "social-impact",
    prizePool: 50000,
    currency: "USD",
    startDate: "2026-01-05",
    endDate: "2026-02-15",
    registrationDeadline: "2026-01-03",
    participants: 412,
    submissions: 198,
    description: "Develop diagnostic AI models that perform equitably across diverse populations. Focus on reducing algorithmic bias in medical imaging.",
    infoUrl: "https://example.com/health",
    joinUrl: "https://example.com/health/register",
    tags: ["Medical AI", "Bias Reduction", "Computer Vision", "Equity"],
    status: "ending-soon",
  },
  {
    id: "drone-swarm",
    title: "Cooperative Drone Swarm Search & Rescue",
    organizer: "DARPA x IEEE",
    vertical: "robotics",
    prizePool: 95000,
    currency: "USD",
    startDate: "2026-02-15",
    endDate: "2026-06-01",
    registrationDeadline: "2026-02-12",
    participants: 95,
    submissions: 0,
    description: "Design swarm intelligence algorithms for coordinated UAV search and rescue in GPS-denied environments.",
    infoUrl: "https://example.com/drone-swarm",
    joinUrl: "https://example.com/drone-swarm/register",
    tags: ["Swarm AI", "UAV", "MARL", "Computer Vision"],
    status: "upcoming",
  },
  {
    id: "education-agent",
    title: "Adaptive Learning Agent for Underserved Schools",
    organizer: "Schmidt Futures",
    vertical: "social-impact",
    prizePool: 35000,
    currency: "USD",
    startDate: "2026-01-25",
    endDate: "2026-03-20",
    registrationDeadline: "2026-01-22",
    participants: 267,
    submissions: 82,
    description: "Build AI tutoring agents that adapt to individual learning styles and work offline in low-connectivity regions.",
    infoUrl: "https://example.com/edu-agent",
    joinUrl: "https://example.com/edu-agent/register",
    tags: ["EdTech", "LLM", "Offline AI", "Personalization"],
    status: "active",
  },
  {
    id: "tool-use-arena",
    title: "Tool Use Arena: Real-World API Orchestration",
    organizer: "Hugging Face",
    vertical: "agents",
    prizePool: 45000,
    currency: "USD",
    startDate: "2026-02-01",
    endDate: "2026-03-15",
    registrationDeadline: "2026-01-30",
    participants: 891,
    submissions: 312,
    description: "Agents compete in real-time to solve complex tasks using 200+ real APIs. Scored on accuracy, cost-efficiency, and latency.",
    infoUrl: "https://example.com/tool-arena",
    joinUrl: "https://example.com/tool-arena/register",
    tags: ["Function Calling", "API", "Benchmarking", "Cost-Opt"],
    status: "active",
  },
];

export const verticalLabels: Record<Challenge["vertical"], string> = {
  robotics: "Sim-to-Real Robotics",
  agents: "Autonomous Agent Orchestration",
  "social-impact": "High-Stakes Social Impact",
};

export const verticalColors: Record<Challenge["vertical"], string> = {
  robotics: "hsl(var(--accent-robotics))",
  agents: "hsl(var(--accent-agents))",
  "social-impact": "hsl(var(--accent-impact))",
};

export function getMetrics() {
  const totalPrizePool = challenges.reduce((sum, c) => sum + c.prizePool, 0);
  const totalParticipants = challenges.reduce((sum, c) => sum + c.participants, 0);
  const totalSubmissions = challenges.reduce((sum, c) => sum + c.submissions, 0);
  const avgPrize = Math.round(totalPrizePool / challenges.length);
  const activeCount = challenges.filter((c) => c.status === "active").length;
  const upcomingCount = challenges.filter((c) => c.status === "upcoming").length;

  const byVertical = {
    robotics: challenges.filter((c) => c.vertical === "robotics").reduce((s, c) => s + c.prizePool, 0),
    agents: challenges.filter((c) => c.vertical === "agents").reduce((s, c) => s + c.prizePool, 0),
    "social-impact": challenges.filter((c) => c.vertical === "social-impact").reduce((s, c) => s + c.prizePool, 0),
  };

  return { totalPrizePool, totalParticipants, totalSubmissions, avgPrize, activeCount, upcomingCount, byVertical };
}
