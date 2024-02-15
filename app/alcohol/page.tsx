import { HomeView } from "@/Views";
import { MainLayout } from "@/layout";


export default function Alcohol() {
    return (
        <MainLayout type="alcohol" isNavButton={true}>
            <HomeView />
        </MainLayout>
    )
}