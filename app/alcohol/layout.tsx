import { MainLayout } from "@/layout"

export default function AlcoholLayout({children}: {children: React.ReactNode}) {
    return (
        <MainLayout type="alcohol" isNavButton>
            {children}
        </MainLayout>
    )
}