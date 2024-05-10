'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { AuthComponent, Button, InputField } from '@/shared';
import Image from 'next/image';
import { useValidateLogin } from '@/hooks';
import AuthTabHeader from '../AuthTabHeader/AuthTabHeader';
import { AuthType } from '@/interface/authentication';
import styles from './Login.module.scss';

const Login = () => {
	const [type, setType] = useState<AuthType>(AuthType.EMAIL);
	const { register, handleSubmit, errors, handleLogin } = useValidateLogin(type);
	return (
		<div className={styles.signIn_body}>
			<div className={styles.signIn_text}>
				<Link href='/'>
					<div className={styles.back_to_home}>
						<div className={styles.icon}>
							<Image alt='arrow' src='/svgs/arrow_left.svg' fill />
						</div>
						<h3>Back to Homepage</h3>
					</div>
				</Link>
				<p>
					New to sippy? <Link href='/createAccount'>Create account</Link>
				</p>
			</div>
			<form onSubmit={handleSubmit(handleLogin)}>
				<AuthComponent header='Log into your account' btnText='Login' bgColor='#EEE6F0' bannerText='Welcome Back! sippite' className={styles.auth_component}>
					<AuthTabHeader toggleTab={setType} type={type} />
					<div className={styles.tabcontent}>
						{type === AuthType.EMAIL && (
							<div className={styles.tab_1}>
								<Button buttonType='transparent' className={styles.btn} iconPrefix='/svgs/google-icon.svg'>
									<h3>Continue with Google</h3>
								</Button>

								<div className={styles.divider}>
									<div className={styles.line}></div>
									<h3>or</h3>
									<div className={styles.line}></div>
								</div>
								<div className={`${styles.input_fields} `}>
									<div>
										<InputField label='Email address' placeholder='Enter your email address' type='email' register={register('email')} inputClass={errors?.email && styles.error_border} />
										<p className={styles.error_styles}>{errors?.email?.message}</p>
									</div>
								</div>
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
							<InputField label='Password' type='password' placeholder='Enter password' isPassword={true} register={register('password')} inputClass={errors?.password && styles.error_border} />
							<p className={styles.error_styles}>{errors?.password?.message}</p>
						</div>
						<div className={styles.forgot_password}>
							<Link href='/recoverPassword'>
								<h3>Forgot Password?</h3>
							</Link>
						</div>
					</div>
				</AuthComponent>
			</form>
			<div className={styles.new_sippy}>
				<p>
					New to Sippy? <Link href='/createAccount'>Create account</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
