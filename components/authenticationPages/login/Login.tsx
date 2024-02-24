'use client';
import React from 'react';
import Link from 'next/link';
import { AuthComponent, Button, InputField } from '@/shared';
import styles from './Login.module.scss';
import { useValidateLogin } from '@/hooks';

const Login = () => {
	const { register, handleSubmit, errors, handleLogin, toggleTab, type } = useValidateLogin();
	return (
		<div className={styles.signIn_body}>
			<div className={styles.signIn_text}>
				<p>
					New to sippy? <Link href='/createAccount'>Create account</Link>
				</p>
			</div>
			<form onSubmit={handleSubmit(handleLogin)}>
				<AuthComponent header='Log into your account' btnText='Login' bgColor='#EEE6F0' bannerText='Welcome Back! sippite' className={styles.auth_component}>
					<div className={styles.tabHeader_container}>
						<div data-active={type === 'email'} className={styles.tab} onClick={() => toggleTab('email')}>
							<h3>Email</h3>
						</div>
						<div data-active={type === 'phone_number'} className={styles.tab} onClick={() => toggleTab('phone_number')}>
							<h3>Phone number</h3>
						</div>
					</div>
					<div className={styles.tabcontent}>
						{type === 'email' && (
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

						{type === 'phone_number' && (
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
