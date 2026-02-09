import { motion } from "framer-motion";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { getMetrics, challenges } from "@/data/challenges";

const VERTICAL_COLORS = {
  robotics: "hsl(186, 100%, 50%)",
  agents: "hsl(270, 80%, 60%)",
  "social-impact": "hsl(142, 70%, 49%)",
};

export function MetricsCharts() {
  const metrics = getMetrics();

  const pieData = [
    { name: "Robotics", value: metrics.byVertical.robotics, color: VERTICAL_COLORS.robotics },
    { name: "Agents", value: metrics.byVertical.agents, color: VERTICAL_COLORS.agents },
    { name: "Social Impact", value: metrics.byVertical["social-impact"], color: VERTICAL_COLORS["social-impact"] },
  ];

  const barData = challenges.map((c) => ({
    name: c.title.length > 18 ? c.title.slice(0, 18) + "…" : c.title,
    participants: c.participants,
    submissions: c.submissions,
    vertical: c.vertical,
  }));

  return (
    <section className="py-16 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-2">
          Ecosystem <span className="text-primary">Metrics</span>
        </h2>
        <p className="text-sm text-muted-foreground mb-8">
          Live statistics across all indexed competitions
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Prize Distribution Pie */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">
              Prize Distribution by Vertical
            </h3>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width={260} height={220}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={90}
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                  >
                    {pieData.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number) => `$${(value / 1000).toFixed(0)}K`}
                    contentStyle={{
                      background: "hsl(220, 18%, 7%)",
                      border: "1px solid hsl(220, 16%, 16%)",
                      borderRadius: "8px",
                      fontSize: "12px",
                      color: "hsl(210, 20%, 92%)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-2">
              {pieData.map((d) => (
                <div key={d.name} className="flex items-center gap-2 text-xs">
                  <div className="w-2.5 h-2.5 rounded-sm" style={{ background: d.color }} />
                  <span className="text-muted-foreground">{d.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Participation Bar Chart */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">
              Participation by Challenge
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData} margin={{ left: -10, right: 10 }}>
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 9, fill: "hsl(215, 12%, 50%)" }}
                  angle={-35}
                  textAnchor="end"
                  height={60}
                  axisLine={{ stroke: "hsl(220, 16%, 16%)" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 10, fill: "hsl(215, 12%, 50%)" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "hsl(220, 18%, 7%)",
                    border: "1px solid hsl(220, 16%, 16%)",
                    borderRadius: "8px",
                    fontSize: "12px",
                    color: "hsl(210, 20%, 92%)",
                  }}
                />
                <Bar dataKey="participants" fill="hsl(186, 100%, 50%)" radius={[3, 3, 0, 0]} opacity={0.8} />
                <Bar dataKey="submissions" fill="hsl(270, 80%, 60%)" radius={[3, 3, 0, 0]} opacity={0.8} />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-2">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2.5 h-2.5 rounded-sm bg-primary" />
                <span className="text-muted-foreground">Participants</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2.5 h-2.5 rounded-sm bg-accent" />
                <span className="text-muted-foreground">Submissions</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
