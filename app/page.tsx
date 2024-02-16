import { MainLayout } from "@/layout";
import { HomeView } from "@/Views";

export default function Home() {
  return (
    <MainLayout type="soft" isNavButton>
      <HomeView type="soft" />
    </MainLayout>
  );
}
