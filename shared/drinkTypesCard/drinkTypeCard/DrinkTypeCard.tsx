import React from "react";
import { DrinkTypeCardProps } from "@/interface";
import { Button } from "@/shared";
import { usePathname, useRouter } from "next/navigation";
import { useGlobalContext } from "@/contexts/AppContext";
import { formatURL } from "@/utils";
import Link from "next/link";
import Image from "next/image";
import styles from "./DrinkTypeCard.module.scss";

const DrinkTypeCard = ({id, bg, icon, text, cardType = 'home' }: DrinkTypeCardProps) => {
    const { theme } = useGlobalContext()
    const route = usePathname()
    const router = useRouter()
    const isAlcoholRoute = route.includes('/alcohol')
    
  return (
    <div key={id} className={styles.card} data-type={cardType} style={{background: `${bg}`}}
        onClick={() => (cardType === 'categories' || isAlcoholRoute) || isAlcoholRoute ? 
            router.push(`/alcohol/categories/${formatURL(text)}`) 
        : 
            router.push(`/categories/${formatURL(text)}`)
        }
    >
        <div className={styles.btn_container}>
            <h3>{text}</h3>
            <Button
                buttonType='transparent'
                className={styles.btn}
            >
                <p data-theme={theme}>
                    View all
                </p>
            </Button>
        </div>

			<div data-route={route} className={styles.image}>
				<div className={styles.imageCont}>
					<Image alt='drink' src={icon} fill />
				</div>
			</div>
		</div>
	);
};

export default DrinkTypeCard;
