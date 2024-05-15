export interface LayoutProps {
    children?: React.ReactNode;
	page?: string;
	type?: "soft" | "alcohol";
    isNavButton?: boolean
}

export interface ModalProps {
    modalImage?: string
    isOpen?: any;
    onClose?: any;
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
    productIcon: string
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

export interface DropdownProps {
    text1?: string
    text2?: string
    text3?: string
    icon1: string
    icon2: string
    icon3: string
    index?: number
    onClick: () => void
    primaryAction: () => void
    secondaryAction: () => void
    type?: 'big' | 'small'
}

export interface DeleteAddressModalProps {
    isOpen?: boolean
    onClose: () => void
    handleDelete: () => void
}

export interface EditAddressModalProps {
    isOpen?: boolean
    onClose: () => void
    // handleSave: () => void
    email?: React.JSX.Element
    number?: React.JSX.Element
    name?: React.JSX.Element
    state?: React.JSX.Element
    street?: React.JSX.Element
    city?: React.JSX.Element
}

export interface EditInfoModalProps {
    isOpen?: boolean
    onClose: () => void
    number?: React.JSX.Element
    DOB?: React.JSX.Element
}