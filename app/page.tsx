import { HomeView } from "@/Views";
import { MainLayout } from "@/layout";


export default function Home() {
  return (
    <MainLayout type="soft">
      <HomeView type="soft" />
    </MainLayout>
  );
}
