"use client";
import { Button, InputField } from "@/shared";
import React, { KeyboardEvent, useState } from "react";
import styles from "./VerifyToken.module.scss";
import RecoverPasswordWrapper from "../RecoverPasswordWrapper/RecoverPasswordWrapper";
import { useRecoverPassword } from "@/hooks";
import OtpTimer from "./OtpTimer";

const otpTime: number = 1;

const VerifyToken = () => {
	const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
	const {
		subTitle,
		otpError,
		handleInputChange,
		handleKeyDown,
		handlePaste,
		inputRefs,
		tokens,
		submitToken,
	} = useRecoverPassword({});

	console.log(otpError);
	return (
		<div>
			<div className={styles.otp_page_container}>
				<RecoverPasswordWrapper
					subTitle={subTitle}
					title="Enter OTP"
					description="Enter the OTP we have sent to your email address."
				/>
				<form onSubmit={submitToken} className={styles.otp_form}>
					<div className={styles.input_fields}>
						<div className={styles.otp_container}>
							{tokens?.map((ref: any, index: number) => (
								<InputField
									key={index}
									value={tokens[index]}
									type="text"
									inputRef={(ref: any) =>
										(inputRefs.current[index] = ref)
									}
									maxLength={1}
									onChange={e => handleInputChange(index, e)}
									className={styles.otp_field}
									inputClass={otpError && styles.input_error}
									onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
										handleKeyDown(index, e)
									}
									max={9}
									onPaste={handlePaste}
								/>
							))}
						</div>
					</div>
					<p className={styles.receive_otp}>
						You didn’t receive an OTP?
						{isTimerRunning ? (
							<span className={styles.otp_timer}>
								Resend in{" "}
								<OtpTimer
									initialTime={otpTime}
									onTimerFinish={setIsTimerRunning}
								/>
							</span>
						) : (
							<span className={styles.resend}>Resend OTP</span>
						)}
					</p>
					<div className={styles.btn_container}>
						<Button
							type="submit"
							buttonType="primary"
							className={styles.auth_btn}
						>
							<h3>Reset Password</h3>
						</Button>
						<Button
							type="button"
							buttonType="primary"
							className={styles.auth_btn_grey}
						>
							<h3>Change email</h3>
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default VerifyToken;
