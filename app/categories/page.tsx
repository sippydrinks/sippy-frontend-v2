import { CategoriesView } from "@/Views";
import { MainLayout } from "@/layout";


export default function Categories() {
    return (
        <MainLayout type="soft" isNavButton>
            <CategoriesView />
        </MainLayout>
    )
}