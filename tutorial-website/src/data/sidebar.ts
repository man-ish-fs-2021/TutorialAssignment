import { Cloud, Database, Network, PanelTop, Rows, Server } from "lucide-react";

export const playlists = [
  { id: "1", name: "Frontend & Backend" },
  { id: "2", name: "Favorites" },
  { id: "3", name: "React" },
  { id: "4", name: "Non-Dev" },
  { id: "5", name: "TypeScript" },
];
export const subscriptions = [
  {
    channelName: "Frontend",
    id: "Frontend",
  },
  {
    channelName: "Backend",
    id: "Backend",
  },
  {
    channelName: "Django",
    id: "Django",
  },
  {
    channelName: "Fast API",
    id: "Fast API",
  },
  {
    channelName: "Kubernetes",
    id: "Kubernetes",
  },
  {
    channelName: "Redis",
    id: "Redis",
  },
];
export const icon = {
  Frontend: PanelTop,
  Backend: Database,
  Django: Server,
  "Fast API": Network,
  Kubernetes: Cloud,
  Redis: Rows,
};
