'use state';
import React, { useState } from 'react';
import Link from 'next/link';
import { AuthComponent, Select } from '@/shared';
import { Button, InputField } from '@/shared';
import styles from './SignUp.module.scss';
import { useValidateSignup } from '@/hooks';
import AuthTabHeader from '../AuthTabHeader/AuthTabHeader';
import { AuthType } from '@/interface/authentication';

type Props = {
	setIsRegistrationRequested: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignUp = ({ setIsRegistrationRequested }: Props) => {
	const [type, setType] = useState<AuthType>(AuthType.EMAIL);
	const { register, handleSubmit, errors, handleSignup, hearAboutOptions, onOptionChange } = useValidateSignup({ setIsRegistrationRequested, type });

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
					<AuthTabHeader toggleTab={setType} type={type} />
					<div className={styles.input_fields}>
						<div>
							<InputField label='Full name' placeholder='Enter your full name' register={register('fullName')} inputClass={errors?.fullName && styles.error_border} />
							<p className={styles.error_styles}>{errors?.fullName?.message}</p>
						</div>
						{type === AuthType.EMAIL && (
							<div>
								<InputField label='Email address' placeholder='Enter your email address' register={register('email')} inputClass={errors?.email && styles.error_border} />
								<p className={styles.error_styles}>{errors?.email?.message}</p>
							</div>
						)}
						{type === AuthType.PHONE_NUMBER && (
							<div className={styles.tab_1}>
								<div className={styles.input_fields}>
									<div>
										<InputField
											label='Phone number'
											customPrefix={
												<p className={styles.prefix_container}>
													+234 <span className={styles.prefix_divider}></span>
												</p>
											}
											type='number'
											register={register('phone_number')}
											inputClass={errors?.phone_number && styles.error_border}
										/>
										<p className={styles.error_styles}>{errors?.phone_number?.message}</p>
									</div>
								</div>
							</div>
						)}
						<div>
							<InputField label='Password' type='password' isPassword placeholder='Enter password' register={register('password')} inputClass={errors?.password && styles.error_border} />
							<p className={styles.error_styles}>{errors?.password?.message}</p>
						</div>
						<div>
							<Select options={hearAboutOptions} defaultOption='Select an option' className={errors?.get_to_know && styles.error_border} label='How did you hear about us?' onOptionChange={onOptionChange} />
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
