import { string, object, ref } from 'yup';
import {
    MAX_PASSWORD,
    MAX_USER_NAME,
    MIN_PASSWORD,
    MIN_USER_NAME,
    //PHONE_REGEX,
    MAX_FULL_NAME,
    MAX_SOCIAL_NETWORK,
    MIN_FULL_NAME,
    MIN_SOCIAL_NETWORK,
    USER_NAME_REGEX,
} from './constants';

export const registerSchema = object({
    userName: string('Enter your username')
        .min(MIN_USER_NAME, `User name must be at least ${MIN_USER_NAME} characters`)
        .max(MAX_USER_NAME, `User name must be at most ${MAX_USER_NAME} characters`)
        .matches(USER_NAME_REGEX, 'User name is not valid')
        .required('User name is required'),
    email: string('Enter your email').email('Enter a valid email').required('Email is required'),
    password: string('Enter your password')
        .min(MIN_PASSWORD, `Password must be at least ${MIN_PASSWORD} characters`)
        .max(MAX_PASSWORD, `Password must be at most ${MAX_PASSWORD} characters`)
        .required('Password is required'),
    repeatPassword: string('Enter your password')
        .oneOf([ref('password'), null], 'Passwords must match')
        .min(MIN_PASSWORD, `Password must be at least ${MIN_PASSWORD} characters`)
        .max(MAX_PASSWORD, `Password must be at most ${MAX_PASSWORD} characters`)
        .required('Password is required'),
});

export const loginSchema = object({
    email: string('Enter your email').email('Enter a valid email').required('Email is required'),
    password: string('Enter your password')
        .min(MIN_PASSWORD, `Password must be at least ${MIN_PASSWORD} characters`)
        .required('Password is required'),
});

export const resetPasswordSchema = object({
    email: string('Enter your email').email('Enter a valid email').required('Email is required'),
});

export const editProfileSchema = object({
    fullName: string('Enter your full name')
        .min(MIN_FULL_NAME, `must be at least ${MIN_FULL_NAME} characters`)
        .max(MAX_FULL_NAME, `must be at most ${MAX_FULL_NAME} characters`)
        .trim()
        .notRequired(),
    aboutMe: string('Enter your something about you')
        .min(MIN_SOCIAL_NETWORK, `must be at least ${MIN_SOCIAL_NETWORK} characters`)
        .max(MAX_SOCIAL_NETWORK, `must be at most ${MAX_SOCIAL_NETWORK} characters`)
        .trim()
        .notRequired(),
    facebook: string('Enter your Facebook')
        .min(MIN_SOCIAL_NETWORK, `must be at least ${MIN_SOCIAL_NETWORK} characters`)
        .max(MAX_SOCIAL_NETWORK, `must be at most ${MAX_SOCIAL_NETWORK} characters`)
        .trim()
        .notRequired(),
    linkedin: string('Enter your Linkedin')
        .min(MIN_SOCIAL_NETWORK, `must be at least ${MIN_SOCIAL_NETWORK} characters`)
        .max(MAX_SOCIAL_NETWORK, `must be at most ${MAX_SOCIAL_NETWORK} characters`)
        .trim()
        .notRequired(),
    twitter: string('Enter your Twitter')
        .min(MIN_SOCIAL_NETWORK, `must be at least ${MIN_SOCIAL_NETWORK} characters`)
        .max(MAX_SOCIAL_NETWORK, `must be at most ${MAX_SOCIAL_NETWORK} characters`)
        .trim()
        .notRequired(),
    website: string('Enter your Website url')
        .min(MIN_SOCIAL_NETWORK, `must be at least ${MIN_SOCIAL_NETWORK} characters`)
        .max(MAX_SOCIAL_NETWORK, `must be at most ${MAX_SOCIAL_NETWORK} characters`)
        .trim()
        .notRequired(),
    email: string('Enter your email').email('Enter a valid email').required('Email is required'),
    //phoneNumber: string()
    //    .matches(PHONE_REGEX, 'Phone number is not valid')
    //    .min(10, 'The number must be at least 10 digits')
    //    .required('Phone number is required'),
});

export const changePasswordSchema = object({
    oldPassword: string('Enter your password')
        .min(MIN_PASSWORD, `Password must be at least ${MIN_PASSWORD} characters`)
        .required('Password is required'),
    newPassword: string('Enter your password')
        .min(MIN_PASSWORD, `Password must be at least ${MIN_PASSWORD} characters`)
        .max(MAX_PASSWORD, `Password must be at most ${MAX_PASSWORD} characters`)
        .required('Password is required'),
    repeatPassword: string('Enter your password')
        .oneOf([ref('newPassword'), null], 'Passwords must match')
        .min(MIN_PASSWORD, `Password must be at least ${MIN_PASSWORD} characters`)
        .max(MAX_PASSWORD, `Password must be at most ${MAX_PASSWORD} characters`)
        .required('Password is required'),
});
