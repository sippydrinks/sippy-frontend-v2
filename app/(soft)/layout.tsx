import { MainLayout } from "@/layout"

export default function SoftLayout({children}: {children: React.ReactNode}) {
    return (
        <MainLayout type="soft">
            {children}
        </MainLayout>
    )
}