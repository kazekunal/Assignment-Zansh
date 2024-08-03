import Edit_application from "@/components/Edit_application";
import Navbar from "@/components/Navbar";
import Questions from "@/components/Questions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <Navbar/>
      <Edit_application/>
      <Questions/>
    </main>
  );
}
