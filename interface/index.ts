export interface LayoutProps {
    children?: React.ReactNode;
	page?: string;
	type?: "soft" | "alcohol";
    isNavButton?: boolean
}

export interface ModalProps {
    modalImage?: string
    isOpen?: boolean;
    onClose: () => void;
    bodyClass?: string
    children?: React.ReactNode
    className?: string
}
export interface AccordionProps {
    title?: string;
	type?: "small" | "big";
	iconType?: "plus" | "chevron";
	image?: string;
	children: React.ReactNode;
}

export interface ActionPanelProps {
    type?: 'big' | 'small'
    children?: React.ReactNode
    className?: string
    isOpen?: any
    isClose?: any
}

export interface AuthBannerProps {
    bgColor?: string
    bannerText?: string
    className?: string
}

export interface AuthComponentProps {
    header?: string
    children?: React.ReactNode
    btnText?: string
    bgColor?: string
    bannerText?: string
    className?: string
}

export interface CarouselProps {
    title: string
    icon1: string
    bgColor?: string
    icon2: string
    type?: 'small' | 'big'
    isBorder?: boolean
}

export interface CartDetailsCardProps {
    id?: number
    productImage: string
    productPrice?: number
    productSize?: string
    productName?: string
    productQuantity?: number
    cartProductQuantity?: number
    cardType?: 'account' | 'cart'
    className?: string
    actionBtnClass?: string
    onClick?: (event?: any) => void;
}

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    buttonType?: "primary" | "transparent" | "secondary";
	children: React.ReactNode;
	iconPrefix?: string;
	iconSuffix?: string;
	className?: string;
	disabled?: boolean;
	onClick?: (event?: any) => void;
}

export interface DrinkTypeProps {
    type?: 'soft' | 'alcohol'
}

export interface DrinkTypeCardProps {
    id?: any;
	bg: string;
	icon: string;
	buttonText?: string;
}

export interface CounterProps {
    counterValue?: number
    onIncrement?: (event?: any) => void;
    onDecrement?: (event?: any) => void;
    classname?: string
}

export interface ProductCardProps {
    id?: number
    productName: string
    productNameAlcohol: string
    productImage: string
    productImageAlcohol: string
    productPrice?: number
}

export interface TabProps {
    tabHeader?: string
    tabHeader2?: string
    children?: React.ReactNode
    className?: string
    activeTabIndex: number
}

export interface ThemeProps {
    type?: "light" | "dark";
}

export interface CheckboxProps {
    label?: string;
	className?: string;
	checked?: boolean;
	onChange?: (e: any) => void;
	disabled?: boolean;
    value?: string | number
}

export interface HeaderProps {
    isNavButton?: boolean
}