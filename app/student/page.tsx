import type { Metadata } from "next";
import { StudentView } from "@/components/studexpress/student-view";

export const metadata: Metadata = { title: "Available Trips · StudExpress" };

export default function StudentPage() {
  return <StudentView />;
}