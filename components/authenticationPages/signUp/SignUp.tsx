'use state';
import React from 'react';
import Link from 'next/link';
import { AuthComponent, Select } from '@/shared';
import { Button, InputField } from '@/shared';
import styles from './SignUp.module.scss';
import { useValidateSignup } from '@/hooks';
import { SignupForm } from '@/interface/authentication';

type Props = {
	setIsRegistrationRequested: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignUp = ({ setIsRegistrationRequested }: Props) => {
	const {
		register,
		handleSubmit,
		errors,
		// handleSignup,
		activeTab,
		hearAboutOptions,
		toggleTab,
		onOptionChange,
	} = useValidateSignup();

	const handleSignup = async (data: any) => {
		console.log(data);
		setIsRegistrationRequested(true);
	};

	return (
		<div className={styles.signIn_body}>
			<div className={styles.signIn_text}>
				<p>
					I am a sippite? <Link href='/login'>Sign in</Link>
				</p>
			</div>
			<form onSubmit={handleSubmit(handleSignup)}>
				<AuthComponent header='Create your account' btnText='Sign up' bgColor='#EBF8FF' bannerText='Become a sippite!' className={styles.auth_component}>
					<Button buttonType='transparent' className={styles.btn} iconPrefix='/svgs/google-icon.svg'>
						<h3>Continue with Google</h3>
					</Button>

					<div className={styles.divider}>
						<div className={styles.line}></div>
						<h3>or</h3>
						<div className={styles.line}></div>
					</div>
					<div className={styles.tabHeader_container}>
						<div className={activeTab === 1 ? styles.tab_active : styles.tab} onClick={() => toggleTab(1)}>
							<h3>Email</h3>
						</div>
						<div className={activeTab === 2 ? styles.tab_active : styles.tab} onClick={() => toggleTab(2)}>
							<h3>Phone number</h3>
						</div>
					</div>

					<div className={styles.input_fields}>
						<div>
							<InputField label='Full name' placeholder='Enter your full name' register={register('fullName')} errorClass={errors?.fullName && styles.error_border} />
							<p className={styles.error_styles}>{errors?.fullName?.message}</p>
						</div>
						{activeTab === 1 && (
							<div>
								<InputField label='Email address' placeholder='Enter your email address' register={register('email')} errorClass={errors?.email && styles.error_border} />
								<p className={styles.error_styles}>{errors?.email?.message}</p>
							</div>
						)}
						{activeTab === 2 && (
							<div>
								<InputField label='Phone number' prefix='+234 |' register={register('phone_number')} errorClass={errors?.phone_number && styles.error_border} />
								<p className={styles.error_styles}>{errors?.phone_number?.message}</p>
							</div>
						)}
						<div>
							<InputField label='Password' type='password' password placeholder='Enter password' register={register('password')} errorClass={errors?.password && styles.error_border} />
							<p className={styles.error_styles}>{errors?.password?.message}</p>
						</div>
						<div>
							<Select options={hearAboutOptions} defaultOption='Select an option' register={register('get_to_know')} errorClass={errors?.get_to_know && styles.error_border} label='How did you hear about us?' onOptionChange={onOptionChange} />
							<p className={styles.error_styles}>{errors?.get_to_know?.message}</p>
						</div>
					</div>
				</AuthComponent>
			</form>
			<div className={styles.signIn_text_mobile}>
				<p>
					I am a sippite? <Link href='/login'>Sign in</Link>
				</p>
			</div>
		</div>
	);
};

export default SignUp;
